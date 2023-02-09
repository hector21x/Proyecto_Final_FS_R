import Icon from "@mui/material/Icon";

// Pages
import AboutUs from "layouts/pages/landing-pages/about-us";
import ContactUs from "layouts/pages/landing-pages/contact-us";
// import SignIn from "layouts/pages/authentication/sign-in";
import Register from "layouts/pages/authentication/register";

// Sections
import PageHeaders from "layouts/sections/page-sections/page-headers";
import Features from "layouts/sections/page-sections/featuers";
import Navbars from "layouts/sections/navigation/navbars";
import NavTabs from "layouts/sections/navigation/nav-tabs";
import Pagination from "layouts/sections/navigation/pagination";
/* import Inputs from "layouts/sections/input-areas/inputs";
import Forms from "layouts/sections/input-areas/forms";
import Alerts from "layouts/sections/attention-catchers/alerts";
import Modals from "layouts/sections/attention-catchers/modals";
import TooltipsPopovers from "layouts/sections/attention-catchers/tooltips-popovers";
import Avatars from "layouts/sections/elements/avatars";
import Badges from "layouts/sections/elements/badges";
import BreadcrumbsEl from "layouts/sections/elements/breadcrumbs";
import Buttons from "layouts/sections/elements/buttons";
import Dropdowns from "layouts/sections/elements/dropdowns";
import ProgressBars from "layouts/sections/elements/progress-bars";
import Toggles from "layouts/sections/elements/toggles";
import Typography from "layouts/sections/elements/typography"; */

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
      /* {
        name: "input areas",
        description: "See all input areas",
        dropdown: true,
        collapse: [
          {
            name: "inputs",
            route: "/sections/input-areas/inputs",
            component: <Inputs />,
          },
          {
            name: "forms",
            route: "/sections/input-areas/forms",
            component: <Forms />,
          },
        ],
      }, */
      /* {
        name: "attention catchers",
        description: "See all examples",
        dropdown: true,
        collapse: [
          {
            name: "alerts",
            route: "/sections/attention-catchers/alerts",
            component: <Alerts />,
          },
          {
            name: "modals",
            route: "/sections/attention-catchers/modals",
            component: <Modals />,
          },
          {
            name: "tooltips & popovers",
            route: "/sections/attention-catchers/tooltips-popovers",
            component: <TooltipsPopovers />,
          },
        ],
      }, */
      /* {
        name: "elements",
        description: "See all 32 examples",
        dropdown: true,
        collapse: [
          {
            name: "avatars",
            route: "/sections/elements/avatars",
            component: <Avatars />,
          },
          {
            name: "badges",
            route: "/sections/elements/badges",
            component: <Badges />,
          },
          {
            name: "breadcrumbs",
            route: "/sections/elements/breadcrumbs",
            component: <BreadcrumbsEl />,
          },
          {
            name: "buttons",
            route: "/sections/elements/buttons",
            component: <Buttons />,
          },
          {
            name: "dropdowns",
            route: "/sections/elements/dropdowns",
            component: <Dropdowns />,
          },
          {
            name: "progress bars",
            route: "/sections/elements/progress-bars",
            component: <ProgressBars />,
          },
          {
            name: "toggles",
            route: "/sections/elements/toggles",
            component: <Toggles />,
          },
          {
            name: "typography",
            route: "/sections/elements/typography",
            component: <Typography />,
          },
        ],
      }, */
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
