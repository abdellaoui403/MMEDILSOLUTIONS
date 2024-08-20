const styles = {
    boxWidth: "xl:max-w-[1280px] w-full",
  
    heading2: "font-montserrat text-[#353938] font-bold xs:text-[48px] text-[40px]  xs:leading-[60.8px] leading-[66.8px] w-full",
    paragraph: "font-montserrat font-normal    text-[18px] leading-[30.8px]",
  
    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",
    flexEnd: "flex justify-center items-end",
  
    paddingX: "sm:px-16 px-6",
    paddingY: "sm:py-15 pb-16 pt-6",
    padding: "sm:px-16 px-6 sm:py-12 py-4",
  
    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",
  };
  
  export const layout = {
    section: `flex md:flex-row flex-col ${styles.paddingY}`,
    sectionCenter: ``,
    sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,
  
    sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,
    sectionImgCol: `md:grid grid-cols-2 gap-3 ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,
  
    sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
    sectionInfoCenter: `flex-1 ${styles.flexCenter} flex-col text-center items-center`,
  };
  
  export default styles;