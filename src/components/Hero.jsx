import { discount, Herophoto } from "../assets";
import styles from "../style";

const Hero = () => {
    return (

      <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY} `}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 z-[5]`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} text-white  ml-2 text-opacity-60	`}>
            <span className="text-white">10%</span> SCONTO PER I NUOVI 
{" "}
            <span className="text-white">CLIENTI</span> 
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-montserrat font-bold ss:text-[68px] text-[45px] text-[#353938] ss:leading-[75px] leading-[55px] ">
          Daremo   <br className="sm:block hidden" />
            <span className="text-gradient"> Nuova Vita </span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
          </div>
        </div>
        <h1 className="font-montserrat font-bold ss:text-[68px] text-[45px] text-[#353938] ss:leading-[75px] leading-[55px] w-full">
        Al Vostro immobile.        </h1>
        <p className={`${styles.paragraph} text-[#353938] max-w-[470px] mt-5`}>
        MM EDIL SOLUTIONS, saprà dare al vostro immobile nuova anima, rimodernando spazi usurati dal tempo e adattandoli al vostro stile. Ridiamo vita alla vostra vecchia casa, ufficio o azienda al giusto prezzo con la massima professionalità.        </p>
      </div>



        <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <div className="relative">       
         <img src={Herophoto} alt="billing" className=" relative md:max-w-[150%]   max-w-[100%]  	 ss:rounded-none md:rounded-2xl md:right-[7rem] ss:right-[0rem] relative z-[4]" />
            
            </div>


        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
      </div>
    </section>
  );
};

export default Hero;