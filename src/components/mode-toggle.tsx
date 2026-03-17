"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"

export function ModeToggle() {
    const { setTheme, theme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return <div className="h-11 w-11" aria-hidden="true" />
    }

    return (
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="relative h-11 w-11 flex items-center justify-center rounded-full hover:bg-muted transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label="Toggle theme"
        >
            <div className="relative h-6 w-6">
                <Sun className="h-6 w-6 rotate-0 scale-100 transition-all duration-500 dark:-rotate-90 dark:scale-0 text-yellow-500 drop-shadow-[0_0_8px_rgba(234,179,8,0.3)]" />
                <Moon className="absolute top-0 left-0 h-6 w-6 rotate-90 scale-0 transition-all duration-500 dark:rotate-0 dark:scale-100 text-blue-400 drop-shadow-[0_0_8px_rgba(96,165,250,0.3)]" />
            </div>
            <span className="sr-only">Toggle theme</span>
        </motion.button>
    )
}


