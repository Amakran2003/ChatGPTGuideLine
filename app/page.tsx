"use client"

import { motion, cubicBezier } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { AspectRatio } from "@/components/ui/aspect-ratio"

export default function Home() {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  const customEasing = cubicBezier(0.6, 0.05, -0.01, 0.9)

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

  const stagger = {
    visible: {
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          background: "radial-gradient(circle at center, var(--background) 0%, var(--muted) 100%)",
        }}
      >
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        
        <div className="container mx-auto px-4 py-24 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            className="text-left z-10"
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            variants={stagger}
          >
            <motion.span
              className="text-xl md:text-2xl font-light tracking-wider text-primary mb-4 block"
              variants={fadeInUp}
            >
              WELCOME TO THE FUTURE OF AI
            </motion.span>
            
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50"
              variants={fadeInUp}
            >
              Master the Art of AI
            </motion.h1>
            
            <motion.p
              className="text-xl md:text-2xl text-muted-foreground mb-8 font-light leading-relaxed"
              variants={fadeInUp}
            >
              Your journey into the world of ChatGPT starts here. Discover the power of artificial intelligence through our comprehensive guides.
            </motion.p>

            <motion.div variants={fadeInUp}>
              <Button size="lg" className="text-lg px-8 py-6 rounded-full">
                Begin Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative z-10"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={heroInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ 
              duration: 1.2,
              ease: "easeOut",
              delay: 0.6
            }}
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-primary/10">
              <AspectRatio ratio={16 / 9}>
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/kIhb5pEo_j0?autoplay=0&rel=0&modestbranding=1"
                  title="ChatGPT Guide Introduction"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </AspectRatio>
            </div>
          </motion.div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 animate-gradient mix-blend-overlay" />
      </section>

      {/* Features Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 1,
                  ease: "easeOut"
                }
              }
            }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
              Explore the Possibilities
            </h2>
            <p className="text-xl text-muted-foreground font-light max-w-3xl mx-auto">
              Dive into our comprehensive learning paths and discover how ChatGPT can transform your workflow.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div
              className="space-y-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={stagger}
            >
              {[
                {
                  title: "Interactive Learning",
                  description: "Experience hands-on tutorials and real-world examples that help you master ChatGPT effectively."
                },
                {
                  title: "AI Model Insights",
                  description: "Understand the nuances between different GPT models and choose the right one for your needs."
                },
                {
                  title: "Best Practices",
                  description: "Learn industry-standard practices for prompt engineering and AI safety guidelines."
                }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  variants={fadeInUp}
                >
                  <h3 className="text-3xl font-bold mb-4">{item.title}</h3>
                  <p className="text-xl text-muted-foreground font-light leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ 
                duration: 1.2,
                ease: "easeOut"
              }}
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-primary/10">
                <AspectRatio ratio={16 / 9}>
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/k3d_xeVxEOE?autoplay=0&rel=0&modestbranding=1"
                    title="Advanced ChatGPT Features"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </AspectRatio>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Oxford AI Section */}
      <section className="py-32 bg-muted relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 1,
                  ease: "easeOut"
                }
              }
            }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
              AI in Academia
            </h2>
            <p className="text-xl text-muted-foreground font-light">
              Discover how OpenAI and the University of Oxford are revolutionizing knowledge preservation and sharing through AI technology
            </p>
          </motion.div>

          <motion.div
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ 
              duration: 1.2,
              ease: "easeOut"
            }}
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-primary/10">
              <AspectRatio ratio={16 / 9}>
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/HTRsy8ZcqoE?autoplay=0&rel=0&modestbranding=1"
                  title="OpenAI & Oxford University Partnership"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </AspectRatio>
            </div>

            <motion.div
              className="mt-12 text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={stagger}
            >
              <motion.p
                className="text-xl text-muted-foreground font-light mb-8"
                variants={fadeInUp}
              >
                Learn how AI is transforming academic research and library sciences, making knowledge more accessible than ever before.
              </motion.p>
              <motion.div variants={fadeInUp}>
                <Button size="lg" className="rounded-full px-8">
                  Explore Academic AI
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}