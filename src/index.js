/**
=========================================================
* Material Dashboard 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "App";

import { Neo4jProvider, createDriver } from 'use-neo4j'


// Soft UI Context Provider
import { MaterialUIControllerProvider } from "context";


const driver = createDriver('neo4j', 'localhost', 7687, 'test', 'azerty')
ReactDOM.render(
  <BrowserRouter>
    <MaterialUIControllerProvider>
    <Neo4jProvider driver={driver}>
      <App />
    </Neo4jProvider>
    </MaterialUIControllerProvider>
  </BrowserRouter>,
  document.getElementById("root")
);


/*

  
  const {
    loading,
    error,
    records,
    first 
  } = useReadCypher(query, params)
  const airportname = first.get('airport.name')
  <h1>{airportname}</h1>

*/
