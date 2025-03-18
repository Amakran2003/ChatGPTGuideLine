"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Sparkles, ArrowLeft, Star, Zap, Brain, Lock } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function LatestFeatures() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  const features = [
    {
      icon: Star,
      title: "Enhanced Understanding",
      description: "GPT-4.5 demonstrates significantly improved comprehension of context and nuance, leading to more accurate and relevant responses.",
      details: [
        "Better context retention",
        "Improved understanding of implicit meaning",
        "More nuanced interpretation of tone",
        "Enhanced cultural awareness"
      ]
    },
    {
      icon: Zap,
      title: "Advanced Reasoning",
      description: "New neural architectures enable more sophisticated logical reasoning and problem-solving capabilities.",
      details: [
        "Complex multi-step analysis",
        "Advanced pattern recognition",
        "Improved hypothesis generation",
        "Better error detection"
      ]
    },
    {
      icon: Brain,
      title: "Knowledge Integration",
      description: "Seamlessly combines information from various domains for more comprehensive insights.",
      details: [
        "Cross-domain synthesis",
        "Updated knowledge base",
        "Better fact correlation",
        "Improved source integration"
      ]
    },
    {
      icon: Lock,
      title: "Enhanced Security",
      description: "Built-in safeguards and improved content filtering for safer interactions.",
      details: [
        "Advanced content filtering",
        "Better privacy protection",
        "Improved bias detection",
        "Enhanced safety protocols"
      ]
    }
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
            <Sparkles className="h-16 w-16 mx-auto mb-6 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Latest AI Features</h1>
            <p className="text-xl text-muted-foreground">
              Discover the cutting-edge capabilities of GPT-4.5
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
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
                    {feature.details.map((detail, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        <span>{detail}</span>
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
            className="mt-16 text-center"
          >
            <Card className="p-8 bg-primary/5">
              <h3 className="text-2xl font-semibold mb-4">Ready to Experience the Future?</h3>
              <p className="text-muted-foreground mb-6">
                GPT-4.5 represents a significant leap forward in AI capabilities, offering unparalleled performance for your most demanding tasks.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Try GPT-4.5 Now
              </Button>
            </Card>
          </motion.div>
        </div>
      </section>
    </main>
  )
}