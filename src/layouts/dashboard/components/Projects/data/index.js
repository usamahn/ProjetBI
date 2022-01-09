/* eslint-disable react/prop-types */
// @mui material components
import Tooltip from "@mui/material/Tooltip";

// Soft UI Dashboard React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDProgress from "components/MDProgress";

// Images
import logoXD from "assets/images/small-logos/logo-xd.svg";
import logoAtlassian from "assets/images/small-logos/logo-atlassian.svg";
import logoSlack from "assets/images/small-logos/logo-slack.svg";
import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
import logoJira from "assets/images/small-logos/logo-jira.svg";
import logoInvesion from "assets/images/small-logos/logo-invision.svg";
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

export default function data() {
  const avatars = (members) =>
    members.map(([image, name]) => (
      <Tooltip key={name} title={name} placeholder="bottom">
        <MDAvatar
          src={image}
          alt="name"
          size="xs"
          sx={{
            border: ({ borders: { borderWidth }, palette: { white } }) =>
              `${borderWidth[2]} solid ${white.main}`,
            cursor: "pointer",
            position: "relative",

            "&:not(:first-of-type)": {
              ml: -1.25,
            },

            "&:hover, &:focus": {
              zIndex: "10",
            },
          }}
        />
      </Tooltip>
    ));

  const Company = ({ image, name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDTypography variant="button" fontWeight="medium" ml={1} lineHeight={1}>
        {name}
      </MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "Comments", accessor: "Comments", width: "45%", align: "left" },
      { Header: "by", accessor: "by", width: "10%", align: "left" },
      { Header: "Airline", accessor: "Airline", align: "center" },
      { Header: "Sentiment", accessor: "Sentiment", align: "center" },
      { Header: "Confidence", accessor: "Confidence", align: "center" },
    ],

    rows: [
      {
        Comments: <MDTypography variant="caption" color="text" fontWeight="medium">@VirginAmerica What @dhepburn said.</MDTypography>,
        by: (
          <MDBox display="flex" py={1}>
            {avatars([
              [team1, "Ryan Tompson"],

            ])}
            <MDTypography variant="caption" color="text" fontWeight="medium">
            cairdin
          </MDTypography>
          </MDBox>
        ),
        Airline: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            Virgin America
          </MDTypography>
        ),
        Sentiment: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            Neutral
          </MDTypography>
        ),
        Confidence: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={100} color="success" variant="gradient" label={false} />
          </MDBox>
        ),
      },


      {
        Comments: <MDTypography variant="caption" color="text" fontWeight="medium">@VirginAmerica yes, nearly every time I fly VX this year worm won۪t go away</MDTypography>,
        by: (
          <MDBox display="flex" py={1}>
            {avatars([
              [team1, "Ryan Tompson"],

            ])}
            <MDTypography variant="caption" color="text" fontWeight="medium">
            cjmcginnis
          </MDTypography>
          </MDBox>
        ),
        Airline: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            Virgin America
          </MDTypography>
        ),
        Sentiment: (
          <MDTypography variant="caption" color="success" fontWeight="medium">
            positive
          </MDTypography>
        ),
        Confidence: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={67.45} color="info" variant="gradient" label={false} />
          </MDBox>
        ),
      },



      {
        Comments: <MDTypography variant="caption" color="text" fontWeight="medium">@united A measly $50 e-certificate is not how you appreciate loyal customers after<br/> they wait 3hrs on the tarmac during UA1116. #unacceptable</MDTypography>,
        by: (
          <MDBox display="flex" py={1}>
            {avatars([
              [team1, "Ryan Tompson"],

            ])}
            <MDTypography variant="caption" color="text" fontWeight="medium">
            cristobalwong
          </MDTypography>
          </MDBox>
        ),
        Airline: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            United
          </MDTypography>
        ),
        Sentiment: (
          <MDTypography variant="caption" color="error" fontWeight="medium">
            negative
          </MDTypography>
        ),
        Confidence: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={66.95} color="success" variant="gradient" label={false} />
          </MDBox>
        ),
      },



      {
        Comments: <MDTypography variant="caption" color="text" fontWeight="medium">@united Just sent! Thanks :)</MDTypography>,
        by: (
          <MDBox display="flex" py={1}>
            {avatars([
              [team1, "Ryan Tompson"],

            ])}
            <MDTypography variant="caption" color="text" fontWeight="medium">
            iworkinsmm
          </MDTypography>
          </MDBox>
        ),
        Airline: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            United
          </MDTypography>
        ),
        Sentiment: (
          <MDTypography variant="caption" color="success" fontWeight="medium">
            positive
          </MDTypography>
        ),
        Confidence: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={35.86} color="error" variant="gradient" label={false} />
          </MDBox>
        ),
      },


      {
        Comments: <MDTypography variant="caption" color="text" fontWeight="medium">@VirginAmerica What @dhepburn said.</MDTypography>,
        by: (
          <MDBox display="flex" py={1}>
            {avatars([
              [team1, "Ryan Tompson"],

            ])}
            <MDTypography variant="caption" color="text" fontWeight="medium">
            cairdin
          </MDTypography>
          </MDBox>
        ),
        Airline: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            Virgin America
          </MDTypography>
        ),
        Sentiment: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            Neutral
          </MDTypography>
        ),
        Confidence: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={100} color="success" variant="gradient" label={false} />
          </MDBox>
        ),
      },



      {
        Comments: <MDTypography variant="caption" color="text" fontWeight="medium">@VirginAmerica What @dhepburn said.</MDTypography>,
        by: (
          <MDBox display="flex" py={1}>
            {avatars([
              [team1, "Ryan Tompson"],

            ])}
            <MDTypography variant="caption" color="text" fontWeight="medium">
            cairdin
          </MDTypography>
          </MDBox>
        ),
        Airline: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            Virgin America
          </MDTypography>
        ),
        Sentiment: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            Neutral
          </MDTypography>
        ),
        Confidence: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={100} color="success" variant="gradient" label={false} />
          </MDBox>
        ),
      },























      {
        companies: <Company image={logoAtlassian} name="Add Progress Track" />,
        members: (
          <MDBox display="flex" py={1}>
            {avatars([
              [team2, "Romina Hadid"],
              [team4, "Jessica Doe"],
            ])}
          </MDBox>
        ),
        budget: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            $3,000
          </MDTypography>
        ),
        completion: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={10} color="info" variant="gradient" label={false} />
          </MDBox>
        ),
      },
      {
        companies: <Company image={logoSlack} name="Fix Platform Errors" />,
        members: (
          <MDBox display="flex" py={1}>
            {avatars([
              [team1, "Ryan Tompson"],
              [team3, "Alexander Smith"],
            ])}
          </MDBox>
        ),
        budget: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            Not set
          </MDTypography>
        ),
        completion: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={100} color="success" variant="gradient" label={false} />
          </MDBox>
        ),
      },
      {
        companies: <Company image={logoSpotify} name="Launch our Mobile App" />,
        members: (
          <MDBox display="flex" py={1}>
            {avatars([
              [team4, "Jessica Doe"],
              [team3, "Alexander Smith"],
              [team2, "Romina Hadid"],
              [team1, "Ryan Tompson"],
            ])}
          </MDBox>
        ),
        budget: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            $20,500
          </MDTypography>
        ),
        completion: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={100} color="success" variant="gradient" label={false} />
          </MDBox>
        ),
      },
      {
        companies: <Company image={logoJira} name="Add the New Pricing Page" />,
        members: (
          <MDBox display="flex" py={1}>
            {avatars([[team4, "Jessica Doe"]])}
          </MDBox>
        ),
        budget: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            $500
          </MDTypography>
        ),
        completion: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={25} color="info" variant="gradient" label={false} />
          </MDBox>
        ),
      },
      {
        companies: <Company image={logoInvesion} name="Redesign New Online Shop" />,
        members: (
          <MDBox display="flex" py={1}>
            {avatars([
              [team1, "Ryan Tompson"],
              [team4, "Jessica Doe"],
            ])}
          </MDBox>
        ),
        budget: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            $2,000
          </MDTypography>
        ),
        completion: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={40} color="info" variant="gradient" label={false} />
          </MDBox>
        ),
      },
    ],
  };
}
