import React from "react";
import Country from "../interfaces/Country";

interface ListCountriesProps {
  countries: any[];
  onClickCountry: any;
}

export const ListCountriesComponent: React.FC<ListCountriesProps> = ({
  countries,
  onClickCountry,
}) => (
  <ul>
    {countries.map((country: Country) => (
      <li key={country.name} onClick={onClickCountry} value={country.code}>
        {country.name} {country.continent.name} {country.currency}
      </li>
    ))}
  </ul>
);
