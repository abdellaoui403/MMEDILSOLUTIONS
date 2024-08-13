


const Button = ({ styles }) => {
  function handleClick() {
    window.history.pushState(null, '', '/#contact');
  }

return(
    <button type="button" id="home" onClick={handleClick} className={`py-4 px-6 font-montserrat font-medium text-[18px] text-primary bg-discount-gradient rounded-[10px] outline-none ${styles}`}>
      Scopri di Più
    </button>
  )};
  

export default Button