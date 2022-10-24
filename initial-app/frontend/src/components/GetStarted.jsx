import styles from "./style";
import arrowUp from "../assets/arrow-up.svg";

const GetStarted = () => (
  <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
    <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
      <div className={`text-center flex-row`} >
        <p className="font-poppins font-medium text-[18px] leading-[23.4px]" >
          <span className="text-white" >Get</span>
        </p>
        {/* <img src={arrowUp} alt="arrow-up" className="w-[23px] h-[23px] object-contain" /> */}
      </div>
      
      <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
        <span className="text-white">Started</span>
      </p>
    </div>
  </div>
);

export default GetStarted;