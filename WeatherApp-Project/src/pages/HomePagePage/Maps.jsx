import { FaCalendar } from "react-icons/fa6";
import { FaWind } from "react-icons/fa";
import GoogleMap from '../../../public/image/logo/google-maps.png'
export function Maps() {
  return (
    <>
      <div className="lg:mt-15 flex-1 flex flex-col mx-5 bg-linear-to-r from-blue-900 p-4 rounded-xl border border-slate-700">
        <div className="flex justify-between text-white items-center w-full">
          <p className="text-xl font-bold">Location Map</p>
        <img src={GoogleMap} className = "size-8"alt="" />
        </div>

        
      </div>
    </>
  )
}