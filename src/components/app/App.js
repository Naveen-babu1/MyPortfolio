import Navbar from "../navbar/Navbar";
import Header from "../header/Header";
// import AnimatedCursor from "react-animated-cursor";
import About from "../about/About";
import Myjourney from "../myjourney/Myjourney";
import Skills from "../skills/Skills";
import Projheader from "../projects/Projheader";
import Projects from "../projects/Projects";
function App() {
  return (
    <div className="App">
      {/* <AnimatedCursor
        innerSize={15}
        outerSize={45}
        color="110,6,242"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={2}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      /> */}
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Myjourney />
      <Projheader />
      <Projects />
    </div>
  );
}

export default App;
