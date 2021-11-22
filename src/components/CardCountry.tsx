import React from "react";
import { Card } from "antd";
import Country from "../interfaces/Country";

export const CardCountry: React.FC<Country> = ({
  name,
  code,
  currency,
  continent,
  languages,
  capital,
}) => (
  <Card title={name} bordered={false} style={{ width: 300 }}>
    <p>{code}</p>
    <p>{currency}</p>
    <p>{continent.name}</p>
    {languages.map((e: any) => (
      <p key={e.code}>{e.name}</p>
    ))}
    <p>{capital}</p>
  </Card>
);
