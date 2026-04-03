"use client";
import React, { useEffect, useState } from "react";
import EbookCard from "./Reusable/EbookCard";

const EbooksSection = () => {
  const [ebooksData, setEbooksData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/ebooks");
        const data = await res.json();
        console.log("Ebooks Data:", data);
        setEbooksData(data);
      } catch (error) {
        console.error("Error fetching ebooks data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <section id="ebooks" className="w-full px-6 md:px-16 py-12 md:py-16">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center md:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
            Featured Ebooks
          </h1>

          <p className="text-sm sm:text-base text-gray-600 mt-2 max-w-2xl">
            Deepen your knowledge with our collection of digital books written
            by experts
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 mt-10">
          {ebooksData.map((ebook) => (
            <EbookCard
              key={ebook.id}
              title={ebook.title}
              author={ebook.author}
              price={ebook.price}
              thumbnail={ebook.thumbnail}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EbooksSection;
