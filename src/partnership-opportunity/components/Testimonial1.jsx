"use client";

import React from "react";

export function Testimonial1() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container w-full max-w-lg">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 md:mb-8">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg"
              alt="Webflow logo"
              className="max-h-14"
            />
          </div>
          <blockquote className="text-xl font-bold md:text-2xl">
            "Partnering with x14 Holding has been a game-changer for our
            startup. Their insights and resources have propelled our growth
            significantly."
          </blockquote>
          <div className="mt-6 flex flex-col items-center justify-center md:mt-8">
            <div className="mb-3 md:mb-4">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Testimonial avatar"
                className="size-16 min-h-16 min-w-16 rounded-full object-cover"
              />
            </div>
            <p className="font-semibold">Sarah Johnson</p>
            <p>CEO, Tech Innovations</p>
          </div>
        </div>
      </div>
    </section>
  );
}
