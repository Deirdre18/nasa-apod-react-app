// src/components/Home.js
// code from https://scotch.io/tutorials/make-a-stellar-react-nasa-app-in-10-minutes

import React from "react";
import { Link } from "react-router-dom";

export default function Home() {

  return (
    <div className="home">
      <Link className="home-link" to="/nasaphoto" >See into the stars!</Link>
    </div>
  );
}
