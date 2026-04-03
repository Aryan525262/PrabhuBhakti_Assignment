"use client";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const HeroSection = () => {
  const [heroData, setHeroData] = useState({
    title: "Loading...",
    subtitle: "",
    cta: {
      label: "",
      link: "#",
    },
    image: null,
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/hero");
        const data = await res.json();
        console.log("Hero Data:", data);
        setHeroData(data);
      } catch (error) {
        console.error("Error fetching hero data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <section className="w-full px-6 md:px-16 py-12 md:py-20">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Left Content */}
        <div className="flex-1 flex flex-col items-start gap-6 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
            {heroData.title}
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-xl">
            {heroData.subtitle}
          </p>

          <button
            onClick={() => {
              const section = document.getElementById("courses");
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-orange-600 hover:bg-orange-500 rounded-full transition"
          >
            {heroData?.cta?.label}
            <ArrowRight size={16} />
          </button>
        </div>

        {/* Right Image */}
        <div className="flex-1 w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] relative">
          {heroData.image && (
            <Image
              src={heroData.image}
              alt="Hero Image"
              fill
              className="object-cover rounded-2xl shadow-lg"
              priority
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
