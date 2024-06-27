import React from 'react';

const Card = () => {
  return (
    <div data-aos="fade-up" className="w-full min-h-screen bg-black p-4 overflow-y-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Array(4).fill('').map((_, index) => (
          <div key={index} className="w-full h-[60vh] border-2 border-black rounded-3xl overflow-hidden">
            <div className="w-full h-2/4 bg-cover rounded-xl hover:scale-90 overflow-hidden transition-transform duration-300">
              <img
                className="w-full h-full object-cover"
                src="https://t3.ftcdn.net/jpg/03/24/72/86/360_F_324728617_VbBJliGlMNhgPH0lSyodqKo0ouKRZbav.jpg"
                alt="Toyota"
              />
            </div>
            <div className="flex flex-col items-center gap-5 justify-center w-full h-2/4 bg-orange-400">
              <h1>Toyota</h1>
              <p>1000000</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
