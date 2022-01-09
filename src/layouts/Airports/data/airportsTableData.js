/* eslint-disable react/prop-types */

// Soft UI Dashboard React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";
import {useReadCypher} from 'use-neo4j'

// Images
// import logoXD from "assets/images/small-logos/logo-xd.svg";
// import logoAtlassian from "assets/images/small-logos/logo-atlassian.svg";
// import logoSlack from "assets/images/small-logos/logo-slack.svg";
// import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
// import logoJira from "assets/images/small-logos/logo-jira.svg";
// import logoInvesion from "assets/images/small-logos/logo-invision.svg";


export default function data() {


  const query = `MATCH (airport:Airport)
  WHERE airport.country = $country 
  RETURN airport.name,airport.city,airport.country,airport.IATA,airport.TimeZone;`
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
      console.log(airports)
    airportname = first.get('airport.name')
    console.log(airportname)
  }
  
  if(records != undefined){
     airports = records.map(row => 
       { var ap = {};
        
        ap.Name = (<MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">{row.get('airport.name')}</MDTypography>)
        ap.City = (<MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">{row.get('airport.city')}</MDTypography>)
        ap.Country = (<MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">{row.get('airport.country')}</MDTypography>)
        ap.IATA = (<MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">{row.get('airport.IATA')}</MDTypography>)
        ap.TimeZone = (<MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">{row.get('airport.TimeZone')}</MDTypography>)
        return ap}
        
        )
    console.log(airports)
    return {
        columns: [
          { Header: "Name", accessor: "Name", width: "45%", align: "left" },
          { Header: "IATA", accessor: "IATA", align: "left" },
          { Header: "City", accessor: "City", align: "center" },
          { Header: "Country", accessor: "Country", align: "center" },
          { Header: "TimeZone", accessor: "TimeZone", align: "center" },
        ],
    
        rows:airports ,
      };
  }else{
      return{
        columns: [
            { Header: "Name", accessor: "Name", width: "45%", align: "left" },
            { Header: "IATA", accessor: "IATA", align: "left" },
            { Header: "City", accessor: "City", align: "center" },
            { Header: "Country", accessor: "Country", align: "center" },
            { Header: "TimeZone", accessor: "TimeZone", align: "center" },
          ],
      
          rows:[] 
        };
      }
  


}
/*

{
        city: <Author image={team2} name="John Michael" email="john@creative-tim.com" />,
        function: <Job title="Manager" description="Organization" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            23/04/18
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },



*/