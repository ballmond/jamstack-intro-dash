import React from "react";
import { Link } from "gatsby";
import { IdentityContextProvider } from "react-netlify-identity-widget";

import "./layout.css";

const Layout = function ({ children }) {
  return (
    <IdentityContextProvider url="">
      <header>
        <Link to="/">Welcome to JAMstack</Link>
      </header>
      <main>{children}</main>
    </IdentityContextProvider>
  );
};

export default Layout;
