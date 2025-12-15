import { SearchBar } from "../../components/SearchBar";
import { IoIosSend, IoMdMoon, IoMdSunny } from "react-icons/io";
import { FaWind } from "react-icons/fa";
import { ForeCastToday } from "./ForeCastToday";
export function CurrentWeatherLocation({ weatherData }) {
  const maxtemp_c = weatherData.forecast.forecastday[0].day.maxtemp_c;
  const mintemp_c = weatherData.forecast.forecastday[0].day.mintemp_c;
  return (
    <>
      <div className="flex justify-evenly mt-16 bg-gray-900 mx-5
        rounded-xl border border-blue-500 items-center p-6
        gap-5
        md:flex-row
        md:p-10
        ">
        <div className="w-full flex  flex-col gap-5 ml-7 basis-1/2">
          <SearchBar />
          <div className="  bg-blue-500/40 w-full rounded-full flex justify-center">
            <div className="rounded-full font-bold relative flex items-center gap-3 bg-blue-00 p-2 select-none">
              <IoIosSend className="size-7 text-blue-400" />
              <p className="text-blue-400 text-xs w-full">Current Location</p>
            </div>

          </div>
          <div>
            <p className="text-4xl font-bold text-white md:text-7xl ">{weatherData.location.name}</p>
            <p className="text-2xl text-gray-400 font-bold md:text-4xl">{weatherData.location.country}</p>
          </div>
          <div className="text-6xl md:text-9xl font-bold text-white">{weatherData.current.temp_c}<sup>°</sup></div>
          <div className="flex items-center gap-3 animate-pulse">
            <img src={weatherData.current.condition.icon} alt="" />
            <p className="text-2xl md:text-3xl font-bold text-blue-500 ">{weatherData.current.condition.text}</p>
          </div>


        </div>

        <div className="flex flex-col items-center h-full gap-10  basis-1/2">
          <div className="flex">
            {weatherData.current.is_day == 1 ? (
              // Nếu là ban ngày (is_day == 1)
              <IoMdSunny className="size-30 md:size-60 text-yellow-300 animate-pulse" />
            ) : (
              // Nếu là ban đêm (is_day == 0)
              <IoMdMoon className="size-45 text-gray-500 " />
            )}
          </div>
          <div class="flex items-center gap-8 text-white/80 mt-7">
            <div class="flex flex-col items-end">
              <span class="text-sm uppercase tracking-wider text-white/50">High</span>
              <span class="text-2xl font-bold">{maxtemp_c}°</span>
            </div>
            <div class="w-px h-8 bg-white/20"></div>
            <div class="flex flex-col items-end">
              <span class="text-sm uppercase tracking-wider text-white/50">Low</span>
              <span class="text-2xl font-bold">{mintemp_c}°</span>
            </div>
          </div>
        </div>

      </div>

    </>
  )
}