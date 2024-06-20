import React from 'react';
import { HiArrowRight,HiPlay,HiPause } from "react-icons/hi";
import { GoDot } from "react-icons/go";

const Icon = ({ playStatus, hero, herodata, setHero, setPlayStatus }) => {
  return (
    <div className='w-full h-[80%] flex flex-col justify-between  '>
      <div className='text-white text-6xl font-medium '>
        <p>{herodata.text1}</p>
        <p>{herodata.text2}</p>
      </div>
      <div className='flex items-center gap-3 bg-white w-[34vh] h-14 rounded-3xl justify-evenly '>
        
        <p className='text-xl'>Explore the features</p>

        <div className='w-[53px] h-[53px] bg-red-400 rounded-full flex items-center justify-center'>

        <HiArrowRight className='w-[30px] h-[40px]' />
        </div>
      </div>
      <div className=' flex flex-row items-center'>
      <ul className=" w-[120vw] flex justify-end">
        <li onClick={() => setHero(0)} > 
          {hero === 0 ? <GoDot className="text-green-500 w-10 h-28" /> : <GoDot className="text-red-400 w-10 h-28" />}
        </li>
        <li onClick={() => setHero(1)} >
          {hero === 1 ? <GoDot className="text-green-500 w-10 h-28" /> : <GoDot className="text-red-400 w-10 h-28" />}
        </li>
        <li onClick={() => setHero(2)} >
          {hero === 2 ? <GoDot className="text-green-500 w-10 h-28" /> : <GoDot className="text-red-400 w-10 h-28" />}
        </li>
        <li onClick={() => setHero(3)} >
          {hero === 3 ? <GoDot className="text-green-500 w-10 h-28" /> : <GoDot className="text-red-400 w-10 h-28" />}
        </li>
        <li onClick={() => setHero(4)} >
          {hero === 4 ? <GoDot className="text-green-500 w-10 h-28" /> : <GoDot className="text-red-400 w-10 h-28" />}
        </li>
      </ul>

      <div className='w-full  flex justify-end'>
        <div onClick={() => setPlayStatus(!playStatus)} className='w-16 flex justify-evenly' >
          {playStatus ? <HiPause className="text-6xl " /> : <HiPlay className="text-6xl text-white "  />}
        </div>
        <p className='w-36 flex items-center text-white'>See The Video</p>
      </div>
    </div>
    </div>
  );
}

export default Icon;
