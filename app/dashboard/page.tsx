import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { SetupDashboard } from "@/components/dashboard/SetupDashboard";

export default async function DashboardPage() {
  const { getOrganization } = getKindeServerSession();
  const org = await getOrganization();
  
  if (!org?.orgCode) {
    return null;
  }


  return (
    <div className="flex flex-col gap-8 p-8">
      {/* Header Section */}
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-bold tracking-tight">Welcome back!</h1>
        <p className="text-muted-foreground">
          Manage your store, products, and more from your dashboard.
        </p>
      </div>      
      <SetupDashboard />
    </div>
  );
}
