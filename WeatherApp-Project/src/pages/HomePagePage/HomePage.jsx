import { IoIosSend } from "react-icons/io";
import { FaWind } from "react-icons/fa";
import { FaSun } from "react-icons/fa6";
import { FaCalendar } from "react-icons/fa6";
import { SearchBar } from "../../components/SearchBar";
export function HomePage() {
  return (
    <div className="flex flex-col gap-5 mx-auto bg-linear-to-r from-blue-900 to-black w-full lg:flex-row">

      <div className ="basis-2/3 select-none">
        <div className="flex flex-col justify-evenly mt-16 bg-gray-900 gap-3 mx-5 rounded-xl border border-green-500 items-center p-6 gap-5">
          <SearchBar/>
          <div className="  bg-blue-500/40 w-3/6 rounded-full">
            <div className="rounded-full font-bold relative flex items-center gap-3 bg-blue-00 p-2 select-none">
              <IoIosSend className="size-5 text-blue-400" />
              <p className="text-blue-400">Current Location</p>
            </div>

          </div>
          <div>
            <p className="text-4xl font-bold text-white">San Francisco</p>
            <p className="text-2xl text-gray-400 font-bold">California, USA</p>
          </div>
          <div className="text-9xl font-bold text-white">28<sup>°</sup></div>
          <div className="flex items-center gap-5">
            <FaSun className="size-15 text-orange-400" />
            <p className="text-3xl font-bold text-blue-400">Clear Sky</p>

          </div>

        </div>
        <div className="flex flex-col gap-4 mt-5">
          <div className="flex gap-3 items-center rounded-full bg-blue-600/60 p-4 mx-5 border border-blue-600 shadow-xl select-none hover:bg-blue-400/20 group transition-all cursor-pointer">
            <div className="flex items-center justify-center p-3 rounded-full group-hover:bg-black/30 bg-transparent transition-all">
              <FaWind className=" group-hover:text-blue-400 size-6 text-white" />
            </div>

            <div className="flex flex-col">
              <p className="text-gray-400 font-bold">Wind</p>
              <p className="text-2xl font-bold text-white ">12km/h</p>
            </div>
          </div>
          <div className="flex gap-3 items-center rounded-full bg-blue-600/60 p-4 mx-5 border border-blue-600 shadow-xl select-none hover:bg-blue-400/20 group transition-all cursor-pointer">
            <div className="flex items-center justify-center p-3 rounded-full group-hover:bg-black/30 bg-transparent transition-all">
              <FaWind className=" group-hover:text-blue-400 size-6 text-white" />
            </div>

            <div className="flex flex-col">
              <p className="text-gray-400 font-bold">Humidity</p>
              <p className="text-2xl font-bold text-white ">42%</p>
            </div>
          </div>
          <div className="flex gap-3 items-center rounded-full bg-blue-600/60 p-4 mx-5 border border-blue-600 shadow-xl select-none hover:bg-blue-400/20 group transition-all cursor-pointer">
            <div className="flex items-center justify-center p-3 rounded-full group-hover:bg-black/30 bg-transparent transition-all">
              <FaWind className=" group-hover:text-blue-400 size-6 text-white" />
            </div>

            <div className="flex flex-col">
              <p className="text-gray-400 font-bold">UV Index</p>
              <p className="text-2xl font-bold text-white ">Moderate</p>
            </div>
          </div>
        </div>
      </div>
      <div className="lg: mt-15 flex-1 flex flex-col mx-5 bg-linear-to-r from-blue-900 p-4 rounded-xl border border-slate-700">
        <div className="flex justify-between text-white items-center w-full">
          <p className="text-xl font-bold">7-Day Forecast</p>
          <FaCalendar className="size-5 text-blue-600 cursor-pointer transition-all hover:text-white" />
        </div>
        <div className="flex gap-3 items-center rounded-full 
        bg-blue-600/70
         px-5 
        py-3 border shadow-xl select-none
        transition-all cursor-pointer mt-10
        group hover:border-blue-500
        ">
          <div className="flex items-center justify-center p-3 rounded-full 
          bg-blue-950 group-hover:scale-107  border
           transition-all">
            <FaWind className=" group-hover:text-blue-400 size-6 text-white" />
          </div>
          <div className="flex items-center justify-between w-full">
            <div className="flex flex-col">
              <p className="text-white font-bold text-lg">Tomorrow</p>
              <p className="text-sm font-bold text-gray-500 ">Sunny</p>
            </div>
            <div className="flex gap-5 items-center" >
              <p className="text-2xl font-bold text-white">29<sup>°</sup></p>
              <p className="text-slate-400 font-bold">18<sup>°</sup></p>
            </div>
          </div>


        </div>


      </div>
    </div>
  )
} 