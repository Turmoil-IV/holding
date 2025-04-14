"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";
import TeamImg from "../../assets/team4.png"

export function Layout192() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 bg-deepSapphire-lightest">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div className="order-2 md:order-1">
            <img
              src = {TeamImg}
              className="w-full rounded-image object-cover"
              alt="Relume placeholder image"
            />
          </div>
          <div className="order-1 lg:order-2">
            <p className="mb-3 font-semibold md:mb-4">Innovate</p>
            <h2 className="rb-5 mb-5 text-5xl font-normal md:mb-6 md:text-7xl lg:text-8xl">
              Empowering the Future Through Technology Investments
            </h2>
            <p className="md:text-md">
              At X14 Holding, we are dedicated to transforming the technology
              landscape by investing in groundbreaking ventures. Our vision is
              to foster innovation that shapes a sustainable and prosperous
              future.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              {/* <Button title="Learn More" variant="secondary">
                Learn More
              </Button>
              <Button
                title="Join"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                Join
              </Button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
