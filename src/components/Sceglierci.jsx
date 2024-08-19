import { Intersect } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";



const Sceglierci  = () => (
    <section className={`${layout.section}  sm:py-15 py-16`}>
    <div className={layout.sectionInfo}>
    <span className='uppercase sm:tracking-[1rem] tracking-[.5rem]  text-gradient sm:text-[16px] text-[10px] text-center		'>Perché sceglierci</span>

        <h2 className={styles.heading2}>
Eccellenza E Cura In Ogni Dettaglio.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-2`}>
        MM EDIL SOLUTIONS è in grado di offrire un ottimo rapporto qualità-prezzo, garantendo tariffe competitive senza compromessi sulla qualità.
        Scegliere la nostra azienda significa beneficiare di una combinazione unica di qualità, innovazione, esperienza e dedizione, che ci permette di offrire un valore eccezionale e risultati di alto livello.





</p>
        <div className="flex flex-row flex-wrap sm:mt-2 mt-2">

        <Button  />
        </div>
    </div>

    <div className={layout.sectionImg}>
        <img src={Intersect} alt="billing" className="w-[100%] " />
    </div>
    </section>
);


export default Sceglierci;