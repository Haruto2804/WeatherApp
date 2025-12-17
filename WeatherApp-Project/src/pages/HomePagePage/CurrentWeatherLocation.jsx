import { SearchBar } from "../../components/SearchBar";
import { IoIosSend, IoMdMoon, IoMdSunny } from "react-icons/io";
import { FaWind } from "react-icons/fa";
import { ForeCastToday } from "./ForeCastToday";
import { useState } from "react";
export function CurrentWeatherLocation({ fetchDataWeather, weatherData, filteredCountries, handleSearchChange }) {
  const [isFocused, setIsFocused] = useState(false);
  const maxtemp_c = weatherData.forecast.forecastday[0].day.maxtemp_c;
  const mintemp_c = weatherData.forecast.forecastday[0].day.mintemp_c;
  const handleFocus = () => {
    setIsFocused(true);
  }
  const handleBlur = () => {
    setTimeout(() => {
      setIsFocused(false);
    }, 150);
  }
  return (
    <>
      <div className="flex justify-evenly mt-16 bg-gray-900 mx-5
        rounded-xl border border-blue-500 items-center p-6
        gap-5
        md:flex-row
        md:p-10
        ">
        <div className="w-full flex  flex-col gap-5 ml-7 basis-1/2">
          <div className="relative ">
            <SearchBar handleFocus={handleFocus} handleBlur={handleBlur} handleSearchChange={handleSearchChange} />
            <div className={`absolute top-15 bg-slate-800 
              w-full h-80 p-4 bottom z-100 rounded-lg text-white 
              font-bold overflow-y-auto flex flex-col gap-5
              ${isFocused ? "block" : "hidden"}
              `}>
              {filteredCountries.map((item) => (
                <div
                  onClick={() => fetchDataWeather(item.name.common)}
                  key={item.name.common} className="flex gap-5 items-center hover:bg-blue-700 p-2 rounded-xl cursor-pointer transition-all">
                  <img className="w-15" src={item.flags.png} alt="" />
                  <p>{item.name.common}</p>
                </div>
              ))}

            </div>
          </div>

          <div className="  bg-blue-500/40 w-full rounded-full flex justify-center">
            <div className="rounded-full font-bold relative flex items-center gap-3 bg-blue-00 p-2 select-none">
              <IoIosSend className="size-7 text-blue-400" />
              <p className="text-blue-400 text-sm md:text-xl w-full">Current Location</p>
            </div>

          </div>
          <div>
            <p className="text-4xl font-bold text-white md:text-7xl ">{weatherData.location.name}</p>
            <p className="text-2xl text-gray-400 font-bold md:text-4xl">{weatherData.location.country}</p>
          </div>
          <div className="text-6xl md:text-9xl font-bold text-white">{weatherData.current.temp_c}<sup>°</sup></div>
          <div className="flex items-center g ap-3 animate-pulse">
            <img className = ""src={weatherData.current.condition.icon} alt="" />
            <p className="text-lg md:text-3xl font-bold text-blue-500 ">{weatherData.current.condition.text}</p>
          </div>


        </div>

        <div className="flex flex-col items-center h-full gap-10  basis-1/2">
          <div className="flex">
            {weatherData.current.is_day == 1 ? (
              // Nếu là ban ngày (is_day == 1)
              <IoMdSunny className="size-25 md:size-60 text-yellow-300 animate-pulse" />
            ) : (
              // Nếu là ban đêm (is_day == 0)
              <IoMdMoon className="size-25 md:size-60 text-gray-500 " />
            )}
          </div>
          <div className="flex items-center gap-4 md:gap-8 text-white/80 mt-7">
            <div className="flex flex-col items-end">
              <span className="text-sm uppercase tracking-wider text-white/50">High</span>
              <span className="text-2xl font-bold">{maxtemp_c}°</span>
            </div>
            <div className="w-px h-8 bg-white/20"></div>
            <div className="flex flex-col items-end">
              <span className="text-sm uppercase tracking-wider text-white/50">Low</span>
              <span className="text-2xl font-bold">{mintemp_c}°</span>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}