import styles from "./Hero.module.scss"
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();  // Get the navigate function from useNavigate

  const handleNavigate = () => {
    navigate("/select");  // Navigate to the "/select" route
  };
  return (
    <div className={styles.mainDiv}>

      <div className={styles.description}>
        <h1>
          <span className={styles.intelligence}>Intelligence</span> based <br /> model for <br />
          <span className={styles.electricityDemand}>electricity demand</span> <br /> 
          <span className={styles.projection}>projection</span> projection for Delhi <br /> Power System
        </h1>
        <button on onClick={handleNavigate}>GET STARTED</button>
      </div>
    </div>
  );
};

export default Hero;
