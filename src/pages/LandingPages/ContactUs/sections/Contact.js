import { useState } from "react";
import { message } from "pages/LandingPages/Service/apiMessage.js";
// components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// React components
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
// import SelectionUs from "./SelectionUs";

// Images
import bgImage from "assets/images/Biblioteca_9.jpeg";

function Contact() {
  const [formValues, setFormValues] = useState({
    operador:"",
    client_name:"",
    message_body:""

  });
  const handleChange = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value
    })

  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const saveClient = () => {
      message(formValues).then(() => {
        console.log("Registrado");
      }).catch((error) => alert("Error al registrar el usuario"));

    }
    saveClient();
  } 
  return (
    <MKBox component="section" py={{ xs: 0, lg: 6 }}>
      <Container>
        <Grid container item>
          <MKBox
            width="100%"
            bgColor="white"
            borderRadius="xl"
            shadow="xl"
            mb={6}
            sx={{ overflow: "hidden" }}
          >
            <Grid container spacing={2}>
              <Grid
                item
                xs={12}
                lg={5}
                position="relative"
                px={0}
                sx={{
                  backgroundImage: ({
                    palette: { gradients },
                    functions: { rgba, linearGradient },
                  }) =>
                    `${linearGradient(
                      rgba(gradients.dark.main, 0.8),
                      rgba(gradients.dark.state, 0.8)
                    )}, url(${bgImage})`,
                  backgroundSize: "cover",
                }}
              >
                <MKBox
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  width="100%"
                  height="100%"
                >
                  <MKBox py={6} pr={6} pl={{ xs: 6, sm: 12 }} my="auto">
                    <MKTypography variant="h3" color="white" mb={1}>
                      Informaci??n de Contacto
                    </MKTypography>
                    <MKTypography variant="body2" color="white" opacity={0.8} mb={3}>
                      Agradecemos tus comentarios, para los cuales obtendr??s respuestas en 48 hs aproximadamente.
                    </MKTypography>
                    <MKBox display="flex" p={1}>
                      <MKTypography variant="button" color="white">
                        <i className="fas fa-phone" />
                      </MKTypography>
                      <MKTypography
                        component="span"
                        variant="button"
                        color="white"
                        opacity={0.8}
                        ml={2}
                        fontWeight="regular"
                      >
                        (+54) 9 3814190494
                      </MKTypography>
                    </MKBox>
                    <MKBox display="flex" color="white" p={1}>
                      <MKTypography variant="button" color="white">
                        <i className="fas fa-envelope" />
                      </MKTypography>
                      <MKTypography
                        component="span"
                        variant="button"
                        color="white"
                        opacity={0.8}
                        ml={2}
                        fontWeight="regular"
                      >
                        info@bibliotecaturing.com.ar
                      </MKTypography>
                    </MKBox>
                    <MKBox display="flex" color="white" p={1}>
                      <MKTypography variant="button" color="white">
                        <i className="fas fa-map-marker-alt" />
                      </MKTypography>
                      <MKTypography
                        component="span"
                        variant="button"
                        color="white"
                        opacity={0.8}
                        ml={2}
                        fontWeight="regular"
                      >
                        Rivadavia 1050 - S. M. de Tucum??n, CP 4000
                      </MKTypography>
                    </MKBox>
                    <MKBox mt={3}>
                      <MKButton variant="text" color="white" size="large" href="https://www.facebook.com/Hector21x" target="_blank" iconOnly>
                        <i className="fab fa-facebook" style={{ fontSize: "1.25rem" }} />
                      </MKButton>
                      <MKButton variant="text" color="white" size="large" href="https://twitter.com/?lang=es" target="_blank" iconOnly>
                        <i className="fab fa-twitter" style={{ fontSize: "1.25rem" }} />
                      </MKButton>
                      <MKButton variant="text" color="white" size="large" href="https://news.google.com/home?tab=mn&hl=es-419&gl=AR&ceid=AR:es-419" target="_blank" iconOnly>
                        <i className="fab fa-google-plus" style={{ fontSize: "1.25rem" }} />
                      </MKButton>
                      <MKButton variant="text" color="white" size="large" href="https://www.instagram.com/hector21x/" target="_blank" iconOnly>
                        <i className="fab fa-instagram" style={{ fontSize: "1.25rem" }} />
                      </MKButton>
                    </MKBox>
                  </MKBox>
                </MKBox>
              </Grid>
              <Grid item xs={12} lg={7}>
                <MKBox component="form" p={2} method="post" onSubmit={handleSubmit}>
                  <MKBox px={3} py={{ xs: 2, sm: 6 }}>
                    <MKTypography variant="h2" mb={1}>
                      Hola, c??mo est??s?
                    </MKTypography>
                    <MKTypography variant="body1" color="text" mb={2}>
                      Nos gustar??a saber que pens??s.
                    </MKTypography>
                  </MKBox>
                  <MKBox pt={0.5} pb={3} px={3}>
                    <Grid container>
                      <Grid item xs={12} pr={1} mb={6}>
                      <MKInput
                          type="text"
                          variant="standard"
                          label="Estoy buscando a"
                          placeholder="Quiero dejar un mensaje a..."
                          name="operador"
                          value={formValues.operador} onChange={handleChange} required
                          InputLabelProps={{ shrink: true }}
                          fullWidth
                        />  
                      {/* <SelectionUs/> */}
                      </Grid>
                      <Grid item xs={12} pr={1} mb={6}>
                      <MKInput
                          type="text"
                          variant="standard"
                          label="Mi nombre es"
                          placeholder="Nombre Completo"
                          name="client_name"
                          value={formValues.client_name} onChange={handleChange} required
                          InputLabelProps={{ shrink: true }}
                          fullWidth
                        />
                      </Grid>
                      <Grid item xs={12} pr={1} mb={6}>
                        <MKInput
                          type="text"
                          variant="standard"
                          label="Deje su mensaje"
                          placeholder="Quiero decir que..."
                          name="message_body"
                          value={formValues.message_body} onChange={handleChange} required
                          InputLabelProps={{ shrink: true }}

                          fullWidth
                          multiline
                          rows={6}
                        />
                      </Grid>
                    </Grid>
                    <Grid
                      container
                      item
                      xs={12}
                      md={6}
                      justifyContent="flex-end"
                      textAlign="right"
                      ml="auto"
                    >
                      <MKButton type="submit" variant="gradient" color="info">
                        Enviar Mensaje
                      </MKButton>
                    </Grid>
                  </MKBox>
                </MKBox>
              </Grid>
            </Grid>
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Contact;
