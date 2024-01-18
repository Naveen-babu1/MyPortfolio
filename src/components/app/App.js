import Navbar from "../navbar/Navbar";
import Header from "../header/Header";
import AnimatedCursor from "react-animated-cursor";
import About from "../about/About";
function App() {
  return (
    <div className="App">
      <AnimatedCursor
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
      />
      <Navbar />
      <Header />
      <About />
    </div>
  );
}

export default App;
