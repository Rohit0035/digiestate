"use client";
import Image from "next/image";
import HeroSection from "../../components/HeroSection";
import HomeStatus from "../../components/HomeStatus";
import HomePropertyList from "../../components/CompletedProjects";
import WhyUsSection from "../../components/WhyUsSection";
import AdviceTools from "../../components/AdviceTools";
import AdsBanner from "../../components/AdsBanner";
import HomeEstateGuide from "../../components/HomeEstateGuide";
import FreshProperties from "../../components/FreshProperties";
import HomeSnapshot from "../../components/HomeSnapshot";
import HomePropertyOptions from "../../components/HomePropertyOptions";
import RecommendedSection from "../../components/RecommendedSection";
import AgentSection from "../../components/AgentSection";
import BottomNav from "../../components/bottomnav/FilterMobile";
import About from "../../components/About";
import OnGoingProjects from "../../components/OnGoingProjects";
import CompletedProjects from "../../components/CompletedProjects";

export default function HomeIndex() {
  return (
    <>
       <HeroSection/>
       <About/>
       <HomeStatus/>
       <CompletedProjects/>
       <WhyUsSection/>
       <OnGoingProjects/>
       <AdsBanner/>
       <FreshProperties/>
       <BottomNav/>
    </>
  );
}
