"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { ArrowRight, MessageSquare, Key, Lock, PlayCircle } from "lucide-react"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Card } from "@/components/ui/card"

export default function GettingStarted() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const steps = [
    {
      icon: MessageSquare,
      title: "Create Your Account",
      description: "Sign up for ChatGPT with your email address and set a secure password.",
      content: "Your detailed content here. This section should include step-by-step instructions for creating a ChatGPT account. You can add multiple paragraphs, bullet points, and other formatting to make the instructions clear and easy to follow.",
    },
    {
      icon: Key,
      title: "Choose Your Plan",
      description: "Select between Free or Plus plans based on your needs and usage requirements.",
      content: "Your detailed content here. This section should compare different ChatGPT plans, their features, and pricing. Help users make an informed decision about which plan best suits their needs.",
    },
    {
      icon: Lock,
      title: "Set Up Security",
      description: "Enable two-factor authentication for enhanced account protection.",
      content: "Your detailed content here. This section should provide comprehensive security setup instructions, including two-factor authentication, password best practices, and other security measures.",
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
        
        <div className="container mx-auto px-4 py-24 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="text-left z-10"
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
              Getting Started with ChatGPT
            </motion.h1>
            
            <motion.p
              className="text-xl text-muted-foreground mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Begin your AI journey with our step-by-step guide to setting up and using ChatGPT effectively.
            </motion.p>
          </motion.div>

          <motion.div
            className="relative z-10"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <AspectRatio ratio={16 / 9}>
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=0&rel=0&modestbranding=1"
                  title="Getting Started with ChatGPT"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </AspectRatio>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 h-full flex flex-col">
                  <div className="flex items-center gap-4 mb-6">
                    <step.icon className="h-12 w-12 text-primary" />
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                  <div className="prose prose-sm dark:prose-invert flex-1">
                    <p>{step.content}</p>
                  </div>
                  <div className="mt-8 pt-6 border-t border-border">
                    <Button variant="outline" className="w-full">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Tutorial Section */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Video Tutorial</h2>
              <p className="text-xl text-muted-foreground">
                Watch our comprehensive guide to getting started with ChatGPT
              </p>
            </motion.div>

            <motion.div
              className="rounded-xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <AspectRatio ratio={16 / 9}>
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/ANOTHER_VIDEO_ID?autoplay=0&rel=0&modestbranding=1"
                  title="ChatGPT Tutorial"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </AspectRatio>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}