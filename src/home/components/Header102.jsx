"use client";

import {
  Button,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  
} from "@relume_io/relume-ui";
import Autoplay from "embla-carousel-autoplay";
import React, { useEffect, useState } from "react";
import Carousel1 from '../../assets/carousel-1.jpg'
import Carousel2 from '../../assets/carousel-2.jpg'
import Carousel3 from '../../assets/carousel-3.jpg'
import Carousel4 from '../../assets/carousel-4.jpg'

const useCarousel = () => {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const options = {
    loop: true,
  };

  const plugins = [
    Autoplay({
      delay: 5000,
    }),
  ];

  const handleDotClick = (index) => () => {
    if (api) {
      api.scrollTo(index);
    }
  };

  const dotClassName = (index) => {
    return `mx-[3px] inline-block size-2 rounded-full ${
      current === index + 1 ? "bg-black" : "bg-neutral-light"
    }`;
  };

  return {
    options,
    plugins,
    api,
    setApi,
    handleDotClick,
    dotClassName,
  };
};

export function Header102() {
  const carousel = useCarousel();
  return (
    <section
      id="relume"
      className="grid grid-cols-1 items-center gap-y-16 overflow-hidden pt-16 sm:overflow-auto md:pt-24 lg:grid-cols-[50%_50%] lg:gap-y-0 lg:pt-0 bg-neutral-white"
    >
      <div className="mx-[5%] max-w-md justify-self-start lg:mr-20 lg:ml-[5vw] lg:justify-self-end">
        <h1 className="mb-5 text-6xl font-normal md:mb-6 md:text-9xl lg:text-10xl">
          Investing in Tomorrow's Innovative Technologies Today
        </h1>
        <p className="md:text-md">
          At X14 Holding, we are dedicated to shaping the future through
          strategic investments in groundbreaking technology ventures. Our
          mission is to empower innovators and drive transformative change in
          the tech landscape.
        </p>
        <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
          <Button title="Explore" variant="primary"
            onClick={() => {
              const element = document.getElementById("explore");
              if (element) {
                const vhOffset = window.innerHeight * 0.10; // 10% of viewport height
                const y = element.getBoundingClientRect().top + window.pageYOffset - vhOffset;
              
                window.scrollTo({ top: y, behavior: "smooth" });
              }
              
            }}
            >Explore</Button>
          {/* <Button title="Connect" variant="secondary">
            Connect
          </Button> */}
        </div>
      </div>
      <div className="relative clear-both h-[300px] max-h-[60rem] min-h-[90vh] w-full bg-[#ddd] text-center">
        <Carousel
          opts={carousel.options}
          plugins={carousel.plugins}
          setApi={carousel.setApi}
          className="relative right-0 left-0 z-10 block h-full overflow-hidden pl-4 whitespace-nowrap"
        >
          <CarouselContent>
            {/* <CarouselItem className="pl-0">
              <div className="relative inline-block size-full text-left align-top whitespace-normal">
                <div className="flex h-screen flex-col">
                  <div className="relative flex-1">
                    <img
                      className="absolute size-full object-cover"
                      src={Carousel4}
                      alt="Relume placeholder image 1"
                    />
                  </div>
                  <div className="relative bg-neutral-white px-6 pt-6 pb-32 sm:px-8 sm:pt-8">
                    <div className="w-full max-w-lg">
                      <h6 className="mb-1 text-md leading-[1.4] font-normal md:text-xl">
                        Our Investment Philosophy
                      </h6>
                      <p>Investing in visionary tech for a better future.</p>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem> */}
            <CarouselItem className="pl-0">
              <div className="relative inline-block size-full text-left align-top whitespace-normal">
                <div className="flex h-screen flex-col">
                  <div className="relative flex-1">
                    <img
                      className="absolute size-full object-cover"
                      src={Carousel3}
                      alt="Relume placeholder image 2"
                    />
                  </div>
                  <div className="relative bg-neutral-white px-6 pt-6 pb-32 sm:px-8 sm:pt-8">
                    <div className="w-full max-w-lg">
                      <h6 className="mb-1 text-md leading-[1.4] font-normal md:text-xl">
                        Our Investment Philosophy
                      </h6>
                      <p>Investing in visionary tech for a better future.</p>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="pl-0">
              <div className="relative inline-block size-full text-left align-top whitespace-normal">
                <div className="flex h-screen flex-col">
                  <div className="relative flex-1">
                    <img
                      className="absolute size-full object-cover"
                      src={Carousel4}
                      alt="Relume placeholder image 3"
                    />
                  </div>
                  <div className="relative bg-neutral-white px-6 pt-6 pb-32 sm:px-8 sm:pt-8">
                    <div className="w-full max-w-lg">
                      <h6 className="mb-1 text-md leading-[1.4] font-normal md:text-xl">
                        Our Investment Philosophy
                      </h6>
                      <p>Investing in visionary tech for a better future.</p>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <div className="flex items-center justify-between pl-4">
            <div className="absolute top-auto right-auto bottom-[90px] left-8 flex w-full items-start justify-center">
              <button
                onClick={carousel.handleDotClick(0)}
                className={carousel.dotClassName(0)}
              />
              <button
                onClick={carousel.handleDotClick(1)}
                className={carousel.dotClassName(1)}
              />
              {/* <button
                onClick={carousel.handleDotClick(2)}
                className={carousel.dotClassName(2)}
              /> */}
            </div>
            <CarouselPrevious className="top-auto right-[5.5rem] bottom-2 left-auto size-12 bg-transparent md:right-24" />
            <CarouselNext className="top-auto right-8 bottom-2 left-auto size-12 bg-transparent" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
