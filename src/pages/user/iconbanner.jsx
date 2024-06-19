import React from 'react';
import { HiArrowRight,HiPlay,HiPause } from "react-icons/hi";
import { GoDot } from "react-icons/go";

const Icon = ({ playStatus, hero, herodata, setHero, setPlayStatus }) => {
  return (
    <div className='w-full h-[40%] bg-orange-700'>
      <div className='text-white text-6xl font-medium'>
        <p>{herodata.text1}</p>
        <p>{herodata.text2}</p>
      </div>
      <div className='flex items-center gap-4 '>
        <p>Explore the features</p>
        <HiArrowRight />
      </div>

      <div>
      <ul className="flex space-x-2">
        <li onClick={() => setHero(0)} > 
          {hero === 0 ? <GoDot className="text-green-500" /> : <GoDot className="text-red-400" />}
        </li>
        <li onClick={() => setHero(1)} >
          {hero === 1 ? <GoDot className="text-green-500" /> : <GoDot className="text-red-400" />}
        </li>
        <li onClick={() => setHero(2)} >
          {hero === 2 ? <GoDot className="text-green-500" /> : <GoDot className="text-red-400" />}
        </li>
        <li onClick={() => setHero(3)} >
          {hero === 3 ? <GoDot className="text-green-500" /> : <GoDot className="text-red-400" />}
        </li>
        <li onClick={() => setHero(4)} >
          {hero === 4 ? <GoDot className="text-green-500" /> : <GoDot className="text-red-400" />}
        </li>
      </ul>
    </div>

      <div>
        <div onClick={() => setPlayStatus(!playStatus)} >
          {playStatus ? <HiPause className="text-4xl" /> : <HiPlay className="text-4xl" />}
        </div>
        <p>video</p>
      </div>
    </div>
  );
}

export default Icon;
