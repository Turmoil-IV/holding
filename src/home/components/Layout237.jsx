"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";
import icontech from '../../assets/icons/icon-tech.svg'
import IconPartner from '../../assets/icons/icon-partnership3.svg?react'
import IconFuture from '../../assets/icons/icon-future-3.svg?react';


export function Layout237() {
  return (
    <section id="explore" className="px-[5%] py-16 md:py-24 lg:py-28 bg-deepSapphire-lightest">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="rb-12 mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
            <p className="mb-3 font-semibold md:mb-4">Invest</p>
            <h2 className="rb-5 mb-5 text-5xl font-normal md:mb-6 md:text-7xl lg:text-8xl">
              Empowering Innovation Through Strategic Investments
            </h2>
            <p className="md:text-md">
              At X14 Holding, we believe in fostering groundbreaking technology
              ventures that shape the future. Our investment philosophy centers
              on identifying and nurturing innovative ideas that drive progress.
            </p>
          </div>
          <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
            <div className="flex w-full flex-col items-center text-center">
              <div className="rb-5 mb-5 md:mb-6">
                <img
                  src= {icontech}
                  alt="tech logo 1"
                  className="size-12"
                />
              </div>
              <h3 className="mb-5 text-2xl font-normal md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Showcasing Our Diverse Tech Portfolio
              </h3>
              <p>
                Our portfolio features cutting-edge companies that are
                redefining industries.
              </p>
            </div>
            <div className="flex w-full flex-col items-center text-center">
              <div className="rb-5 mb-5 md:mb-6">
              <IconPartner className="size-12 text-deepSapphire-base" />

              </div>
              <h3 className="mb-5 text-2xl font-normal md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Explore Partnership Opportunities with Us
              </h3>
              <p>Join us in our mission to innovate and excel.</p>
            </div>
            <div className="flex w-full flex-col items-center text-center">
              <div className="rb-5 mb-5 md:mb-6">
              <IconFuture className="size-12 text-deepSapphire-base" />

              </div>
              <h3 className="mb-5 text-2xl font-normal md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Our Commitment to Future-Driven Investments
              </h3>
              <p>We are dedicated to investing in the next big ideas.</p>
            </div>
          </div>
          <div className="mt-10 flex items-center gap-4 md:mt-14 lg:mt-16">
            {/* <Button variant="secondary">Learn More</Button> */}
            {/* <Button iconRight={<RxChevronRight />} variant="link" size="link">
              Sign Up
            </Button> */}
          </div>
        </div>
      </div>
    </section>
  );
}
