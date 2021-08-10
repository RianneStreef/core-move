import React from "react";

import Layout from "../components/Layout.jsx";

const TarievenPage = () => {
  return (
    <div>
      <Layout>
        <div className="content">
          <h2>Tarieven</h2>
          <h3>Core•Mama en Core•Base</h3>
          <p>6 weekse training €40 per sessie 2x per week</p>
          <p>6 weekse follow up €35 per sessie 2x per week</p>
          <p>
            Voor nu kom ik aan huis, of we trainen buiten. Ik heb ook eventueel
            een ruimte waar we terecht kunnen. Buiten Den Haag geldt een toeslag
            voor reiskosten.
          </p>
          <h3>Core • Work</h3>
          <p>Training per medewerker €35</p>
          <p>per 10 medewerkers 10% korting</p>
        </div>
      </Layout>
    </div>
  );
};

export default TarievenPage;