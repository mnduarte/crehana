import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import { CardCountry } from "../components/CardCountry";
import Country from "../interfaces/Country";

const GET_COUNTRY = gql`
  query getCountry($countryId: ID!) {
    country(code: $countryId) {
      code
      name
      currency
      continent {
        code
        name
      }
      languages {
        code
        name
        native
        rtl
      }
      capital
    }
  }
`;

interface ItemProps {
  loading: boolean;
  data: {
    country: Country;
  };
}

interface DetailCountryProps {
  countryId: number;
}

const renderProp: React.FC<ItemProps> = ({ loading, data }) => {
  return <>{loading ? <>Loading...</> : <CardCountry {...data.country} />}</>;
};

export const DetailCountry: React.FC<DetailCountryProps> = ({ countryId }) => {
  return (
    <Query
      query={GET_COUNTRY}
      variables={{ countryId }}
      fetchPolicy="network-only"
    >
      {renderProp}
    </Query>
  );
};
