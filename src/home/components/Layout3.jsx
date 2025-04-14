"use client";

import React from "react";
import x14animation from "../../assets/x14animation.gif"

export function Layout3() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 ">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <h1 className="rb-5 mb-5 text-4xl font-normal md:mb-6 md:text-5xl lg:text-6xl">
              Unlock the Future: Partner with X14 Holding for Innovative Tech
              Investments
            </h1>
            <p className="md:text-md">
              By collaborating with X14 Holding, you gain access to a wealth of
              expertise and resources that drive success in the tech landscape.
              Our commitment to innovation and global reach ensures that your
              ventures are supported by a forward-thinking partner dedicated to
              shaping the future.
            </p>
          </div>
          <div className="relative md:left-8">
            <img
              src={x14animation}
              className="w-full rounded-image object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
