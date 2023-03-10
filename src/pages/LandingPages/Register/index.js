

import { useState } from "react";
import { register } from "../Service/apiCall.js";

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";
import MuiLink from "@mui/material/Link";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";

// React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";

// React example components
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import SimpleFooter from "examples/Footers/SimpleFooter";

// React page layout routes
import routes from "routes";

// Images
import bgImage from "assets/images/Biblioteca_16.jpeg";
import SignIn from "../SignIn";

const RegisterBasic = () => {
  
  const [formValues, setFormValues] = useState({
    user_name:"",
    email:"",
    password:""

  });
  const handleChange = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value
    })

  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const saveUser = () => {
      register(formValues).then(() => {
        console.log("Registrado");
      }).catch((error) => alert("Error al registrar el usuario"));

    }
    saveUser();
  } 
  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "internal",
          route: "/pages/authentication/sign-in",
          component: <SignIn />,
          label: "Iniciar Sesión",
          color: "info",
        }}
        transparent
        light
      />
      <MKBox
        position="absolute"
        top={0}
        left={0}
        zIndex={1}
        width="100%"
        minHeight="100vh"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <MKBox px={1} width="100%" height="100vh" mx="auto" position="relative" zIndex={2}>
        <Grid container spacing={1} justifyContent="center" alignItems="center" height="100%">
          <Grid item xs={11} sm={9} md={5} lg={4} xl={3}>
            <Card>
              <MKBox
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
                mx={2}
                mt={-3}
                p={2}
                mb={1}
                textAlign="center"
              >
                <MKTypography variant="h4" fontWeight="medium" color="white" mt={1}>
                  Ingresa tus datos
                </MKTypography>
                <Grid container spacing={3} justifyContent="center" sx={{ mt: 1, mb: 2 }}>
                  <Grid item xs={2}>
                    <MKTypography component={MuiLink} href="https://www.facebook.com/Hector21x" variant="body1" color="white">
                      <FacebookIcon color="inherit" />
                    </MKTypography>
                  </Grid>
                  <Grid item xs={2}>
                    <MKTypography component={MuiLink} href="https://www.instagram.com/hector21x/" variant="body1" color="white">
                      <InstagramIcon color="inherit" />
                    </MKTypography>
                  </Grid>
                  <Grid item xs={2}>
                    <MKTypography component={MuiLink} href="https://twitter.com/?lang=es" variant="body1" color="white">
                      <TwitterIcon color="inherit" />
                    </MKTypography>
                  </Grid>
                  <Grid item xs={2}>
                    <MKTypography component={MuiLink} href="https://news.google.com/home?tab=mn&hl=es-419&gl=AR&ceid=AR:es-419" variant="body1" color="white">
                      <GoogleIcon color="inherit" />
                    </MKTypography>
                  </Grid>
                </Grid>
              </MKBox>
              <MKBox pt={4} pb={3} px={3}>
                <MKBox component="form" role="form" onSubmit={handleSubmit}>
                <MKBox mb={2}>
                    <MKInput type="text" label="Usuario" name="user_name" value={formValues.user_name} onChange={handleChange} required fullWidth />
                  </MKBox>
                  <MKBox mb={2}>
                    <MKInput type="email" label="Email" name="email" value={formValues.email} onChange={handleChange} required fullWidth />
                  </MKBox>
                  <MKBox mb={2}>
                    <MKInput type="password" label="Password" name="password" value={formValues.password} onChange={handleChange} required fullWidth />
                  </MKBox>
                  {/* <MKBox display="flex" alignItems="center" ml={-1}>
                    <Switch checked={rememberMe} onChange={handleSetRememberMe} />
                    <MKTypography
                      variant="button"
                      fontWeight="regular"
                      color="text"
                      onClick={handleSetRememberMe}
                      sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
                    >
                      &nbsp;&nbsp;Recuérdame
                    </MKTypography>
                  </MKBox> */}
                  <MKBox mt={4} mb={1}>
                    {/* <button>Registarme</button> */}
                      <MKButton type="submit" variant="gradient" color="info" fullWidth>
                      Registrarme
                      </MKButton>
                  </MKBox>
                 {/*  <MKBox mt={3} mb={1} textAlign="center">
                    <MKTypography variant="button" color="text">
                      No tenés una cuenta?{" "}
                      <MKTypography
                        component={Link}
                        to="/authentication/sign-up/cover"
                        variant="button"
                        color="info"
                        fontWeight="medium"
                        textGradient
                      >
                        Cerrar Sesión
                      </MKTypography>
                    </MKTypography>
                  </MKBox> */}
                </MKBox>
              </MKBox>
            </Card>
          </Grid>
        </Grid>
      </MKBox>
      <MKBox width="100%" position="absolute" zIndex={2} bottom="1.625rem">
        <SimpleFooter light />
      </MKBox>
    </>
  );
}

export default RegisterBasic;
