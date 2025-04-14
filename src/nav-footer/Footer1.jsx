"use client";

import { Button, Input } from "@relume_io/relume-ui";
import React, { useState } from "react";
//import x14logolight from "../../assets/x14logolight.svg";
import x14logolight from "../assets/x14logowhite.svg"

import {
  BiLogoFacebookCircle,
  BiLogoInstagram,
  BiLogoLinkedinSquare,
  BiLogoYoutube,
} from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";

const useForm = () => {
  const [email, setEmail] = useState("");
  const handleSetEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ email });
  };
  return {
    email,
    handleSetEmail,
    handleSubmit,
  };
};

export function Footer1() {
  const formState = useForm();
  return (
    <footer id="relume" className="px-[5%] py-12 md:py-18 lg:py-20 bg-neutral-darker text-neutral-lighter">
      <div className="container">
        <div className="grid grid-cols-1 gap-x-[8vw] gap-y-12 pb-12 md:gap-y-16 md:pb-18 lg:grid-cols-[1fr_0.75fr] lg:gap-y-4 lg:pb-20">
          <div className="flex flex-col justify-between">
            <a href="#" className="mb-5 md:mb-6">
              <img
                src={x14logolight}
                alt="Logo image"
                className="inline-block"
              />
            </a>
            <h2 className=" font-bold text-deepSapphire-lightest mb-4 mt-6">
                X14 Holding
            </h2>            
            <p >
            Investing in bold ideas and breakthrough technologies to build a better tomorrow.
            </p>
            <div className="flex-1" />


            {/* <div className="w-full max-w-md">
              <form
                className="mb-3 grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-[1fr_max-content] md:gap-y-4"
                onSubmit={formState.handleSubmit}
              >
                <Input
                  id="email"
                  type="email"
                  placeholder="Your email here"
                  value={formState.email}
                  onChange={formState.handleSetEmail}
                />
                <Button title="Join" variant="secondary" size="sm">
                  Join
                </Button>
              </form>
              <p className="text-xs">
                By subscribing, you consent to our Privacy Policy and agree to
                receive updates.
              </p>
            </div> */}
          </div>
          <div className="grid grid-cols-1 items-start gap-y-10 sm:grid-cols-2 sm:gap-x-6 md:gap-x-8 md:gap-y-4">
            <div className="flex flex-col items-start justify-start">
              <h2 className="mb-3 font-semibold md:mb-4 text-deepSapphire-lightest">Quick Links</h2>
              <ul>
                <li className="py-2 text-sm">
                  <a href="/home" className="flex items-center gap-3">
                    <span>Home</span>
                  </a>
                </li>
{/* 
                <li className="py-2 text-sm">
                  <a href="/about" className="flex items-center gap-3">
                    <span>About</span>
                  </a>
                </li>
                <li className="py-2 text-sm">
                  <a href="/portfolio" className="flex items-center gap-3">
                    <span>Portfolio</span>
                  </a>
                </li>
                <li className="py-2 text-sm">
                  <a href="/partnerships" className="flex items-center gap-3">
                    <span>Partnerships</span>
                  </a>
                </li> */}

              </ul>
            </div>
            
            <div className="flex flex-col items-start justify-start">
              <h2 className="mb-3 font-semibold md:mb-4 text-deepSapphire-lightest">Connect With Us</h2>
              <ul className="flex flex-col items-start">
                {/* <li className="py-2 text-sm">
                  <a href="#" className="flex items-center gap-3">
                    <BiLogoFacebookCircle className="size-6" />
                    <span>Facebook</span>
                  </a>
                </li> */}
                <li className="py-2 text-sm">
                  <a href="https://www.instagram.com/x14.ae/" className="flex items-center gap-3">
                    <BiLogoInstagram className="size-6" />
                    <span>Instagram</span>
                  </a>
                </li>
                <li className="py-2 text-sm">
                  <a href="https://x.com/x14_dm" className="flex items-center gap-3">
                    <FaXTwitter className="size-6 p-0.5" />
                    <span>X</span>
                  </a>
                </li>
                <li className="py-2 text-sm">
                  <a href="https://ae.linkedin.com/company/x14digitalmedia" className="flex items-center gap-3">
                    <BiLogoLinkedinSquare className="size-6" />
                    <span>LinkedIn</span>
                  </a>
                </li>
                <li className="py-2 text-sm">
                  <a href="https://www.youtube.com/@x14_dm" className="flex items-center gap-3">
                    <BiLogoYoutube className="size-6" />
                    <span>YouTube</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="h-px w-full bg-black" />
        <div className="flex flex-col-reverse items-start justify-between pt-6 pb-4 text-sm md:flex-row md:items-center md:pt-8 md:pb-0">
          <p className="mt-6 md:mt-0">© 2025 X14. All rights reserved.</p>

        </div>
      </div>
    </footer>
  );
}
