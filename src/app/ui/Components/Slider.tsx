'use client';

import * as React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectFade, Autoplay } from 'swiper/modules';

const content:any = [
  {
    img: 'https://i.imgur.com/Up5d0YH.jpg',
    date: '😊',
    header: 'Feliz Navidad!',
    info: "En esta época tan especial, D'Liriz quiere desearte una Navidad llena de alegría, amor y momentos inolvidables. Que el espíritu navideño llene tu hogar y tu corazón, y que compartas momentos deliciosos con tus seres queridos.",
  },
  {
    img: 'https://i.imgur.com/pWFnBIW.png',
    date: '😊',
    header: 'Felices Fiestas',
    info: 'Agradecemos tu confianza y te deseamos un próspero Año Nuevo lleno de éxitos y nuevas experiencias culinarias. ¡Que esta temporada festiva esté llena de sabores y emociones extraordinarias!',
  },
  {
    img: 'https://i.imgur.com/pWFnBIW.png',
    date: '😊',
    header: 'Felices Fiestas',
    info: 'Agradecemos tu confianza y te deseamos un próspero Año Nuevo lleno de éxitos y nuevas experiencias culinarias. ¡Que esta temporada festiva esté llena de sabores y emociones extraordinarias!',
  },
];


export default function Fade() {
  return (
    <section className="pt-[7rem] pb-[2rem] bg-whithe">
      <div className="lg:mx-auto max-w-5xl mx-[1.5rem]">
        <Swiper
          modules={[Navigation, EffectFade, Autoplay]}
          effect={'fade'}
          loop={true}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
          spaceBetween={30}
          navigation
          className="fade"
        >
          {content.map((p:any, index:number) => {
            return (
              <SwiperSlide
                className=" grid md:grid-cols-2 gap-y-10 md:gap-x-10 x-md:pt-10"
                key={index}
              >
                <div>
                  <img src={p.img} alt="" />
                </div>
                <div className="px-y pt-7">
                  <header className="date text-slate-600 font-bold ">
                    {p.date}
                  </header>
                  <div className="title ">
                    <h1 className="font-bold mt-10 ">{p.header}</h1>
                    <p>{p.info}</p>
                  </div>
                  <a href='/catalog'>
                  <button className="btn bg-red-500 p-[1rem_1.5rem] font-bold text-white mt-5 ">
                    Más
                  </button>
                  </a>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}