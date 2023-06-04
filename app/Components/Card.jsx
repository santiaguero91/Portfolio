"use client";
import Image from "next/image";
import Link from "next/link";
import {
  CardDiv,
  ProyectsName,
  ProyDescrip,
  CardStats,
  RightArrowStyles,
  LeftArrowStyles,
  ImageContainer,
  SeeButton,
} from "./CardsStyle";
import { useState } from "react";
import { useAppSelector} from "../../Redux/hooks"

function Card( {name, link, logo, photos, description}) {
  const [num, setNum] = useState(0);
  const count = useAppSelector(state=>state.counterReducer.counter)

  function sumNum() {
    num > 2 ? "" : setNum(num+1)
  }
  function restNum() {
    num < 1 ? "" : setNum(num-1)
  }

  return (
    <CardDiv
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
    >
      <CardStats>
        <div className="w-1/12 absolute rounded-full">
          <Image
            src={logo}
            alt="logo"
            className="w-1/2 absolute rounded-full"
          />
        </div>
        <ProyectsName>{name}</ProyectsName>
        <ProyDescrip>{description}</ProyDescrip>

        
        <ImageContainer>
          {
        num >= 1 ? <LeftArrowStyles onClick={(e) => restNum(e)}> ❰ </LeftArrowStyles> : ""
          }
          
          <Image
            src={photos[num]}
            alt="foto"
            className="mx-auto rounded-lg "
          />
          {
        num <= 2 ? <RightArrowStyles onClick={(e) => sumNum(e)}> ❱ </RightArrowStyles> : ""
          }
        </ImageContainer>

        <div className="flex flex-col"></div>
      </CardStats>
      <Link href={link}>
      {count === 1 ?<SeeButton>See the proyect</SeeButton>
 :<SeeButton>Ver el Proyecto</SeeButton>}
      </Link>
    </CardDiv>
  );
}
export default Card;

{
  /* 
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
            <Link href={pagina.link}>

            <SeeButton>See the proyect</SeeButton></Link>
          </CardDiv> 
        
        */
}
