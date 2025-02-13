import { Check } from "lucide-react"

interface TierProps {
  name: string
  spend: string
  kickback: string
  benefits: string[]
  featured?: boolean
}

const tiers: TierProps[] = [
  {
    name: "Silver",
    spend: "$10,000 - $49,999",
    kickback: "3%",
    benefits: [
      "Quarterly rebates",
      "Priority support",
      "Access to promotional materials",
    ],
  },
  {
    name: "Gold",
    spend: "$50,000 - $149,999",
    kickback: "5%",
    benefits: [
      "Monthly rebates",
      "Dedicated account manager",
      "Co-marketing opportunities",
      "Early access to new products",
    ],
    featured: true,
  },
  {
    name: "Platinum",
    spend: "$150,000+",
    kickback: "7%",
    benefits: [
      "Weekly rebates",
      "VIP support",
      "Custom pricing",
      "Exclusive events access",
      "Strategic partnership benefits",
    ],
  },
]

export function DistributorProgram() {
  return (
    <section className="py-32 bg-gradient-to-b from-muted to-background">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-foreground/90 to-foreground bg-clip-text text-transparent">
            Join Our Distributor Program
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Join our network of distributors and earn more as you grow. Our tiered program 
            rewards your success with increasing benefits and kickbacks.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 relative">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`
                relative group transition-all duration-300
                ${tier.featured ? 'md:-mt-4 md:mb-4' : ''}
              `}
            >
              <div className={`
                h-full bg-card rounded-2xl p-8 
                ${tier.featured 
                  ? 'shadow-2xl border-2 border-foreground' 
                  : 'shadow-xl border border-border hover:border-border/80'
                }
              `}>
                {tier.featured && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-foreground text-background px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className={`
                  text-2xl font-bold mb-4 
                  ${tier.featured ? 'text-foreground' : 'text-foreground/90'}
                `}>
                  {tier.name}
                </h3>
                <div className="mb-6">
                  <p className="text-muted-foreground text-sm uppercase tracking-wider font-medium">
                    Annual Spend
                  </p>
                  <p className="text-2xl font-bold mt-1">{tier.spend}</p>
                </div>
                <div className="mb-8">
                  <p className="text-muted-foreground text-sm uppercase tracking-wider font-medium">
                    Kickback Rate
                  </p>
                  <p className={`
                    text-4xl font-bold mt-1 
                    ${tier.featured ? 'text-foreground' : 'text-foreground/90'}
                  `}>
                    {tier.kickback}
                  </p>
                </div>
                <div className="h-px bg-border w-full mb-8"></div>
                <ul className="space-y-4">
                  {tier.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center">
                      <div className={`
                        rounded-full p-1 mr-3
                        ${tier.featured ? 'bg-foreground' : 'bg-muted'}
                      `}>
                        <Check className={`
                          h-4 w-4 
                          ${tier.featured ? 'text-background' : 'text-muted-foreground'}
                        `} />
                      </div>
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
