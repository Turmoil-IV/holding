"use client";

import { Badge } from "@relume_io/relume-ui";
import React from "react";

export function PortfolioHeader7() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 items-start gap-12 md:mb-18 md:grid-cols-[1.5fr_1fr] lg:mb-20 lg:gap-x-20">
          <div>
            <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
              Innovative Tech Project
            </h1>
            <p className="md:text-md">
              Transforming the future of technology through strategic
              investments in groundbreaking startups.
            </p>
            <div className="mt-5 flex flex-wrap gap-2 md:mt-6">
              <Badge>
                <a href="#">Innovation Hub</a>
              </Badge>
              <Badge>
                <a href="#">Tech Ventures</a>
              </Badge>
              <Badge>
                <a href="#">Future Focused</a>
              </Badge>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="mb-2 text-md leading-[1.4] font-bold md:text-xl">
                Client
              </h3>
              <p>X14 Holdings</p>
            </div>
            <div>
              <h3 className="mb-2 text-md leading-[1.4] font-bold md:text-xl">
                Date
              </h3>
              <p>March 2023</p>
            </div>
            <div>
              <h3 className="mb-2 text-md leading-[1.4] font-bold md:text-xl">
                Role
              </h3>
              <p>Project Lead</p>
            </div>
            <div>
              <h3 className="mb-2 text-md leading-[1.4] font-bold md:text-xl">
                Website
              </h3>
              <a href="#" target="_blank" rel="noopener" className="underline">
                www.relume.io
              </a>
            </div>
          </div>
        </div>
        <div>
          <img
            src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
            className="w-full rounded-image object-cover"
            alt="Relume placeholder image"
          />
        </div>
      </div>
    </section>
  );
}
