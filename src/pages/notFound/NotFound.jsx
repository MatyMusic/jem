import React from "react";
import { Link } from "react-router-dom";

import "./notFound.css";

const NotFound = () => {
  return (
    <section>
      <div className="container notfound__container">
        <h2>הדף לא נמצא</h2>
        <Link to="/" className="btn">
          חזור לדף הבית
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
