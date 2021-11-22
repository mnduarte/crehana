import React from "react";
import { Form, Select } from "antd";

interface FilterCountriesProps {
  continents: [];
  currencies: [];
  handleFilterContinents: any;
  handleFilterCurrencies: any;
}

export const FilterCountriesComponent: React.FC<FilterCountriesProps> = ({
  continents,
  currencies,
  handleFilterContinents,
  handleFilterCurrencies,
}) => {
  return (
    <Form name="basic">
      <Form.Item>Filters</Form.Item>
      <Form.Item name="continent">
        <Select
          placeholder="Select Continent"
          onChange={handleFilterContinents}
          mode="tags"
        >
          {continents.map(({ code, name }) => {
            return (
              <Select.Option key={code} name="continent" value={code}>
                {name}
              </Select.Option>
            );
          })}
        </Select>
      </Form.Item>
      <Form.Item name="currency">
        <Select
          placeholder="Select Currency"
          onChange={handleFilterCurrencies}
          mode="tags"
        >
          {currencies.map(({ currency }) => (
            <Select.Option key={currency} name="currency" value={currency}>
              {currency}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
    </Form>
  );
};
