import styles from "./about.module.css";
export default function About() {
  return (
    <>
      <h2>About me</h2>
      <div className={styles.paraDiv}>
        <p>
          I have nearly 1 year of hands-on experience working with Node.js, but
          my passion for creating engaging user experiences has inspired me to
          shift my focus to React JS.{" "}
          <span className={styles.span}>
            {" "}
            I’m excited to pursue a career as a front-end web developer
          </span>
          , where I can bring ideas to life through dynamic and responsive
          designs. This new path allows me to combine my skills and creativity
          to build user-friendly web interfaces.
        </p>
      </div>
      <div className={styles.subDiv}>
        <h3 className={styles.h3}>Skills:</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JAVASCRIPT</li>
          <li>React JS</li>
          <li>Node JS</li>
          <li>Express JS</li>
          <li>Mongo DB</li>
        </ul>
      </div>
    </>
  );
}
