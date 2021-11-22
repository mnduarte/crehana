import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { CardCountry } from "./CardCountry";

test("renders content", () => {
  const defaultProps = {
    code: "PE",
    name: "Peru",
    continent: {
      code: "SA",
      name: "South America",
      __typename: "Continent",
    },
    currency: "PEN",
    languages: [
      {
        code: "es",
        name: "Spanish",
        native: "Español",
      },
    ],
    capital: "Lima",
  };

  const component = render(<CardCountry {...defaultProps} />);

  component.getByText("Peru");
});
