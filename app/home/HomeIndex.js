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
// import BottomNav from "../../components/bottomnav/FilterMobile";
import About from "../../components/AboutSection";
import OnGoingProjects from "../../components/OnGoingProjects";
import CompletedProjects from "../../components/CompletedProjects";
import AboutSection from "../../components/AboutSection";
import NewLaunchShowcase from "../../components/projectssections/NewLaunchShowcase";
import { getProjects, getWebsiteSettings } from "../../lib/api";
import { useEffect, useState } from "react";

export default function HomeIndex() {

  const [newLaunches, setNewLaunches] = useState([]);
  const [websiteSettings, setWebsiteSettings] = useState({});
  const [ongoingProjects, setOngoingProjects] = useState([]);
  const [upcomingProjects, setUpcomingProjects] = useState([]);
  const [completedProjects, setCompletedProjects] = useState([]);

    const fetchProjects = async () => {
      try {
        const response = await getProjects();
  
        if (response.success === true) {
          setNewLaunches(response.data);
          setOngoingProjects(response.data.filter((project) => project.status === "Ongoing"));
          setUpcomingProjects(response.data.filter((project) => project.status === "Upcoming"));
          setCompletedProjects(response.data.filter((project) => project.status === "Completed"));
        } else {
          console.log(response.message);
        }
      } catch (error) {
        console.log(error);
      } finally {
      }
    };
  
    useEffect(() => {
      fetchProjects();
    }, []);
    
    const fetchWebsiteSettings = async () => {
      try {
        const response = await getWebsiteSettings();
  
        if (response.success === true) {
          setWebsiteSettings(response.data);
        } else {
          console.log(response.message);
        }
      } catch (error) {
        console.log(error);
      } finally {
      }
    };
  
    useEffect(() => {
      fetchWebsiteSettings();
    }, []);

  return (
    <>
      <HeroSection />
      <AboutSection />
      <HomeStatus />
      {
        completedProjects.length > 0 && (
          <CompletedProjects completedProjects={completedProjects}/>
        )
      }
      <WhyUsSection />
      {
        ongoingProjects.length > 0 && (
          <OnGoingProjects  ongoingProjects={ongoingProjects}/>
        )
      }
      <AdsBanner websiteSettings={websiteSettings}/>
      {
        upcomingProjects.length > 0 && (
          <FreshProperties  upcomingProjects={upcomingProjects}/>
        )
      }
      <NewLaunchShowcase  newLaunches={newLaunches}/>
      {/* <BottomNav /> */}
    </>
  );
}
