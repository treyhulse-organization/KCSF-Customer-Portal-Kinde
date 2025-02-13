"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useKindeAuth } from "@kinde-oss/kinde-auth-nextjs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { createOrganization } from "@/lib/kinde/actions/organization";

type LoadingStep = "org" | "website" | "complete";

export function OrganizationOnboarding({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [loadingStep, setLoadingStep] = useState<LoadingStep | null>(null);
  const [orgName, setOrgName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { toast } = useToast();
  const router = useRouter();
  const { user } = useKindeAuth();

  const runLoadingSequence = async () => {
    const steps: LoadingStep[] = ["org", "website", "complete"];
    const delay = 1000;

    for (const step of steps) {
      setLoadingStep(step);
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  };

  const handleOrgCreation = async () => {
    try {
      setIsLoading(true);
      
      runLoadingSequence();
      
      const result = await createOrganization(orgName, {
        user_id: user?.id
      });
      
      if (result.error || !result.org_code) {
        setLoadingStep(null);
        toast({
          title: "Error",
          description: result.error || "Failed to create organization",
          variant: "destructive",
        });
        return;
      }

      await new Promise(resolve => setTimeout(resolve, 3000));
      
      router.push(`/api/auth/login?org_code=${result.org_code}&post_login_redirect_url=/dashboard`);
      onClose();
    } catch (error) {
      setLoadingStep(null);
      console.error("Organization creation error:", error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to create organization",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const LoadingState = () => {
    const steps: LoadingStep[] = ["org", "website", "complete"];
    const currentStepIndex = steps.indexOf(loadingStep!);

    return (
      <div className="flex flex-col space-y-6 py-8">
        {steps.map((step, index) => (
          <div key={step} className="flex items-center space-x-4">
            <div className="relative flex items-center justify-center">
              <div
                className={`w-4 h-4 rounded-full ${
                  index <= currentStepIndex ? "bg-green-500" : "bg-gray-200"
                }`}
              />
              {index < steps.length - 1 && (
                <div
                  className={`absolute top-4 left-1/2 w-0.5 h-6 -translate-x-1/2 ${
                    index < currentStepIndex ? "bg-green-500" : "bg-gray-200"
                  }`}
                />
              )}
            </div>
            <span
              className={`text-sm ${
                index === currentStepIndex
                  ? "text-primary font-medium"
                  : index < currentStepIndex
                  ? "text-green-500"
                  : "text-gray-500"
              }`}
            >
              {step === "org" && "Creating your organization"}
              {step === "website" && "Setting up your workspace"}
              {step === "complete" && "Almost there"}
            </span>
            {index <= currentStepIndex && index !== steps.length - 1 && (
              <div className="ml-2 w-4 h-4 animate-spin rounded-full border-2 border-primary border-t-transparent" />
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            {loadingStep ? "Setting up your workspace" : "Create Organization"}
          </DialogTitle>
          <DialogDescription>
            {!loadingStep && "Start by naming your organization"}
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          {loadingStep ? (
            <LoadingState />
          ) : (
            <div className="space-y-4">
              <Input
                placeholder="Organization Name"
                value={orgName}
                onChange={(e) => setOrgName(e.target.value)}
                disabled={isLoading}
              />
              <div className="flex justify-end space-x-2">
                <Button variant="outline" onClick={onClose} disabled={isLoading}>
                  Cancel
                </Button>
                <Button
                  onClick={handleOrgCreation}
                  disabled={!orgName || orgName.trim() === "" || isLoading}
                >
                  {isLoading ? "Creating..." : "Create Organization"}
                </Button>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
} 