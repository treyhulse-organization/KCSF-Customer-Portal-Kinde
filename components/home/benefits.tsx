import { ArrowRight, RefreshCw, FileText, ShieldCheck } from 'lucide-react'
import Image from 'next/image'

const benefits = [
  {
    icon: ArrowRight,
    title: "Self-Service Portal",
    description: "Access your data 24/7 without waiting for reports or customer service. Take control of your business information on your schedule.",
  },
  {
    icon: RefreshCw,
    title: "Real-Time Updates",
    description: "Stay informed with instant access to your latest orders, quotes, and invoices as they happen. No more waiting for end-of-day updates.",
  },
  {
    icon: FileText,
    title: "Comprehensive Reports",
    description: "Download detailed reports and track your business in one place. Get insights that matter.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Access",
    description: "Rest easy knowing your data is protected with enterprise-grade security and controlled access management.",
  },
]

export function Benefits() {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left Column - Content */}
          <div className="flex-1 max-w-2xl">
            <h2 className="py-6 text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-foreground via-foreground/90 to-foreground bg-clip-text text-transparent mb-4">
              Business Data at Your Fingertips
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Access all your important business information through our secure, modern platform. 
              Designed for efficiency and ease of use.
            </p>
            
            <div className="mt-12 grid gap-8 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="relative group rounded-2xl border border-border hover:border-primary/30 hover:border-0.5"
                >
                  {/* Animated border beam */}
                  <div className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100">
                    <div className="absolute inset-0 rounded-2xl border-2 border-primary animate-border-beam" />
                  </div>
                  
                  {/* Content */}
                  <div className="relative rounded-2xl bg-background p-6 h-full">
                    <div className="mb-4 inline-block rounded-xl bg-muted p-3 text-foreground">
                      <benefit.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="flex-1 relative w-full">
            <div className="aspect-square relative rounded-2xl overflow-hidden bg-gradient-to-br from-muted to-muted/80 shadow-xl">
              <Image 
                src="/logos/RedLogo.png"
                alt="KC Store Fixtures Logo"
                className="object-contain p-12"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -z-10 top-8 left-8 w-full h-full rounded-2xl bg-muted"></div>
            <div className="absolute -z-20 top-16 left-16 w-full h-full rounded-2xl bg-muted/50"></div>
          </div>
        </div>
      </div>
    </section>
  )
} 