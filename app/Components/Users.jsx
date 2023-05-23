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
// import CDash from "../img/CDash.png";
import Cdetail from "../img/CDetail.png";
import CCart from "../img/CCart.png";
import {
  Container,
} from "./CardsStyle";
const paginas = [
  {
    id: 1,
    name: "CargiganGym",
    link: "https://cardigangym-santiaguero91.vercel.app",
    tecnologies:["html", "Javascript", "React", "Redux", "stlyedComponents", "Firebase", "auth0", "PostgreSql", ],
    logo: cardigan,
    photos: [cardiganhome,Cdetail,CCart,Clandin],
    description:
      "An Ecommerce for training gear and products for gyms and/or homes.",
  },
  {
    id: 2,
    name: "Henry-Countries",
    tecnologies:["html", "Javascript", "React", "Redux", "stlyedComponents", "APIs Integrations", "PostgreSql", ],

    link: "https://pi-countries-santiaguero91.vercel.app/home",
    logo: countries,
    photos: [HChome,HCdetail, HCform,HClandin],
    description: "A Webpage used to  search for countries and their tourist activities.",
  },
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
        />)
    }    
      )}
    </Container>
  );
}
export default Cards;
