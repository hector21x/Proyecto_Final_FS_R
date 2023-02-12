

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// React components
import MKBox from "components/MKBox";

// React examples
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import Register from "layouts/pages/authentication/register";

// Images
import bgFront from "assets/images/rotating-card-bg-front.jpeg";
import bgBack from "assets/images/rotating-card-bg-back.jpeg";

function Information() {
  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                icon="touch_app"
                title={
                  <>
                    Comienza a vivir
                    <br />
                    una experiencia diferente
                  </>
                }
                description="Somos biblioteca comunitaria online gratuita más grande de Tucumán."
              />
              <RotatingCardBack
                image={bgBack}
                title="Descubre más"
                description="Regístrate y con solo compartir tus obras literarias, podrás acceder a las obras compartidas por nuestra comunidad."
                action={{
                  type: "external",
                  route: "/pages/authentication/register",
                  component: <Register />,
                  label: "Regístrate",
                }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="devices"
                  title="Género"
                  description="Filtra por nuestros diferentes géneros literarios y encuentra lo que buscas."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="devices"
                  title="Nivel Educativo"
                  description="Filtra por nivel educativo y encuentra la obra más adecuada para el nivel en el estudias."
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="devices"
                  title="Áreas de Conocmiento"
                  description="Filtra por las variadas ciencias de las que se nutre nuestra comunidad."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="devices"
                  title="Rango Etario"
                  description="Filtra por edad de acuerdo al nivel de dificultad que busques."
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
