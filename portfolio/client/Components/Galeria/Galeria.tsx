import { useState } from "react";
import { Skin } from "../../interfaces";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, EffectCoverflow } from 'swiper/modules';
import "swiper/swiper-bundle.css";
import "./Galeria.css";

interface Props {
  skins: Skin[];
}

export const Galeria = ({ skins }: Props) => {

  return (
    <div className="galeria_container">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1.5,
          slideShadows: false
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
        }}
        modules={[EffectCoverflow, Navigation, Pagination]}
        className="swiper_container">
        {skins.map((skin => (
          <SwiperSlide className="galeria_slider" key={skin.id}>
            <img src={skin.image} alt={`Skin ${skin.name}`} />
            <div className="galeria_texto">
              <h2>{skin.name}</h2>
            </div>
          </SwiperSlide>
        )))}
      </Swiper>
    </div>
  )
};



