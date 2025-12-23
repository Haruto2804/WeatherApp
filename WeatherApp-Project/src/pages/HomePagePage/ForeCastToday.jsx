
const formatHour = (dateTimeString) => {
  const date = new Date(dateTimeString);
  const options = {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  };
  return date.toLocaleTimeString('vi-VI', options);
}
import { useContext } from 'react';
import Cloud from '../../../public/image/weather/cloudy.png'
import { AppContext } from '../../Context/WeatherContext.js';
import { Loader2 } from 'lucide-react'; // Import icon
export function ForeCastToday() {
  const { weatherData, isLoading } = useContext(AppContext);
  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center p-10 w-full bg-blue-900/20 rounded-xl">
        <Loader2 className="w-10 h-10 text-blue-400 animate-spin mb-2" />
        <p className="text-blue-200 font-medium">Đang tải dự báo thời tiết...</p>
      </div>
    );
  }
  if (!weatherData?.forecast) return null;
  const weatherForeCastHour = weatherData.forecast.forecastday[0].hour;
  return (
    <>
      <div className="flex flex-col bg-linear-to-l from-yellow-900 mt-5 rounded-xl flex-1
                to-blue-600 w-full p-3">
        <div className="flex items-center justify-between mb-5">
          <p className="text-white text-md md:text-xl font-bold">Weather Forecast Today: {weatherData.location.localtime}</p>
          <img src={Cloud} className="size-10 animate-pulse" alt="" />
        </div>
        <div className=" overflow-auto gap-4 flex">

          {weatherForeCastHour.map((item) => (

            <div key={item.time} className="flex flex-col bg-blue-900 p-4 rounded-lg items-center gap-5 shrink-0 w-50" >
              <p className="text-xl font-bold text-white">{formatHour(item.time)}</p>
              <img src={item.condition.icon} className="size-25 animate-pulse" alt="" />
              <p className="text-white font-bold text-xl">{item.condition.text}</p>
              <p className="text-blue-400 font-bold text-xl">{item.temp_c}°</p>
            </div>

          ))}

        </div>


      </div>
    </>
  )
}