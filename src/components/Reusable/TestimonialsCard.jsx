import { MessageSquareQuote, Star } from "lucide-react";

const TestimonialCard = ({ name, feedback, rating }) => {
  // Get first letter for avatar
  const initial = name?.charAt(0).toUpperCase();

  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-6 border max-w-md">
      
      {/* Rating */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1 text-yellow-400">
            {[...Array(rating)].map((_, i) => (
            <Star key={i} size={18} fill="currentColor" />
            ))}
        </div>
        <MessageSquareQuote size={24} className="text-gray-300 mt-2" />
      </div>

      {/* Feedback */}
      <p className="text-gray-600 italic mt-4 leading-relaxed">
        "{feedback}"
      </p>

      {/* Divider */}
      <hr className="my-6" />

      {/*User Info */}
      <div className="flex items-center gap-4">
        
        {/* Avatar */}
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-orange-400 text-white font-bold text-lg">
          {initial}
        </div>

        {/* Name */}
        <h3 className="text-gray-800 font-semibold text-lg">
          {name}
        </h3>
      </div>

    </div>
  );
};

export default TestimonialCard;