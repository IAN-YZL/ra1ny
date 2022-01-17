import React, { useEffect, useState } from 'react';
import Dashboard from './pages/Dashboard';
import styled, { ThemeProvider } from 'styled-components'
import { theme } from './theme';
import { getCurrentWeather, getForecastWeather, IForecastData, IWeather } from './api/weather';
import { CircularProgress, Snackbar, Alert } from '@mui/material';

const LoadingIcon = styled(CircularProgress)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
`

const fetchAllWeathers = async (cities: string[]) => {
  const promises = cities.map(async city => {
    const weather = await getCurrentWeather(city)
    return weather
  })
  const res = await Promise.all(promises)

  return res.filter(data => !!data) as IWeather[]
}


function App() {
  const [forecast, setForecast] = useState<IForecastData>()
  const [current, setCurrent] = useState<IWeather[]>()
  const [city, setCity] = useState<string>('Sydney')
  // const [cities, setCities] = useState<IWeather[]>(['Sydney'])
  const [loading, setLoading] = useState<boolean>(false)
  const [openMessager, setOpenMessager] = useState<boolean>(false)

  useEffect(() => {
    setLoading(true)
    async function fetchWeatherAPI() {
      try {
        const [forecastRes, currentRes, citiesData] = await Promise.all([getForecastWeather(city), getCurrentWeather(city), fetchAllWeathers(['Sydney', 'Brisbane', 'Melbourne'])])
        if (!!forecastRes) {
          setForecast(forecastRes)
        }
        // if (!!currentRes) {
        //   setCurrent([currentRes])
        // }
        if (citiesData.length > 0) {
          setCurrent(citiesData)
        }
        setLoading(false)
      } catch (error) {
        setLoading(false)
        setOpenMessager(true)
        let message = 'Loading Data Failed'
        if (error instanceof Error) {
          message = error.message
        }
        throw new Error(message)
      }
    }
    fetchWeatherAPI()
  }, [city])

  return (
    <ThemeProvider theme={theme}>
      {
        !loading ?
          forecast && current &&
          <Dashboard
            forecastData={forecast}
            currentData={current[0]}
            citiesData={current}
            setCity={value => setCity(value)}
          /> :
          <LoadingIcon />
      }
      <Snackbar
        open={openMessager}
        autoHideDuration={5000}
        onClose={() => { setOpenMessager(false) }}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity="error" onClose={() => { setOpenMessager(false) }}>
          {`Cannot find the city ${city} in Australia, please input a valid city name.`}
        </Alert>
      </Snackbar>
    </ThemeProvider>
  );
}

export default App;
