"use client"
import React from 'react'
import { BiSolidDownArrow } from "react-icons/bi";
import Image from 'next/image'
import { useState } from 'react';
function CallGenrate() {
  const [data, setData] = useState(3)

  const openGoogleMap = () => {
    // Replace the latitude and longitude with the desired location
    const latitude = 37.7749;
    const longitude = -122.4194;

    // Google Maps URL with the specified location
    const mapUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;

    // Navigate to the Google Maps URL in the same window
    window.location.href = mapUrl;
  };
  return <>
    <div className='flex justify-between relative  flex-wrap sm:gap-0 gap-4 px-14 mt-4 transition-all duration-1000 cursor-pointer    '>
    <div className="absolute inset-0">
      <Image
        src="/Logo.png" // Replace with the actual path to your image
        alt="Description of the image"
        width={650} // Replace with the actual width of your image
        height={650} // Replace with the actual height of your image
        className=" mx-auto my-auto opacity-10 object-cover "
      />
            </div>

      {/* section 1 */}
      <div className='overflow-y-auto relative'>
  

        <div>
          <h1 className='text-[25px] pr-4 mt-2 text-[#0D4D8D]'>New call</h1>
          <h1 className='text-[11px] text-[#9F9F9F] font-semibold mt-6 cursor-pointer' >LOCATION</h1>



          <div className='flex gap-2 flex-wrap mt-1 transition-all duration-1000'>

            <div className='bg-[#0000000D]      text-center items-center justify-center flex   border     rounded-md w-[213px] h-[43px]  '>
              <h1 className='font-bold text-[#9F9F9F] opacity-20' onClick={openGoogleMap}>SELECT LOCATION</h1>


            </div>
<div className='flex items-center relative justify-center shadow-md bg-[#BCBCBC] rounded-sm w-[213px] h-[43px] '>

            <select className=' appearance-none font-extrabold pl-12 text-[#9F9F9F] bg-[#d4d4d4] w-[213px]  h-[43px]'>

<option selected className='items-center  text-black  bg-white'>AREA</option>
<option  className=' text-black  bg-white'>LHR</option>
<option  className=' text-black bg-white'>FSD</option>
<option  className=' text-black bg-white'>MUL</option>
<option  className=' text-black bg-white'>SGD</option>

</select>
<BiSolidDownArrow className="absolute ml-28 text-[#9F9F9F]" />

</div>
          </div>
        </div>


        <input className='border w-[213px] md:w-[432px] font-semibold h-[25px]  text-[10px] transition-all duration-1000 mt-5 rounded-sm bg-[#0000000D]' placeholder='   ADDRESS' type="text" name="" id="" />

        <div className='flex gap-2 items-center mt-2'>
          <h1 className=' text-[#9F9F9F] font-semibold text-[10px]' >APT #</h1>
          <input className='border transition-all duration-300 ease-in-out sm:w-[132px] w-[175px] h-[25px] rounded-sm bg-[#0000000D]' type="text" name="" id="" />

        </div>

        <div className='flex gap-2 md:gap-8 flex-wrap mt-5'>
          <div className='flex flex-col gap-1 transition-all duration-1000'>
            <h1 className='text-[8px] text-[#9F9F9F] font-semibold '>SELECT CATEGORY</h1>

          

<div className='flex  items-center relative  text-[#9F9F9F] justify-center border mt-1  shadow-md  rounded-sm   sm:w-[106px] w-[213px] h-[25px] transition-all duration-1000  '>

            <select className=' appearance-none text-[#9F9F9F] font-bold h-[25px] bg-[#0000000D] pl-5 rounded-sm  sm:pl-4 items-center  sm:w-[106px] w-[213px]  text-[10px] 
              '>

<option selected className='items-center  text-black rounded-sm  '>CAR</option>
<option  className=' text-black bg-[#0000000D] '>AUDI</option>
<option  className=' text-black bg-[#0000000D] '>BMW</option>
<option  className=' text-black bg-[#0000000D] '>V8</option>

</select>
<BiSolidDownArrow className="absolute ml-36 sm:ml-16" />

</div>


          </div>

          <div className='flex flex-col gap-1 transition-all duration-1000'>
            <h1 className=' text-[#9F9F9F]  font-semibold text-[8px] transition-all duration-1000 '>SELECT CONDITION</h1>
            <div className='flex  items-center relative  text-[#9F9F9F] justify-center border mt-1  shadow-md  rounded-sm   sm:w-[106px] w-[213px] h-[25px] transition-all duration-1000  '>

<select className=' appearance-none text-[#9F9F9F] font-bold h-[25px] bg-[#0000000D] pl-5 rounded-sm  sm:pl-4 items-center  sm:w-[106px] w-[213px]  text-[10px] 
  '>

<option selected className='items-center  text-black rounded-sm  '>FLAT</option>
<option  className=' text-black bg-[#0000000D] '>FLAT</option>
<option  className=' text-black bg-[#0000000D] '>FLAT</option>
<option  className=' text-black bg-[#0000000D] '>FLAT</option>

</select>
<BiSolidDownArrow className="absolute ml-36 sm:ml-16" />

</div>
          </div>
        </div>

        <div className='flex gap-2 items-center mt-6 transition-all duration-1000'>
          <h1 className='text-[10px] font-semibold text-[#9F9F9F]' >HAS SPARE</h1>
          <input className='w-5 h-5 border-4 text-gray-700 ' type="checkbox" name="" id="" />


        </div>

        <div className='flex   transition-all duration-1000 mt-10'>


          <div className='flex flex-col justify-between'>
            <input
              type="checkbox"
              className="border border-gray-400 p-2 rounded-md"
              id="myCheckbox"
              name="myCheckbox"
            />
            <input className='border rounded-md bg-[#0000000D]' type="checkbox" name="" id="" />
          </div>


          <Image
            className='w-14'
            src="/3539107-wqe.png"
            width={100}
            height={100}
            alt="error"
          />
          <div className='flex flex-col justify-between'>
            <input className='border rounded-md bg-[#0000000D]' type="checkbox" name="" id="" />
            <input className='border rounded-md bg-[#0000000D]' type="checkbox" name="" id="" />
          </div>
        </div>



        <div className='flex flex-col mt-2 gap-4'>

            <h1 className='text-[12px] text-[#9F9F9F] pt-3'>CAR</h1>
           
         


<div className='flex items-center relative justify-center shadow-md bg-[#0000000D] rounded-sm w-[213px] h-[30px] '>

            <select className=' appearance-none font-bold pl-12 text-[12px] text-[#9F9F9F] bg-[#0000000D] w-[213px]  h-[30px]'>

<option selected className='items-center  text-black   bg-white'>MAKE</option>
<option  className=' text-black  bg-white'>MAKE 1</option>
<option  className=' text-black bg-white'>MAKE 2</option>
<option  className=' text-black bg-white'>MAKE 3</option>
<option  className=' text-black bg-white'>MAKE 4</option>

</select>
<BiSolidDownArrow className="absolute ml-28 text-[#9F9F9F]" />

</div>



<div className='flex items-center relative justify-center shadow-md bg-[#0000000D] rounded-sm w-[213px] h-[30px] '>

<select className=' appearance-none font-bold pl-12 text-[12px] text-[#9F9F9F] bg-[#0000000D] w-[213px]  h-[30px]'>

<option selected className='items-center  text-black   bg-white'>MODEL</option>
<option  className=' text-black  bg-white'>MODEL 1</option>
<option  className=' text-black bg-white'>MODEL 2</option>
<option  className=' text-black bg-white'>MODEL 3</option>
<option  className=' text-black bg-white'>MODEL 4</option>

</select>
<BiSolidDownArrow className="absolute ml-28 text-[#9F9F9F]" />

</div>

<div className='flex items-center relative justify-center shadow-md bg-[#0000000D] rounded-sm w-[213px] h-[30px] '>

<select className=' appearance-none font-bold pl-12 text-[12px] text-[#9F9F9F] bg-[#0000000D] w-[213px]  h-[30px]'>

<option selected className='items-center  text-black   bg-white'>YEAR</option>
<option  className=' text-black  bg-white'>YEAR 1</option>
<option  className=' text-black bg-white'>YEAR 2</option>
<option  className=' text-black bg-white'>YEAR 3 </option>
<option  className=' text-black bg-white'>YEAR 4</option>

</select>
<BiSolidDownArrow className="absolute ml-28 text-[#9F9F9F]" />

</div>
        </div>
      </div>
      {/* section 2 */}
      <div className='overflow-y-auto relative'>
        <h1 className='sm:text-end text-start font-semibold transition-all duration-1000 mt-6'>#1105589</h1>
        <div className='mt-8 text-center w-[213px]'>
          <h1 className='font-semibold text-[#9F9F9F] text-xs '>CALLBACK</h1>
          <div className='bg-[#0000000D]  flex  flex-col    justify-around px-4 border   shadow-md  rounded-md w-[213px] h-[46px]  '>

            <div className='flex text-[#9F9F9F] justify-around  items-center'>
              <h1 className='font-bold text-[#9F9F9F] text-3xl'>(  )</h1>
              <h1 className='font-bold text-[#9F9F9F] text-3xl'>-</h1>
              <h1 className='font-bold text-[#9F9F9F] text-3xl'>-</h1>
            </div>

          </div>
        </div>



        <div className='mt-12 w-[213px]'>
          <h1 className='font-semibold text-[#9F9F9F] text-center'>RESPONDERS</h1>
          <div className='bg-[#0000000D]  flex  flex-col    justify-around px-4 border mt-4   shadow-md  rounded-md w-[213px] h-[46px]  '>

            <div className='flex text-black justify-center gap-6  items-center'>
              <h1 onClick={() => setData(data - 1)} className='font-bold text-black text-2xl cursor-pointer'>-</h1>
              <h1 className='font-bold text-black text-2xl'>{data}</h1>
              <h1 onClick={() => setData(data + 1)} className='font-bold text-black text-2xl cursor-pointer'>+</h1>
            </div>

          </div>
        </div>
        <div className='flex justify-between mt-6 w-[212px] flex-wrap sm:w-[439px]'>


          <div>
            <div className='flex justify-between   sm:gap-4 gap-[10px]  items-center'>
              <u className='text-[17px] font-semibold text-[#9F9F9F]' >UNLIMITED</u>
              <input type="checkbox" className="form-checkbox text-indigo-600 bg-gray-200" />

            </div><div className='flex  justify-between  sm:gap-4 gap-[10px]  
             items-center'>
              <h1 className='text-[17px] font-semibold text-[#9F9F9F]' >EMERGENCY</h1>
              <input className='border rounded-md bg-[#0000000D]' type="checkbox" name="" id="" />

            </div>
          </div>
          <div>
            <div className='flex  justify-between gap-4 items-center'>
              <u className='text-[17px] text-[#9F9F9F] font-semibold' >PRIORITY</u>
              <input className='border rounded-md bg-[#0000000D]' type="checkbox" name="" id="" />

            </div><div className='flex  justify-between gap-4 items-center'>
              <h1 className='text-[17px] text-[#9F9F9F] font-semibold' >DONT PUSH</h1>
              <input className='border rounded-md bg-[#0000000D]' type="checkbox" name="" id="" />

            </div>
          </div>
        </div>




        <div className='mt-8 relative'>
          <h1 className='font-semibold text-[#9F9F9F] '>DISPATCHER NOTES</h1>
          <textarea  className=' resize-none bg-[#0000000D]  flex  flex-col mt-6 transition-all duration-1000 ease-in-out relative  justify-around px-4 border   shadow-sm  rounded-sm w-[212px]  sm:w-[539px] h-[112px]  '>



          </textarea>
        </div>
        <div className='flex mt-6 gap-3 sm:gap-7 mb-14'>
          <button type="button" className="focus:outline-none text-white bg-[#C64242]  font-medium rounded-lg text-[10px] sm:text-sm px-6 sm:px-16 py-2.5 me-2 mb-2 transition-all duration-1000">Cancel</button>
          <button type="button" className="focus:outline-none text-white bg-[#42C661]  font-medium rounded-lg text-[10px] sm:text-sm px-6 sm:px-16 py-2.5 me-2 mb-2 transition-all duration-1000">post call</button>

        </div>




      </div>
    </div>
  </>
}

export default CallGenrate