

import { CurrentWeatherLocation } from "./CurrentWeatherLocation";
import { News } from "./News";
import { AppContext } from "../../Context/WeatherContext.js";
import { CountryContext } from "../../Context/CountryContext.js";
import { DetailsWeather } from "./DetailsWeather.jsx";
export function HomePage() {
  console.log('homepage rerender')
  return (
    <div className="flex flex-col mx-auto bg-linear-to-r from-blue-900 to-black w-full mt-10 p-5 xl:flex-row gap-5 max-w-[2000px]">
      <div className=" max-w-4xl select-none ">

        <CurrentWeatherLocation />
        <DetailsWeather></DetailsWeather>
      </div>
      <div className="flex-1">
        <News />
      </div>



    </div>
  )
} 