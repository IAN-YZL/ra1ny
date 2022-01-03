import React, { useEffect, useState } from 'react';
import Dashboard from './pages/Dashboard';
import { ThemeProvider } from 'styled-components'
import { theme } from './theme';
import { getCurrentWeather, getForecastWeather, IForecastData, IWeather } from './api/weather';

// const WeatherContext = createContext<{forecast: IForecastWeather[] | null, current: IWeather | null}>({forecast: null, current: null})

function App() {
  const [forecast, setForecast] = useState<IForecastData>()
  const [current, setCurrent] = useState<IWeather>()
  const [city, setCity] = useState<string>('Sydney')

  useEffect(() => {
    async function fetchWeatherAPI() {
      const [forecastRes, currentRes] = await Promise.all([getForecastWeather(city), getCurrentWeather(city)])
      if (!!forecastRes) {
        setForecast(forecastRes)
      }
      if (currentRes) {
        setCurrent(currentRes)
      }
    }
    fetchWeatherAPI()
  }, [city])

  return (
    <ThemeProvider theme={theme}>
      {
        forecast && current ?
          <Dashboard
            forecastData={forecast}
            currentData={current}
            setCity={value => setCity(value)}
          /> :
          <></>
      }
    </ThemeProvider>
  );
}

export default App;
