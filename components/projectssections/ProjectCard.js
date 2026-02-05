"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import {
  Card,
  Button,
  Row,
  Col,
  Badge,
  Modal,
  ModalBody,
} from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  FaPlayCircle,
  FaDownload,
  FaShare,
} from "react-icons/fa";
import "swiper/css";
import Link from "next/link";
import EnquiryModal from "../EnquiryModal";

// project images
import proimg1 from "../../assets/images/dg/pros-1.jpg";
import proimg2 from "../../assets/images/dg/pro-2.jpg";
import proimg3 from "../../assets/images/dg/pro-3.jpg";
import proimg4 from "../../assets/images/dg/pro-4.jpg";

// video thumbnails
import thumb1 from "../../assets/images/pro-1.jpg";
import thumb2 from "../../assets/images/pro-1.jpg";

// project data
const projects = [
  {
    id: 1,
    img: proimg4,
    name: "Radha Krishna Apartment",
    price: "₹42 Lakhs Onwards",
    size: "3 BHK • 1345 Sqft",
    location: "Bailey Road, Patna",
    status: "Completed Project",
    tag: "RERA Approved",
  },
  {
    id: 2,
    img: proimg3,
    name: "Baldev Bhawan",
    price: "₹38 Lakhs Onwards",
    size: "2 & 3 BHK",
    location: "Bailey Road, Patna",
    status: "Delivered",
    tag: "Premium",
  },
  {
    id: 3,
    img: proimg2,
    name: "Vanasthali Home LLP",
    price: "₹45 Lakhs Onwards",
    size: "3 BHK",
    location: "Boring Road, Patna",
    status: "Completed & Occupied",
    tag: "Luxury",
  },
  {
    id: 4,
    img: proimg1,
    name: "Abhinav Enclave",
    price: "₹40 Lakhs Onwards",
    size: "3 BHK • 1606 Sqft",
    location: "Kankarbagh, Patna",
    status: "Project Delivered",
    tag: "RERA",
  },
  {
    id: 5,
    img: proimg2,
    name: "Shivam Residency",
    price: "₹36 Lakhs Onwards",
    size: "2 & 3 BHK • 1180–1450 Sqft",
    location: "Rajendra Nagar, Patna",
    status: "Under Construction",
    tag: "New Launch",
  },
];

// videos (same for all cards – can be customized per project later)
const videos = [
  {
    id: 1,
    views: "10.7k Views",
    thumb: thumb1,
    url: "https://www.youtube.com/embed/XnT6vaLwGPw",
  },
  {
    id: 2,
    views: "113 Views",
    thumb: thumb2,
    url: "https://www.youtube.com/embed/XnT6vaLwGPw",
  },
  {
    id: 3,
    views: "220 Views",
    thumb: thumb2,
    url: "https://www.youtube.com/embed/XnT6vaLwGPw",
  },
];

