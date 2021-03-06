import React, { useEffect, useState } from 'react';
import Dashboard from './pages/Dashboard';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { getCurrentWeather, getForecastWeather, IForecastData, IWeather } from './api/weather';
import { CircularProgress, Snackbar, Alert } from '@mui/material';
import { CitiesContext, ICity } from './context';

const LoadingIcon = styled(CircularProgress)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
`;

const fetchAllWeathers = async (cities: string[]) => {
  const promises = cities.map(async (city) => {
    const weather = await getCurrentWeather(city);
    return weather;
  });
  const res = await Promise.all(promises);

  return res.filter((data) => !!data) as IWeather[];
};

function App() {
  const [forecast, setForecast] = useState<IForecastData>();
  const [current, setCurrent] = useState<IWeather[]>();
  const [cities, setCities] = useState<ICity[]>([
    { id: 1, name: 'Sydney', countryCode: 'AU' },
    { id: 2, name: 'Brisbane,AU', countryCode: 'AU' },
    { id: 3, name: 'Melbourne,AU', countryCode: 'AU' },
  ]);
  const [loading, setLoading] = useState<boolean>(false);
  const [openMessager, setOpenMessager] = useState<boolean>(false);

  const currentCity = cities.find((city) => city.id === 1);
  const currentCityName = currentCity
    ? `${currentCity.name},${currentCity.countryCode}`
    : 'Sydney,AU';

  useEffect(() => {
    setLoading(true);
    async function fetchWeatherAPI() {
      try {
        const [forecastRes, citiesData] = await Promise.all([
          getForecastWeather(currentCityName),
          fetchAllWeathers(cities?.map((city) => `${city.name},${city.countryCode}`) || []),
        ]);
        if (!!forecastRes) {
          setForecast(forecastRes);
        }
        if (citiesData.length > 0) {
          setCurrent(citiesData);
        }
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setOpenMessager(true);
        let message = 'Loading Data Failed';
        if (error instanceof Error) {
          message = error.message;
        }
        throw new Error(message);
      }
    }
    fetchWeatherAPI();
  }, [cities, currentCity, currentCityName]);

  const setCity = (cityName: string, countryCode = 'AU', id = 1) => {
    const newCities = [...cities];
    newCities[id - 1] = { id, name: cityName, countryCode };
    setCities(newCities);
  };

  return (
    <ThemeProvider theme={theme}>
      {!loading ? (
        forecast &&
        current && (
          <CitiesContext.Provider
            value={{
              cities,
              currentWeather: current[0],
              citiesData: current,
              forecastWeathers: forecast,
              setCity,
            }}
          >
            <Dashboard />
          </CitiesContext.Provider>
        )
      ) : (
        <LoadingIcon />
      )}
      <Snackbar
        open={openMessager}
        autoHideDuration={5000}
        onClose={() => {
          setOpenMessager(false);
        }}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          severity="error"
          onClose={() => {
            setOpenMessager(false);
          }}
        >
          {`Cannot find the city ${currentCity} in Australia, please input a valid city name.`}
        </Alert>
      </Snackbar>
    </ThemeProvider>
  );
}

export default App;
