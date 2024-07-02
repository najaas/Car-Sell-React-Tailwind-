import React, { useState } from 'react';

const Star = ({ filled }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill={filled ? 'url(#gradient)' : 'none'}
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style={{ stopColor: '#FFD700', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#FFA500', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <path
      d="M12 .587l3.668 7.568 8.332 1.151-6 5.825 1.416 8.273L12 18.896l-7.416 4.508L6 15.131l-6-5.825 8.332-1.151z"
      stroke={filled ? 'none' : 'black'}
      strokeWidth="1"
      fillRule="evenodd"
    />
  </svg>
);

const RatingStars = () => {
  const [rating, setRating] = useState(0);

  const handleRating = (value) => {
    setRating(value);
  };

  return (
    <div className="flex items-center justify-center">
      <div className="rating-stars w-[50vmin] p-[1.75vmin] pl-[3vmin] pr-[10vmin] bg-gradient-to-r from-white/60 to-transparent rounded-[5vmin] relative">
        {[...Array(6)].map((_, index) => (
          <React.Fragment key={index}>
            <input
              type="radio"
              name="rating"
              id={`rs${index}`}
              className="hidden"
              checked={rating === index}
              onChange={() => handleRating(index)}
            />
            {index > 0 && (
              <label
                htmlFor={`rs${index}`}
                className="cursor-pointer m-[0.5vmin] ml-[0.65vmin] transition-all ease-linear"
              >
                <Star filled={rating >= index} />
              </label>
            )}
          </React.Fragment>
        ))}
        <span className="rating-counter text-[5.5vmin] font-serif text-[#9aacc6] w-[10vmin] text-center bg-black/60 absolute top-0 right-0 h-full rounded-r-[5vmin] flex items-center justify-center transition-all ease-linear">
          {rating}
        </span>
      </div>
    </div>
  );
};

export default RatingStars;
