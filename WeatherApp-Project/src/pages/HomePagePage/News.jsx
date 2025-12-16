import { FaCalendar } from "react-icons/fa6";
import { FaWind } from "react-icons/fa";
import { RiNewsLine } from "react-icons/ri";
export function News() {
  return (
    <>
      <div className="lg:mt-15 flex-1 flex flex-col mx-5 bg-linear-to-r from-blue-900 p-4 rounded-xl border border-slate-700">
        <div className="flex justify-between text-white items-center w-full mb-10">
          <p className="text-xl font-bold">Tin tức</p>
          <RiNewsLine className="size-7"></RiNewsLine>
        </div>
        <div className = "w-full">
          <iframe className = "mb-10"width="400" height="315" src="https://www.youtube.com/embed/k5jWi6eR_6s?si=e-kk2gmhrvZ1tqmg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          <iframe width="400" height="315" src="https://www.youtube.com/embed/Wzf07xXjlCk?si=m4NGh5-nBCJnx7RF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>

      </div>

    </>
  )
}