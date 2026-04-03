import Image from "next/image";
import { Clock, GraduationCap, ShoppingCart } from "lucide-react";

const CourseCard = ({ title, instructor,duration, level, price, thumbnail }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition overflow-hidden border">
      
      {/* Image */}
        <div className="relative w-full h-56">
            <div className=" absolute top-4 left-2 z-2 flex items-center bg-white font-medium justify-center gap-2 py-1 px-2 rounded-full">
                <GraduationCap size={14} color="#000"/>
                <span className="text-[10px] text-black ml-1">{level}</span>
            </div>
            <div className="relative w-full h-56">
                <Image
                src={thumbnail}
                alt={title}
                fill
                className="object-cover"
                />
            </div>
        </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
                <Clock size={15} color="orange"/>
                <span className="text-xs text-gray-600 ml-1">{duration}</span>
            </div>
            <div className="flex items-center gap-1">
                <div className="p-1 rounded-full bg-gray-900"/>
                <div>
                    <span className="text-xs text-gray-600 ml-1">{instructor}</span>
                </div>
            </div>
        </div>

        <h3 className="text-md font-semibold text-gray-800">
          {title}
        </h3>

        {/* Price + Icon */}
        <div className="flex items-center justify-between mt-4">
            <div className="flex flex-col">
                <span className="text-gray-400 text-[10px] font-bold">PRICE</span>
                <span className="text-black font-bold">
                    ₹{price}
                </span>
            </div>
            

          <button className="px-4 py-2 rounded-lg bg-black hover:bg-black/90 text-white text-sm font-semibold">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;