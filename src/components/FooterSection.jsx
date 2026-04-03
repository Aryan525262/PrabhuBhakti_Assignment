"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import {
  TbBrandTwitter,
  TbBrandInstagram,
  TbBrandYoutube,
} from "react-icons/tb";

const FooterSection = () => {
  const [footerData, setFooterData] = useState({ logo: null, links: [] });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/footer");
        const data = await res.json();
        console.log("Footer Data:", data);
        setFooterData(data);
      } catch (error) {
        console.error("Error fetching footer data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <section className="w-full bg-black px-6 md:px-16 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Logo + Description */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="p-1 rounded-lg bg-white">
              {footerData.logo && (
                <Image
                  src={footerData.logo}
                  alt="Logo"
                  width={22}
                  height={22}
                />
              )}
            </div>
            <h1 className="text-lg font-semibold text-gray-300">
              Param Bhakti
            </h1>
          </div>

          <p className="text-sm text-gray-400 leading-relaxed">
            Empowering individuals with authentic Vedic knowledge, spiritual
            guidance and expert astrology sessions.
          </p>
        </div>

        {/* Explore */}
        <div className="flex flex-col gap-4">
          <h2 className="text-sm font-semibold text-gray-300 uppercase tracking-wide">
            Explore
          </h2>

          {footerData?.links?.map((link, index) => (
            <button
              key={index}
              onClick={() => {
                const section = document.getElementById(link?.href.substring(1,link?.href.length));
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="text-sm text-gray-400 hover:text-white transition text-left"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-4">
          <h2 className="text-sm font-semibold text-gray-300 uppercase tracking-wide">
            Contact
          </h2>

          <div className="flex flex-col gap-3 text-sm text-gray-400">
            <div className="flex items-start gap-2">
              <MapPin size={16} />
              <span>123 Spiritual Way, Rishikesh, Uttarakhand, 249201</span>
            </div>

            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>+91 9876543210</span>
            </div>

            <div className="flex items-center gap-2">
              <Mail size={16} />
              <span>namaste@prabhubhakti.com</span>
            </div>
          </div>
        </div>

        {/* Social + Newsletter */}
        <div className="flex flex-col gap-6">
          <div>
            <h2 className="text-sm font-semibold text-gray-300 uppercase tracking-wide">
              Follow Us
            </h2>

            <div className="flex gap-4 mt-4">
              {footerData?.socials?.map((social, index) => (
                <Link
                  key={index}
                  href={social?.url}
                  className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition"
                >
                  {social.platform === "YouTube" && (
                    <TbBrandYoutube size={18} className="text-gray-300" />
                  )}
                  {social.platform === "Twitter" && (
                    <TbBrandTwitter size={18} className="text-gray-300" />
                  )}
                  {social.platform === "Instagram" && (
                    <TbBrandInstagram size={18} className="text-gray-300" />
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h2 className="text-sm font-semibold text-gray-300 uppercase tracking-wide">
              Newsletter
            </h2>

            <div className="flex mt-4 w-full">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-3 py-2 bg-gray-900 text-gray-300 text-sm rounded-l-md focus:outline-none w-4/5"
              />
              <button className="px-4 py-2 bg-orange-500 text-white text-sm rounded-r-md hover:bg-orange-600">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
        <p>{footerData.copyright}</p>

        <div className="flex gap-4">
          <Link href="/privacy" className="hover:text-gray-300">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-gray-300">
            Terms of Service
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
