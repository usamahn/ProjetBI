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

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';




// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";

// Data
import authorsTableData from "layouts/tables/data/authorsTableData";
import projectsTableData from "layouts/tables/data/projectsTableData";

import airportsTableData from "layouts/Airports/data/airportsTableData";

import {useReadCypher} from 'use-neo4j'


function Airports() {

  const query = `MATCH (airport:Airport)
  RETURN DISTINCT airport.country;`


  const { columns, rows } = airportsTableData();
  const { columns: pColumns, rows: pRows } = projectsTableData();





  return (
    <DashboardLayout>
      <DashboardNavbar />
     
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Airports
                </MDTypography>

              </MDBox>
              <MDBox pr={1}>
              <FormControl variant="standard" sx={{ m: 3, minWidth: 120 }} >
                  <InputLabel id="demo-simple-select-label">Select Country</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Country"
                  >
                    <MenuItem value={10}>France</MenuItem>
                    <MenuItem value={20}>USA</MenuItem>
                    <MenuItem value={30}>Canada</MenuItem>
                  </Select>
                </FormControl>
              </MDBox>
              
              <MDBox pt={3}>
                <DataTable
                  table={{ columns, rows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid>

        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Airports;
