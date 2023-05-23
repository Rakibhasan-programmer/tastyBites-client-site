import React from "react";
import slide1 from "../../assets/home/slide1.jpg";
import slide2 from "../../assets/home/slide2.jpg";
import slide3 from "../../assets/home/slide3.jpg";
import slide4 from "../../assets/home/slide4.jpg";
import slide5 from "../../assets/home/slide5.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import SectionTitle from "../../Components/SectionTitle";

const Category = () => {
  return (
    <div className="container py-5">
      <SectionTitle
        heading={"ORDER ONLINE"}
        subHeading={"From 11:00am to 10:00pm"}
      />
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="pb-5">
          <img className="img-fluid" src={slide1} alt="" />
        </SwiperSlide>
        <SwiperSlide className="pb-5">
          <img className="img-fluid" src={slide2} alt="" />
        </SwiperSlide>
        <SwiperSlide className="pb-5">
          <img className="img-fluid" src={slide3} alt="" />
        </SwiperSlide>
        <SwiperSlide className="pb-5">
          <img className="img-fluid" src={slide4} alt="" />
        </SwiperSlide>
        <SwiperSlide className="pb-5">
          <img className="img-fluid" src={slide5} alt="" />
        </SwiperSlide>
        <SwiperSlide className="pb-5">
          <img className="img-fluid" src={slide2} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;
