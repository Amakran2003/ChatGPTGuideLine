"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useEffect, useState } from "react"
import { useTheme } from "next-themes"

export function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true)
  const { theme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible || !mounted) return null

  const currentTheme = theme === 'system' ? systemTheme : theme
  const isDark = currentTheme === 'dark'

  return (
    <motion.div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center ${
        isDark ? 'bg-background' : 'bg-white'
      }`}
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 2 }}
      onAnimationComplete={() => setIsVisible(false)}
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative flex flex-col items-center"
      >
        <div className="relative w-[150px] h-[150px] mb-8">
          {isDark ? (
            <Image
              src="https://www.edigitalagency.com.au/wp-content/uploads/chatgpt-logo-white-on-transparent-background-png.png"
              alt="ChatGPT Logo"
              width={150}
              height={150}
              className="transition-opacity duration-300"
              priority
            />
          ) : (
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/ChatGPT-Logo.svg/640px-ChatGPT-Logo.svg.png"
              alt="ChatGPT Logo"
              width={150}
              height={150}
              className="transition-opacity duration-300"
              priority
            />
          )}
        </div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-2xl md:text-3xl font-bold mb-8 text-center"
        >
          ChatGPT Guideline
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex items-center gap-4"
        >
          <Image
            src="https://avatars.githubusercontent.com/u/145991267?v=4"
            alt="Abderrazaq MAKRAN"
            width={50}
            height={50}
            className="rounded-full"
          />
          <p className="text-lg text-muted-foreground">by Abderrazaq MAKRAN</p>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}