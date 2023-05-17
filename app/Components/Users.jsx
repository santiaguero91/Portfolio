import cardigan from "../img/cardigan.png";
import countries from "../img/countries.png";
import Image from "next/image";
import Link from "next/link"
import cardiganhome from "../img/CardiganHome.png";
import {Container, CardDiv} from "./CardsStyle";
const paginas = [
  {
    id: 1,
    name: "CargiganGym",
    link: "https://cardigangym-santiaguero91.vercel.app",
    logo: cardigan,
    photo: cardiganhome,
    description: "Ecommerce for training gear and products for gyms and/or homes."
  },
  { 
    id: 1,
    name: "Henry-Countries",
    link: "https://www.youtube.com/watch?v=biCLAKvbA3s",
    logo: countries,
    photo: cardiganhome,
    description: "Webpage used to  search countries and their activities."
  },
];

function Cards() {
  return (

    <Container>
      {paginas.map((pagina) => (
        <Link href={pagina.link}>
        <CardDiv>
          <div className="mx-auto">
          <Image src={pagina.photo} alt="foto" className="mx-auto rounded-lg " />
          <div className="flex flex-col">
          <h1 className="mt-5 font-bold " >{pagina.name}</h1>
          <h1 className="mt-5">{pagina.description}</h1>
          </div>
          </div>
        </CardDiv>
        </Link>

      ))}
      </Container>

  );
}
export default Cards;
