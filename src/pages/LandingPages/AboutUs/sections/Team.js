/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import HorizontalTeamCard from "examples/Cards/TeamCards/HorizontalTeamCard";

// Images
import team1 from "assets/images/FOTO_Hector.jpg";
import team2 from "assets/images/FOTO_Nico.jpeg";
import team3 from "assets/images/FOTO_Diego.jpeg";
import team4 from "assets/images/FOTO_Nico_1.jpeg";

function Team() {
  return (
    <MKBox
      component="section"
      variant="gradient"
      bgColor="dark"
      position="relative"
      py={6}
      px={{ xs: 2, lg: 0 }}
      mx={-2}
    >
      <Container>
        <Grid container>
          <Grid item xs={12} md={8} sx={{ mb: 6 }}>
            <MKTypography variant="h3" color="white">
              Nuestro Equipo
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              Te presentamos a nuestro equipo, el cual y gracias a tu colaboración hemos contruido la biblioteca digital gratuita más grande de Tucumán. 
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={team1}
                name="Héctor Vera"
                position={{ color: "info", label: "Front-End Developer" }}
                description="Ing. en Sistemas de profesión, está dedicado desde sus inicios a la Gestión y Administración de Recursos Informáticos para proyectos orientados a la IA."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={team2}
                name="Nicolás Íñigo"
                position={{ color: "info", label: "Back-End Developer" }}
                description="Estudiante avanzado de Ing. Mecánica de la UTN-FRT de 29 años. B1 Speaker English. Process Developer"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={team3}
                name="Diego Herrera"
                position={{ color: "info", label: "collaborator" }}
                description="Estudiante de Ingeniería de la UTN-FRT."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={team4}
                name="Nicolás Lizarrraga"
                position={{ color: "info", label: "collaborator" }}
                description="Estudiante de Ingeniería de la UTN-FRT."
              />
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Team;
