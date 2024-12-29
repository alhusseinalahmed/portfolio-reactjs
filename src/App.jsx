import styles from "./App.module.css";
import { Navbar } from "./components/navbar/Navbar.jsx";
import { Hero } from "./components/hero/Hero.jsx";
import { About } from "./components/about/About.Jsx";
import { Experience } from "./components/experience/Experience.jsx";
import { Projects } from "./components/projects/Projects.jsx";
import { Contact } from "./components/contact/Contact.jsx";

function App() {
  return (
    <div className={styles.app}>
      <Navbar />
      <Hero></Hero>
      <About></About>
      <Experience></Experience>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  );
}

export default App;
