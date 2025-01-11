// import logo from "./logo.svg";
// import "./App.css";
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import Home from "./components/home";
// import About from "./components/about";
// import Skills from "./components/skills";
// import Contact from "./components/contact";

// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//         <header className="head">
//           <h3>
//             Port<span>folio</span>
//           </h3>
//           <nav>
//             <ul>
//               <li>
//                 <Link to="/" className="li">
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/about" className="li">
//                   About
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/skills" className="li">
//                   Skills
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/contact" className="li">
//                   Contact Us
//                 </Link>
//               </li>
//             </ul>
//           </nav>
//         </header>
//         {/* Main section for content */}
//         <section>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/skills" element={<Skills />} />
//             <Route path="/contact" element={<Contact />} />
//           </Routes>
//         </section>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;
import styles from "./App.module.css";
import Home from "./components/home";
import About from "./components/about";
import Projects from "./components/projects";
import Contact from "./components/contact";

function App() {
  return (
    <div className={styles.App}>
      <header className={styles.head}>
        <h3>
          Port<span className={styles.span}>folio</span>
        </h3>
        <nav>
          <ul className={styles.ul}>
            <li>
              <a href="#home" className={styles.li}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" className={styles.li}>
                About
              </a>
            </li>
            <li>
              <a href="#projects" className={styles.li}>
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className={styles.li}>
                Contact-Us
              </a>
            </li>
          </ul>
        </nav>
      </header>
      {/* Main section for content */}
      <section>
        <div id="home">
          <Home />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </section>
      <footer>Thanks For Visiting my website!</footer>
    </div>
  );
}

export default App;
