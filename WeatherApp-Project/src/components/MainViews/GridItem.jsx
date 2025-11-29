export function GridItem({ icon, title, detail, description }) {
  return (
    <>
      <div className="bg-slate-900/80 text-white p-4 flex flex-col  rounded-xl items-start mb-3 relative">
        <div className="flex mb-2 items-center gap-2">
          <div className="text-gray-500">{icon}</div>
          <p className=" font-medium text-gray-400 uppercase">{title}</p>
        </div>
        <div className="">
          <p className="font-bold text-white text-xl">{detail}</p>
          <p className="font-medium text-gray-400 text-lg">{description}</p>
        </div>

      
      </div>
    </>
  )
}