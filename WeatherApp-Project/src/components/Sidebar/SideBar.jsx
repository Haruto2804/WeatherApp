
import { GrLinkPrevious } from "react-icons/gr";
import { GrLinkNext } from "react-icons/gr";
import { IoMdSearch } from "react-icons/io";
import { RiMenuUnfold4Line } from "react-icons/ri";
import VietNamFlag from '../../../public/image/flag_country/VietNamFlag.png'
import JapanFlag from '../../../public/image/flag_country/JapanFlag.png'
import ChinaFlag from '../../../public/image/flag_country/ChinaFlag.png'
import AUSFlag from '../../../public/image/flag_country/AUSFlag.png'
import USFlag from '../../../public/image/flag_country/USFlag.png'
import CanadaFlag from '../../../public/image/flag_country/CanadaFlag.png'


export function SideBar({ isOpenSideBar, handleOpenSideBar }) {

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
        <div className="flex justify-between p-2 cursor-pointer hover:bg-gray-800 rounded-lg transition-all duration-300 ease-in-out">
          <div className="flex gap-2">
            <div className="flex items-center">
              <img className="w-10 h-auto" src={VietNamFlag} />
            </div>

            <div>
              <p className="text-sm text-white">Việt Nam</p>
              <p className="text-gray-500 font-medium text-sm">Mây rải rác</p>

            </div>
          </div>
          <p className="text-2xl text-white">25C</p>
        </div>
        <div className="flex justify-between p-2 cursor-pointer hover:bg-gray-800 rounded-lg transition-all duration-300 ease-in-out">
          <div className="flex gap-2">
            <div className="flex items-center">
              <img className="w-10 h-auto" src={CanadaFlag} />
            </div>

            <div>
              <p className="text-sm text-white">Canada</p>
              <p className="text-gray-500 font-medium text-sm">Mây rải rác</p>

            </div>
          </div>
          <p className="text-2xl text-white">25C</p>
        </div>
        <div className="flex justify-between p-2 cursor-pointer hover:bg-gray-800 rounded-lg transition-all duration-300 ease-in-out">
          <div className="flex gap-2">
            <div className="flex items-center">
              <img className="w-10 h-auto" src={JapanFlag} />
            </div>

            <div>
              <p className="text-sm text-white">Japan</p>
              <p className="text-gray-500 font-medium text-sm">Tuyết rơi</p>

            </div>
          </div>
          <p className="text-2xl text-white">20C</p>
        </div>



      </div>
    </>
  )
}