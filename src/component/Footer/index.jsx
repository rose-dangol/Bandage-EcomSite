import React from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";

const FooterLinks = {
  company: {
    title: "Company Info",
    links: ["About Us", "Careers", "We are hiring", "Blog"],
  },
  legal: {
    title: "Legal",
    links: ["Privacy", "Terms", "Cookie Policy", "Contact"],
  },
  features: {
    title: "Features",
    links: [
      "Business Marketing",
      "User Analytic",
      "Live Chat",
      "Unlimited Support",
    ],
  },
  resources: {
    title: "Resources",
    links: ["IOS & Andriod", "Watch a Demo", "Customers", "API"],
  },
};

export default function Footer() {
  return (
    <footer className="h-auto bg-[#FAFAFA]">
      {/* Main Content */}
      <div className="w-full">
        {/* Header Section */}
        <div className="px-6 md:px-12 py-12 border-b border-gray-200">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-8">
            <span className="font-bold text-3xl tracking-wide text-[#252B42]">
              Bandage
            </span>
            <div className="flex gap-4">
              <Facebook size={24} color="#23a6f0" />
              <Instagram size={24} color="#23a6f0" />
              <Twitter size={24} color="#23a6f0" />
            </div>
          </div>
        </div>

        {/*footer Links Grid */}
        <div className="px-6 md:px-12 py-12 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12">
            {Object.entries(FooterLinks).map(([key, section]) => (
              <div key={key} className="flex flex-col gap-4">
                <span className="font-bold text-base leading-6 tracking-[0.1px] text-[#252B42]">
                  {section.title}
                </span>
                <div className="flex flex-col gap-3">
                  {section.links.map((link, index) => (
                    <a
                      key={index}
                      href="#"
                      className="text-gray-600 font-medium text-sm leading-6 tracking-[0.2px] hover:text-[#23a6f0] transition-colors"
                    >
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            ))}
            <div className="md:col-span-1 flex flex-col gap-4">
              <span className="font-bold text-base leading-6 tracking-[0.1px] text-[#252B42]">
                Get In Touch
              </span>
              {/* borders */}
              <div className="flex ">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 border-l border-gray-300 text-sm focus:outline-none focus:border-secondary placeholder:uppercase"
                />
                <button className="bg-primary text-white px-5 py-3 font-bold hover:bg-secondary text-sm rounded">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#F9F9F9] border-t border-gray-200 w-full px-6 md:px-12 py-6">
        <span className="font-bold text-sm text-second-text-color">
          Made With Love By Finland. All Rights Reserved
        </span>
      </div>
    </footer>
  );
}
