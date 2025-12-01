
import './App.css'
import { SideBar } from './components/Sidebar/SideBar'
import { Header } from './components/Header/Header'
import { useCallback, useEffect, useState, useMemo } from 'react';
import { WeatherCurrent } from './components/MainViews/WeatherCurrent';
import { motion } from 'motion/react';
import axios from 'axios'
function App() {
  const [isOpenSideBar, setIsOpenSideBar] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  const [countries, setCountries] = useState([]);
  const [searchQuery, setSearchQuerry] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuerry(e.target.value);
  }
  const filteredCountries = useMemo(() => {
    return countries.filter((country) =>
      country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [countries, searchQuery]);
  const handleOpenSideBar = useCallback(() => {
    setIsOpenSideBar(isOpenSideBar => !isOpenSideBar);
  }, [])
  const fetchDataWeather = async (countryName) => {
    const baseURL = 'https://api.weatherapi.com/v1';
    const API_KEY = import.meta.env.VITE_API_WEATHER_KEY;

    try {
      const response = await axios.get(`${baseURL}/current.json?q=${countryName}&key=${API_KEY}&lang=vi`);
      setWeatherData(response.data);
    } catch (error) {
      console.error("Lỗi khi fetch thời tiết:", error);

    }
  };
  const fetchCountryAPI = async () => {
    try {
      const response = await axios.get('https://restcountries.com/v3.1/all?fields=name,flags');
      setCountries(response.data)
    } catch (error) {
      console.error("Lỗi khi fetch quốc gia:", error);
    }
  }
  useEffect(() => {
    fetchDataWeather("VietNam");
    fetchCountryAPI()
  }, [])
  console.log(weatherData)
  return (


    <div className="font-Montserrat">
      <Header
        handleOpenSideBar={handleOpenSideBar}
      ></Header>
      <SideBar
        handleOpenSideBar={handleOpenSideBar}
        isOpenSideBar={isOpenSideBar}
        fetchDataWeather={fetchDataWeather}
        handleSearchChange={handleSearchChange}
        filteredCountries={filteredCountries}
        searchQuery={searchQuery}
      ></SideBar >
      <WeatherCurrent
        handleOpenSideBar={handleOpenSideBar}
        weatherData={weatherData}
        isOpenSideBar={isOpenSideBar}
      ></WeatherCurrent>
    </div>

  )
}

export default App
