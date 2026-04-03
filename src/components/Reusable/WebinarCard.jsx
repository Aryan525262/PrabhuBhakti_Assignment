import { Clock, Users } from "lucide-react";
import Image from "next/image";

const WebinarCard = ({ title, speaker, date, time, price, thumbnail }) => {
  
  const eventDate = new Date(date);
  const day = eventDate.getDate();
  const month = eventDate.toLocaleString("en-US", { month: "short" }).toUpperCase();

  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden border">
      
      {/* Image Section */}
      <div className="relative w-full h-48">
        <Image
          src={thumbnail}
          alt={title}
          fill
          className="object-cover"
        />

        {/* Date Badge */}
        <div className="absolute top-3 left-3 bg-white rounded-lg px-2 py-1 text-center shadow">
          <p className="text-[10px] font-bold text-orange-500">{month}</p>
          <p className="text-sm font-bold text-gray-800">{day}</p>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        
        {/* Time + Speaker */}
        <div className="flex items-center gap-3 text-xs text-gray-500">
          <span className="flex items-center justify-center gap-1 bg-gray-100 rounded-lg p-1"><Clock size={12}/>{time}</span>
          <span className="flex items-center justify-center gap-1 bg-gray-100 rounded-lg p-1"><Users size={12}/>{speaker}</span>
        </div>

        {/* Title */}
        <h3 className="mt-2 font-semibold text-gray-800 leading-snug">
          {title}
        </h3>

        <hr className="my-4" />

        {/* Price + Button */}
        <div className="flex items-center justify-between">
          <span className="font-bold text-gray-800">
            ₹{price}
          </span>

          <button className="px-3 py-1 text-sm font-semibold text-orange-500 bg-orange-100 rounded-lg hover:bg-orange-200">
            Reserve Seat
          </button>
        </div>

      </div>
    </div>
  );
};

export default WebinarCard;