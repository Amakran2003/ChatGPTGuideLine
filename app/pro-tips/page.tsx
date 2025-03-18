"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card } from "@/components/ui/card"
import { Lightbulb, Wand2, MessageSquareDashed, Sparkles } from "lucide-react"

export default function ProTips() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const tips = [
    {
      icon: Lightbulb,
      title: "Be Specific",
      description: "The more detailed your prompt, the better the response. Include context, format, and desired outcome.",
      example: "Instead of 'Write a blog post', try 'Write a 500-word blog post about sustainable living tips for urban apartments, including actionable steps and cost estimates.'",
    },
    {
      icon: Wand2,
      title: "Use System Messages",
      description: "Set the context and role for ChatGPT at the start of your conversation.",
      example: "You are an experienced software architect with expertise in scalable systems. Review my application architecture and suggest improvements focusing on performance and maintainability.",
    },
    {
      icon: MessageSquareDashed,
      title: "Break Down Complex Tasks",
      description: "Split complicated requests into smaller, manageable steps.",
      example: "1. First, analyze the current market trends\n2. Then, identify key competitors\n3. Finally, suggest differentiation strategies",
    },
    {
      icon: Sparkles,
      title: "Iterate and Refine",
      description: "Don't hesitate to ask for revisions or clarifications to get exactly what you need.",
      example: "That's good, but could you make it more technical and include specific code examples in Python?",
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
            Pro Tips & Techniques
          </motion.h1>
          
          <motion.p
            className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Master advanced techniques to get the most out of ChatGPT.
          </motion.p>
        </motion.div>
      </section>

      {/* Tips Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {tips.map((tip, index) => (
              <motion.div
                key={tip.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="p-6">
                  <tip.icon className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">{tip.title}</h3>
                  <p className="text-muted-foreground mb-4">{tip.description}</p>
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="text-sm font-mono">{tip.example}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}