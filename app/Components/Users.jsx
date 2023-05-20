"use client";

import cardigan from "../img/cardigan.png";
import countries from "../img/countries.png";
import Image from "next/image";
import Link from "next/link";
import cardiganhome from "../img/CardiganHome.png";
import HChome from "../img/HCountriesHome.png";
import {
  Container,
  CardDiv,
  ProyectsName,
  ProyDescrip,
  CardStats,
  RightArrowStyles,
  LeftArrowStyles,
  ImageContainer,
} from "./CardsStyle";
import { useState } from "react";
const paginas = [
  {
    id: 1,
    name: "CargiganGym",
    link: "https://cardigangym-santiaguero91.vercel.app",
    logo: cardigan,
    photo: cardiganhome,
    photo2: cardiganhome,
    photo3: cardiganhome,

    description:
      "Ecommerce for training gear and products for gyms and/or homes.",
  },
  {
    id: 2,
    name: "Henry-Countries",
    link: "https://www.youtube.com/watch?v=biCLAKvbA3s",
    logo: countries,
    photo: HChome,
    photo2: cardiganhome,
    photo3: cardiganhome,
    description: "Webpage used to  search countries and their activities.",
  },
];

function Cards() {
  const [ordenamiento, setOrdenamiento] = useState(0);

  return (
    <Container>
      {paginas.map((pagina) => (
        <Link href={pagina.link}>
          <CardDiv
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
          >
            <CardStats>
              <div className="w-1/12 absolute rounded-full">
                <Image
                  src={pagina.logo}
                  alt="logo"
                  className="w-1/2 absolute rounded-full"
                />
              </div>
              <ProyectsName>{pagina.name}</ProyectsName>
              <ProyDescrip>{pagina.description}</ProyDescrip>
              <ImageContainer>
                <LeftArrowStyles> ❰ </LeftArrowStyles>
                <Image
                  src={pagina.photo}
                  alt="foto"
                  className="mx-auto rounded-lg "
                />
                <RightArrowStyles> ❱ </RightArrowStyles>
              </ImageContainer>

              <div className="flex flex-col"></div>
            </CardStats>
          </CardDiv>
        </Link>
      ))}
    </Container>
  );
}
export default Cards;
