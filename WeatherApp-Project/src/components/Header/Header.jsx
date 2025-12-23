import { TiWeatherPartlySunny } from "react-icons/ti"
import { CiMenuBurger } from "react-icons/ci";
import { Link } from "react-router";
import React from "react";
const headerItems = [
  { name: "Trang chủ", href: "/" },
  { name: "Thời tiết hiện tại", href: "/current" },
  { name: "Về chúng tôi", href: "/about" },
];
export const Header = React.memo(({ handleOpenSideBar }) => {
  return (
    <>
      <header className="fixed z-1000
      top-0 left-0 right-0 bg-slate-900 p-4 text-white flex justify-between">
        <CiMenuBurger
          onClick={() => handleOpenSideBar()}
          className="size-7 cursor-pointer lg:opacity-0 lg:pointer-events-none"></CiMenuBurger>
        <ul className="flex gap-5 max-sm:hidden">
          {headerItems.map((item) => (
            <Link to={item.href} key={item.name} className="relative group">
              <li className="cursor-pointer hover:text-blue-500 transition duration-150 font-medium">{item.name}</li>
              <div className="w-0 group-hover:w-full h-0.5 rounded-xl bg-linear-to-r from-blue-500 to-pink-700 absolute bottom-0
            transition-all duration-500 ease-in-out
            "></div>
            </Link>
          ))}
        </ul>
        <div className="flex gap-4 items-center">
          <p className="text-xl font-semibold select-none">Haruto Weather</p>
          <TiWeatherPartlySunny className="size-7 text-blue-500"></TiWeatherPartlySunny>
        </div>
      </header>
    </>
  )
})