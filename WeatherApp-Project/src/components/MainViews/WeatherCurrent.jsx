import VinhHaLong from '../../../public/image/background_county/VinhHaLong.png'
import { FaWind, FaTemperatureHigh, FaCloud, FaEye, FaTint, FaSun, FaThermometerHalf, FaCompressArrowsAlt } from "react-icons/fa";
import { WiHumidity, WiBarometer, WiDaySunny, WiWindDeg } from "react-icons/wi";
import { GridItem } from './GridItem';
import { getWindDirection } from '../../utils/weather.js'

export function WeatherCurrent({ weatherData }) {
  if (!weatherData || !weatherData.location) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-gray-900 text-white">
        <p className="text-xl animate-pulse">Đang tải dữ liệu thời tiết...</p>
      </div>
    );
  }

  return (
    <>
      <div key={weatherData.location.tz_id} className="w-full h-screen relative ">
        <div
          style={{
            backgroundImage: `url(${VinhHaLong})`
          }}
          className="h-screen w-screen bg-cover fixed"></div>

        <div className="w-full h-screen absolute bg-black/30"></div>

        <div className="flex flex-col gap-5 absolute top-[12%] w-full h-full overflow-y-auto pb-20">
          <div className="z-10 flex flex-col gap-2">
            <p className="text-5xl w-full text-center text-white">{weatherData.location.country}</p>
            <p className="text-lg w-full text-center text-gray-300 font-medium">{weatherData.location.localtime}</p>
          </div>

          <div className="flex w-full relative gap-10 items-center justify-center">
            <p className="text-8xl text-white text-center">
              {weatherData.current.temp_c}<sup className="text-4xl absolute top-2">°C</sup>
            </p>
            <img src={weatherData.current.condition.icon} alt=""
              className="size-20 self-end animate-pulse"
            />
          </div>

          <p className="w-full text-center text-white font-medium text-xl">{weatherData.current.condition.text}</p>
          <p className="z-20 text-gray-200 font-medium text-center">Cập nhật lần cuối: {weatherData.current.last_updated}</p>

          <div className="w-full flex justify-center">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 w-full px-2">

              {/* Nhiệt độ */}
              <GridItem
                icon={<FaTemperatureHigh />}
                title="Nhiệt độ"
                detail={`${weatherData.current.temp_c} °C`}
                description={
                  weatherData.current.temp_c > 35 ? "Nóng gay gắt" :
                    weatherData.current.temp_c > 25 ? "Ấm áp" :
                      weatherData.current.temp_c > 15 ? "Mát mẻ" :
                        "Se lạnh"
                }>
              </GridItem>



              {/* Gió */}
              <GridItem
                icon={<FaWind />}
                title="Gió"
                detail={`${weatherData.current.wind_kph} km/h`}
                description={`Hướng gió: ${getWindDirection(weatherData.current.wind_dir)}`}>
              </GridItem>

              {/* Giật gió */}
              <GridItem
                icon={<FaWind />}
                title="Gió giật"
                detail={`${weatherData.current.gust_kph} km/h`}
                description={
                  weatherData.current.gust_kph > 60 ? "Giật gió mạnh" :
                    weatherData.current.gust_kph > 40 ? "Giật gió trung bình" :
                      "Giật gió nhẹ"
                }>
              </GridItem>

              {/* Lượng mưa */}
              <GridItem
                icon={<FaTint />}
                title="Lượng mưa"
                detail={`${weatherData.current.precip_mm} mm`}
                description={
                  weatherData.current.precip_mm > 5 ? "Mưa lớn" :
                    weatherData.current.precip_mm > 0 ? "Mưa nhỏ/rải rác" :
                      "Không mưa"
                }>
              </GridItem>

              {/* Độ ẩm */}
              <GridItem
                icon={<WiHumidity />}
                title="Độ ẩm"
                detail={`${weatherData.current.humidity}%`}
                description={
                  weatherData.current.humidity > 80 ? "Ẩm ướt" :
                    weatherData.current.humidity < 40 ? "Khô ráo" :
                      "Độ ẩm lý tưởng"
                }>
              </GridItem>

              {/* Áp suất không khí */}
              <GridItem
                icon={<WiBarometer />}
                title="Áp suất"
                detail={`${weatherData.current.pressure_mb} mb`}
                description={
                  weatherData.current.pressure_mb > 1020 ? "Áp suất cao" :
                    weatherData.current.pressure_mb < 1000 ? "Áp suất thấp" :
                      "Áp suất trung bình"
                }>
              </GridItem>

              {/* Chỉ số UV */}
              <GridItem
                icon={<FaSun />}
                title="Chỉ số UV"
                detail={`${weatherData.current.uv}`}
                description={
                  weatherData.current.uv >= 8 ? "Rất cao/Cực cao" :
                    weatherData.current.uv >= 3 ? "Trung bình/Cao" :
                      "Thấp"
                }>
              </GridItem>

              {/* Độ che phủ mây */}
              <GridItem
                icon={<FaCloud />}
                title="Mây che phủ"
                detail={`${weatherData.current.cloud}%`}
                description={
                  weatherData.current.cloud > 75 ? "Nhiều mây" :
                    weatherData.current.cloud > 50 ? "Mây vừa phải" :
                      weatherData.current.cloud > 25 ? "Ít mây" :
                        "Trời quang"
                }>
              </GridItem>

              {/* Tầm nhìn */}
              <GridItem
                icon={<FaEye />}
                title="Tầm nhìn"
                detail={`${weatherData.current.vis_km} km`}
                description={
                  weatherData.current.vis_km > 10 ? "Tầm nhìn tốt" :
                    weatherData.current.vis_km > 5 ? "Tầm nhìn trung bình" :
                      "Tầm nhìn kém"
                }>
              </GridItem>

              {/* Điểm sương */}
              <GridItem
                icon={<FaTint />}
                title="Điểm sương"
                detail={`${weatherData.current.dewpoint_c} °C`}
                description={
                  weatherData.current.dewpoint_c > 20 ? "Ẩm nặng, khó chịu" :
                    weatherData.current.dewpoint_c > 15 ? "Hơi ẩm" :
                      "Khô thoáng"
                }>
              </GridItem>

              {/* Wind Chill - Cảm giác lạnh do gió */}
              <GridItem
                icon={<FaWind />}
                title="Chỉ số phong hàn"
                detail={`${weatherData.current.windchill_c} °C`}
                description={`Nhiệt độ cảm nhận do gió`}>
              </GridItem>

              {/* Heat Index - Chỉ số nóng */}
              <GridItem
                icon={<FaTemperatureHigh />}
                title="Chỉ số nóng"
                detail={`${weatherData.current.heatindex_c} °C`}
                description={
                  weatherData.current.heatindex_c > 40 ? "Nguy hiểm" :
                    weatherData.current.heatindex_c > 32 ? "Cảnh báo" :
                      "An toàn"
                }>
              </GridItem>

              {/* Góc gió */}
              <GridItem
                icon={<WiWindDeg />}
                title="Góc gió"
                detail={`${weatherData.current.wind_degree}°`}
                description={`${getWindDirection(weatherData.current.wind_dir)}`}>
              </GridItem>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}