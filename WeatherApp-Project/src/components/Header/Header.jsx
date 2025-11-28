import { TiWeatherPartlySunny } from "react-icons/ti"
import { CiMenuBurger } from "react-icons/ci";
export function Header({handleOpenSideBar}) {
  return (
    <>
      <header className="fixed z-20
      top-0 left-0 right-0 bg-slate-900 p-4 text-white flex justify-between">
        <CiMenuBurger 
        onClick={()=> handleOpenSideBar()}
        className="size-7 cursor-pointer"></CiMenuBurger>
        <ul className="flex gap-5 max-sm:hidden">
          <div className="relative group">
            <li className="cursor-pointer hover:text-blue-500 transition duration-150 font-medium">Dự báo thời tiết</li>
            <div className="w-0 group-hover:w-full h-0.5 rounded-xl bg-linear-to-r from-blue-500 to-pink-700 absolute bottom-0
            transition-all duration-500 ease-in-out
            "></div>
          </div>

          <div className="relative group">
            <li className="cursor-pointer hover:text-blue-500 transition duration-150 font-medium">Thời tiết hiện tại</li>
            <div className="w-0 group-hover:w-full h-0.5 rounded-xl bg-linear-to-r from-blue-500 to-pink-700 absolute bottom-0
            transition-all duration-500 ease-in-out
            "></div>
          </div>
          <div className="relative group">
            <li className="cursor-pointer hover:text-blue-500 transition duration-150 font-medium">Về chúng tôi</li>
            <div className="w-0 group-hover:w-full h-0.5 rounded-xl bg-linear-to-r from-blue-500 to-pink-700 absolute bottom-0
            transition-all duration-500 ease-in-out
            "></div>
          </div>
          <div className="relative group">
            <li className="cursor-pointer hover:text-blue-500 transition duration-150 font-medium">Lời mở đầu</li>
            <div className="w-0 group-hover:w-full h-0.5 rounded-xl bg-linear-to-r from-blue-500 to-pink-700 absolute bottom-0
            transition-all duration-500 ease-in-out
            "></div>
          </div>
          <div className="relative group">
            <li className="cursor-pointer hover:text-blue-500 transition duration-150 font-medium">Mong muốn</li>
            <div className="w-0 group-hover:w-full h-0.5 rounded-xl bg-linear-to-r from-blue-500 to-pink-700 absolute bottom-0
            transition-all duration-500 ease-in-out
            "></div>
          </div>
        </ul>
        <div className="flex gap-4 items-center">
          <p className = "text-xl font-semibold select-none">Haruto Weather</p>
          <TiWeatherPartlySunny className="size-7 text-blue-500"></TiWeatherPartlySunny>
        </div>
      </header>
    </>
  )
}