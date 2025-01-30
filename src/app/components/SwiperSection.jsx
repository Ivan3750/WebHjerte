import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import arrow from "@/app/assets/arrow.png"
import Image from 'next/image';
import s from '../styles/swiper.module.css';


const SwiperSection = () => {
  const swiperRef = useRef(null);

  const goToNextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const goToPrevSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  return (
    <section className={s.swiperSection}>
      <p className={s.title}>Our work</p>
      <div className={s.swiperblock}>

      <button className={s.arrow} style={{rotate: "180deg"}} onClick={goToPrevSlide}><Image src={arrow} alt="arrow" width="50px" height="50px" /></button>
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)} // Store Swiper instance
        spaceBetween={50}
        slidesPerView={3}
      >
        <SwiperSlide className={s.project}>
          <div className={s.projectImg}></div>
          <h3 className={s.projectTitle}>Social Media</h3>
          <p className={s.projectInfo}>Website development process encompasses several key stages. We leverage expert development, rigorous
          testing, and seamless.</p>
        </SwiperSlide>
        <SwiperSlide className={s.project}>
          <div className={s.projectImg}></div>
          <h3 className={s.projectTitle}>Social Media</h3>
          <p className={s.projectInfo}>Website development process encompasses several key stages. We leverage expert development, rigorous
          testing, and seamless.</p>
        </SwiperSlide>
        <SwiperSlide className={s.project}>
          <div className={s.projectImg}></div>
          <h3 className={s.projectTitle}>Social Media</h3>
          <p className={s.projectInfo}>Website development process encompasses several key stages. We leverage expert development, rigorous
          testing, and seamless.</p>
        </SwiperSlide>
        <SwiperSlide className={s.project}>
          <div className={s.projectImg}></div>
          <h3 className={s.projectTitle}>Social Media</h3>
          <p className={s.projectInfo}>Website development process encompasses several key stages. We leverage expert development, rigorous
          testing, and seamless.</p>

        </SwiperSlide>
      </Swiper>
          <button onClick={goToNextSlide} className={s.arrow}><Image src={arrow} alt="arrow" width="50px" height="50px" /></button>
          </div>

    </section>
  );
};

export default SwiperSection;
