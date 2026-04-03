"use client";
import React, { useEffect, useState } from "react";
import WebinarCard from "./Reusable/WebinarCard";

const WebinarSection = () => {
  const [WebinarData, setWebinarData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/webinars");
        const data = await res.json();
        console.log("Webinars Data:", data);
        setWebinarData(data);
      } catch (error) {
        console.error("Error fetching webinars data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <section id="webinars" className="w-full px-6 md:px-16 py-12 md:py-20">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center md:text-left max-w-2xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
            Upcoming Live Webinars
          </h1>

          <p className="text-sm sm:text-base text-gray-600 mt-3">
            Join our experts for interactive sessions on predicting the future
            and finding spiritual balance.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 mt-10">
          {WebinarData.map((webinar) => (
            <WebinarCard
              key={webinar.id}
              title={webinar.title}
              speaker={webinar.speaker}
              price={webinar.price}
              thumbnail={webinar.thumbnail}
              date={webinar.date}
              time={webinar.time}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebinarSection;
