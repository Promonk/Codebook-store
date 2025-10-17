import React, { useEffect, useState } from 'react';
import './App.css';
import { AllRoutes } from './routes/AllRoutes';
import { Header, Footer } from './components';

function App() {

  const [darkMode, setDarkMode] = useState<boolean>(true);

  const togggleDarkMode = () => {
    document.body.className = darkMode ? "light-mode" : "dark-mode";
    setDarkMode((prevState: boolean) => !prevState);
  };

  useEffect(()=>{
    document.body.className = "dark-mode";
  },[])

  return (
     <>
    <div className={darkMode ? "App dark" : "App"}>
      <div className=" dark:bg-slate-950">
        <Header togggleDarkMode={togggleDarkMode} />
        <AllRoutes />
        <Footer />
      </div>
    </div>
    </>
  );
}

export default App;
