import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { ListCountriesComponent } from "./ListCountries";

test("renders content", () => {
  const defaultProps = {
    countries: [
      {
        code: "PE",
        name: "Peru",
        continent: {
          code: "SA",
          name: "South America",
          __typename: "Continent",
        },
        currency: "PEN",
      },
    ],
    onClickCountry: () => {},
  };

  const component = render(<ListCountriesComponent {...defaultProps} />);

  component.getByText("Peru South America PEN");
});
