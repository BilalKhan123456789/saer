import React, { useState } from "react";
// import booking from "../assests/booking.png";
// import download from "../assests/download.png";
// import help from "../assests/help.png";
// import haram from "../assests/Images/haram.png";
// import masjid from "../assests/Images/masjid.png";
// import world from "../assests/Images/world.png";
// import plus from "../assests/plus.png";
// import minus from "../assests/minus.png";

// import umrahvisa from "../assests/buttonIcons/umrahvisa.png";

// import madina from "../assests/buttonIcons/madina.png";
// import mecca from "../assests/buttonIcons/mecca.png";
// import dateoftravel from "../assests/buttonIcons/dateoftravel.png";
// import returndate from "../assests/buttonIcons/returndate.png";
// import passengers from "../assests/buttonIcons/passengers.png";




function Flight() {
   
  
  return (
    <>
    
    <div className=" md:w-4/5 w-3/4 bg-red-400  float-right  flex  mt-[-640px]  gap-1 ">
        
      

<div className="w-1/5   p-3 bg-yellow-500 ">
  <h1 className="text-xl font-semibold">price</h1>
  <h1 className="text-xl  my-2 text-gray-300">Rs 228,000</h1>

  <input type="range"/>
  <br />
  <hr  className=" bg-black"/>
  <br />
  <h1 className="text-xl font-semibold">Stops</h1>
<div className="space-x-2 text-gray-300 items-center my-2">
<input type="checkbox"/>
  <label htmlFor="" className="">1 stop</label>
</div>
  <br />
  <hr  className=" bg-black"/>
  <br />

  <h1 className="text-xl font-semibold">Flights</h1>

  <div className="space-x-2 text-gray-300 items-center my-2">
<input type="checkbox"/>
  <label htmlFor="" className="">Saudia arabia airlines</label>
</div>
<div className="space-x-2 text-gray-300 items-center ">
<input type="checkbox"/>
  <label htmlFor="" className="">Qatar airways</label>
</div>
  
  
  </div>


<div className="w-4/5  bg-green-600 ">  

<div className=" bg-pink-100  flex justify-between h-20">   
<h1 className="m-5" >Flights Found</h1>
<input type="text" placeholder="Search Flights "  className="rounded-tl-lg rounded-br-lg h-10 w-56 m-5 "/>



</div>

<div></div>

<div></div>


</div>


          
          

      </div>
    </>
    
  );
}


export default Flight