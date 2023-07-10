"use client";
import Image from "next/image";
import Link from "next/link";
import {
  CardDiv,
  ProyectsName,
  ProyDescrip,
  CardStats,
  ImageContainer,
  SeeButton,
  TechnologiesDiv,
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

function Card({ name, link, logo, photos, description,tasks,skills,technologies,descriptionEsp,skillsEsp,tasksEsp }) {
  const [num, setNum] = useState(0);
  const count = useAppSelector(state=>state.counterReducer.counter)

  return (
    <CardDiv
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
    >
      <div className="subCardDiv">
          <ImageContainer><Container>
          <div className="slider-controler">
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
            pagination={{ el: ".swiper-pagination", clickable: true }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
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
        </Container></ImageContainer>

        {count === 1 ? 
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
   <div className='statTitle'>Tasks:</div>
   <div>{tasks}</div>
   <div className='statTitle'>Technologies:</div>
   <TechnologiesDiv>{technologies}</TechnologiesDiv>
   <div className='statTitle'>Skills developed:</div>
   <div>{skills}</div>

 </CardStats> : <CardStats>
        <div className="w-1/12 absolute rounded-full">
          <Image
            src={logo}
            alt="logo"
            className="w-1/2 absolute rounded-full"
          />
        </div> 
        <ProyectsName>{name}</ProyectsName>
        <ProyDescrip>{descriptionEsp}</ProyDescrip>
        <div className='statTitle'>Tareas:</div>
        <div>{tasksEsp}</div>
        <div className='statTitle'>Tecnologias:</div>
        <TechnologiesDiv>{technologies}</TechnologiesDiv>
        <div className='statTitle'>Habilidades desarrolladas:</div>
        <div>{skillsEsp}</div>

      </CardStats>}




        

      </div>
      <div className="flex flex-col"></div>
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
