import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

export default function () {
  return (
    <Layout>
      <h1>
        <p></p>
        <Link to="/dashboard">Go to the dashboard...</Link>
      </h1>
    </Layout>
  );
}
