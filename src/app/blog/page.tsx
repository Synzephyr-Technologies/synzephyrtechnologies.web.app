import type { Metadata } from "next"
import Link from "next/link"
import { Calendar, User, Tag, ArrowRight, ExternalLink, Rss } from "lucide-react"

export const metadata: Metadata = {
    title: "Digital Marketing Blog | SEO Tips Pollachi",
    description: "Read the latest digital marketing tips, SEO guides, and growth insights from Synzephyr Technologies — your global digital marketing and brand growth partner.",
    alternates: {
        canonical: "https://synzephyrtechnologies.web.app/blog",
    },
}

// ── Blogger JSON feed types ──────────────────────────────────────────────────
interface BloggerEntry {
    title: { $t: string }
    summary?: { $t: string }
    content?: { $t: string }
    published: { $t: string }
    author: { name: { $t: string } }[]
    link: { rel: string; href: string }[]
    category?: { term: string }[]
}

interface BloggerFeed {
    feed?: {
        entry?: BloggerEntry[]
        title?: { $t: string }
    }
}

// ── Fetch posts from Blogger at build time ───────────────────────────────────
async function getBlogPosts(): Promise<BloggerEntry[]> {
    try {
        const res = await fetch(
            "https://synzephyrtechnologies.blogspot.com/feeds/posts/default?alt=json&max-results=12",
            {
                // Static export: fetched once at build time.
                // Re-deploy your site after publishing new Blogger posts.
                cache: "force-cache",
            }
        )
        if (!res.ok) return []
        const data: BloggerFeed = await res.json()
        return data.feed?.entry ?? []
    } catch {
        return []
    }
}

// ── Strip HTML tags from Blogger content for plain-text excerpt ──────────────
function stripHtml(html: string, maxLength = 160): string {
    const text = html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim()
    return text.length > maxLength ? text.slice(0, maxLength) + "…" : text
}

// ── Format ISO date to readable string ───────────────────────────────────────
function formatDate(isoDate: string): string {
    return new Date(isoDate).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric",
    })
}

// ── Get the public URL of a Blogger post ─────────────────────────────────────
function getPostUrl(entry: BloggerEntry): string {
    return entry.link.find((l) => l.rel === "alternate")?.href ?? "https://synzephyrtechnologies.blogspot.com/"
}

