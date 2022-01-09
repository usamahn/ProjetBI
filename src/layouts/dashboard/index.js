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
import {useEffect} from 'react'
// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

// Data
import {reportsBarChartData,AirlinesPerCountryData} from "layouts/dashboard/data/reportsBarChartData";
import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";

// Dashboard components
import Projects from "layouts/dashboard/components/Projects";
import OrdersOverview from "layouts/dashboard/components/OrdersOverview";

import {useReadCypher} from 'use-neo4j'

function Dashboard() {
  const { sales, tasks } = reportsLineChartData;
  const query = `MATCH (airport:Airport)
  WHERE airport.country = $country 
  RETURN airport.name, airport.IATA;`
  let country="France"
  const params = { country }
  const {
    loading,
    error,
    records,
    first 
  } = useReadCypher(query, params)
  let airportname
  let airports;
  if(first != undefined){
    airportname = first.get('airport.name')
    console.log(airportname)
  }
  
  if(records != undefined){
     airports = records.map(row => row.get('airport.name'))
    console.log(airports)
  }
   



  return (
    <DashboardLayout>
      <DashboardNavbar />
     
      <MDBox py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="dark"
                icon="weekend"
                title="Airports"
                count={7324}

              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                icon="leaderboard"
                title="Airlines"
                count="6162"

              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="success"
                icon="store"
                title="Routes"
                count="66765"

              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="primary"
                icon="person_add"
                title="Countries"
                count="+237"

              />
            </MDBox>
          </Grid>
        </Grid>
        <MDBox mt={4.5}>
          <Grid container spacing={3}>
            <Grid item xs={6} md={6} lg={6}>
              <MDBox mb={3}>
                <ReportsBarChart
                  color="info"
                  title="Number of airports per country"
                  description=""
                  date=""
                  chart={reportsBarChartData}
                />
              </MDBox>
            </Grid>
            <Grid item xs={6} md={6} lg={6}>
              <MDBox mb={3}>
                <ReportsBarChart
                  color="success"
                  title="Number of airlines per country"
                  description=""
                  date=""
                  chart={AirlinesPerCountryData}
                />
              </MDBox>
            </Grid>

            


          </Grid>
        </MDBox>
        <MDBox>
          <Grid container spacing={3}>
            <Grid item xs={12} md={12} lg={12}>
              <Projects />
            </Grid>

          </Grid>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
