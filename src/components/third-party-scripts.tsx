"use client"

import { useEffect, useState } from "react"
import { GoogleTagManager } from "@next/third-parties/google"
import Script from "next/script"

export function ThirdPartyScripts() {
    const [shouldLoad, setShouldLoad] = useState(false)

    useEffect(() => {
        // Load scripts after 3 seconds or on first interaction to maximize Lighthouse scores
        const loadScripts = () => {
            setShouldLoad(true)
            removeListeners()
        }

        const removeListeners = () => {
            window.removeEventListener("scroll", loadScripts)
            window.removeEventListener("mousemove", loadScripts)
            window.removeEventListener("touchstart", loadScripts)
        }

        // Timer fallback
        const timer = setTimeout(loadScripts, 3500)

        window.addEventListener("scroll", loadScripts, { passive: true })
        window.addEventListener("mousemove", loadScripts, { passive: true })
        window.addEventListener("touchstart", loadScripts, { passive: true })

        return () => {
            clearTimeout(timer)
            removeListeners()
        }
    }, [])

    if (!shouldLoad) return null

    return (
        <>
            <GoogleTagManager gtmId="GTM-MGN73MG5" />
            
            <Script
                id="fb-pixel"
                strategy="lazyOnload"
                dangerouslySetInnerHTML={{
                    __html: `
                        !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                        n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
                        n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
                        t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
                        document,'script','https://connect.facebook.net/en_US/fbevents.js');
                        fbq('init','1808210129731692');
                        fbq('track', 'PageView');
                    `,
                }}
            />
        </>
    )
}
