import { useEffect, useRef } from "react";

import PortNavbar from "../../components/PortNavbar";
import Landing from "./sections/Landing"
import PersonalDetails from "./sections/PersonalDetails";
import Skills from "./sections/Skills";
import Experiences from "./sections/Experiences"
import Contact from "./sections/Contact";
import "./index.scss";
import Projects from "./sections/Projects";

const HomePage = () => {
  const onShowRef = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];
  // const onShowRef = Array(5).fill(useRef<HTMLDivElement>(null))
  useEffect(() => {
    function isInViewport(element: HTMLElement) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) / 1.5 &&
        rect.bottom >= 0 &&
        rect.left >= 0 &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }    
  
    function onScroll() {
      onShowRef.forEach((ref) => {
        const element = ref.current;
        if (element && isInViewport(element)) {
          element.classList.add('visible');
        }
      });
    }
  
    window.addEventListener('scroll', onScroll);
  
    return () => {
      window.removeEventListener('scroll', onScroll);
    };  
  }, [onShowRef]);
  
  return (
    <div className="app">
      <PortNavbar></PortNavbar>
      <Landing></Landing>
      <div className="description__container">
      <div ref={onShowRef[0]} className="onShow"><PersonalDetails /></div>
      <div ref={onShowRef[1]} className="onShow"><Skills /></div>
      <div ref={onShowRef[2]} className="onShow"><Experiences /></div>
      <div ref={onShowRef[3]} className="onShow"><Projects /></div>
      <div ref={onShowRef[4]} className="onShow"><Contact /></div>
      </div>
    </div>
  );
};

export default HomePage;