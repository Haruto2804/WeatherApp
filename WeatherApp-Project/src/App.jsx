/* eslint-disable react-hooks/set-state-in-effect */

import './App.css'
import { SideBar } from './components/Sidebar/SideBar'
import { Header } from './components/Header/Header'
import { useCallback, useEffect, useState, useMemo } from 'react';
import { WeatherCurrent } from './pages/CurrentWeatherPage/WeatherCurrent';
import { Routes, Route } from 'react-router';
import axios from 'axios'
import { Wishes } from './pages/WishesPage/Wishes';
import { HomePage } from './pages/HomePagePage/HomePage';
import { ForeCast } from './pages/ForeCastPage/ForeCast';
import { NotFound } from './pages/NotFoundPage';
import { AboutUs } from './pages/AboutUsPage/AboutUs'
function App() {
  const [isOpenSideBar, setIsOpenSideBar] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  const [countries, setCountries] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
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


      <Routes>
        <Route path="." element={<HomePage />}></Route>
        <Route path="/current" element={<WeatherCurrent handleOpenSideBar={handleOpenSideBar} weatherData={weatherData} isOpenSideBar={isOpenSideBar} />} />
        <Route path="/wishes" element={<Wishes />}></Route>
        <Route path="/forecast" element={<ForeCast />}></Route>
        <Route path="/about" element={<AboutUs />}></Route>
        <Route path="/*" element={<NotFound />}></Route>
      </Routes>
    </div>

  )
}

export default App
