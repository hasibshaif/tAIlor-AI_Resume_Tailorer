"use client";

import { SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { BackgroundBeams } from "@/components/ui/background-beams";
import MorphingText from "@/components/ui/morphing-text";
import ShinyButton from "@/components/ui/shiny-button";

export default function LandingPage() {
  const router = useRouter();

  const texts = [
    "Land Your Dream Job",
    "Tailor Your Future",
    "Unlock Job Success",
    "Craft Your Next Step",
    "Stand Out, Get Hired",
    "Ace Every Application",
    "Shape Your Career",
    "Design Your Success",
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#141313] to-[#2b2928] flex items-center justify-center">
      {/* Background Beams */}
      <BackgroundBeams className="opacity-50" />

      {/* Content */}
      <div className="flex flex-col gap-6 z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        {/* Dynamic Header */}
        <MorphingText
          texts={texts}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
        />

        <p className="text-sm sm:text-base lg:text-lg mb-4 text-gray-300">
          Personalize your resume to match any job description effortlessly.
        </p>

        <div className="flex flex-col sm:flex-row sm:justify-center sm:gap-4">
          <SignedOut>
            <SignInButton mode="modal">
              <ShinyButton className="w-auto px-6 py-3 text-sm sm:text-base">
                Sign In
              </ShinyButton>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <ShinyButton
              onClick={() => router.push("/tailor")}
              className="w-auto px-6 py-3 text-sm sm:text-base"
            >
              Go to Dashboard
            </ShinyButton>
          </SignedIn>
        </div>
      </div>
    </div>
  );
}