
import './App.css'
import { SideBar } from './components/Sidebar/SideBar'
import { Header } from './components/Header/Header'
import { useCallback,useState } from 'react';
import { WeatherCurrent } from './components/MainViews/WeatherCurrent';
function App() {
  const [isOpenSideBar, setIsOpenSideBar] = useState(false);
  const handleOpenSideBar = useCallback(() => {
    setIsOpenSideBar(isOpenSideBar => !isOpenSideBar);
  })
  return (
    <div>
      <Header 
      handleOpenSideBar = {handleOpenSideBar}
      ></Header>
      <SideBar 
      handleOpenSideBar = {handleOpenSideBar}
      isOpenSideBar = {isOpenSideBar}
      ></SideBar>
      <WeatherCurrent></WeatherCurrent>
    </div>
  )
}

export default App
