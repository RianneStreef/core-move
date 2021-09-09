import React from "react";

import Layout from "../components/Layout.jsx";
import Contact from "../components/Contact";

const ContactPage = () => {
  return (
    <div>
      <Layout>
        <div className="content">
          <Contact />
        </div>
      </Layout>
    </div>
  );
};

export default ContactPage;
