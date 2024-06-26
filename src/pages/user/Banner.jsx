import React, { useEffect, useState } from 'react'
import Background from './Background'
import Icon from './iconbanner'

const Banner = () => {
  const herodata = [
    { text1: "Dive into", text2: "What you love" },
    { text1: "Indulge", text2: "your passions" },
    { text1: "Give in to", text2: "your passions" },
    { text1: "Give in to", text2: "your passions" },
    { text1: "Give in to", text2: "your passions" },
  ]

  const [hero, setHero] = useState(0)
  const [playStatus, setPlayStatus] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setHero((prevCount) => (prevCount === 4 ? 0 : prevCount + 1))
    }, 3000)
    return () => clearInterval(intervalId)
  }, [])

  return (
    <div className='relative w-full h-screen flex items-center justify-center bg-black z-10 ' data-aos="fade-down">
      <Background playStatus={playStatus} hero={hero} />
      <div className="absolute inset-0 flex items-center">
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