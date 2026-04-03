"use client";
import React, { useEffect, useState } from "react";

const AboutSection = () => {
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/about");
        const data = await res.json();
        setAboutData(data);
      } catch (error) {
        console.error("Error fetching about data:", error);
      }
    };
    fetchData();
  }, []);

  if (!aboutData) {
    return <p className="text-center py-10">Loading...</p>;
  }

  return (
    <section id="about" className="w-full px-6 md:px-16 py-12 md:py-16">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
          {aboutData.title}
        </h1>

        {/* Description */}
        <p className="text-sm sm:text-base text-gray-600 mt-4 max-w-2xl leading-relaxed">
          {aboutData.description}
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mt-10 w-full">
          {aboutData.stats?.map((stat, index) => (
            <div
              key={index}
              className="bg-white px-6 py-6 rounded-xl shadow flex flex-col items-center justify-center w-full"
            >
              <h3 className="text-2xl sm:text-3xl font-extrabold text-orange-500">
                {stat.value}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mt-2 text-center">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
