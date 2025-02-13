import { ShoppingCart, BarChart3, Lock, Trophy, Clock, Shield } from 'lucide-react'

export function Features() {
  return (
    <section className="backdrop-blur-sm border-y border-border/40 px-2 py-3">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-6">
          <div className="flex flex-col items-center text-center">
            <ShoppingCart className="h-4 w-4 text-zinc-400" />
            <h3 className="mt-1 text-xs font-medium text-zinc-400">Order</h3>
            <p className="mt-0.5 text-xs text-zinc-400">Tracking</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <BarChart3 className="h-4 w-4 text-zinc-400" />
            <h3 className="mt-1 text-xs font-bold text-zinc-400">Analytics</h3>
            <p className="mt-0.5 text-xs text-zinc-400">& Reporting</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Lock className="h-4 w-4 text-zinc-400" />
            <h3 className="mt-1 text-xs font-bold text-zinc-400">Security</h3>
            <p className="mt-0.5 text-xs text-zinc-400">Focused</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Shield className="h-4 w-4 text-zinc-400" />
            <h3 className="mt-1 text-xs font-bold text-zinc-400">Premium</h3>
            <p className="mt-0.5 text-xs text-zinc-400">Service</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Clock className="h-4 w-4 text-zinc-400" />
            <h3 className="mt-1 text-xs font-bold text-zinc-400">Results</h3>
            <p className="mt-0.5 text-xs text-zinc-400">Driven</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Trophy className="h-4 w-4 text-zinc-400" />
            <h3 className="mt-1 text-xs font-bold text-zinc-400s">Trusted</h3>
            <p className="mt-0.5 text-xs text-zinc-400">Leader</p>
          </div>
        </div>
      </div>
    </section>
  )
} 