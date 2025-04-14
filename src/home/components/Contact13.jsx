"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";
import { RxChevronRight } from "react-icons/rx";

export function Contact13() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28  bg-deepSapphire-lightest">
      <div className="container">
        <div className="rb-12 mb-12 max-w-lg md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Connect</p>
          <h2 className="rb-5 mb-5 text-5xl font-normal md:mb-6 md:text-7xl lg:text-8xl">
            Get in Touch
          </h2>
          <p className="md:text-md">
            We'd love to hear from you about partnerships.
          </p>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 gap-x-12 gap-y-12 sm:grid-cols-2 md:gap-x-20 md:gap-y-16 lg:grid-cols-[0.5fr_1fr]">
          <div className="grid auto-cols-fr grid-cols-1 gap-x-4 gap-y-10">
            <div>
              <div className="mb-3 md:mb-4">
                <BiEnvelope className="size-8" />
              </div>
              <h3 className="mb-2 text-md leading-[1.4] font-normal md:text-xl">
                Email
              </h3>
              <p className="mb-2">Reach us anytime at</p>
              <a className="underline" href="#">
                info@x14.ae
              </a>
            </div>
            <div>
              <div className="mb-3 md:mb-4">
                <BiPhone className="size-8" />
              </div>
              <h3 className="mb-2 text-md leading-[1.4] font-normal md:text-xl">
                Phone
              </h3>
              <p className="mb-2">Call us at</p>
              <a className="underline text-carrotOrange-dark" href="#">
                +97125847744
              </a>
            </div>
            <div>
              <div className="mb-3 md:mb-4">
                <BiMap className="size-8" />
              </div>
              <h3 className="mb-2 text-md leading-[1.4] font-normal md:text-xl">
                Office
              </h3>
              <p className="mb-2">Etihad Towers, Abu Dhabi, United Arab Emirates</p>
              <div className="mt-5 md:mt-6">
                <a     
                  href="https://www.google.com/maps/search/?api=1&query=Etihad+Towers,+Abu+Dhabi,+United+Arab+Emirates"
                  target="_bla  nk"
                  rel="noopener noreferrer">
                <Button
                  title="Get Directions"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  Get Directions
                </Button>
                </a>
              </div>
            </div>
          </div>
          <div className="w-full h-[50vh] rounded-xl overflow-hidden shadow-lg">
            <iframe
              title="Etihad Towers Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3631.7713219353063!2d54.321782!3d24.458717999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e6593af750357%3A0x5dcb1ae54858b26!2sEtihad%20Towers!5e0!3m2!1sen!2sae!4v1744265190920!5m2!1sen!2sae" 
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

          </div>
        </div>
      </div>
    </section>
  );
}
