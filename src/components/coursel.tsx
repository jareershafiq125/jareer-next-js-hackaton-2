import React from 'react'

function coursel() {
  return (
   <>
       <div className="flex items-center justify-center h-screen px-4 flex-col md:flex-row">
         <div className="text-center md:text-left flex-grow mb-6 md:mb-0">
           <p className="text-4xl md:text-8xl font-bold leading-tight mt-9">
             FIND CLOTHES
           </p>
           <p className="text-4xl md:text-8xl font-bold leading-tight">
             THAT MATCHES
           </p>
           <p className="text-4xl md:text-8xl font-bold leading-tight text-left">
             YOUR STYLE
           </p>
           <p className="text-xl md:text-2xl text-gray-400 mb-6">
             Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
           </p>
           <button className="bg-black text-white font-bold text-xl md:text-3xl py-4 px-10 rounded-full mb-4">
             Shop Now</button>
             <div className="bg-black mt-7">
      <div className="max-w-7xl mx-auto flex justify-around items-center py-4 text-white">
        {/* Brand Names */}
        <span className="text-xl font-bold tracking-wide text-center mt-7">VERSACE</span>
        <span className="text-xl font-bold tracking-wide mt-7">ZARA</span>
        <span className="text-xl font-bold tracking-wide mt-7">GUCCI</span>
        <span className="text-xl font-bold tracking-wide mt-7">PRADA</span>
        <span className="text-xl font-bold tracking-wide mt-7">Calvin Klein</span>
      </div>
      {/* Colored Lines */}
      <div className="h-1 bg-red-500 w-full"></div>
      <div className="h-1 bg-blue-500 w-full"></div>
    </div>
         </div>
         
   
         <div className="w-full md:w-auto">
           <img
             src="/Rectangle 2.png"
             alt="Image"
             className="w-full h-auto object-cover"
           />
         </div>
       </div>
    
   
  </>
  )
}

export default coursel