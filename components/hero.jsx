"use client";

import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Background Video */}
      <video
        src="/1.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Dark overlay for readability */}
      <div className="absolute top-0 left-0 w-full h-full "></div>

      {/* Content above video */}
      <div className="relative z-10 space-y-6 px-4">
        <h1 className="text-5xl font-bold md:text-6xl lg:text-7xl xl:text-8xl gradient-title animate-gradient">
          Your AI Career Coach for
          <br />
          Professional Success
        </h1>
        <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
          Advance your career with personalized guidance, interview prep, and
          AI-powered tools for job success.
        </p>
        <div className="flex justify-center">
          <Link href="/dashboard">
            <Button size="lg" className="px-8">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
