"use client";
import React, { useEffect, useState } from "react";
import CourseCard from "./Reusable/CourseCard";

const CoursesSection = () => {
  const [coursesData, setCoursesData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/courses");
        const data = await res.json();
        console.log("Courses Data:", data);
        setCoursesData(data);
      } catch (error) {
        console.error("Error fetching courses data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <section id="courses" className="w-full px-6 md:px-16 py-12 md:py-16">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center md:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
            Premium Courses
          </h1>

          <p className="text-sm sm:text-base text-gray-600 mt-2 max-w-2xl">
            Master astrology, numerology and life sciences with structured
            learning programs.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 mt-10">
          {coursesData.map((course) => (
            <CourseCard
              key={course.id}
              title={course.title}
              instructor={course.instructor}
              level={course.level}
              price={course.price}
              thumbnail={course.thumbnail}
              duration={course.duration}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
