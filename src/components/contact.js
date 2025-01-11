import styles from "./contact.module.css";
export default function Contact() {
  return (
    <>
      <h2>Contact-Us</h2>
      <div className={styles.con}>
        <h3>Let’s Build Something Great Together!</h3>
        <div className={styles.subCon}>
          <p>
            Whether you have a project in mind or just want to connect, I’m
            always open to exciting opportunities.{" "}
          </p>
          <p>
            Feel free to reach out via email at{" "}
            {/* <a href="mailto:vickyjenu1998@gmail.com">send mail</a> */}
            <span className={styles.span}>vickyjenu1998@gmail.com </span>or give
            me a call at <span className={styles.span}>+91 63841 53234</span>.
          </p>
          <p>
            You can also connect with me on{" "}
            <a href="https://www.linkedin.com/in/vignesh-rajendran-a3966a20b/">
              LinkedIn
            </a>{" "}
            for professional updates and collaborations.
          </p>
          <p>
            {" "}
            I look forward to hearing from you and exploring how we can create
            something amazing!"
          </p>
        </div>
      </div>
    </>
  );
}
