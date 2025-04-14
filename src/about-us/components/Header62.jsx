"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Header62() {
  return (
    <section id="relume" className="h-[90vh] flex items-center px-[5%] md:py-24 lg:py-28 bg-neutral-white">
      <div className="container max-w-lg text-center">
        <p className="mb-3 font-semibold md:mb-4">Innovate</p>
        <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
          About x14 Holding
        </h1>
        <p className="md:text-md">
          Discover our mission, investment philosophy, and how we empower tech
          ventures for a brighter future.
        </p>
        <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
          <Button title="Learn More">Learn More</Button>
          <Button title="Contact" variant="secondary">
            Contact
          </Button>
        </div>
      </div>
    </section>
  );
}
