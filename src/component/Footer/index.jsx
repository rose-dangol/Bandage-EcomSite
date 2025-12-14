import { Facebook, Instagram, Twitter } from "lucide-react";
import Container from "../Container";

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
    <footer className="w-full bg-[#FAFAFA]">
      {/* Main Content */}
      {/* Header Section */}
      <div className="py-12 border-b border-gray-200">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-8">
          <span className="heading-3 text-blueBlack">Bandage</span>
          <div className="flex gap-4">
            <Facebook size={24} color="#23a6f0" />
            <Instagram size={24} color="#23a6f0" />
            <Twitter size={24} color="#23a6f0" />
          </div>
        </div>
      </div>

      {/*footer Links Grid */}
      <div className="py-12 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12">
          {Object.entries(FooterLinks).map(([key, section]) => (
            <div key={key} className="flex flex-col gap-4">
              <span className="heading-5 text-blueBlack">{section.title}</span>
              <div className="flex flex-col gap-3">
                {section.links.map((link, index) => (
                  <a
                    key={index}
                    href="#"
                    className="text-grayText links text-left hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}
          <div className="md:col-span-1 flex flex-col gap-4">
            <span className="heading-5 text-blueBlack">Get In Touch</span>
            {/* borders */}
            <div className="flex">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 border border-gray-300 text-sm focus:outline-none focus:border-secondary placeholder:text-sm font-normal placeholder:leading-7 rounded-l"
              />
              <button className="bg-primary text-white px-5 py-3 font-normal cursor-pointer hover:bg-secondary text-sm leading-7 rounded-r">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-grayText">Lore imp sum dolor Amit</p>
          </div>
        </div>
      </div>

      <div className="bg-[#F9F9F9] border-t border-gray-200 w-full py-6">
        <span className="font-bold text-sm text-grayText">
          Made With Love By Finland. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
