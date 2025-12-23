import { useContext, useState } from "react";
import { AppContext } from "../../Context/WeatherContext.js";
import { CountryContext } from "../../Context/CountryContext.js";
import { SearchBar } from '../../components/SearchBar'
import { IoIosSend, IoMdMoon, IoMdSunny } from "react-icons/io";
export function CurrentWeatherLocation() {
  const { filteredCountries, handleSearchChange } = useContext(CountryContext);
  const { fetchDataWeather, weatherData } = useContext(AppContext);
  const [isFocused, setIsFocused] = useState(false);

  // Early Return để bảo vệ ứng dụng
  if (!weatherData) {
    return (
      <div className="flex justify-center mt-16">
        <p className="text-white animate-bounce">Đang tải dữ liệu thời tiết...</p>
      </div>
    );
  }

  const { location, current, forecast } = weatherData;
  const maxtemp_c = forecast?.forecastday?.[0]?.day?.maxtemp_c ?? "--";
  const mintemp_c = forecast?.forecastday?.[0]?.day?.mintemp_c ?? "--";

  return (
    <div className="flex justify-evenly mt-16 bg-gray-900 mx-5 rounded-xl border border-blue-500 items-center p-6 gap-5 md:flex-row md:p-10">
      <div className="w-full flex flex-col gap-5 ml-7 basis-1/2">
        <div className="relative">
          <SearchBar
            handleFocus={() => setIsFocused(true)}
            handleBlur={() => setTimeout(() => setIsFocused(false), 150)}
            handleSearchChange={handleSearchChange}
          />

          {/* Menu gợi ý quốc gia */}
          <div className={`absolute top-15 bg-slate-800 w-full h-80 p-4 z-50 rounded-lg text-white font-bold overflow-y-auto flex flex-col gap-5 ${isFocused ? "block" : "hidden"}`}>
            {filteredCountries.map((item) => (
              <div
                key={item.name.common}
                onClick={() => fetchDataWeather(item.name.common)}
                className="flex gap-5 items-center hover:bg-blue-700 p-2 rounded-xl cursor-pointer transition-all"
              >
                <img className="w-12 h-8 object-cover rounded" src={item.flags.png} alt={item.name.common} />
                <p>{item.name.common}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-blue-500/40 w-full rounded-full flex justify-center py-2">
          <div className="flex items-center gap-3 select-none">
            <IoIosSend className="size-7 text-blue-400" />
            <p className="text-blue-400 text-sm md:text-xl font-bold">Current Location</p>
          </div>
        </div>

        <div>
          <p className="text-4xl font-bold text-white md:text-7xl">{location?.name}</p>
          <p className="text-2xl text-gray-400 font-bold md:text-4xl">{location?.country}</p>
        </div>

        <div className="text-6xl md:text-9xl font-bold text-white">
          {current?.temp_c}<sup>°</sup>
        </div>

        <div className="flex items-center gap-3 animate-pulse">
          <img src={current?.condition?.icon} alt="weather icon" />
          <p className="text-lg md:text-3xl font-bold text-blue-500">{current?.condition?.text}</p>
        </div>
      </div>

      {/* Cột hiển thị Icon thời tiết & Nhiệt độ cao/thấp */}
      <div className="flex flex-col items-center h-full gap-10 basis-1/2">
        <div className="flex">
          {current?.is_day === 1 ? (
            <IoMdSunny className="size-25 md:size-60 text-yellow-300 animate-pulse" />
          ) : (
            <IoMdMoon className="size-25 md:size-60 text-gray-400" />
          )}
        </div>
        <div className="flex items-center gap-4 md:gap-8 text-white/80 mt-7">
          <div className="text-right">
            <span className="text-sm uppercase text-white/50 block">High</span>
            <span className="text-2xl font-bold">{maxtemp_c}°</span>
          </div>
          <div className="w-px h-8 bg-white/20"></div>
          <div className="text-right">
            <span className="text-sm uppercase text-white/50 block">Low</span>
            <span className="text-2xl font-bold">{mintemp_c}°</span>
          </div>
        </div>
      </div>
    </div>
  );
}