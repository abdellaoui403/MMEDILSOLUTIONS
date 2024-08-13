import { feedback } from "../constants";
import styles, { layout } from "../style";
import FeedbackCard from "./FeedbackCard";


const Testimonials = () =>  (
    <section id="clients" className={`${layout.sectionCenter} ${styles.paddingY}`}>
            <div className={layout.sectionInfoCenter}>
      <span className='uppercase sm:tracking-[1rem] tracking-[.5rem]  text-gradient sm:text-[16px] text-[10px] text-center		'>FEEDBACK</span>

        <h2 className={`${styles.heading2} text-[#353938]`}>
        Cosa Dicono Di Noi Le Persone.
        </h2>
        <p className={`${styles.paragraph} md:max-w-[50%] mt-5`}>
        I nostri clienti apprezzano la qualità, la professionalità e l'attenzione ai dettagli che MM EDIL SOLUTIONS offre in ogni progetto.
</p>
  
      </div>

        
  
      <div className="flex md:flex-nowrap flex-wrap  md:bg-white  	  py-6	 xs:justify-start xs:justify-center w-full feedback-container relative z-[1]">
        {feedback.map((card) => <FeedbackCard key={card.id} {...card} />)}
      </div>
    </section>
  );
  

export default Testimonials