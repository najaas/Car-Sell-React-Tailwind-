import React from 'react';

const Card = () => {
  return (
    <div data-aos="fade-up" className="w-full min-h-screen bg-black p-4 overflow-y-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Array(4).fill('').map((_, index) => (
          <div key={index} className="relative w-full h-[60vh] border-2 border-black rounded-3xl overflow-hidden">
            <div className="w-full h-2/4 bg-cover rounded-xl hover:scale-90 overflow-hidden transition-transform duration-300 hover:-z-50">
              <img
                className="w-full h-full object-cover"
                src="https://t3.ftcdn.net/jpg/03/24/72/86/360_F_324728617_VbBJliGlMNhgPH0lSyodqKo0ouKRZbav.jpg"
                alt="Toyota"
              />
            </div>
            <div className="absolute top-20 -z-10 rounded-xl flex flex-col items-center gap-5 justify-center w-full h-2/4 backdrop-blur-sm bg-black shadow-inner shadow-white bg-opacity-50">
              <h1 className=' absolute top-32 md:top-48 z-50 text-4xl text-white font-bold font-mono'>Toyota </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
