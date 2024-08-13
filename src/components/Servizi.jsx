import { features } from "../constants";
import styles, { layout } from "../style";

const FeatureCard = ({ icon,number, title, content, index }) => (
    <div className={`flex flex-row p-6 rounded-[20px]${styles.flexCenter} text-center ${index !== features.length - 1 ? "mb-6" : "mb-0"}  rounded-[20px] `}>
            <div className={`flex-1 flex flex-col ml-3 ${styles.flexCenter} `}>

      <div className={` relative w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={number} alt=""  className=' absolute top-0 right-10 opacity-70'/>

        <img src={icon} alt="star" className=" relative w-[50%] h-[50%] object-contain" />
      </div>
        <h4 className="font-montserrat font-semibold text-[#353938] text-[18px] leading-[23.4px] my-3">
          {title}
        </h4>
        <p className="font-montserrat font-normal text-dimWhite text-[16px] sm:max-w-[75%] leading-[24px]">
          {content}
        </p>
      </div>
    </div>
  );
  


const Servizi = () => (
    <section id="servizi" className={layout.sectionCenter}>
      <div className={layout.sectionInfoCenter}>
      <span className='uppercase sm:tracking-[1rem] tracking-[.5rem]  text-gradient sm:text-[16px] text-[10px] text-center		'>nostri servizi</span>

        <h2 className={`${styles.heading2} text-[#353938]`}>
        I Nostri Servizi.
        </h2>
        <p className={`${styles.paragraph} md:max-w-[50%] mt-5`}>
Con un semplice clic qui sotto potrete trovare tutti I serivi forniti da MM EDIL SOLUTIONS        </p>
      </div>
      <div className={`${layout.sectionImgCol} flex-col md:py-12`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );

export default Servizi