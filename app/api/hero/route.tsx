import { NextResponse } from "next/server";

export async function GET() {
  const data = {
    title: "ज्ञान और आध्यात्म का संगम",
    subtitle: "Learn astrology, spirituality, and life wisdom from experts",
    cta: {
      label: "Explore Courses",
      link: "/courses",
    },
    image:
      "https://images.unsplash.com/photo-1508672019048-805c876b67e2",
  };

  return NextResponse.json(data);
}