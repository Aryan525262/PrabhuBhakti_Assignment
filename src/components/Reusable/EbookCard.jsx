import Image from "next/image";
import { ShoppingCart } from "lucide-react";

const EbookCard = ({ title, author, price, thumbnail }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition overflow-hidden border">
      
      {/* Image */}
      <div className="relative w-full h-56">
        <Image
          src={thumbnail}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-md font-semibold text-gray-800">
          {title}
        </h3>

        <p className="text-sm text-gray-500 mt-1">
          {author}
        </p>

        {/* Price + Icon */}
        <div className="flex items-center justify-between mt-4">
          <span className="text-orange-500 font-bold">
            ₹{price}
          </span>

          <button className="p-2 rounded-full bg-orange-100 hover:bg-orange-200">
            <ShoppingCart size={16} className="text-orange-500" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default EbookCard;