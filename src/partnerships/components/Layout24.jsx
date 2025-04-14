"use client";

import React from "react";

export function Layout24() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <div className="rb-5 mb-5 md:mb-6">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                className="size-12"
                alt="Relume logo"
              />
            </div>
            <h3 className="mb-5 text-4xl leading-[1.2] font-bold md:mb-6 md:text-5xl lg:text-6xl">
              Unlock New Horizons: Partner with x14 Holding for Transformative
              Growth
            </h3>
            <p className="md:text-md">
              By partnering with x14 Holding, you gain access to exclusive
              investment opportunities that can elevate your venture. Our
              strategic guidance and collaborative approach ensure that
              together, we can navigate the tech landscape and achieve
              remarkable growth.
            </p>
          </div>
          <div>
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="w-full rounded-image object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
