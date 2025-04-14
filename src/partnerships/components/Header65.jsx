"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import backgroundVideo from "../../assets/x14-background-video.mov";

export function Header65() {
  return (
    <section
      id="relume"
      className="relative flex items-center justify-center px-[5%] h-[90vh] md:py-24 lg:py-28"
    >
      {/* Container with flex utilities to center content vertically */}
      <div className="relative z-10 container max-w-lg text-center flex flex-col justify-center h-full">
        <p className="mb-3 font-semibold md:mb-4 text-deepSapphire-lightest">
          Collaborate
        </p>
        <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl text-deepSapphire-lightest">
          Empower Your Vision
        </h1>
        <p className="md:text-md text-deepSapphire-lightest">
          Join us in shaping the future through strategic partnerships that drive innovation and growth.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8 text-deepSapphire-lightest">
          <Button
            title="Learn More"
            className="bg-deepSapphire-lightest text-deepSapphire-dark hover:bg-deepSapphire-lighter"
          >
            Learn More
          </Button>
          <Button
            title="Sign Up"
            variant="secondary-alt"
            className="text-deepSapphire-lightest hover:text-deepSapphire-dark hover:bg-deepSapphire-lightest"
          >
            Sign Up
          </Button>
        </div>
      </div>
      
      {/* Background video with overlay */}
      <div className="absolute inset-0 z-0">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </section>
  );
}
