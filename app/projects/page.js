"use client";
import { useState } from "react";
import { Col, Container, Row } from "reactstrap";
import "../../assets/styles/project.css"
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa";
import CityPopup from "../../components/CityPopup";
import HeroGrid from "../../components/projectssections/HeroGrid";
import Hotspots from "../../components/projectssections/Hotspots";
import ProjectListing from "../../components/projectssections/ProjectListing";
import NewLaunchShowcase from "../../components/projectssections/NewLaunchShowcase";
import PropertyCard from "../../components/PropertyCard";
import ProjectCard from "../../components/projectssections/ProjectCard";
import ExploreProjects from "../../components/projectssections/ExploreProjects";
import ExplorePossession from "../../components/projectssections/ExplorePossession";
const Projects = () => {

    // citypopup
    const [modalOpen, setModalOpen] = useState(false);
    const toggleModal = () => setModalOpen(!modalOpen);

    return (
        <>
            <section className="project-sec">
                <Container>
                    <Row>
                        <Col lg="12">
                            <h1 className="text-white text-center">SmartMind</h1>
                            <h1 className="text-white text-center">
                                Encyclopedia For All New Projects
                            </h1>
                            <h5 className="text-white text-center">In <span><Link onClick={toggleModal} href="javascript:void(0);" className="text-white">Bangalore <FaAngleDown /></Link></span></h5>
                        </Col>
                    </Row>
                    {/* hero grid */}
                    <HeroGrid />
                </Container>
            </section>

            <section className="project-sec-2 bg-light pb-0">
                <Container>
                    <Hotspots />
                    <ProjectListing />
                    <NewLaunchShowcase />
                    <ProjectCard />
                    <ExploreProjects />
                    <ProjectCard />
                    <ProjectCard />
                    <ExplorePossession />
                    <ProjectCard />
                    <ProjectCard />
                </Container>
            </section>

            {/* citypopup */}
            <CityPopup isOpen={modalOpen} toggle={toggleModal} />
        </>
    );
};
export default Projects;