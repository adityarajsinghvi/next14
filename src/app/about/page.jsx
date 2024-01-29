import Image from "next/image";
import styles from "./about.module.css";

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About Agency</h2>
        <h1 className={styles.title}>
          We create digital ideas that are bigger, bolder, braver and better.
        </h1>
        <p className={styles.desc}>
          We create digital ideas that are bigger, bolder, braver and better. We
          believe in good ideas flexibility and precission We’re world’s Our
          Special Team best consulting & finance solution provider. Wide range
          of web and software development services.
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        {/* For adding a URL in the Image tag you need to add some configuration like in next.config.js */}
        {/* <Image src="https://images.pexels.com/photos/18936583/pexels-photo-18936583/free-photo-of-hand-holding-red-gerbera-flower.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" fill /> */}
        <Image src="/about.png" alt="About Image" fill className={styles.img} />
      </div>
    </div>
  );
};

export default AboutPage;
