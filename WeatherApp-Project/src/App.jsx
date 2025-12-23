/* eslint-disable react-hooks/set-state-in-effect */

import './App.css'
import { SideBar } from './components/Sidebar/SideBar'
import { Header } from './components/Header/Header'
import { useCallback, useState } from 'react';
import { WeatherCurrent } from './pages/CurrentWeatherPage/WeatherCurrent';
import { Routes, Route } from 'react-router';
import { HomePage } from './pages/HomePagePage/HomePage';
import { NotFound } from './pages/NotFoundPage';
import { AboutUs } from './pages/AboutUsPage/AboutUs'
import { AppProvider } from './Context/WeatherData';
import { CountryProvider } from './Context/CountryData'
function App() {
  const [isOpenSideBar, setIsOpenSideBar] = useState(false);

  const handleOpenSideBar = useCallback(() => {
    setIsOpenSideBar(prev => !prev);
  }, []);

  return (
    <div className="font-Montserrat">
      {/* Bọc toàn bộ App vào đây */}
      <AppProvider>
        <CountryProvider>

          <Header handleOpenSideBar={handleOpenSideBar} />

          <SideBar
            handleOpenSideBar={handleOpenSideBar}
            isOpenSideBar={isOpenSideBar}
          />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/current" element={
              <WeatherCurrent
                handleOpenSideBar={handleOpenSideBar}
                isOpenSideBar={isOpenSideBar}
              />
            } />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>

        </CountryProvider>
      </AppProvider>
    </div>
  );
}
export default App
