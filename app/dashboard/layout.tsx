import Link from "next/link";
import { ReactNode } from "react";
import LightLogo from "@/public/logos/RedLogo.png";
import DarkLogo from "@/public/logos/WhiteLogo.png";
import Image from "next/image";
import { DashboardItems } from "@/components/dashboard/DashboardItems";
import { Calendar, ChartNoAxesCombined, CreditCard, File, Globe, ImageIcon, LayoutDashboard, MessageCircle, Shirt, Truck, Unplug, Users } from "lucide-react";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";


export const navLinks = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Transactions",
    href: "/dashboard/transactions",
    icon: File,
  },
  {
    name: "Customers",
    href: "/dashboard/customers",
    icon: Users,
  },
  {
    name: "Media",
    href: "/dashboard/media",
    icon: ImageIcon,
  },
  {
    name: "Shipping",
    href: "/dashboard/shipping",
    icon: Truck,
  },
  {
    name: "Messages",
    href: "/dashboard/messages",
    icon: MessageCircle,
  },
  {
    name: "Analytics & Reports",
    href: "/dashboard/analytics",
    icon: ChartNoAxesCombined,
  },

  {
    name: "Integrations",
    href: "/dashboard/integrations",
    icon: Unplug,
  },
  {
    name: "Billing",
    href: "/dashboard/billing",
    icon: CreditCard,
  },
  {
    name: "Organization",
    href: "/dashboard/organization",
    icon: Users,
  },
];

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <section className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link href="/dashboard" className="flex items-center gap-2 font-semibold">
              <Image 
                src={LightLogo} 
                alt="KC Store Fixtures" 
                width={100}
                height={100}
                className="block dark:hidden"
              />
              <Image 
                src={DarkLogo} 
                alt="KC Store Fixtures" 
                width={100}
                height={100}
                className="hidden dark:block"
              />
            </Link>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 font-medium lg:px-4">
              <DashboardItems />
            </nav>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <DashboardHeader />
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          {children}
        </main>
      </div>
    </section>
  );
}
