"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card } from "@/components/ui/card"
import { Shield, UserCheck, AlertTriangle, FileCheck } from "lucide-react"

export default function BestPractices() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const practices = [
    {
      icon: Shield,
      title: "Data Privacy",
      description: "Never share sensitive personal information with AI models.",
      guidelines: [
        "Avoid sharing personal identifiable information",
        "Don't input confidential business data",
        "Be cautious with intellectual property",
      ],
    },
    {
      icon: UserCheck,
      title: "Ethical Usage",
      description: "Use AI responsibly and in accordance with OpenAI's guidelines.",
      guidelines: [
        "Don't generate harmful content",
        "Respect copyright and attribution",
        "Be transparent about AI usage",
      ],
    },
    {
      icon: AlertTriangle,
      title: "Content Verification",
      description: "Always verify AI-generated information for accuracy.",
      guidelines: [
        "Cross-reference important facts",
        "Use multiple sources for verification",
        "Be skeptical of unusual claims",
      ],
    },
    {
      icon: FileCheck,
      title: "Documentation",
      description: "Maintain clear records of AI interactions and decisions.",
      guidelines: [
        "Document important conversations",
        "Keep track of model versions used",
        "Note any limitations or issues",
      ],
    },
  ]

  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section
        ref={ref}
        className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-muted"
      >
        <div className="absolute inset-0 bg-grid-white/[0.02]" />
        
        <motion.div
          className="container mx-auto px-4 text-center z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Best Practices
          </motion.h1>
          
          <motion.p
            className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Essential guidelines for safe and effective use of ChatGPT in professional environments.
          </motion.p>
        </motion.div>
      </section>

      {/* Best Practices Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {practices.map((practice, index) => (
              <motion.div
                key={practice.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="p-6">
                  <practice.icon className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">{practice.title}</h3>
                  <p className="text-muted-foreground mb-4">{practice.description}</p>
                  <ul className="space-y-2">
                    {practice.guidelines.map((guideline, i) => (
                      <li key={i} className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>{guideline}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}