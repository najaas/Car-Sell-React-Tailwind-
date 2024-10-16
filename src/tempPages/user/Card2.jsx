import React from 'react';
import Stars from '../../Components/User/Stars';

const Card2 = () => {
  return (
    <div className="w-full h-screen bg-blue-300 flex justify-center items-center">
      <div className="w-[90vw] md:w-[61vw] h-[80vh] flex flex-col md:flex-row justify-evenly items-center gap-1">
        <div className="w-full md:w-[30vw] h-1/2 md:h-full bg-red-800 rounded-xl overflow-hidden">
          <img
            className="w-full h-full object-cover rounded-xl"
            src="https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/images/car-reviews/first-drives/legacy/rolls_royce_phantom_top_10.jpg?itok=XjL9f1tx"
            alt="Rolls Royce"
          />
        </div>
        <div className="w-full md:w-[30vw] h-1/2 md:h-full bg-red-200 rounded-xl flex flex-col justify-center items-center p-4">
          <h1 className="text-3xl font-bold mb-4">Rolls Royce</h1>
          <h1> </h1>
          <Stars/>
        </div>
      </div>
    </div>
  );
};

export default Card2;
