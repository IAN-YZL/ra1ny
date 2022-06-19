import React, { useContext, useMemo, useState } from 'react';
import { CitiesContext } from '../../context';
import { City, Country } from 'country-state-city';
import {
  FormControl,
  TextField,
  Autocomplete,
  AutocompleteRenderInputParams,
  Box,
  Button,
} from '@mui/material';
import styled from 'styled-components';

const CitiesFormWrapper = styled(Box)`
  background-color: white;
  padding: 8px 16px;
  width: 500px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

type Props = {
  closeModal: () => void;
};

const CitiesForm = ({ closeModal }: Props) => {
  const { setCity } = useContext(CitiesContext);
  const [selectedCountry, setSelectedCountry] = useState<{
    countryCode: string;
    countryName: string;
  } | null>(null);
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [page, setPage] = useState(1);

  console.log(selectedCountry);

  const allCountries = useMemo(
    () =>
      Country.getAllCountries().map((country) => ({
        countryName: country.name,
        countryCode: country.isoCode,
      })),
    []
  );

  const allCities = useMemo(
    () =>
      City.getCitiesOfCountry(selectedCountry?.countryCode || '')?.map((city) => city.name) || [],
    [selectedCountry]
  );

  return (
    <CitiesFormWrapper>
      <FormControl>
        {page === 1 && (
          <Autocomplete
            disablePortal
            id="select-country"
            options={allCountries}
            getOptionLabel={(option) => option.countryName}
            sx={{ width: 300 }}
            renderInput={(params: AutocompleteRenderInputParams) => (
              <TextField {...params} label="Country" />
            )}
            onChange={(_event, value) => setSelectedCountry(value ?? null)}
          />
        )}
        {selectedCountry && page === 2 && (
          <>
            <Box>{selectedCountry.countryName}</Box>
            <Autocomplete
              disablePortal
              id="select-city"
              options={allCities}
              sx={{ width: 300 }}
              renderInput={(params: AutocompleteRenderInputParams) => (
                <TextField {...params} label="City" />
              )}
              onChange={(_event, value) => setSelectedCity(value)}
            />
          </>
        )}
      </FormControl>
      {page === 1 ? (
        <Button disabled={!selectedCountry} onClick={() => setPage(2)}>
          Next
        </Button>
      ) : (
        <Button
          disabled={!selectedCity}
          onClick={() => {
            setCity(selectedCity!, selectedCountry?.countryCode);
            setPage(1);
            closeModal();
          }}
        >
          Save
        </Button>
      )}
    </CitiesFormWrapper>
  );
};

export default CitiesForm;
