import Icon from "@mui/material/Icon";

// Pages
import AboutUs from "layouts/pages/landing-pages/about-us";
import ContactUs from "layouts/pages/landing-pages/contact-us";
import SignIn from "layouts/pages/authentication/sign-in";
import Register from "layouts/pages/authentication/register";

// Sections
import PageHeaders from "layouts/sections/page-sections/page-headers";
import Features from "layouts/sections/page-sections/featuers";
import Navbars from "layouts/sections/navigation/navbars";
import NavTabs from "layouts/sections/navigation/nav-tabs";
import Pagination from "layouts/sections/navigation/pagination";

const routes = [
  {
    name: "conócenos",
    icon: <Icon>dashboard</Icon>,
    columns: 1,
    rowsPerColumn: 2,
    collapse: [
      {
        name: "Organización",
        collapse: [
          {
            name: "Nosotros",
            route: "/pages/landing-pages/about-us",
            component: <AboutUs />,
          },
          {
            name: "Contáctanos",
            route: "/pages/landing-pages/contact-us",
            component: <ContactUs />,
          },
        ],
      },
      {
        name: "tu cuenta",
        collapse: [
          {
            name: "Iniciar Sesión",
            route: "/pages/authentication/sign-in",
            component: <SignIn />,
          },
          {
            name: "Regístrate",
            route: "/pages/authentication/register",
            component: <Register />,
          },
        ],
      },
    ],
  },
  {
    name: "servicios",
    icon: <Icon>view_day</Icon>,
    collapse: [
      {
        name: "Búsquedas y descargas",
        description: "Filtre sus obras y descárguelas",
        dropdown: true,
        collapse: [
          {
            name: "Nacionales e Internacionales",
            route: "/sections/page-sections/page-headers",
            component: <PageHeaders />,
          },
          {
            name: "Estrenos",
            route: "/sections/page-sections/features",
            component: <Features />,
          },
        ],
      },
      {
        name: "Descargar Resúmenes",
        description: "Filtre y descargue sus resúmenes",
        dropdown: true,
        collapse: [
          {
            name: "Papers",
            route: "/sections/navigation/navbars",
            component: <Navbars />,
          },
          {
            name: "Libros",
            route: "/sections/navigation/nav-tabs",
            component: <NavTabs />,
          },
          /* {
            name: "pagination",
            route: "/sections/navigation/pagination",
            component: <Pagination />,
          }, */
        ],
      },
    ],
  },
  {
    name: "Lectura gratuita Online",
    icon: <Icon>article</Icon>,
    collapse: [
      {
        name: "género",
        description: "Filtro por géneros literarios",
        route: "/sections/navigation/pagination",
        component: <Pagination />,
      },
      {
        name: "nivel educativo",
        description: "Filtro por niveles de la educación",
        href: "",
      },
      {
        name: "áreas de conocimientos",
        description: "Filtro por diferentes ciencias",
        href: "",
      },
      {
        name: "rango etario",
        description: "Filtro por edad del lector",
        href: "",
      },
    ],
  },
];

export default routes;
