"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Brain, ArrowLeft, FileText, PenTool, Calculator, BookOpen } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function ComplexWork() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  const useCases = [
    {
      icon: FileText,
      title: "Academic Research",
      description: "Perfect for scholarly work and research papers",
      capabilities: [
        "Literature review assistance",
        "Research methodology planning",
        "Citation management",
        "Academic writing support"
      ]
    },
    {
      icon: PenTool,
      title: "Professional Writing",
      description: "Elevate your business and technical documentation",
      capabilities: [
        "Technical documentation",
        "Business proposals",
        "Report generation",
        "Content strategy"
      ]
    },
    {
      icon: Calculator,
      title: "Data Analysis",
      description: "Complex data interpretation and insights",
      capabilities: [
        "Statistical analysis",
        "Data visualization suggestions",
        "Trend identification",
        "Predictive modeling"
      ]
    },
    {
      icon: BookOpen,
      title: "In-Depth Learning",
      description: "Advanced educational support and knowledge synthesis",
      capabilities: [
        "Concept explanation",
        "Study material creation",
        "Complex problem solving",
        "Knowledge integration"
      ]
    }
  ]

  const modelComparison = [
    {
      model: "GPT-4",
      strengths: [
        "Deepest reasoning capabilities",
        "Most accurate responses",
        "Best for professional work",
        "Advanced problem-solving"
      ]
    },
    {
      model: "GPT-4o",
      strengths: [
        "Balanced performance",
        "Good for most complex tasks",
        "Faster than GPT-4",
        "Cost-effective"
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
            <Brain className="h-16 w-16 mx-auto mb-6 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Complex Work Solutions</h1>
            <p className="text-xl text-muted-foreground">
              Tackle sophisticated tasks with advanced AI models
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <useCase.icon className="h-8 w-8 text-primary" />
                    <h2 className="text-2xl font-semibold">{useCase.title}</h2>
                  </div>
                  <p className="text-muted-foreground mb-6">{useCase.description}</p>
                  <ul className="space-y-3">
                    {useCase.capabilities.map((capability, i) => (
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
            className="mt-16"
          >
            <Card className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-center">Model Comparison</h3>
              <div className="grid md:grid-cols-2 gap-8">
                {modelComparison.map((item, index) => (
                  <div key={item.model} className="text-center">
                    <h4 className="text-xl font-semibold mb-4">{item.model}</h4>
                    <ul className="space-y-3">
                      {item.strengths.map((strength, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                          <span>{strength}</span>
                        </li>
                      ))}
                    </ul>
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