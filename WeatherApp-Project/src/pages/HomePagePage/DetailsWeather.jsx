/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { AppContext } from "../../Context/WeatherContext";
import { ForeCastToday } from "./ForeCastToday";
import { FaWind, FaTint, FaSun } from "react-icons/fa";

// 1. Tạo component con để tái sử dụng UI
const WeatherInfoCard = ({ icon: Icon, label, value, unit = "" }) => (
  <div className="flex gap-3 items-center rounded-full bg-blue-600/60 p-4 mx-5 border border-blue-600 shadow-xl select-none hover:bg-blue-400/20 group transition-all cursor-pointer">
    <div className="flex items-center justify-center p-3 rounded-full group-hover:bg-black/30 bg-transparent transition-all">
      <Icon className="group-hover:text-blue-400 size-6 text-white" />
    </div>
    <div className="flex flex-col">
      <p className="text-gray-400 font-bold">{label}</p>
      <p className="text-2xl font-bold text-white">
        {value ?? "--"}{unit}
      </p>
    </div>
  </div>
);

export function DetailsWeather() {
  const { weatherData } = useContext(AppContext);

  // 2. Early Return bảo vệ App
  if (!weatherData) {
    return (
      <div className="flex justify-center mt-16">
        <p className="text-white animate-bounce">Đang tải dữ liệu thời tiết...</p>
      </div>
    );
  }

  // 3. Lấy dữ liệu an toàn
  const { current } = weatherData;

  return (
    <div className="flex flex-col">
      <div className="mx-5 flex mt-6">
        <ForeCastToday />
      </div>
      <div className="flex flex-col gap-4 mt-5 basis-2/3">
        {/* Tốc độ gió */}
        <WeatherInfoCard
          icon={FaWind}
          label="Wind"
          value={current?.wind_kph}
          unit=" km/h"
        />

        {/* Độ ẩm - Thay bằng icon FaTint (Giọt nước) cho đúng nghĩa */}
        <WeatherInfoCard
          icon={FaTint}
          label="Humidity"
          value={current?.humidity}
          unit="%"
        />

        {/* Chỉ số UV - Thay bằng icon FaSun (Mặt trời) */}
        <WeatherInfoCard
          icon={FaSun}
          label="UV Index"
          value={current?.uv}
        />
      </div>


    </div>
  );
}