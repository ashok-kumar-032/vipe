import logo from "./logo.svg";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Studio from "./components/Studio";
import Integer from "./components/Integer";
import Team from "./components/Team";
import { useEffect } from "react";
import Success from "./components/Success";
import Have from "./components/Have";
import Footer from "./components/Footer";
import Agile from "./components/Agile";
import Long from "./components/Long";
import Featured from "./components/Featured";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Hero from "./components/Hero";
import Mynav from "./components/Mynav";
import Tell from "./components/Tell";
import { Route, Routes } from "react-router-dom";
import Loading from "./components/Loading";
import BackToTop from "./components/BackToTop";
function App() {
  useEffect(() => {
    AOS.init({ once: true, disable: "mobile" });
  }, []);
  return (
    <div className="App overflow-hidden">
      <Mynav />
      <Hero />
      <Tell />
      <Featured />
      <Integer />
      <Studio />
      <Long />
      <Agile />
      <Team />
      <Success />
      <Have />
      <Footer />
      <Loading />
      <BackToTop />
    </div>
  );
}

export default App;
