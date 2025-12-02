import { Link } from "react-router"

Link
export function CTA({title, description, ctaTextButton}) {
  return (
    <>
      <div className = " bg-blue-400 flex flex-col items-center text-white rounded-lg p-8 gap-4 lg:h-[300px] justify-center">
          <p className="text-3xl font-bold text-center">{title}</p>
          <p>{description}</p>
          <Link to = "/current" className = "flex items-center justify-center w-2/3 rounded-xl bg-white font-bold text-blue-500 p-4 hover:-translate-y-3 cursor-pointer transition-all duration-500 ease-in-out">{ctaTextButton}</Link>
      </div>
    </>
  )
}