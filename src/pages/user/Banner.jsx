import React, { useState } from 'react'
import Background from './Background'
import Icon from './iconbanner'

const Banner = () => {
  let herodata =[
    {text1:"Dive into", text2:"What you love" },
    {text1:"indulge", text2:"you passions"},
    {text1:"Give in to", text2:"you passions"},
    {text1:"Give in to", text2:"you passions"},
    {text1:"Give in to", text2:"you passions"},
  ]
  const [hero,setHero]=useState(3)
  const [playStatus,setPlayStatus]=useState(false);
  return (
    <div className='w-full h-screen flex items-end'>
      <div className='w-full h-full'>
        <Background playStatus={playStatus} hero={hero} />
      </div>
      <div className="w-full h-[90vh]  absolute flex items-center pl-9">
        <Icon
          setPlayStatus={setPlayStatus}
          herodata={herodata[hero]}
          hero={hero}
          setHero={setHero}
          playStatus={playStatus}
          />
          </div>
    </div>
  )
}

export default Banner