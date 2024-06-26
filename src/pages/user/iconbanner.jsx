import React from 'react';
import { HiArrowRight, HiPlay, HiPause } from "react-icons/hi";
import { GoDot } from "react-icons/go";

const Icon = ({ playStatus, hero, herodata, setHero, setPlayStatus }) => {
  return (
    <div className='w-full h-full flex flex-col justify-between p-16 md:p-20'>
      <div className='text-white text-3xl md:text-5xl lg:text-6xl font-medium'>
        <p>{herodata.text1}</p>
        <p>{herodata.text2}</p>
      </div>
      <div className='flex flex-col md:flex-row items-center justify-between mt-4'>
        <ul className="flex justify-center md:justify-start space-x-2 md:space-x-4 mb-4 md:mb-0">
          {[0, 1, 2, 3, 4].map((index) => (
            <li key={index} onClick={() => setHero(index)}>
              <GoDot className={`w-6 h-6 md:w-8 md:h-8 ${hero === index ? "text-green-500" : "text-red-400"}`} />
            </li>
          ))}
        </ul>
        <div className='flex items-center'>
          <div onClick={() => setPlayStatus(!playStatus)} className='mr-2'>
            {playStatus ? <HiPause className="text-4xl md:text-5xl text-white" /> : <HiPlay className="text-4xl md:text-5xl text-white" />}
          </div>
          <p className='text-white text-sm md:text-base'>See The Video</p>
        </div>
      </div>
    </div>
  );
}

export default Icon;