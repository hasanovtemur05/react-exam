import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "./style.scss";
import "swiper/css";
import "swiper/css/navigation";
import { useOutletContext } from "react-router-dom";

import modelS from "../../assets/images/model-s.svg";
import modelX from "../../assets/images/model-x.svg";
import modelY from "../../assets/images/model-y.svg";
import model3 from "../../assets/images/model-3.svg";
import tesla1 from "../../assets/images/tesla1.webp";
import tesla2 from "../../assets/images/tesla2.avif";

const Index = () => {
  const [activeLink, setActiveLink] = useOutletContext();

  const handleSlideChange = (swiper) => {
    const activeIndex = swiper.realIndex;
    switch (activeIndex) {
      case 0:
        setActiveLink("/solar-panels");
        break;
      case 1:
        setActiveLink("/");
        break;
      case 2:
        setActiveLink("/model-3");
        break;
      case 3:
        setActiveLink("/model-x");
        break;
      case 4:
        setActiveLink("/model-y");
        break;
      case 5:
        setActiveLink("/solar-roof");
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (swiperInstance) {
      switch (activeLink) {
        case "/solar-panels":
          swiperInstance.slideTo(0);
          break;
        case "/":
          swiperInstance.slideTo(1);
          break;
        case "/model-3":
          swiperInstance.slideTo(2);
          break;

        case "/model-x":
          swiperInstance.slideTo(3);
          break;
          case "/model-y":
          swiperInstance.slideTo(4);
          break;
        case "/solar-roof":
          swiperInstance.slideTo(5);
          break;
      

        default:
          break;
      }
    }
  }, [activeLink]);
  let swiperInstance = null;
  const getSwiperInstance = (swiper) => {
    swiperInstance = swiper;
  };

  return (
    <div className="container">
      <div
        className="carousel-container"
        style={{ background: "black", padding: "50px 0", textAlign: "center" }}
      >
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={10}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          onSlideChange={handleSlideChange}
          onSwiper={getSwiperInstance}
        >
          <SwiperSlide>
            <img
              src={model3}
              alt="Model 3"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={modelS}
              alt="Model S"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={modelX}
              alt="Model X"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={modelY}
              alt="Model Y"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={tesla1}
              alt="Tesla Image 1"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={tesla2}
              alt="Tesla Image 2"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Index;
