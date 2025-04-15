import Contact from "./components/contact/page";
import HeroAbout from "./components/hero/page";
import Projects from "./components/projects/page";
import Servicespage from './components/services/page'

export default function Home() {
  return (
  <>
  <HeroAbout />
  <Projects />
  <Servicespage />
  <Contact />
  </>
  );
}