const ProjectCard = () => {
  const [videoOpen, setVideoOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const openVideo = (url) => {
    setVideoUrl(url);
    setVideoOpen(true);
  };

  const closeVideo = () => {
    setVideoOpen(false);
    setVideoUrl("");
  };

  return (
    <>
      {projects.map((project) => (
        <Card
          key={project.id}
          className="border-0 shadow-sm p-2 mb-4 rounded-4"
          style={{ background: "#fff" }}
          data-aos="zoom-in"
        >
          <Row className="align-items-center">
            {/* LEFT IMAGE */}
            <Col lg="3" md="12" className="mb-2">
              <Link href="/projectdetail" className="text-dark">
                <div className="position-relative rounded-3 overflow-hidden">
                  <Image
                    src={project.img}
                    alt={project.name}
                    className="w-100"
                    style={{ height: "200px", objectFit: "cover" }}
                  />

                  <div
                    className="position-absolute top-0 start-0 w-100 h-100"
                    style={{ background: "rgba(0,0,0,0.35)" }}
                  />

                  <div
                    className="position-absolute top-0 end-0 m-2 bg-white rounded-circle d-flex align-items-center justify-content-center shadow-sm"
                    style={{ width: 28, height: 28 }}
                  >
                    <FaShare />
                  </div>

                  <div className="position-absolute bottom-0 start-0 text-white p-2">
                    <Badge color="danger" className="mb-1">
                      {project.tag}
                    </Badge>
                    <h6 className="fw-bold mb-0">{project.name}</h6>
                    <small>{project.location}</small>
                    <div className="fw-semibold small mt-1">
                      {project.price}
                    </div>
                    <div className="small">{project.size}</div>
                  </div>
                </div>
              </Link>
            </Col>

            {/* MIDDLE CONTENT */}
            <Col lg="6" md="12">
              <h6 className="fw-bold mb-2">Expert Reviews & Advice</h6>

              <Swiper
                spaceBetween={6}
                slidesPerView={3}
                breakpoints={{
                  0: { slidesPerView: 2 },
                  768: { slidesPerView: 3 },
                }}
              >
                {videos.map((video) => (
                  <SwiperSlide key={video.id}>
                    <div
                      className="position-relative rounded-3 overflow-hidden"
                      style={{ height: 85, cursor: "pointer" }}
                      onClick={() => openVideo(video.url)}
                    >
                      <Image
                        src={video.thumb}
                        alt="video"
                        fill
                        style={{ objectFit: "cover" }}
                      />
                      <div className="position-absolute top-50 start-50 translate-middle">
                        <FaPlayCircle size={32} className="text-white" />
                      </div>
                      <div
                        className="position-absolute bottom-0 start-0 end-0 px-2 py-1"
                        style={{
                          background:
                            "linear-gradient(to top, rgba(0,0,0,.7), transparent)",
                        }}
                      >
                        <small className="text-white">{video.views}</small>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="d-flex flex-wrap gap-3 mt-3">
                <div
                  className="p-2 rounded-3"
                  style={{ background: "#fff6e0", minWidth: 220 }}
                >
                  <Badge color="warning" className="text-dark mb-1">
                    RERA Reports
                  </Badge>
                  <div className="small">{project.status}</div>
                  <a className="text-danger fw-semibold small">
                    View Layouts →
                  </a>
                </div>

                <div
                  className="p-2 rounded-3"
                  style={{ background: "#e8fafa", minWidth: 220 }}
                >
                  <Badge color="info" className="text-dark mb-1">
                    Amenities
                  </Badge>
                  <div className="small">
                    All amenities available
                  </div>
                  <a className="text-danger fw-semibold small">
                    View Now →
                  </a>
                </div>
              </div>
            </Col>

            {/* RIGHT BUTTONS */}
            <Col lg="3" md="12">
              <div className="d-flex flex-column gap-3">
                <Button
                  color="danger"
                  className="rounded-pill"
                  onClick={toggle}
                >
                  Contact Builder
                </Button>
                <Button
                  outline
                  color="danger"
                  className="rounded-pill d-flex align-items-center justify-content-center gap-2"
                >
                  <FaDownload /> Download Brochure
                </Button>
              </div>
            </Col>
          </Row>
        </Card>
      ))}

      {/* VIDEO MODAL */}
      <Modal isOpen={videoOpen} toggle={closeVideo} size="lg" centered>
        <ModalBody className="p-0 position-relative">
          <button
            className="btn-close position-absolute top-0 end-0 m-2"
            onClick={closeVideo}
          />
          <div
            style={{
              position: "relative",
              paddingBottom: "56.25%",
              height: 0,
            }}
          >
            <iframe
              src={`${videoUrl}?autoplay=1`}
              allowFullScreen
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
              }}
            />
          </div>
        </ModalBody>
      </Modal>

      <EnquiryModal modal={modal} toggle={toggle} />
    </>
  );
};

export default ProjectCard;
