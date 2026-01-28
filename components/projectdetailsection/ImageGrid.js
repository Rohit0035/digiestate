"use client";
import React, { useState } from "react";
import { Container, Row, Col, Button, Modal, ModalBody } from "reactstrap";
import Image from "next/image";
import { FaPlay, FaRegImages } from "react-icons/fa";
import dynamic from "next/dynamic";
import "bootstrap/dist/css/bootstrap.min.css"; // required for modal
import "yet-another-react-lightbox/styles.css";

// Lazy load Lightbox to avoid SSR mismatch
const Lightbox = dynamic(() => import("yet-another-react-lightbox"), {
  ssr: false,
});

// Dummy images (replace with your own)
import videoImg from "../../assets/images/pro-1.jpg";
import img1 from "../../assets/images/pro-1.jpg";
import img2 from "../../assets/images/pro-1.jpg";
import img3 from "../../assets/images/pro-1.jpg";
import img4 from "../../assets/images/pro-1.jpg";

const ImageGrid = () => {
  const [videoModal, setVideoModal] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const images = [img1, img2, img3, img4];

  return (
    <section className="py-4">
      <Container>
        <Row className="g-3">
          {/* Left Large Video */}
          <Col lg="6" md="12">
            <div className="position-relative rounded-4 overflow-hidden">
              <Image
                src={videoImg.src}
                alt="Project Video"
                width={800}
                height={450}
                className="img-fluid w-100"
                style={{ objectFit: "cover", height: "100%" }}
              />

              {/* Play Button */}
              <div
                onClick={() => setVideoModal(true)}
                className="position-absolute top-50 start-50 translate-middle bg-white text-st rounded-circle d-flex align-items-center justify-content-center shadow"
                style={{ width: "60px", height: "60px", cursor: "pointer" }}
              >
                <FaPlay size={20} />
              </div>

              {/* Label */}
              <div className="position-absolute bottom-0 start-0 m-3">
                <Button
                  color="light"
                  size="sm"
                  onClick={() => setVideoModal(true)}
                  className="rounded-pill shadow-sm fw-semibold d-flex align-items-center gap-1"
                >
                  <FaPlay size={12} /> Project Review by Expert
                </Button>
              </div>
            </div>
          </Col>

          {/* Right 2x2 Images */}
          <Col lg="6" md="12">
            <Row className="g-3">
              {images.map((img, i) => (
                <Col xs="6" key={i}>
                  <div
                    className="position-relative rounded-4 overflow-hidden"
                    style={{ cursor: "pointer", height: "195px" }}
                    onClick={() => {
                      setLightboxIndex(i);
                      setLightboxOpen(true);
                    }}
                  >
                    <Image
                      src={img.src}
                      alt={`Gallery ${i + 1}`}
                      width={400}
                      height={200}
                      className="img-fluid w-100"
                      style={{
                        objectFit: "cover",
                        height: "100%",
                        transition: "transform 0.3s ease",
                      }}
                    />
                    {i === 3 && (
                      <div className="position-absolute bottom-0 end-0 m-2">
                        <Button
                          color="light"
                          size="sm"
                          className="rounded-pill shadow-sm fw-semibold d-flex align-items-center gap-1"
                        >
                          <FaRegImages size={14} /> 4 Photos
                        </Button>
                      </div>
                    )}
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>

      {/* Video Modal */}
      <Modal isOpen={videoModal} toggle={() => setVideoModal(false)} centered size="lg">
        <ModalBody className="p-0">
          <div className="ratio ratio-16x9">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Project Video"
              allow="autoplay; fullscreen"
              className="w-100 h-100"
            ></iframe>
          </div>
        </ModalBody>
      </Modal>

      {/* Lightbox Gallery */}
      {lightboxOpen && (
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          index={lightboxIndex}
          slides={images.map((img) => ({ src: img.src }))}
        />
      )}
    </section>
  );
};

export default ImageGrid;
