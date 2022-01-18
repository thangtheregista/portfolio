import "./intro.scss";
import { useEffect } from "react";

export default function Intro() {
  useEffect(() => {
    addInviewclass();
    document.querySelectorAll("*").forEach((element) =>
      element.addEventListener("scroll", () => {
        addInviewclass();
      })
    );
  });

  const addInviewclass = () => {
    const sections = document.getElementsByClassName("section");
    const navlink = document.getElementsByClassName("nav-link");

    for (var i = 0; i < sections.length; i++) {
      console.log(sections[i].getBoundingClientRect().y);
      if (
        56 <= sections[i].getBoundingClientRect().y &&
        sections[i].getBoundingClientRect().y <= window.innerHeight
      ) {
        // sections[i].classList.add("in-view");
        navlink[i].classList.add("in-view");
      } else {
        // sections[i].classList.remove("in-view");
        navlink[i].classList.remove("in-view");
        navlink[i].classList.remove("active");
      }
    }
  };
  return (
    <div className="intro section" id="intro">
      <div className="intro-wrapper">
        <h1 className="intro-content">WELCOME TO MY PORTFOLIO</h1>
      </div>
    </div>
  );
}
