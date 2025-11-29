
export function CountryItem({ name, flag, currentTemp, condition, fetchDataWeather, query }) {
  return (
    <>
      <div
      key =  {name}
        // ⬅️ Gán onClick cho KHUNG CHỨA (để khu vực click lớn hơn)
        onClick={() => {
          console.log(query)
          fetchDataWeather(query)}}
        className="flex justify-between p-2 cursor-pointer hover:bg-gray-800 rounded-lg transition-all duration-300 ease-in-out"
      >
        <div className="flex gap-2">
          <div className="flex items-center">
            <img className="w-10 h-auto" src={flag} alt={`${name} Flag`} />
          </div>

          <div>
            <p className="text-sm text-white">{name}</p>
            <p className="text-gray-500 font-medium text-sm">{condition}</p>
          </div>
        </div>
        <p className="text-2xl text-white">{currentTemp}</p>
      </div>

    </>
  )
}