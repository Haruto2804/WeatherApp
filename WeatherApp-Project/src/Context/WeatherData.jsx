import { useState, useEffect, useMemo } from "react";
import { AppContext } from "./WeatherContext.js";
import axios from "axios";
export const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [weatherData, setWeatherData] = useState({});
  const fetchDataWeather = async (countryName) => {
    const baseURL = 'https://api.weatherapi.com/v1';
    const API_KEY = import.meta.env.VITE_API_WEATHER_KEY;

    try {
      setIsLoading(true); // Bắt đầu tải
      const response = await axios.get(
        `${baseURL}/forecast.json?q=${countryName}&key=${API_KEY}&lang=vi`
      );
      setWeatherData(response.data);
    } catch (error) {
      console.error("Lỗi khi fetch thời tiết:", error);
    } finally {
      setIsLoading(false); // Tải xong
    }
  };
  useEffect(() => {
    fetchDataWeather("VietNam");
  }, []);

  // 3. Đóng gói các giá trị muốn chia sẻ
  const value = useMemo(() => ({
    weatherData,
    fetchDataWeather,
    isLoading
  }), [weatherData, isLoading]);
  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};