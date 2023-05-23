import React, { useEffect, useState } from "react";
import SectionTitle from "../../Components/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Rating } from "@smastrom/react-rating";

const Testimonial = () => {
  const [review, setReview] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReview(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="container">
      <SectionTitle
        heading={"TESTIMONIALS"}
        subHeading={"What Our Clients Say"}
      />
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper pb-5"
      >
        {review.map((re) => (
          <SwiperSlide key={re._id}>
            <div className="text-center pb-3">
              <Rating className="w-50 mx-auto py-3"
                style={{ maxWidth: "10rem" }}
                value={re.rating}
                readOnly
              />
              <p className="fw-light">{re?.details}</p>
              <h2>{re?.name}</h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
