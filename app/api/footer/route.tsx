import { NextResponse } from "next/server";

export async function GET() {
  const data = {
      "logo": "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      "links": [
          { "label": "Courses", "href": "/courses" },
          { "label": "Ebooks", "href": "/ebooks" },
          { "label": "Webinars", "href": "/webinars" },
          { "label": "About", "href": "/about" }
      ],
      "socials": [
          { "platform": "Twitter", "url": "https://twitter.com" },
          { "platform": "Instagram", "url": "https://instagram.com" },
          { "platform": "YouTube", "url": "https://youtube.com" }
      ],
      "copyright": "© 2026 PrabhuBhakti. All rights reserved."
  }

  return NextResponse.json(data);
}