import { FaCalendar } from "react-icons/fa6";
import { FaWind } from "react-icons/fa";
import { RiNewsLine } from "react-icons/ri";
export function News() {
  return (
    <>
      <div className="lg:mt-15 flex-1 flex flex-col bg-linear-to-r from-blue-900 p-4 rounded-xl border border-slate-700">
        <div className="flex justify-between text-white items-center w-full mb-10">
          <p className="text-xl font-bold">Tin tức</p>
          <RiNewsLine className="size-7"></RiNewsLine>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1  gap-3 place-items-center">
          <iframe className="w-full aspect-video rounded-xl" src="https://www.youtube.com/embed/i2_O9xfxPbk?si=B7YS6lq_C_RrWEmo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          <iframe className="w-full aspect-video rounded-xl" src="https://www.youtube.com/embed/fBZJdbw9SnQ?si=xipngjgdDJu7eWvf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          <iframe className="w-full aspect-video rounded-xl" src="https://www.youtube.com/embed/k5jWi6eR_6s?si=e-kk2gmhrvZ1tqmg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          <iframe className="w-full aspect-video rounded-xl" src="https://www.youtube.com/embed/Wzf07xXjlCk?si=m4NGh5-nBCJnx7RF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          <iframe className="w-full aspect-video rounded-xl" src="https://www.youtube.com/embed/8GNQ3rh2jUE?si=a0endbqXe8q9O1kf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          <iframe className="w-full aspect-video rounded-xl" src="https://www.youtube.com/embed/vTPIKPn4xA4?si=zux3v2K8FaJNFjPT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        </div>

      </div>

    </>
  )
}