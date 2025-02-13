import { Hero } from "@/components/home/hero"
import { Features } from "@/components/home/features"
import { Benefits } from "@/components/home/benefits"
import { DistributorProgram } from "@/components/home/DistributorProgram"
import { MarqueeDemo } from "@/components/home/marquee-example"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <Hero />
        <MarqueeDemo />
        <Benefits />
        <Features />
        <DistributorProgram />
      </main>
    </div>
  )
}
