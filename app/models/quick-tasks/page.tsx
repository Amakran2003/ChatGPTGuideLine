"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Rocket, ArrowLeft, Zap, Clock, Target, Sparkles } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function QuickTasks() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  const quickModels = [
    {
      name: "Turbo",
      description: "Lightning-fast responses for simple tasks",
      responseTime: "< 1 second",
      bestFor: [
        "Quick edits",
        "Simple questions",
        "Basic formatting",
        "Chat applications"
      ]
    },
    {
      name: "o3-mini",
      description: "Efficient and lightweight processing",
      responseTime: "1-2 seconds",
      bestFor: [
        "Basic queries",
        "Short summaries",
        "Quick translations",
        "Simple calculations"
      ]
    }
  ]

  const features = [
    {
      icon: Zap,
      title: "Instant Processing",
      description: "Get responses in milliseconds for basic tasks",
    },
    {
      icon: Clock,
      title: "Time Efficiency",
      description: "Perfect for quick iterations and rapid prototyping",
    },
    {
      icon: Target,
      title: "Focused Results",
      description: "Straight to the point, no unnecessary details",
    },
    {
      icon: Sparkles,
      title: "Smart Optimization",
      description: "Automatically adjusts to prioritize speed",
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
            <Rocket className="h-16 w-16 mx-auto mb-6 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Quick Task Processing</h1>
            <p className="text-xl text-muted-foreground">
              Lightning-fast AI solutions for simple tasks
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {quickModels.map((model, index) => (
              <motion.div
                key={model.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 h-full">
                  <h2 className="text-2xl font-semibold mb-2">{model.name}</h2>
                  <p className="text-muted-foreground mb-4">{model.description}</p>
                  <div className="mb-6">
                    <span className="text-sm font-medium">Response Time:</span>
                    <span className="ml-2 text-primary">{model.responseTime}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-4">Best For:</h3>
                  <ul className="space-y-3">
                    {model.bestFor.map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 text-center">
                  <feature.icon className="h-8 w-8 mx-auto mb-4 text-primary" />
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}