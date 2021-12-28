import React, { useEffect, useState } from 'react';
import Dashboard from './pages/Dashboard';
import { ThemeProvider } from 'styled-components'
import { theme } from './theme';
import { getCurrentWeather, getForecastWeather, IForecastWeather, IWeather } from './api/weather';
import getFirstWeathersData from './helpers/getFirstWeathersData';

// const WeatherContext = createContext<{forecast: IForecastWeather[] | null, current: IWeather | null}>({forecast: null, current: null})

function App() {
  const [forecast, setForecast] = useState<IForecastWeather[]>()
  const [current, setCurrent] = useState<IWeather>()

  useEffect(() => {
    async function fetchWeatherAPI() {
      const [forecastRes, currentRes] = await Promise.all([getForecastWeather(), getCurrentWeather()])
      if (!!forecastRes) {
        const sanitisedData = getFirstWeathersData(forecastRes)
        setForecast(sanitisedData)
      }
      if (currentRes) {
        setCurrent(currentRes)
      }
    }
    fetchWeatherAPI()
  }, [])

  return (
    <ThemeProvider theme={theme}>
      {forecast && current ? <Dashboard forecastData={forecast} currentData={current} /> : <></>}
    </ThemeProvider>
  );
}

export default App;
