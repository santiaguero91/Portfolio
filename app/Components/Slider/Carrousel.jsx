"use client";
import Image from "next/image";
import { Container } from "./CarrouselStyle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { EffectCoverflow, Pagination, Navigation } from "swiper";
import HChome from "../../img/HCountriesHome.png";
import HClandin from "../../img/HCLanding.png";
import HCdetail from "../../img/HCDetails.png";
import HCform from "../../img/HCForm.png";
import HCactiv from "../../img/HCActivities.png";

function Carrousel() {
  return (
    <Container>
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
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
        <Image
            src={HChome}
            alt="HChome"
            width="50vh" height="50vw"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src={HClandin}
            alt="HClandin"
            width="50vh" height="50vw"
          />
        </SwiperSlide>

        <SwiperSlide>
        <Image
            src={HCdetail}
            alt="HCdetail"
            width="50vh" height="50vw"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src={HCform}
            alt="HCform"
            width="50vh" height="50vw"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src={HCactiv}
            alt="HCactiv"
            width="50vh" height="50vw"
          />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
}
export default Carrousel;

/* 
<div className="swiper mySwiper">
    <div className="swiper-wrapper">
      <div className="swiper-slide">
        <img src={slide_image_1} />
      </div>
      <div className="swiper-slide">
        <img src={slide_image_2} />
      </div>
      <div className="swiper-slide">
        <img src={slide_image_3} />
      </div>
      <div className="swiper-slide">
        <img src={slide_image_4} />
      </div>
      <div className="swiper-slide">
        <img src={slide_image_5} />
      </div>
    </div>
    <div className="swiper-button-next"></div>
    <div className="swiper-button-prev"></div>
    <div className="swiper-pagination"></div>
  </div> */
