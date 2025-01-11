import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
import { call, email } from "../assets";

import styles from "../style";



const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_nm7j4hp', 'template_3w9jqra', form.current, {
        publicKey: 'cUyt85L3NB_vEeZGT',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          console.log('message sent');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };


  return (
    <section id="contact" className={`${styles.flexStart} ${styles.marginY} sm:${styles.padding} xs:pl-20 pt-10 md:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={`${styles.heading2}  text-[30px]`}>Richiedi il nostro servizio con un primo preventivo gratuito!</h2>
      <div className='flex  items-center mt-3 '>   
<img src={email} alt="Mmedilsolutions" className="h-[30px] mr-2"  />
<span className='text-[18px]'> mmedilsolutions@gmail.com</span>
</div>

<div className='flex  items-center mt-3 '>   
<img src={call} alt="Mmedilsolutions" className="h-[30px] mr-2"  />
<span className='text-[18px]'> 340 402 3740 | 351 555 0160</span>
</div>
</div>
    <div className={`${styles.flexCenter} flex-1 flex flex-col  sm:mt-0 mt-10`}>
    <form ref={form} onSubmit={sendEmail}>

      <div className=" flex-col sm:self-end self-start	font-montserrat xs:my-3 xs:w-[95%]">

      <input type="text" name='user_name' placeholder="Nome..." className=" w-full p-3  my-2    rounded-lg border-0	"/>
      <input type="text" name='user_email' placeholder="Email..." className="w-full p-3  my-2    rounded-lg border-0	"/>
      <input type="text" name='user_phone' placeholder="Numero Di Telefono..." className="w-full p-3  my-2   rounded-lg border-0	"/>
      <textarea rows={5} name='message'  type="text" placeholder="Per Cosa Desiderate Un Preventivo?" className="w-full p-3  my-2    rounded-lg border-0	"></textarea>

      </div>

      <button type="submit"  id="home"  className={`flex flex-end py-4 px-6 font-montserrat font-medium text-[18px] text-primary bg-discount-gradient rounded-[10px] outline-none ${styles}`}>
      Invia
    </button>
</form>
    </div>
  </section>
);
  
}

export default Contact