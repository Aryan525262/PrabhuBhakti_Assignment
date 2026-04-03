import { NextResponse } from "next/server";

export async function GET() {
  const data = [
    {
      id: "webinar_1",
      title: "2026 Horoscope Insights",
      speaker: "Acharya Dev",
      date: "2026-05-10",
      time: "7:00 PM",
      price: 99,
      thumbnail: "https://images.unsplash.com/photo-1515169067868-5387ec356754",
    },
     {
        "id": "webinar_2",
        "title": "Kundli Matching Secrets",
        "speaker": "Pandit Sharma",
        "date": "2026-05-15",
        "time": "6:00 PM",
        "price": 149,
        "thumbnail": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop"
    },
    {
        "id": "webinar_3",
        "title": "Numerology Predictions 2026",
        "speaker": "Guru Raj",
        "date": "2026-05-20",
        "time": "8:00 PM",
        "price": 129,
        "thumbnail": "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?q=80&w=600&auto=format&fit=crop"
    },
    {
        "id": "webinar_4",
        "title": "Spiritual Growth Workshop",
        "speaker": "Sadhvi Anand",
        "date": "2026-05-25",
        "time": "7:30 PM",
        "price": 99,
        "thumbnail": "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=600&auto=format&fit=crop"
    }
  ];

  return NextResponse.json(data);
}