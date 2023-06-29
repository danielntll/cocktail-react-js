import './CardsSwiper.css';
import 'swiper/css/bundle';
import "swiper/css/effect-cards";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from '../Card/Card';
import { useEffect, useState } from 'react';
import { EffectCards } from "swiper";


const CardsSwiper = ({ data }) => {
  // VARIABLES ------------------------------
  const [handleData, setHandleData] = useState([]);
  // CONDITIONS -----------------------------
  useEffect(() => {
    if (data.length === 10) {
      setHandleData(data);
    }
    console.log(data)
  }, [data])
  // FUNTIONS -------------------------------
  // RETURN ---------------------------------
  return (
    <div
      className="CardsSwiper"
    >
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        {handleData?.map((card, index) => {
          return (
            <SwiperSlide className='CardsSwiper__Slide'
              key={index + "randomCard"}>
              <Card data={card} />
            </SwiperSlide>
          )
        })}

      </Swiper>
    </div>
  );
}

export default CardsSwiper;