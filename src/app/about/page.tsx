import type { Metadata } from "next"
import { Users, Target, Rocket } from "lucide-react"

export const metadata: Metadata = {
    title: "About Us | Digital Marketing Agency in Pollachi",
    description: "Synzephyr Technologies is a global digital marketing agency helping businesses scale through expert SEO, GMB optimization, and data-driven growth strategies.",
    alternates: {
        canonical: "https://synzephyrtechnologies.web.app/about",
    },
}


export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="bg-muted/30 py-20 text-center">
                <div className="container px-4 md:px-6 mx-auto">
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl mb-6">About Synzephyr</h1>
                    <p className="mx-auto max-w-[700px] text-muted-foreground text-lg md:text-xl">
                        We are a team of passionate digital experts committed to transforming local businesses into global brands.
                    </p>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-20">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="bg-background p-8 rounded-2xl border border-border hover:shadow-lg transition-shadow">
                            <div className="h-12 w-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-6">
                                <Target className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                            </div>
                            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                            <p className="text-muted-foreground">
                                To empower businesses in Pollachi, Coimbatore, and across Tamil Nadu with affordable, high-impact digital solutions that drive real growth and measurable results.
                            </p>
                        </div>
                        <div className="bg-background p-8 rounded-2xl border border-border hover:shadow-lg transition-shadow">
                            <div className="h-12 w-12 bg-cyan-100 dark:bg-cyan-900 rounded-lg flex items-center justify-center mb-6">
                                <Rocket className="h-6 w-6 text-cyan-600 dark:text-cyan-400" />
                            </div>
                            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                            <p className="text-muted-foreground">
                                To be the leading digital growth agency in South India, known for innovation, integrity, and our unwavering commitment to client success.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section (Placeholder for now as no specific team details provided) */}
            <section className="py-20 bg-muted/30">
                <div className="container px-4 md:px-6 mx-auto text-center">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-12">Meet Our Team</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                        <div className="bg-background p-6 rounded-xl border border-border">
                            <div className="h-24 w-24 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
                                <Users className="h-10 w-10 text-muted-foreground" />
                            </div>
                            <h3 className="text-xl font-bold">Dedicated Experts</h3>
                            <p className="text-sm text-muted-foreground mt-2">
                                Our team consists of SEO specialists, web developers, and creative designers working together for your success.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Expansion Vision */}
            <section className="py-20">
                <div className="container px-4 md:px-6 mx-auto bg-primary/5 dark:bg-primary/10 rounded-3xl p-8 md:p-12 text-center">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">Looking Ahead</h2>
                    <p className="mx-auto max-w-[800px] text-muted-foreground text-lg">
                        While our roots are in Pollachi and Coimbatore, our vision is global. We are constantly expanding our capabilities and reach to serve clients across India and internationally, bringing world-class digital strategies to businesses of all sizes.
                    </p>
                </div>
            </section>
        </div>
    )
}
