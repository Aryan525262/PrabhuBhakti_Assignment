import { NextResponse } from "next/server";

export async function GET() {
  const data = [
    {
        "id": "test_1",
        "name": "Rohit Sharma",
        "feedback": "Amazing courses! I learned astrology from scratch.",
        "rating": 5
    },
    {
        "id": "test_2",
        "name": "Priya Verma",
        "feedback": "Very knowledgeable instructors and practical learning.",
        "rating": 4
    },
    {
        "id": "test_3",
        "name": "Amit Singh",
        "feedback": "The webinars are extremely insightful and engaging.",
        "rating": 5
    },
    {
        "id": "test_4",
        "name": "Neha Kapoor",
        "feedback": "Loved the ebooks and easy explanations.",
        "rating": 4
    }
  ];

  return NextResponse.json(data);
}