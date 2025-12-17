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
import { Link, NavLink } from "react-router";

const menuItems = [
  { name: "Trang chủ", href: "/" },
  { name: "Thời tiết hiện tại", href: "/current" },
  { name: "Về chúng tôi", href: "/about" },
];
export function SideBar({ fetchDataWeather, handleSearchChange, filteredCountries, searchQuery, isOpenSideBar, handleOpenSideBar }) {

  return (
    <>

      {/* 1. OVERLAY */}
      <div
        onClick={handleOpenSideBar}
        className={`
          fixed inset-0 bg-black/50 z-1000
          lg:hidden 
          transition-opacity duration-300
          ${isOpenSideBar ? 'opacity-100 visible' : 'opacity-0 invisible'}
        `}
      />

      {/* 2. SIDEBAR CONTAINER (Đã cải tiến CSS) */}
      <div className={`
        overflow-y-auto 
        z-1200
        flex 
        flex-col 
        w-1/2 
        lg:w-1/6
        bg-gray-900 
        gap-4 
        fixed
        top-0
        left-0
        bottom-0
        p-4 
        rounded-r-xl
        shadow-2xl shadow-gray-800/80 
        border-r border-gray-700
  
        transition-transform duration-500 ease-in-out
        ${isOpenSideBar
          ? "translate-x-0"
          : "-translate-x-full"}
        `}>

        {/* Nút Đóng */}
        <button
          onClick={() => handleOpenSideBar()}
          className="flex w-full justify-end">
          <GrLinkPrevious className="text-gray-400 size-6 cursor-pointer" />
        </button>
        <nav className="flex flex-col gap-1 mb-4 border-b border-gray-700 pb-4">
          {menuItems.map((item) => (
            <NavLink to={item.href}

              key={item.name}
              className={({ isActive }) => `
              font-medium 
              text-base 
              py-2 px-3 
              rounded-lg 
              transition-colors duration-200
              ${isActive
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-800/50' // ACTIV
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white' // DEFAULT
                }
  `}
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        <div className="relative mb-2">
          <input
            value={searchQuery}
            onChange={handleSearchChange}
            className="text-gray-200 font-medium w-full py-2 pl-10 pr-4 
                bg-gray-800 rounded-lg // Nền input tối hẳn
                placeholder-gray-500 // Màu placeholder dịu hơn
                outline-none border border-transparent 
                focus:ring-2 focus:ring-blue-500 focus:border-blue-500
            "
            type="text" placeholder="Tìm kiếm quốc gia ... " />
          <IoMdSearch
            className="text-gray-500 size-6 absolute top-1/2 -translate-y-1/2 left-2.5"></IoMdSearch>
        </div>


        <div className="flex flex-col gap-1">
          {filteredCountries && filteredCountries.length > 0 ? (
            filteredCountries.map(item => (
              // Giả định CountryItem đã có hover/active style tốt
              <CountryItem key={item.name.common} name={item.name.common}
                flag={item.flags.svg}
                currentTemp={item.currentTemp}
                condition={item.condition}
                fetchDataWeather={fetchDataWeather}
                query={item.name.common}
              />
            ))
          ) : (
            <p className="text-gray-500 text-sm p-2 text-center">
              {searchQuery ? `Không tìm thấy quốc gia "${searchQuery}"` : "Hãy tìm kiếm quốc gia bạn muốn."}
            </p>
          )}
        </div>

      </div>
    </>
  )
}