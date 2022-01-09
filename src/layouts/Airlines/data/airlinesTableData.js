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


  const query = `MATCH (airline:Airline)
  RETURN airline.name,airline.country,airline.ICAO;`
  let country="France"
  const params = { country }
  const {
    loading,
    error,
    records,
    first 
  } = useReadCypher(query, params)

  let airlinename
  let airlines;
  if(first != undefined){
      airlinename = first.get('airline.name')
    console.log(airlinename)
  }
  
  if(records != undefined){
     airlines = records.map(row => 
       { var al = {};
        
       al.Name = (<MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">{row.get('airline.name')}</MDTypography>)
       al.Country = (<MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">{row.get('airline.country')}</MDTypography>)
       al.ICAO = (<MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">{row.get('airline.ICAO')}</MDTypography>)
        return al}
        
        )
    console.log(airlines)
    return {
        columns: [
          { Header: "Name", accessor: "Name", width: "45%", align: "left" },
          { Header: "ICAO", accessor: "ICAO", align: "left" },
          { Header: "Country", accessor: "Country", align: "center" },
        ],
    
        rows:airlines ,
      };
  }else{
      return{
        columns: [
            { Header: "Name", accessor: "Name", width: "45%", align: "left" },
            { Header: "ICAO", accessor: "ICAO", align: "left" },
            { Header: "Country", accessor: "Country", align: "center" },
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