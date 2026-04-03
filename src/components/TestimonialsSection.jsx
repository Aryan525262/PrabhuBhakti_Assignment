"use client";
import React, { useEffect, useState } from "react";
import CourseCard from "./Reusable/CourseCard";
import TestimonialCard from "./Reusable/TestimonialsCard";

const CoursesSection = () => {
  const [testimonialData, setTestimonialData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/testimonials");
        const data = await res.json();
        console.log("Testimonials Data:", data);
        setTestimonialData(data);
      } catch (error) {
        console.error("Error fetching testimonials data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <section className="w-full px-6 md:px-16 py-12 md:py-20">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center md:text-left max-w-2xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
            What Our Students Say
          </h1>

          <p className="text-sm sm:text-base text-gray-600 mt-3">
            Read success stories and experiences from our community of learners.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 mt-10">
          {testimonialData.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              name={testimonial.name}
              feedback={testimonial.feedback}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
