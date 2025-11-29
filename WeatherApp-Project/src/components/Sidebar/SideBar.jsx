
import { GrLinkPrevious } from "react-icons/gr";
import { GrLinkNext } from "react-icons/gr";
import { IoMdSearch } from "react-icons/io";
import { RiMenuUnfold4Line } from "react-icons/ri";
import { CountryItem } from "./CountryItem";
import VietNamFlag from '../../../public/image/flag_country/VietNamFlag.png'
import JapanFlag from '../../../public/image/flag_country/JapanFlag.png'
import ChinaFlag from '../../../public/image/flag_country/ChinaFlag.png'
import AUSFlag from '../../../public/image/flag_country/AUSFlag.png'
import USFlag from '../../../public/image/flag_country/USFlag.png'
import CanadaFlag from '../../../public/image/flag_country/CanadaFlag.png'
export function SideBar({ fetchDataWeather, isOpenSideBar, handleOpenSideBar }) {
  const countries = [
    { name: "Việt Nam", flag: VietNamFlag, currentTemp: "25C", condition: "Mây rải rác", query: "VietNam" },
    { name: "Canada", flag: CanadaFlag, currentTemp: "25C", condition: "Mây rải rác", query: "Canada" },
    { name: "Japan", flag: JapanFlag, currentTemp: "20C", condition: "Tuyết rơi", query: "Japan" },
  ];
  return (
    <>
      <div className={`
        z-30
        flex 
        flex-col 
        w-1/2 
        bg-gray-900 
        gap-3
        fixed
        top-0
        left-0
        bottom-0
        p-2
        lg:w-[250px]
        ${isOpenSideBar ? "translate-x-0 transition-transform duration-500 ease-in" : "-translate-x-300 transition-transform duration-500 "}
        `}>
        <div
          onClick={() => handleOpenSideBar()}
          className={`p-2 
          bg-gray-700 
          rounded-full 
          size-10
          cursor-pointer 
          self-end`}>
          <GrLinkPrevious className="text-gray-300 size-6"></GrLinkPrevious>
        </div>
        <div className="relative">
          <input
            className="text-gray-400 font-medium w-full h-full py-2 pl-9
        bg-white/20 rounded-sm
        "
            type="text" placeholder="Tìm kiếm quốc gia ... " />
          <IoMdSearch
            className="text-gray-500 size-6 absolute top-2 left-1"></IoMdSearch>
        </div>

        {countries.map(item => {
          return (
            <CountryItem name={item.name}
              flag={item.flag}
              currentTemp={item.currentTemp}
              condition={item.condition}
              fetchDataWeather={fetchDataWeather}
              query={item.query}
            ></CountryItem>
          )

        })}




      </div>
    </>
  )
}