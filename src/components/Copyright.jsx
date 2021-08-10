import React from "react";

import "../styles/Copyright.css";

const Copyright = () => {
  return (
    <div className="copyright">
      <p>Copyright Core Move. Alle rechten voorbehouden.</p>
      <p className="rs">
        Created by:{" "}
        <b>
          Rianne Streef
          <a href="http://www.riannestreef.com" target="blank"></a>
        </b>
      </p>
    </div>
  );
};

export default Copyright;
