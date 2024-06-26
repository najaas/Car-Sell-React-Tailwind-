import React from 'react';
import { HiArrowRight, HiPlay, HiPause } from "react-icons/hi";
import { GoDot } from "react-icons/go";

const Icon = ({ playStatus, hero, herodata, setHero, setPlayStatus }) => {
  return (
    <div className='w-full h-full flex flex-col justify-between p-14 md:p-20'>
      <div className='text-white text-3xl md:text-5xl lg:text-6xl font-medium'>
        <p>{herodata.text1}</p>
        <p>{herodata.text2}</p>
      </div>
      {/* <div className='flex items-center gap-3 bg-white w-full max-w-xs md:max-w-sm h-14 rounded-3xl justify-evenly mt-4'>
        <p className='text-base md:text-xl'>Explore the features</p>
        <div className='w-10 h-10 md:w-[53px] md:h-[53px] bg-red-400 rounded-full flex items-center justify-center'>
          <HiArrowRight className='w-5 h-5 md:w-[30px] md:h-[40px]' />
        </div>
      </div> */}
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