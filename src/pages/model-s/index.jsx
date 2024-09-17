import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules'; 
import "./style.scss"
import 'swiper/css';
import 'swiper/css/navigation';


import modelS from "../../assets/images/model-s.svg"
import modelX from "../../assets/images/model-x.svg"
import modelY from "../../assets/images/model-y.svg"
import model3 from "../../assets/images/model-3.svg"

const Index = () => {
  return (
    <>
      <div className="container">
        <div className="carousel-container" style={{ background: 'black', padding: '50px 0', textAlign: 'center' }}>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={10}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            loop={true}
            style={{ width: '100%', margin: '0 auto' }}
          >
            <SwiperSlide>
              <img
                src={modelS}
                alt="Model X"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={model3}
                alt="Model S"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={modelX}
                alt="Model 3"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={modelY}
                alt="Model 3"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Index;
