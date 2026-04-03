import { NextResponse } from "next/server";

export async function GET() {
  const data = [
    {
      id: "course_1",
      title: "Complete Astrology Course",
      instructor: "Acharya Dev",
      price: 4999,
      duration: "3 Months",
      level: "Beginner to Advanced",
      thumbnail: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
    },
    {
        "id": "course_2",
        "title": "Numerology Mastery",
        "instructor": "Guru Raj",
        "price": 2999,
        "duration": "2 Months",
        "level": "Intermediate",
        "thumbnail": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=600&auto=format&fit=crop"
    },
    {
        "id": "course_3",
        "title": "Palmistry Fundamentals",
        "instructor": "Pandit Sharma",
        "price": 1999,
        "duration": "1 Month",
        "level": "Beginner",
        "thumbnail": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop"
    },
    {
        "id": "course_4",
        "title": "Advanced Horoscope Reading",
        "instructor": "Acharya Mehta",
        "price": 5999,
        "duration": "4 Months",
        "level": "Advanced",
        "thumbnail": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=600&auto=format&fit=crop"
    }
  ];

  return NextResponse.json(data);
}