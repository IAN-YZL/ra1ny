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

function App() {
  const [forecast, setForecast] = useState<IForecastData>()
  const [current, setCurrent] = useState<IWeather>()
  const [city, setCity] = useState<string>('Sydney')
  const [loading, setLoading] = useState<boolean>(false)
  const [openMessager, setOpenMessager] = useState<boolean>(false)

  useEffect(() => {
    setLoading(true)
    async function fetchWeatherAPI() {
      try {
        const [forecastRes, currentRes] = await Promise.all([getForecastWeather(city), getCurrentWeather(city)])
        if (!!forecastRes) {
          setForecast(forecastRes)
        }
        if (currentRes) {
          setCurrent(currentRes)
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
            currentData={current}
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
