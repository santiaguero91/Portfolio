"use client";
import Card from "./Card";
import cardigan from "../img/cardigan.png";
import countries from "../img/countries.png";
import cardiganhome from "../img/CardiganHome.png";
import HChome from "../img/HCountriesHome.png";
import HClandin from "../img/HCLanding.png";
import HCdetail from "../img/HCDetails.png";
import HCform from "../img/HCForm.png";
import Clandin from "../img/CLandin.png";
import Cdetail from "../img/CDetail.png";
import CCart from "../img/CCart.png";
import PortHome from "../img/PortHome.png";
import PortAbout from "../img/PortAbout.png";
import PortProyects from "../img/PortProyects.png";
import PortContact from "../img/PortContact.png";
import foto from "../img/Portfolio.png";
import { Container } from "./CardsStyle";

//icons
import { BiLogoFirebase } from "react-icons/bi";
import { BsGit, BsTrello } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { IoLogoNodejs, IoLogoJavascript } from "react-icons/io";
import { IoLogoReact } from "react-icons/io5";
import {
  SiAuth0,
  SiStyledcomponents,
  SiExpress,
  SiPostgresql,
  SiSequelize,
  SiRedux,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";


const paginas = [
  {
    id: 1,
    name: "CargiganGym",
    link: "https://cardigangym-santiaguero91.vercel.app",
    logo: cardigan,
    tasks:
      "I designed most of the user interface with special attention to UX and the modern design, made the integration with Mercado Pago and its conection in the backend, deploy",
      tasksEsp: "Diseñé la mayor parte de la interfaz de usuario con especial atención a UX y el diseño moderno, realicé la integración con Mercado Pago y su conexión en el backend, deployment",
      photos: [cardiganhome, Cdetail, CCart, Clandin],
    description:
      "An Ecommerce for training gear and products for gyms and/or homes.",
      descriptionEsp:
      "Un Ecommerce de materiales y productos de entrenamiento para gimnasios y/u hogares.",
    skills:
      "Leadership, teamwork, attention to detail, assertive communication.",
      skillsEsp:
      "Liderazgo, trabajo en equipo, atención al detalle, comunicación asertiva.", 
    technologies: [
      <IoLogoReact key="1" title="ReactJS" />,
      <SiRedux key="2" title="Redux" />,
      <IoLogoJavascript key="3" title="JavaScript" />,
      <SiStyledcomponents key="4" title="Styledcomponents" />,
      <BiLogoFirebase key="5" title="Firebase"/>,
      <SiAuth0 key="6" title="Auth0"/>,
      <IoLogoNodejs key="7" title="NodeJS" />,
      <SiExpress key="8" title="Express" />,
      <SiSequelize key="9" title="Sequelize" />,
      <SiPostgresql key="10" title="PostgreSQL" />,
      <BsGit key="11" title="Git" />,
      <AiFillGithub key="12" title="GitHub" />,
      <BsTrello key="13" title="Trello" />,
    ],
  },
  {
    id: 2,
    name: "Henry-Countries",
    technologies: [
      <IoLogoReact key="1" title="ReactJS" />,
      <SiRedux key="2" title="Redux" />,
      <IoLogoJavascript key="3" title="JavaScript" />,
      <SiStyledcomponents key="4" title="Styledcomponents" />,
      <IoLogoNodejs key="5" title="NodeJS" />,
      <SiExpress key="6" title="Express" />,
      <SiSequelize key="7" title="Sequelize" />,
      <SiPostgresql key="8" title="PostgreSQL" />,
      <BsGit key="9" title="Git" />,
      <AiFillGithub key="10" title="GitHub"/>,
    ],
    tasks:
      "I built the models and relations using Sequelize and PostgreSQL for the data. The back-end was developed in Node.js using Express. The front-end was built with a minimalist design. It features a controlled form where users can add new activities and receive success or error responses from the back-end.",
      tasksEsp:
      "Construí los modelos y las relaciones usando Sequelize y PostgreSQL para los datos. El back-end se desarrolló en Node.js usando Express. El front-end se construyó con un diseño minimalista. Cuenta con un formulario controlado donde los usuarios pueden agregar nuevas actividades y recibir respuestas de éxito o error del back-end.",    
      link: "https://pi-countries-santiaguero91.vercel.app/",
    logo: countries,
    photos: [HChome, HCdetail, HCform, HClandin],
    description:
      "A Webpage used to  search for countries and their tourist activities.",
      descriptionEsp:
      "Una página web utilizada para buscar países y sus actividades turísticas.",
    skills: "Autonomy, organization, dry code.",
    skillsEsp: "Autonomía, organización, código seco.",
  },{
    id: 3,
    name: "Portfolio",
    technologies: [
      <TbBrandNextjs key="1" title="Nextjs" />,
      <SiRedux key="2" title="Redux" />,
      <IoLogoJavascript key="3" title="JavaScript" />,
      <SiStyledcomponents key="4" title="Styledcomponents" />,
      <IoLogoNodejs key="5" title="NodeJS" />,
      <BsGit key="6" title="Git" />,
      <AiFillGithub key="7" title="GitHub"/>,
    ],
    tasks:
      "I used my Portfolio as an opportunity to learn and apply the features of Next.js, such as server-side rendering, client-side rendering, page routing, SEO, among others.",
      tasksEsp:
      "Utilize mi Portfolio como oportunidad para aprender y aplicar las funciones de Next.js, como el renderizado del lado del servidor, el renderizado del lado del cliente, el enrutamiento de páginas, SEO, entre otros.",    
      link: "https://portfolio-santiago-aguero-91.vercel.app",
    logo: foto,
    photos: [PortAbout, PortHome, PortProyects,PortContact],
    description:
      "I developed the entire Portfolio from scratch, including selecting a color palette and implementing all the necessary features. The contact form is controlled and utilizes Nodemailer to send emails to my personal Gmail account",
      descriptionEsp:
      "Desarrollé todo el Portfolio desde cero, incluyendo la selección de una paleta de colores y la implementación de todas las funciones necesarias. El formulario de contacto está controlado y utiliza Nodemailer para enviar correos electrónicos a mi cuenta personal de Gmail",
    skills: "Autonomy, organization, coding patterns.",
    skillsEsp: "Autonomía, organización, patrones de codificación.",

  }
];

function Cards() {
  return (
    <Container>
      {paginas.map((pagina) => {
        return (
          <Card
            key={pagina.id}
            name={pagina.name}
            link={pagina.link}
            logo={pagina.logo}
            photos={pagina.photos}
            description={pagina.description}
            tasks={pagina.tasks}
            skills={pagina.skills}
            technologies={pagina.technologies}
            descriptionEsp={pagina.descriptionEsp}
            skillsEsp={pagina.skillsEsp}
            tasksEsp={pagina.tasksEsp}
          />
        );
      })}
    </Container>
  );
}
export default Cards;
