"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Brain, Zap, Clock, DollarSign, Check, X, AlertCircle, Sparkles, Rocket, Cpu, ArrowRight } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Models() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  }

  const models = [
    {
      name: "GPT-4.5",
      tagline: "Latest & Greatest",
      description: "The newest model with enhanced capabilities and cutting-edge features",
      bestFor: [
        "Cutting-edge AI tasks",
        "Advanced reasoning",
        "Complex problem-solving",
        "Latest AI features",
        "Research projects"
      ],
      notFor: [
        "Budget constraints",
        "Simple tasks",
        "Quick responses"
      ],
      speed: "Moderate",
      cost: "$$$$",
      accuracy: "Exceptional",
      highlight: true
    },
    {
      name: "GPT-4",
      tagline: "Professional Power",
      description: "The most capable model for complex tasks and professional work",
      bestFor: [
        "Academic writing",
        "Complex analysis",
        "Programming",
        "Creative projects",
        "Research assistance"
      ],
      notFor: [
        "Quick casual chats",
        "Simple queries",
        "Budget-conscious users"
      ],
      speed: "Slower",
      cost: "$$$",
      accuracy: "Highest",
      highlight: true
    },
    {
      name: "GPT-4o",
      tagline: "Optimized Balance",
      description: "Perfect balance of power and efficiency for professional use",
      bestFor: [
        "Daily professional use",
        "Content creation",
        "Technical writing",
        "Data analysis",
        "Business applications"
      ],
      notFor: [
        "Extremely complex tasks",
        "Basic conversations"
      ],
      speed: "Fast",
      cost: "$$$",
      accuracy: "Very High",
      highlight: true
    },
    {
      name: "o1",
      tagline: "Smart & Swift",
      description: "Rapid responses with advanced reasoning capabilities ",
      bestFor: [
        "Rapid prototyping",
        "Quick analysis",
        "Brainstorming",
        "General queries",
        "Learning assistance"
      ],
      notFor: [
        "Deep research",
        "Complex coding"
      ],
      speed: "Very Fast",
      cost: "$$",
      accuracy: "Good",
      highlight: true
    },
    {
      name: "GPT-3.5",
      tagline: "Reliable Classic",
      description: "The well-rounded standard model",
      bestFor: [
        "Everyday tasks",
        "General writing",
        "Basic coding",
        "Quick answers",
        "Learning"
      ],
      notFor: [
        "Advanced analysis",
        "Complex projects"
      ],
      speed: "Fast",
      cost: "$",
      accuracy: "Good"
    },
    {
      name: "o3-mini",
      tagline: "Light & Quick",
      description: "Fast, lightweight version for simple tasks",
      bestFor: [
        "Quick responses",
        "Simple queries",
        "Basic assistance",
        "Chat applications",
        "Mobile use"
      ],
      notFor: [
        "Complex tasks",
        "Detailed analysis"
      ],
      speed: "Fastest",
      cost: "$",
      accuracy: "Moderate"
    },
    {
      name: "mini-high",
      tagline: "Compact Power",
      description: "Optimized for coding and logical tasks",
      bestFor: [
        "Code completion",
        "Logic problems",
        "Quick debugging",
        "Technical Q&A",
        "Learning to code"
      ],
      notFor: [
        "Creative writing",
        "Long conversations"
      ],
      speed: "Very Fast",
      cost: "$",
      accuracy: "High for Code"
    },
    {
      name: "Turbo",
      tagline: "Speed Champion",
      description: "Fastest responses for simple tasks",
      bestFor: [
        "Instant replies",
        "Basic queries",
        "Quick edits",
        "Simple tasks",
        "Chat bots"
      ],
      notFor: [
        "Complex analysis",
        "Detailed work"
      ],
      speed: "Lightning",
      cost: "$",
      accuracy: "Good"
    }
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section
        ref={ref}
        className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-muted"
      >
        <div className="absolute inset-0 bg-grid-white/[0.02]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Compare ChatGPT Models
            </motion.h1>
            
            <motion.p
              variants={fadeInUp}
              className="text-xl text-muted-foreground"
            >
              Find the perfect AI model for your needs
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Models Comparison */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {models.map((model, index) => (
              <motion.div
                key={model.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="transition-all duration-300 ease-in-out"
              >
                <Card className={`p-6 h-full flex flex-col relative overflow-hidden hover:shadow-xl transition-all duration-300 ${
                  model.highlight ? 'border-primary/30 bg-primary/5 hover:bg-primary/10' : 'hover:border-primary/20'
                }`}>
                  <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl transition-all duration-300 group-hover:bg-primary/20" />
                  
                  <div className="relative flex flex-col h-full">
                    <div className="flex items-center justify-between mb-4">
                      <span className={`text-sm font-medium ${
                        model.highlight ? 'text-primary' : 'text-primary/80'
                      }`}>
                        {model.tagline}
                      </span>
                      <div className="flex gap-1">
                        {[...Array(model.cost.length)].map((_, i) => (
                          <DollarSign key={i} className={`h-4 w-4 ${
                            model.highlight ? 'text-primary' : 'text-primary/60'
                          }`} />
                        ))}
                      </div>
                    </div>
                    
                    <h2 className={`text-2xl font-bold mb-2 ${
                      model.highlight ? 'text-primary' : ''
                    }`}>
                      {model.name}
                    </h2>
                    <p className="text-muted-foreground mb-6 text-sm">{model.description}</p>

                    <div className="space-y-6 mb-6 flex-grow">
                      <div>
                        <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
                          <Check className="h-4 w-4 text-green-500" />
                          Best For
                        </h3>
                        <ul className="space-y-2">
                          {model.bestFor.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm">
                              <div className={`h-1 w-1 rounded-full mt-[0.4rem] ${
                                model.highlight ? 'bg-primary' : 'bg-primary/50'
                              }`} />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
                          <X className="h-4 w-4 text-red-500" />
                          Not Ideal For
                        </h3>
                        <ul className="space-y-2">
                          {model.notFor.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <div className="h-1 w-1 rounded-full mt-[0.4rem] bg-red-500/50" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-border space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Speed</span>
                        <span className={`text-sm font-medium ${
                          model.highlight ? 'text-primary' : ''
                        }`}>
                          {model.speed}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Accuracy</span>
                        <span className={`text-sm font-medium ${
                          model.highlight ? 'text-primary' : ''
                        }`}>
                          {model.accuracy}
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Tips */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-6">How to Choose</h2>
            <p className="text-muted-foreground">
              Quick guide to selecting the right model for your needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Sparkles,
                title: "Latest Features?",
                description: "Go with GPT-4.5 for cutting-edge capabilities and the most advanced AI features available.",
                link: "/models/latest-features"
              },
              {
                icon: Brain,
                title: "Complex Work?",
                description: "Choose GPT-4 for deep analysis, professional tasks, and sophisticated problem-solving needs.",
                link: "/models/complex-work"
              },
              {
                icon: Rocket,
                title: "Quick Tasks?",
                description: "Pick Turbo or o3-mini for rapid responses and efficient processing of simple requests.",
                link: "/models/quick-tasks"
              },
              {
                icon: Cpu,
                title: "Coding Focus?",
                description: "mini-high is optimized for programming tasks, offering specialized support for developers.",
                link: "/models/coding-focus"
              },
            ].map((tip, index) => (
              <motion.div
                key={tip.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
              >
                <Link href={tip.link} className="block h-full">
                  <Card className="p-6 h-full flex flex-col hover:shadow-xl transition-all duration-300 hover:border-primary/20">
                    <div className="flex-grow">
                      <tip.icon className="h-8 w-8 text-primary mb-4" />
                      <h3 className="text-lg font-semibold mb-3">{tip.title}</h3>
                      <p className="text-muted-foreground text-sm mb-6">{tip.description}</p>
                    </div>
                    <Button className="w-full" variant="outline">
                      Learn More
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}