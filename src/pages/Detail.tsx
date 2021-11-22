import React from "react";
import { Redirect } from "react-router";
import { DetailCountry } from "../container/DetailCountry";

interface DetailProps {
  location: {
    state: {
      countryId: number;
    };
  };
}

const Detail: React.FC<DetailProps> = ({ location: { state } }) => {
  return (
    <>
      {state ? (
        <DetailCountry countryId={state.countryId} />
      ) : (
        <Redirect to="/" />
      )}
    </>
  );
};
export default Detail;
