"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";
import IconContract from '../../assets/icons/icon-contract.svg?react'
import IconEvaluation from '../../assets/icons/icon-checklist.svg?react'
import IconVision from '../../assets/icons/icon-vision.png'

export function Layout241() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col">
          <div className="rb-12 mb-12 md:mb-18 lg:mb-20">
            <div className="w-full max-w-lg">
              <p className="mb-3 font-semibold md:mb-4">Engage</p>
              <h2 className="mb-5 text-5xl font-normal md:mb-6 md:text-7xl lg:text-8xl">
                Connecting Startups and Partners with X14 Holding
              </h2>
              <p className="md:text-md">
                At X14 Holding, we streamline the investment process for
                startups and partners. Our approach ensures transparency and
                collaboration from the very first interaction.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
            <div className="flex w-full flex-col">
              <div className="mb-5 md:mb-6">
              <IconContract className="size-12 text-deepSapphire-base mb-4" />

              </div>
              <h3 className="mb-5 text-2xl font-normal md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Initial Contact: Start Your Journey Here
              </h3>
              <p>Reach out to us through our contact form.</p>
            </div>
            <div className="flex w-full flex-col">
              <div className="mb-5 md:mb-6">
              <IconEvaluation className="size-12 text-deepSapphire-base mb-4" />

              </div>
              <h3 className="mb-5 text-2xl font-normal md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Evaluation: Assessing Your Innovative Ideas
              </h3>
              <p>Our team will review your proposal thoroughly.</p>
            </div>
            <div className="flex w-full flex-col">
              <div className="mb-5 md:mb-6">
                <img
                  src={IconVision}
                  className="size-16"
                  alt="Relume logo"
                />
              </div>
              <h3 className="mb-5 text-2xl font-normal md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Investment Discussion: Aligning Visions for Success
              </h3>
              <p>We engage in discussions to align our goals.</p>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
            {/* <Button variant="secondary">Learn More</Button>
            <Button iconRight={<RxChevronRight />} variant="link" size="link">
              Sign Up
            </Button> */}
          </div>
        </div>
      </div>
    </section>
  );
}
