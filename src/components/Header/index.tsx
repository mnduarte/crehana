import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export const Header: React.FC = () => (
  <div className="header">
    <Link to="/" className="task">
      Home
    </Link>
  </div>
);
