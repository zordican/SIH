import styles from "./Hero.module.scss"

const Hero = () => {
  return (
    <div className={styles.mainDiv}>

      <div className={styles.description}>
        <h1>
        <span className={styles.intelligence}>Intelligence</span> based <br /> model  for <br />
        <span className={styles.electricityDemand}>electricity demand</span>  <br /> <span className={styles.projection}>projection</span> projection for Delhi <br /> Power System
        </h1>
        <button >GET STARTED</button>
      </div>
      <div className={styles.imageContainer}><img src="https://res.cloudinary.com/dp3aoinmu/image/upload/v1725871913/Walmart_PNG/ii3xqqpgokfoltegbgpa.png" alt="" /></div>
    </div>
  )
}

export default Hero
