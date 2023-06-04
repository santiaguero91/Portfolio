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
import { useAppSelector } from "../../Redux/hooks";
import { Container } from "./Slider/CarrouselStyle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { EffectCoverflow, Pagination, Navigation } from "swiper";

function Card({ name, link, logo, photos, description }) {
  const [num, setNum] = useState(0);
  const count = useAppSelector((state) => state.counterReducer.counter);

  function sumNum() {
    num > 2 ? "" : setNum(num + 1);
  }
  function restNum() {
    num < 1 ? "" : setNum(num - 1);
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
          <Container>
            
          <div className="slider-controler">
          <RightArrowStyles className="swiper-button-prev slider-arrow">
          ❰
          </RightArrowStyles>
          <LeftArrowStyles className="swiper-button-next slider-arrow">
          ❱
          </LeftArrowStyles>
        </div>

            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              slidesperview={"auto"}
              coverfloweffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
              }}
              pagination={{ el: '.swiper-pagination', clickable: true }}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
                clickable: true,
              }}
              modules={[EffectCoverflow, Pagination, Navigation]}
              className="swiper_container"
            >
                      <div className="swiper-pagination"></div>

              <SwiperSlide>

                <Image
                  src={photos[0]}
                  alt="foto"
                  width="0"
                  height="0"
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                />
              </SwiperSlide>

              <SwiperSlide>
                <Image
                  src={photos[1]}
                  alt="foto"
                  width="0"
                  height="0"
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                />
              </SwiperSlide>

              <SwiperSlide>
                <Image
                  src={photos[2]}
                  alt="foto"
                  width="0"
                  height="0"
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                />
              </SwiperSlide>

              <SwiperSlide>
                <Image
                  src={photos[3]}
                  alt="foto"
                  width="0"
                  height="0"
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                />
              </SwiperSlide>
              </Swiper>

              

          </Container>

          {/*           {
        num >= 1 ? <LeftArrowStyles onClick={(e) => restNum(e)}> ❰ </LeftArrowStyles> : ""
          }
          
          <Image
            src={photos[num]}
            alt="foto"
            className="mx-auto rounded-lg "
          />
          {
        num <= 2 ? <RightArrowStyles onClick={(e) => sumNum(e)}> ❱ </RightArrowStyles> : ""
          } */}
        </ImageContainer>

        <div className="flex flex-col"></div>
      </CardStats>
      <Link href={link}>
        {count === 1 ? (
          <SeeButton>See the proyect</SeeButton>
        ) : (
          <SeeButton>Ver el Proyecto</SeeButton>
        )}
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
