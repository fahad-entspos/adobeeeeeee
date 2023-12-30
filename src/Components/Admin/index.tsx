"use client"
import Image from 'next/image'
import { BiSolidDownArrow } from "react-icons/bi";
import { Chart } from "tw-elements";
import { initTE } from "tw-elements";
import CountUp from 'react-countup';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
initTE({ Chart });
import React, { useEffect, useState } from 'react'


function Admin() {
  useEffect(() => {
    const initializeChart = async () => {
      const { Chart } = await import('tw-elements');

      const dataPolar = {
        type: 'polarArea',
        data: {
          datasets: [
            {
              data: [2112, 2343, 2545, 3423, 2365, 1985, 987],
              backgroundColor: [
                'rgba(63, 81, 181, 0.5)',
                'rgba(77, 182, 172, 0.5)',
                'rgba(66, 133, 244, 0.5)',
                'rgba(156, 39, 176, 0.5)',
                'rgba(233, 30, 99, 0.5)',
                'rgba(66, 73, 244, 0.4)',
                'rgba(66, 133, 244, 0.2)',
              ],
            },
          ],
        },
      };

      const chartElement = document.getElementById('polar-area-chart') as HTMLCanvasElement;

      if (chartElement) {
        new Chart(chartElement, dataPolar);
      }
    };

    initializeChart();
  }, []);
  useEffect(() => {
    const initializeChart = async () => {
      const { Chart } = await import('tw-elements');

      const dataBarCustomTooltip = {
        type: "bar",
        data: {
          labels: ["Interstate", "Williamburg", "BP", "Monroe", "Rockland", "Florida", "Lakewood"],
          datasets: [
            {
              label: "Calls",
              data: [80, 65, 48, 35, 27, 19, 10],
            },
          ],
        },
      };

      const optionsBarCustomTooltip = {
        options: {
          plugins: {
            tooltip: {
              callbacks: {
                label: function (context: { dataset: { label: string; }; formattedValue: any; }) {
                  let label = context.dataset.label || "";
                  label = `${label}: ${context.formattedValue} users`;
                  return label;
                },
              },
            },
          },
        },
      };

      const chartElement = document.getElementById("bar-chart-custom-tooltip") as HTMLCanvasElement;

      if (chartElement) {
        new Chart(chartElement, dataBarCustomTooltip, optionsBarCustomTooltip);
      }
    };

    initializeChart();
  }, []);

  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const handleStartDateChange = (date: Date | null) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date: Date | null) => {
    setEndDate(date);}



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

      <div className="w-full h-full  relative transition-all duration-1000 ease-in-out pb-6">
        <div className="absolute inset-0">

          <Image
            src="/Logo.png" // Replace with the actual path to your image
            alt="Description of the image"
            width={700} // Replace with the actual width of your image
            height={700} // Replace with the actual height of your image
            className=" mt-16 transition-all  duration-1000 ease-in-out  lg:mt-0 mx-auto my-auto opacity-10 object-cover"
          />
        </div>
        <div className='flex justify-center re gap-10 flex-wrap mt-6 flex-row relative'>


          <div className=' bg-white transition-all duration-1000 ease-in-out flex  flex-col justify-center  items-center  border shadow-md  rounded-xl w-[250px] h-[100px]  '>
            <h1><CountUp start={0} end={26} duration={25.5}
              separator="," /></h1>
            <u>Active Members</u>
          </div>


          <div className='bg-white transition-all duration-1000 ease-in-out shadow-lg flex flex-col items-center border justify-center rounded-xl w-[250px] h-[100px]'>
            <h1><CountUp start={0} end={18} duration={25.5}
              separator="," /></h1>
            <u> Active Dispatchers</u>
          </div>



          <div className=' bg-white transition-all duration-1000 ease-in-out shadow-lg flex flex-col items-center border justify-center rounded-xl w-[250px] h-[100px]'>
            <h1><CountUp start={0} end={12} duration={25.5}
              separator="," /></h1>
            <u>Active  Locations</u>
          </div>


          <div className='bg-white transition-all duration-1000 ease-in-out shadow-lg flex flex-col items-center border justify-center rounded-xl w-[250px] h-[100px] '>
            <h1><CountUp start={0} end={2} duration={25.5}
              separator="," /></h1>
            <u> Pending Members</u>
          </div>
        </div>
        <div className='flex  justify-center gap-12 mt-6 flex-wrap relative'>
          <div>
            <div className='bg-white  flex  flex-col  transition-all duration-1000 ease-in-out  cursor-pointer justify-around px-4 border   shadow-md  rounded-xl w-[220px] h-[80px]  '>
              <div className='flex justify-between items-center'>

                <h1 className='font-bold text-[#5B5964]'>Date Range</h1>
                <BiSolidDownArrow />
              </div>
              <div className='flex items-center justify-between '>

                <h1 className='font-semibold text-[#276DA4] '>  <DatePicker
                className="w-[92px]"
                  selected={startDate}
                  onChange={handleStartDateChange}
                  selectsStart
                  startDate={startDate}
                  endDate={endDate}
                  placeholderText="Start Date"
                /></h1>
                <h1 className='font-semibold text-[#276DA4]'>-</h1>
                <h1 className='font-semibold text-[#276DA4] '> <DatePicker
                  className="w-24 ml-[5px]"
                  selected={endDate}
                  onChange={handleEndDateChange}
                  selectsEnd
                  startDate={startDate}
                  endDate={endDate}
                  minDate={startDate}
                  placeholderText="End Date"
                /></h1>
              </div>
            </div>
          </div>
          <div className='bg-white  flex   flex-row justify-around  items-center transition-all duration-1000 ease-in-out text-center border shadow-md  rounded-xl h-[80px]  w-[220px]  md:w-[450px]  md:h-[80px] overflow-hidden '>
            <div >
              <h1 className='font-bold text-[#5B5964] text-base'>Todays Calls</h1>
              <h1 className='font-semibold text-[#276DA4] text-2xl'><CountUp start={0} end={175} duration={25.5}
                separator="," /></h1>
            </div>
            <div className='w-1 h-[80px] bg-[#5B5964]'>

            </div>
            <div >
              <h1 className='font-bold text-[#5B5964] text-base'>Call History</h1>
              <h1 className='font-semibold text-[#276DA4] text-2xl'><CountUp start={0} end={58654} duration={25.5}
                separator="," /></h1>
            </div>
          </div>
          <div>
            <div className='bg-white  flex  flex-col    justify-around px-4 border transition-all duration-1000 ease-in-out  shadow-md  rounded-xl w-[220px] h-[80px]  '>
              <div className='flex justify-between items-center'>

                <h1 className='font-bold text-[#5B5964]'>Location</h1>
                <BiSolidDownArrow />
              </div>

              <h1 className='font-semibold text-[#276DA4] cursor-pointer ' onClick={openGoogleMap}>MAP</h1>

            </div>
          </div>
        </div>
        <div className="flex justify-around items-center flex-wrap mt-1">

          <div className="mx-auto w-[300px]  md:w-2/5 overflow-hidden ">
            <h1 className="font-bold text-xl">Calls By Location:</h1>
            <canvas className="mt-" id="bar-chart-custom-tooltip"></canvas>
          </div>
          <div className="mx-auto  w-[200px] md:w-[25%] overflow-hidden ">
            <h1 className="font-bold text-xl mt-16">Calls By Call Type:</h1>

             <canvas className="mt-6" id="polar-area-chart"></canvas>;
          </div>



        </div>
      </div>

    </>
  }

  export default Admin
