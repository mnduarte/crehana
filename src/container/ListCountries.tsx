import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import { ListCountriesComponent } from "../components/ListCountries";
import { FilterCountriesComponent } from "../components/FilterCountries";
import { uniqueValues, cleanValues } from "../utils/formatValues";
import Country from "../interfaces/Country";

const GET_COUNTRIES = gql`
  query listCountries {
    countries {
      code
      name
      continent {
        code
        name
      }
      currency
    }
    continents {
      code
      name
    }
    currencies: countries {
      currency
    }
  }
`;

interface ListItemProps {
  data: {
    countries: [];
    currencies: [];
    continents: [];
    currency: string;
  };
}

const renderProp: React.FC<ListItemProps> = ({ data }) => {
  const [continents, setContinents] = useState([]);
  const [currencies, setCurrencies] = useState([]);
  const [filterCountries, setFilterCountries] = useState([]);
  const [filters, setFilters] = useState({
    continents: [],
    currencies: [],
  });
  const history = useHistory();

  const applyFiltersCountries: (...args: any) => void = (newFilters: any) => {
    setFilters(newFilters);
    let filterCountries: any[] = [];

    if (newFilters.continents.length && newFilters.currencies.length) {
      data.countries.forEach((country: Country) => {
        newFilters.continents.includes(country.continent.code) &&
          filterCountries.push(country);
        filterCountries = filterCountries.filter((e) =>
          newFilters.currencies.includes(e.currency)
        );
      });
    }

    if (!newFilters.continents.length && !newFilters.currencies.length) {
      filterCountries = data.countries;
    }

    if (newFilters.continents.length && !newFilters.currencies.length) {
      filterCountries = data.countries.filter((country: Country) =>
        newFilters.continents.includes(country.continent.code)
      );
    }

    if (!newFilters.continents.length && newFilters.currencies.length) {
      filterCountries = data.countries.filter((country: Country) =>
        newFilters.currencies.includes(country.currency)
      );
    }

    setFilterCountries(filterCountries);
  };

  const handleFilterContinents: (...args: any[]) => void = (codes) => {
    applyFiltersCountries({ ...filters, continents: codes });
  };

  const handleFilterCurrencies: (...args: any[]) => void = (codes: []) => {
    applyFiltersCountries({ ...filters, currencies: codes });
  };

  const onClickCountry: (...args: any[]) => void = ({ target }) =>
    history.push(`/detail`, { countryId: target.getAttribute("value") });

  useEffect(() => {
    if (data) {
      const uniqueCurrencies = uniqueValues(data.currencies, "currency");
      const cleanedCurrencies = cleanValues(uniqueCurrencies, "currency");
      setFilterCountries(data.countries);
      setContinents(data.continents);
      setCurrencies(cleanedCurrencies);
    }
  }, [data]);

  return (
    <>
      <FilterCountriesComponent
        continents={continents}
        currencies={currencies}
        handleFilterContinents={handleFilterContinents}
        handleFilterCurrencies={handleFilterCurrencies}
      />
      <ListCountriesComponent
        countries={filterCountries}
        onClickCountry={onClickCountry}
      />
    </>
  );
};

export const ListCountries = () => {
  return (
    <Query query={GET_COUNTRIES} fetchPolicy="network-only">
      {renderProp}
    </Query>
  );
};