// ── Page ─────────────────────────────────────────────────────────────────────
export default async function BlogPage() {
    const posts = await getBlogPosts()

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero */}
            <section className="bg-muted/30 py-20 text-center">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                        <Rss className="h-4 w-4" />
                        Live from our Blogger
                    </div>
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl mb-6">
                        Insights &amp; Digital Marketing Tips
                    </h1>
                    <p className="mx-auto max-w-[700px] text-muted-foreground text-lg md:text-xl">
                        Expert advice on SEO, local marketing strategies, and actionable tips to help businesses in Pollachi &amp; Coimbatore grow online.
                    </p>
                </div>
            </section>

            {/* Posts Grid */}
            <section className="py-20">
                <div className="container px-4 md:px-6 mx-auto">
                    {posts.length === 0 ? (
                        /* ── Empty state ── */
                        <div className="text-center py-20">
                            <div className="h-16 w-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                                <Rss className="h-8 w-8 text-muted-foreground" />
                            </div>
                            <h2 className="text-2xl font-bold mb-3">Posts Coming Soon</h2>
                            <p className="text-muted-foreground max-w-md mx-auto mb-8">
                                We are preparing our first batch of digital marketing guides and SEO tips. Check back soon or follow us on social media for updates.
                            </p>
                            <Link
                                href="https://synzephyrtechnologies.blogspot.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
                            >
                                Visit our Blogger <ExternalLink className="h-4 w-4" />
                            </Link>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {posts.map((post, index) => {
                                const postUrl = getPostUrl(post)
                                const category = post.category?.[0]?.term ?? "Marketing"
                                const rawContent = post.summary?.$t ?? post.content?.$t ?? ""
                                const excerpt = stripHtml(rawContent)
                                const author = post.author?.[0]?.name?.$t ?? "Synzephyr Team"
                                const date = formatDate(post.published.$t)

                                return (
                                    <article
                                        key={index}
                                        className="flex flex-col bg-background rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-shadow group"
                                    >
                                        {/* Category banner */}
                                        <div className="h-2 w-full bg-gradient-to-r from-blue-500 to-cyan-500" aria-hidden="true" />

                                        <div className="p-6 flex-1 flex flex-col">
                                            {/* Meta row */}
                                            <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mb-4">
                                                <span className="flex items-center gap-1 bg-primary/10 text-primary px-2 py-1 rounded-full font-medium">
                                                    <Tag className="h-3 w-3" />
                                                    {category}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <Calendar className="h-3 w-3" />
                                                    {date}
                                                </span>
                                            </div>

                                            {/* Title */}
                                            <h2 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors leading-snug">
                                                <Link
                                                    href={postUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    aria-label={`Read article: ${post.title.$t}`}
                                                >
                                                    {post.title.$t}
                                                </Link>
                                            </h2>

                                            {/* Excerpt */}
                                            {excerpt && (
                                                <p className="text-muted-foreground text-sm mb-4 flex-1 leading-relaxed">
                                                    {excerpt}
                                                </p>
                                            )}

                                            {/* Footer row */}
                                            <div className="mt-auto pt-4 border-t border-border flex items-center justify-between">
                                                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                                                    <User className="h-3 w-3" />
                                                    {author}
                                                </span>
                                                <Link
                                                    href={postUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    aria-label={`Read full article: ${post.title.$t}`}
                                                    className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                                                >
                                                    Read Article <ArrowRight className="h-3 w-3" />
                                                </Link>
                                            </div>
                                        </div>
                                    </article>
                                )
                            })}
                        </div>
                    )}

                    {/* Link to full Blogger */}
                    {posts.length > 0 && (
                        <div className="mt-16 text-center">
                            <p className="text-muted-foreground mb-4 text-sm">
                                Want to read all our posts and older articles?
                            </p>
                            <Link
                                href="https://synzephyrtechnologies.blogspot.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-background text-sm font-medium hover:border-primary hover:text-primary transition-colors"
                            >
                                View All Posts on Blogger <ExternalLink className="h-4 w-4" />
                            </Link>
                        </div>
                    )}
                </div>
            </section>

            {/* SEO content section — boosts word count & text:HTML ratio */}
            <section className="py-16 bg-muted/30 border-t border-border">
                <div className="container px-4 md:px-6 mx-auto max-w-4xl">
                    <h2 className="text-2xl font-bold mb-8 text-center">What We Write About</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-sm text-muted-foreground">
                        <div className="bg-background p-5 rounded-xl border border-border">
                            <h3 className="font-semibold text-foreground mb-2">Local SEO Tips</h3>
                            <p>Practical guides on how Pollachi and Coimbatore businesses can rank higher on Google and attract more local customers through proven SEO techniques.</p>
                        </div>
                        <div className="bg-background p-5 rounded-xl border border-border">
                            <h3 className="font-semibold text-foreground mb-2">Google Business Profile</h3>
                            <p>Step-by-step tutorials on setting up, optimizing, and managing your Google Business Profile to dominate the local map pack and drive footfall.</p>
                        </div>
                        <div className="bg-background p-5 rounded-xl border border-border">
                            <h3 className="font-semibold text-foreground mb-2">Social Media Marketing</h3>
                            <p>Strategies for growing your brand on Instagram, Facebook, and LinkedIn — tailored for the Tamil Nadu market and local business audiences.</p>
                        </div>
                        <div className="bg-background p-5 rounded-xl border border-border">
                            <h3 className="font-semibold text-foreground mb-2">Content Marketing</h3>
                            <p>How to create compelling content that educates your audience, builds trust, and converts visitors into paying customers for your local business.</p>
                        </div>
                        <div className="bg-background p-5 rounded-xl border border-border">
                            <h3 className="font-semibold text-foreground mb-2">Graphic Design & Branding</h3>
                            <p>Insights into building a strong visual identity — from logo design and brand colours to social media creatives that make your business memorable.</p>
                        </div>
                        <div className="bg-background p-5 rounded-xl border border-border">
                            <h3 className="font-semibold text-foreground mb-2">Digital Marketing Trends</h3>
                            <p>Stay ahead of the curve with our analysis of the latest trends in digital marketing, AI-driven tools, and what they mean for businesses in Tamil Nadu.</p>
                        </div>
                    </div>

                    <div className="mt-10 text-center">
                        <p className="text-muted-foreground mb-4">Ready to grow your business online?</p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
                            >
                                Get a Free Consultation <ArrowRight className="h-4 w-4" />
                            </Link>
                            <Link
                                href="/services"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-background text-sm font-medium hover:border-primary hover:text-primary transition-colors"
                            >
                                View Our Services
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
