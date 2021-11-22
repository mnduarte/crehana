import React from "react";
import { Header } from "../Header";
import "./styles.css";

export const Layout = ({ children }) => (
  <>
    <Header />
    <div className="container">{children}</div>
  </>
);
