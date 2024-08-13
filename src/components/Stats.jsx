import { stats } from "../constants";
import styles from "../style";

const Stats = () => (
  <div className="relative">
    
  <section className={`${styles.flexCenter} relative md:flex-row flex-col flex-wrap sm:mb-20 mb-6 z-[1]`}>
   {stats.map((stat) => (
      <div key={stat.id} className={`flex-1 flex justify-center text-center	 items-center flex-row m-1`} >
        <div className='ss:flex row   justify-center items-center '>
           
<h4 className="font-montserrat font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-[#353938]">
          {stat.value}
        </h4>
        <p className="font-montserrat font-normal xs:text-[18.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-white uppercase ml-3">
          {stat.title}
        </p>
              </div>

      </div>
    ))}
    
  </section>
          <div className="absolute flex justify-center text-center	bg-discount-gradient items-center -left-20 top-0 h-[100%] w-[150%] z-[0]">
          
        </div>


  </div>
);

export default Stats;