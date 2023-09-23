import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

export default function App() {
  return (
    <>
      <div className="testimonial section">
        <h2 class="section__title">TESTIMONIAL</h2>
        <span class="section__subtitle">My client saying</span>
        <div class="container section__border">
          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div class="testimonial__content swiper-slide mb">
                <p class="testimonial__description padds">
                  “Asher's front-end development expertise, attetion to detail,
                  and strong commuication kills made our project a seamless
                  success.”
                </p>

                <div>
                  <h3 class="testimonial__name">John Smith</h3>
                  <span class="testimonial__subtitle">Client</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="testimonial__content swiper-slide mb">
                <p class="testimonial__description">
                  “Working with Asher is to give a good impression, I carry out
                  my project at a good cost, with excellent quality and
                  attention. Great service and recommended.”
                </p>

                <div>
                  <h3 class="testimonial__name">Mary Lens</h3>
                  <span class="testimonial__subtitle">Client</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="testimonial__content swiper-slide mb">
                <p class="testimonial__description">
                  “Asher's exceptional skills and commitment to excellence
                  elevated our web development project to new heights. Highly
                  recommended!”
                </p>

                <div>
                  <h3 class="testimonial__name">Emily Chel</h3>
                  <span class="testimonial__subtitle">Client</span>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}
