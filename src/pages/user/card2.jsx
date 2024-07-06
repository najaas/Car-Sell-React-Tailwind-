import React from 'react'
import Stars from '../../components/Stars' 

const Card2 = () => {
  return (
    <div className='w-full h-screen bg-blue-300 flex justify-center items-center'>
        <div className='w-[61vw] h-[70vh]  flex justify-evenly'>
        <div className='w-[30vw] h-full bg-red-800 rounded-xl '>
          <img className='w-full h-full object-cover rounded-xl' src="https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/images/car-reviews/first-drives/legacy/rolls_royce_phantom_top_10.jpg?itok=XjL9f1tx" alt="" />
        </div>
        <div className='w-[30vw] h-full bg-red-200 rounded-xl'> 
          <h1>Rolls Royce</h1>
          <Stars />
        </div>
        </div>
    </div>
  )
}

export default Card2