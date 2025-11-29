
import './App.css'
import { SideBar } from './components/Sidebar/SideBar'
import { Header } from './components/Header/Header'
import { useCallback, useEffect, useState } from 'react';
import { WeatherCurrent } from './components/MainViews/WeatherCurrent';
import axios from 'axios'
function App() {
  const [isOpenSideBar, setIsOpenSideBar] = useState(false);
  const [weatherData,setWeatherData] = useState({});
  const handleOpenSideBar = useCallback(() => {
    setIsOpenSideBar(isOpenSideBar => !isOpenSideBar);
  },[])
  const fetchDataWeather = async (countryName) => {
    const baseURL = 'http://api.weatherapi.com/v1';
    const API_KEY = import.meta.env.VITE_API_WEATHER_KEY;
    console.log(countryName )


      const response = await axios.get(`${baseURL}/current.json?q=${countryName}&key=${API_KEY}&lang=vi`);
      console.log(response.data);
      setWeatherData(response.data);
  };
  useEffect(() => {
    fetchDataWeather("VietNam");
  }, [])
  
  console.log(weatherData); 
  return (
    <div>
      <Header
        handleOpenSideBar={handleOpenSideBar}
      ></Header>
      <SideBar
        handleOpenSideBar={handleOpenSideBar}
        isOpenSideBar={isOpenSideBar}
        fetchDataWeather = {fetchDataWeather}
      ></SideBar >
      <WeatherCurrent weatherData = {weatherData}></WeatherCurrent>
    </div>
  )
}

export default App
