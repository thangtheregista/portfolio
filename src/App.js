import Contact from "./components/contact/Contact";
import "./app.scss";
// import "./global.scss";
import Intro from "./components/intro/Intro";
import MyPortfolio from "./components/portfolio/MyPortfolio";
// import Testimonials from "./components/testimonials/Testimonials";
import Topbar from "./components/topbar/Topbar";
// import Works from "./components/works/Works";
// import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";

function App() {
  return (
    <div className="app">
      <Topbar />
      <div className="sections">
        <Intro />
        <MyPortfolio />
        <Contact />
      </div>
    </div>
  );
}

export default App;
