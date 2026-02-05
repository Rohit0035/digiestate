"use client";
import { useState } from "react";
import { Col, Container, Row } from "reactstrap";
import "../../assets/styles/project.css"
import CityPopup from "../../components/CityPopup";
import HeroGrid from "../../components/projectssections/HeroGrid";
import Hotspots from "../../components/projectssections/Hotspots";
import ProjectListing from "../../components/projectssections/ProjectListing";
import ProjectCard from "../../components/projectssections/ProjectCard";
import ExploreProjects from "../../components/projectssections/ExploreProjects";
import ExplorePossession from "../../components/projectssections/ExplorePossession";
import ProjectListingCompleted from "../../components/projectssections/ProjectListingCompleted";
import OngoingProjectList from "../../components/projectssections/OngoingProjectList";
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
                            <h1 className="text-white text-center">DigiEstate Group Projects</h1>
                        </Col>
                    </Row>
                    {/* hero grid */}
                    <HeroGrid />
                </Container>
            </section>

            <section className="project-sec-2 bg-light pb-0">
                <Container>
                    <Hotspots />
                    <ProjectListingCompleted />
                    <OngoingProjectList/>
                </Container>
            </section>

            {/* citypopup */}
            <CityPopup isOpen={modalOpen} toggle={toggleModal} />
        </>
    );
};
export default Projects;