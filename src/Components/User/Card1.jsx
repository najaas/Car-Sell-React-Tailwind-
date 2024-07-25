import React from 'react'

const Card1 = () => {
  return (
    <div className="bg-black text-white p-6 md:p-8 lg:p-10">
      <div className="mb-6 md:mb-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">WANT TO SELL YOUR CAR?</h1>
        <h2 className="text-xl md:text-2xl lg:text-3xl">
          SELL US YOUR CAR IN 10 <br /> MINUTES.
        </h2>
      </div>
      
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between">
        <ul className="list-disc pl-6 mb-6 md:mb-0 md:w-1/2 lg:w-2/5">
          <li className="mb-2 text-xl">Best Price</li>
          <li className="mb-2 text-xl">Instant Payment</li>
          <li className='text-xl'>Free RC transfer</li>
        </ul>
        
        <div className="md:w-1/2 lg:w-3/5" data-aos="flip-left">
          <img 
            className="w-full h-auto object-cover rounded"
            src="https://www.thestatesman.com/wp-content/uploads/2022/03/iStock-588605048-1.jpg" 
            alt="Luxury cars"
          />
        </div>
      </div>
      
      <button className="mt-6 bg-gray-700 text-white px-6 py-2 rounded hover:bg-gray-600 transition-colors">
        KNOW MORE
      </button>
    </div>
  )
}

export default Card1