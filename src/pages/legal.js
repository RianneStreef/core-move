import React from "react";
import { Helmet } from "react-helmet";

import Layout from "../components/Layout.jsx";
import Legal from "../components/Legal.jsx";

const LegalPage = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Core Move </title>
      </Helmet>
      <Layout>
        <div className="content">
          <Legal />
        </div>
      </Layout>
    </div>
  );
};

export default LegalPage;
