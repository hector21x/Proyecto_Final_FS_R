// icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";

// React components
import MKTypography from "components/MKTypography";

// Images
import logoCT from "assets/images/Arriba.png";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "Redes Sociales",
    image: logoCT,
    route: "/",
  },
  socials: [
    {
      icon: <FacebookIcon />,
      link: "https://www.facebook.com/",
    },
    {
      icon: <TwitterIcon />,
      link: "https://twitter.com/",
    },
    {
      icon: <GitHubIcon />,
      link: "https://github.com/hector21x",
    },
    {
      icon: <YouTubeIcon />,
      link: "https://www.youtube.com/channel/UC_gtFkahlvlcfcATgaoxvnQ",
    },
  ],
  menus: [
    {
      name: "Organización",
      items: [
        { name: "Front-End Developer", href: "https://www.linkedin.com/in/h%C3%A9ctor-vera-0a65a012b/" },
        { name: "Back-End Developer", href: "https://www.linkedin.com/in/nicolas-%C3%AD%C3%B1igo-1a5b91239/" },
        { name: "UTN-FRT", href: "http://www.frt.utn.edu.ar/" },
        { name: "GITIA", href: "www.gitia.org" },
      ],
    },
    {
      name: "Bibliotecas Universales",
      items: [
        { name: "Springer", href: "https://link.springer.com/" },
        { name: "Google Académico", href: "https://scholar.google.es/schhp?hl=es" },
        { name: "SciELO", href: "https://scielo.org/" },
      ],
    },
    {
      name: "Ayuda y Soporte",
      items: [
        { name: "Héctor Vera", href: "mailto:hvera@frt.utn.edu.ar" },
        { name: "Nicolás Iñigo", href: "mailto:ninigo93@gmail.com" },
        { name: "Diego Herrera ", href: "mailto:mail@gmail.com" },
        { name: "Nicolás Lizarraga", href: "mailto:mail_1@gmail.com" },
      ],
    },
    {
      name: "Terminos Legales",
      items: [
        { name: "Propiedad Intelectual", href: "https://www.cervantesvirtual.com/marco-legal/#propiedad" },
        { name: "Condiciones de Uso", href: "https://www.cervantesvirtual.com/marco-legal/#acceso" },
      ],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      Todos los derechos reservados. Copyright &copy; {date} Biblioteca Comunitaria Alan Turing para {" "}
      <MKTypography
        component="a"
        href="https://www.gitia.org"
        target="_blank"
        rel="noreferrer"
        variant="button"
        fontWeight="regular"
      >
        GITIA / UTN-FRT
      </MKTypography>
      .
    </MKTypography>
  ),
};
