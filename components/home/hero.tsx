"use client";

import { Button } from "@/components/ui/button"
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components"
import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="px-4 py-8 md:py-24 lg:px-8">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Access Your Business Information
          <span className="text-primary"> Anytime, Anywhere</span>
        </h2>
        <p className="mx-auto mt-4 max-w-[700px] text-center text-muted-foreground md:text-xl">
          View your orders, track balances, and manage your account all in one secure place.
        </p>
        <div className="mt-8 flex justify-center">
          <LoginLink>
            <Button variant="secondary">Sign in</Button>
          </LoginLink>
        </div>
      </div>
    </section>
  )
} 