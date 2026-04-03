import { NextResponse } from "next/server";

export async function GET() {
  const data = {
    title: "About Us",
    description:
      "We aim to bring authentic Vedic knowledge to everyone through modern digital platforms. Learn from exerienced astrologers and spiritual mentors.",
    stats: [
      { label: "Students", value: "10,000+" },
      { label: "Courses", value: "50+" },
      {label: "Experts",value: "20+"}
    ],
  };

  return NextResponse.json(data);
}