import { NextResponse } from "next/server";

export async function GET() {
  const data = [
    {
      id: "ebook_1",
      title: "Basics of Astrology",
      author: "Acharya Dev",
      price: 199,
      thumbnail: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
    },
    {
      id: "ebook_2",
      title: "Vedic Remedies Guide",
      author: "Pandit Sharma",
      price: 299,
      thumbnail: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
    },
    {
        "id": "ebook_3",
        "title": "Kundli Analysis Simplified",
        "author": "Guru Raj",
        "price": 249,
        "thumbnail": "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?q=80&w=600&auto=format&fit=crop"
    },
    {
        "id": "ebook_4",
        "title": "Astrology for Beginners",
        "author": "Acharya Mehta",
        "price": 149,
        "thumbnail": "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=600&auto=format&fit=crop"
    },
    {
        "id": "ebook_5",
        "title": "Spiritual Healing Guide",
        "author": "Sadhvi Anand",
        "price": 199,
        "thumbnail": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=600&auto=format&fit=crop"
    }
  ];

  return NextResponse.json(data);
}