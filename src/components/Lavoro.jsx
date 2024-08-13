import React from 'react';

import { A11y, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { testing } from "../assets";
import styles, { layout } from "../style";


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';




const firstHalf = testing.slice(0, 19);
const images = Array.from({ length: 20 }, (_, i) => `${firstHalf}${i + 1}.png`);


const FeatureCard = () => (
    <div className={`   py-10 rounded-[20px] text-center  `}>
            <div className={`  ml-3  `}>
            <Swiper
        modules={[Navigation, Pagination, A11y]}
        slidesPerView={1}
        spaceBetween={15}
        breakpoints={{
          480: { slidesPerView: 2 },
          740: { slidesPerView: 3 },
          1275: { slidesPerView: 4 },
        }}
      >
      {images.map((imgSrc, index) => (

<SwiperSlide   key={index}  className=' !flex justify-center items-center'>
                <img src={imgSrc} alt=""  className=' '/>
                </SwiperSlide>


))}
<SwiperSlide     className=' !flex justify-center items-center'>
                <img src={testing} alt=""  className=' '/>
                </SwiperSlide>

            </Swiper>
</div>
</div>

);


const Lavoro = () => {
  return (
    <section id="sceglierci" className={`${layout.sectionCenter} ${styles.paddingY}`}>
      <div className={layout.sectionInfoCenter}>
      <span className='uppercase sm:tracking-[1rem] tracking-[.5rem]  text-gradient sm:text-[16px] text-[10px] text-center		'>Il nostro lavoro</span>

        <h2 className={`${styles.heading2} text-[#353938]`}>
        Esplora le tecniche lavorative.        </h2>
        <p className={`${styles.paragraph} md:max-w-[50%] mt-5`}>
        Scopri come MM EDIL SOLUTIONS ha trasformato spazi usurati in ambienti moderni e funzionali, con risultati di alta qualità e cura dei dettagli.
        </p>
  
      </div>
      <FeatureCard />
      </section>
  )
}

export default Lavoro