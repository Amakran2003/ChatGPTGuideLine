"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Cpu, ArrowLeft, Code, GitBranch, Terminal, Bug } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function CodingFocus() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  const codingFeatures = [
    {
      icon: Code,
      title: "Code Generation",
      description: "Write clean, efficient code across multiple languages",
      capabilities: [
        "Smart code completion",
        "Function generation",
        "Class structure creation",
        "API endpoint design"
      ]
    },
    {
      icon: GitBranch,
      title: "Code Review",
      description: "Analyze and improve existing code",
      capabilities: [
        "Best practices check",
        "Performance optimization",
        "Security vulnerability detection",
        "Style consistency"
      ]
    },
    {
      icon: Terminal,
      title: "Development Support",
      description: "Comprehensive assistance throughout development",
      capabilities: [
        "Documentation generation",
        "Test case creation",
        "Build script optimization",
        "Dependency management"
      ]
    },
    {
      icon: Bug,
      title: "Debugging Assistant",
      description: "Quick problem identification and solutions",
      capabilities: [
        "Error analysis",
        "Bug fixing suggestions",
        "Runtime optimization",
        "Code refactoring"
      ]
    }
  ]

  const supportedLanguages = [
    "Python",
    "JavaScript",
    "TypeScript",
    "Java",
    "C++",
    "Ruby",
    "Go",
    "Rust",
    "PHP",
    "Swift",
    "Kotlin",
    "SQL"
  ]

  return (
    <main className="min-h-screen pt-16">
      <div className="container mx-auto px-4">
        <Link href="/models">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Models
          </Button>
        </Link>
      </div>

      <section
        ref={ref}
        className="relative min-h-[40vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-muted"
      >
        <div className="absolute inset-0 bg-grid-white/[0.02]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <Cpu className="h-16 w-16 mx-auto mb-6 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Coding & Development</h1>
            <p className="text-xl text-muted-foreground">
              Specialized AI models for programming excellence
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {codingFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <feature.icon className="h-8 w-8 text-primary" />
                    <h2 className="text-2xl font-semibold">{feature.title}</h2>
                  </div>
                  <p className="text-muted-foreground mb-6">{feature.description}</p>
                  <ul className="space-y-3">
                    {feature.capabilities.map((capability, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        <span>{capability}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-center">Supported Programming Languages</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {supportedLanguages.map((language, index) => (
                  <div
                    key={language}
                    className="p-4 bg-primary/5 rounded-lg text-center font-medium"
                  >
                    {language}
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </main>
  )
}