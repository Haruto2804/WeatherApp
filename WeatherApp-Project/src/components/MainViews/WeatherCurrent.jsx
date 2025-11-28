import VinhHaLong from '../../../public/image/background_county/VinhHaLong.png'
import Sunny from '../../../public/image/weather/sunny.svg'
import { FaTemperatureHigh } from "react-icons/fa";
import { FaWind } from "react-icons/fa";
import { GridItem } from './GridItem';
export function WeatherCurrent() {
  return (
    <>
      <div className="w-full h-screen relative ">
        <div
          style={{
            backgroundImage: `url(${VinhHaLong})`
          }}
          className=" h-screen w-screen bg-cover fixed"></div>
        <div className="w-full h-screen absolute bg-black/30"></div>



        <div className="flex flex-col gap-5 absolute top-[12%] w-full">
          <div className="z-10 flex flex-col gap-2">
            <p className="text-5xl w-full text-center text-white">Việt Nam</p>
            <p className="text-lg w-full text-center  text-gray-300 font-medium">Thứ sáu, 24 Tháng 5, 14:30</p>
          </div>
          <div className="flex w-full relative gap-10  items-center justify-center">
            <p className="
            text-8xl 
          text-white 
            text-center
          ">25<sup className="text-4xl absolute top-2">°C</sup>
            </p>
            <img  src={Sunny} alt=""
              className="size-20 self-end animate-pulse"
            />
          </div>
          <p className=" w-full text-center text-white font-medium text-xl">Mây rải rác</p>
          <div className=" w-full flex justify-center">
            <div className=" grid grid-cols-2 gap-3 w-full 
            px-2
            ">
              <GridItem icon={<FaWind></FaWind>} title="Gió" detail="12km/h" description="Hướng Tây Nam"></GridItem>
              <GridItem icon={<FaWind></FaWind>} title="Gió" detail="15km/h" description="Hướng Tây Nguyên"></GridItem>
              <GridItem icon={<FaWind></FaWind>} title="Gió" detail="17km/h" description="Hướng Tây Bác"></GridItem>
              <GridItem icon={<FaWind></FaWind>} title="Gió" detail="25km/h" description="Hướng Tây Đông"></GridItem>
            


            </div>





          </div>
        </div>

      </div>

    </>
  )
}