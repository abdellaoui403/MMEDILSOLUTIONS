import { Contact, Footer, Hero, Lavoro, Navbar, Sceglierci, Servizi, Siamo, Stats, Testimonials } from "./components";
import styles from "./style";


const App = () => (
    <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar/>
      </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero/> 
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats/> 
        <Servizi/>
        <Siamo/>
        <Sceglierci/>
        <Lavoro/>
        <Testimonials/>
        <Contact/> 
        <Footer/> 
      </div>
    </div>
  </div>
);

export default App;