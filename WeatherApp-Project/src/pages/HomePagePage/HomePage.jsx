

import { FaWind } from "react-icons/fa";
import { ForeCastToday } from "./ForeCastToday";
import { CurrentWeatherLocation } from "./CurrentWeatherLocation";
import { Maps } from "./Maps";
export function HomePage({ weatherData }) {

  return (
    <div className="flex flex-col gap-5 mx-auto bg-linear-to-r from-blue-900 to-black w-full lg:flex-row mt-10">


      <div className="basis-2/3 select-none">
        <CurrentWeatherLocation weatherData={weatherData} />
        <div className="flex flex-col w-full md:flex-row">
          <div className="flex flex-col gap-4 mt-5 basis-2/3 ">
            <div className="flex gap-3 items-center rounded-full bg-blue-600/60 p-4 mx-5 border border-blue-600 shadow-xl select-none hover:bg-blue-400/20 group transition-all cursor-pointer">
              <div className="flex items-center justify-center p-3 rounded-full group-hover:bg-black/30 bg-transparent transition-all">
                <FaWind className=" group-hover:text-blue-400 size-6 text-white" />
              </div>

              <div className="flex flex-col">
                <p className="text-gray-400 font-bold">Wind</p>
                <p className="text-2xl font-bold text-white ">{weatherData.current.wind_kph} km/h</p>
              </div>
            </div>
            <div className="flex gap-3 items-center rounded-full bg-blue-600/60 p-4 mx-5 border border-blue-600 shadow-xl select-none hover:bg-blue-400/20 group transition-all cursor-pointer">
              <div className="flex items-center justify-center p-3 rounded-full group-hover:bg-black/30 bg-transparent transition-all">
                <FaWind className=" group-hover:text-blue-400 size-6 text-white" />
              </div>

              <div className="flex flex-col">
                <p className="text-gray-400 font-bold">Humidity</p>
                <p className="text-2xl font-bold text-white ">{weatherData.current.humidity}%</p>
              </div>
            </div>
            <div className="flex gap-3 items-center rounded-full bg-blue-600/60 p-4 mx-5 border border-blue-600 shadow-xl select-none hover:bg-blue-400/20 group transition-all cursor-pointer">
              <div className="flex items-center justify-center p-3 rounded-full group-hover:bg-black/30 bg-transparent transition-all">
                <FaWind className=" group-hover:text-blue-400 size-6 text-white" />
              </div>

              <div className="flex flex-col">
                <p className="text-gray-400 font-bold">UV Index</p>
                <p className="text-2xl font-bold text-white ">{weatherData.current.uv}</p>
              </div>
            </div>
          </div>

          <div className="mx-5 max-w-2xl">
            <ForeCastToday weatherData={weatherData} />
          </div>

        </div>
      </div>
      <div className = "w-full">
        <Maps />
      </div>


    </div>
  )
} 