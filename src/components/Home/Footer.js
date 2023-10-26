import React from "react";
import Newsletter from "./Newsletter";
import Copyright from "./Copyright";
import Socials from "./Socials";

import { footerData } from "../../data";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../variants";
import SocialLink from "../Contact/SocialLink";

const Footer = () => {
  const { contact, hours, social } = footerData;
  return (
    <footer
      style={{}}
      className="relative bg-dark lg:bg-transparent lg:min-h-[620px] lg:bg-footer lg:bg-center lg:bg-no-repeat pt-20"
    >
      <div className="container mx-auto h-full">
        <div className="h-full flex flex-col gap-y-12">
          <div>
            <Newsletter />
          </div>
          <div className="flex flex-col lg:flex-row lg:gap-x-[200px] gap-y-12 lg:gap-y-0 lg:mb-12">
            <div className="flex-1  lg:max-w-[195px]">
              <div className="capitalize text-[20px] lg:text-[22px] font-normal text-white font-primary mb-[22px]">
                {contact.title}
              </div>
              <div className="capitalize">{contact.address}</div>
              <div>
                <p className="text-white-800 text-[20px] ">
                  Email:{" "}
                  <a
                    href="mailto:abc@gmail.com"
                    className="text-white-800  underline hover:text-white text-[20px]"
                  >
                    abc@gmail.com
                  </a>
                </p>
              </div>
              <div>
                <p className="text-white-800 text-lg ">
                  Phone:{" "}
                  <a
                    href="tel:(123) 456-7890"
                    className="text-white-800 underline hover:text-white"
                  >
                    (123) 456-7890
                  </a>
                </p>
              </div>
              <div>
                {" "}
                <SocialLink />{" "}
              </div>
            </div>
            <div className="flex-1">
              <div className="capitalize text-[20px] lg:text-[22px] font-normal text-white font-primary mb-[22px]">
                {hours.title}
              </div>
              <div className="flex gap-x-[46px]">
                {hours.program.map((item, index) => {
                  return (
                    <div className="capitalize" key={index}>
                      <div>
                        <div>
                          {item.days} {item.hours}
                        </div>
                        <div className="text-[20px] text-accenthover"></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex-1 lg:max-w-[260px] mb-12">
              <div className="capitalize text-[20px] lg:text-[22px] font-normal text-white font-primary mb-[22px]">
                {social.title}
              </div>
              <div className="lg:max-w-[200px]">{social.sub}</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
