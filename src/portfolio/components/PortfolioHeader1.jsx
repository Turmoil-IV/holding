"use client";

import { Badge } from "@relume_io/relume-ui";
import React from "react";

export function PortfolioHeader1() {
  return (
    <section id="relume" className="h-[90vh] px-[5%] flex items-center">
      <div className="mx-auto max-w-lg text-center">
        <div>
          <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
            Innovative Tech Solutions
          </h1>
          <p className="md:text-md">
            Transforming industries through cutting-edge technology and strategic
            investments for a sustainable future.
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-2 md:mt-6">
            <Badge>
              <a href="#">Investment Focus</a>
            </Badge>
            <Badge>
              <a href="#">Tech Innovation</a>
            </Badge>
            <Badge>
              <a href="#">Future Ready</a>
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
}
