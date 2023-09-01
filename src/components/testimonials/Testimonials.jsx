import React from "react";
import "./testimonials.scss";
import Avt1 from "../../assets/avtar1.jpg";
import Avt2 from "../../assets/avtar2.jpg";
import Avt3 from "../../assets/avtar3.png";
import Avt4 from "../../assets/avtar4.jpg";

import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: Avt1,
    name: "Hemendra Singh",
    review:
      "the developer's proficiency in various technical skills relevant to their role as a full stack developer. Consider aspects like front-end and back-end technologies, databases, version control, and any specialized tools.",
  },
  {
    avatar: Avt2,
    name: "Raju",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ea maiores illo alias aliquam tempore iure quasi reiciendis adipisci dicta quae, doloremque totam facilis pariatur!",
  },
  {
    avatar: Avt3,
    name: "Mayank",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ea maiores illo alias aliquam tempore iure quasi reiciendis adipisci dicta quae, doloremque totam facilis pariatur!",
  },
  {
    avatar: Avt4,
    name: "Ranchod",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ea maiores illo alias aliquam tempore iure quasi reiciendis adipisci dicta quae, doloremque totam facilis pariatur!",
  },
  {
    avatar: Avt2,
    name: "Krishna",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ea maiores illo alias aliquam tempore iure quasi reiciendis adipisci dicta quae, doloremque totam facilis pariatur!",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials_container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}>
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client_avatar">
                <img src={avatar} alt="Avatar One" />
              </div>
              <h5 className="client_name">{name}</h5>
              <small className="client_review"> {review} </small>
            </SwiperSlide>
          );
        })
      }
      </Swiper>
    </section>
  );
};

export default Testimonials;
