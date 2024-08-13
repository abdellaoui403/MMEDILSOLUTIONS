import React from 'react';

import { A11y, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { testing, testing1, testing10, testing11, testing12, testing13, testing14, testing15, testing16, testing17, testing18, testing19, testing2, testing20, testing3, testing4, testing5, testing6, testing7, testing8, testing9} from "../assets";
import styles, { layout } from "../style";


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';






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

<SwiperSlide    className=' !flex justify-center items-center'>
                <img src={testing} alt=""  className=' '/>
                </SwiperSlide>


                <SwiperSlide className='!flex justify-center items-center'>
    <img src={testing2} alt="" className=''/>
</SwiperSlide>
<SwiperSlide className='!flex justify-center items-center'>
    <img src={testing3} alt="" className=''/>
</SwiperSlide>
<SwiperSlide className='!flex justify-center items-center'>
    <img src={testing4} alt="" className=''/>
</SwiperSlide>
<SwiperSlide className='!flex justify-center items-center'>
    <img src={testing5} alt="" className=''/>
</SwiperSlide>
<SwiperSlide className='!flex justify-center items-center'>
    <img src={testing6} alt="" className=''/>
</SwiperSlide>
<SwiperSlide className='!flex justify-center items-center'>
    <img src={testing7} alt="" className=''/>
</SwiperSlide>
<SwiperSlide className='!flex justify-center items-center'>
    <img src={testing8} alt="" className=''/>
</SwiperSlide>
<SwiperSlide className='!flex justify-center items-center'>
    <img src={testing9} alt="" className=''/>
</SwiperSlide>
<SwiperSlide className='!flex justify-center items-center'>
    <img src={testing10} alt="" className=''/>
</SwiperSlide>
<SwiperSlide className='!flex justify-center items-center'>
    <img src={testing11} alt="" className=''/>
</SwiperSlide>
<SwiperSlide className='!flex justify-center items-center'>
    <img src={testing12} alt="" className=''/>
</SwiperSlide>
<SwiperSlide className='!flex justify-center items-center'>
    <img src={testing13} alt="" className=''/>
</SwiperSlide>
<SwiperSlide className='!flex justify-center items-center'>
    <img src={testing14} alt="" className=''/>
</SwiperSlide>
<SwiperSlide className='!flex justify-center items-center'>
    <img src={testing15} alt="" className=''/>
</SwiperSlide>
<SwiperSlide className='!flex justify-center items-center'>
    <img src={testing16} alt="" className=''/>
</SwiperSlide>
<SwiperSlide className='!flex justify-center items-center'>
    <img src={testing17} alt="" className=''/>
</SwiperSlide>
<SwiperSlide className='!flex justify-center items-center'>
    <img src={testing18} alt="" className=''/>
</SwiperSlide>
<SwiperSlide className='!flex justify-center items-center'>
    <img src={testing19} alt="" className=''/>
</SwiperSlide>
<SwiperSlide className='!flex justify-center items-center'>
    <img src={testing20} alt="" className=''/>
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