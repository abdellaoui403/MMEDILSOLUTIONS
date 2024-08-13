import { bill } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";


const Siamo = () => (
    <section id="siamo" className={`items-start ${layout.sectionReverse} ${styles.paddingY}`}>
      <div className={layout.sectionImgReverse}>
      <img src={bill} alt="billing" className="w-[100%] relative z-[5]" />

      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />

        </div>
        <div className={layout.sectionInfo}>
        <span className='uppercase sm:tracking-[1rem] tracking-[.5rem]  text-gradient sm:text-[16px] text-[10px] text-center		'>Chi siamo</span>

      <h2 className={styles.heading2}>
      Nuova Anima ai  <br className="sm:block hidden" /> Vostri Spazi
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-3`}>
      MM EDIL SOLUTIONS è dedicata a trasformare i vostri ambienti, infondendo nuova anima e carattere ai vostri spazi. siamo in grado di creare atmosfere uniche che rispecchiano la vostra personalità e le vostre esigenze. Che si tratti di un rinnovamento di interni o esterni, il nostro team di esperti assicura un risultato di alta qualità, capace di valorizzare ogni dettaglio e di rendere i vostri spazi più accoglienti e vivaci. Lasciatevi ispirare dal potere trasformativo del colore per dare una nuova vita al vostro ambiente.

      </p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
      <Button  />
      </div>
    </div>
  </section>
);

export default Siamo;