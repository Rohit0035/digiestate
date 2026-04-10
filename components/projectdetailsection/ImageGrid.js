"use client";
import React, { useState, useMemo } from "react";
import { Container, Row, Col, Button, Modal, ModalBody } from "reactstrap";
import Image from "next/image";
import { FaPlay, FaRegImages } from "react-icons/fa";
import dynamic from "next/dynamic";
import { IMAGE_URL } from "../../utils/api-config";
import "bootstrap/dist/css/bootstrap.min.css";
import "yet-another-react-lightbox/styles.css";

// Lazy load Lightbox (avoids hydration issue)
const Lightbox = dynamic(() => import("yet-another-react-lightbox"), {
  ssr: false
});

const ImageGrid = ({ project = {} }) => {
  const [videoModal, setVideoModal] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const photos = project?.photosAndVideos?.photos || [];
  const videos = project?.photosAndVideos?.videos || [];

  const previewPhotos = photos.slice(0, 4);
  const mainVideo = videos[0]; // first video only

  const slides = useMemo(() => {
    return photos.map((photo) => ({
      src: `${IMAGE_URL}${photo}`
    }));
  }, [photos]);

  if (!photos.length && !videos.length) return null;

  return (
    <section className="py-4">
      <Container>
        <Row className="g-3">
          {/* LEFT SIDE VIDEO */}
          {mainVideo && (
            <Col lg="6" md="12">
              <div className="position-relative rounded-4 overflow-hidden">
                {/* Show first photo as video thumbnail fallback */}
                <Image
                  src={`${IMAGE_URL}${photos[0] || ""}`}
                  alt="Project Video"
                  width={600}
                  height={450}
                  className="img-fluid w-100"
                  style={{ objectFit: "cover", height: "400px" }}
                />

                {/* Play Button */}
                <div
                  onClick={() => setVideoModal(true)}
                  className="position-absolute top-50 start-50 translate-middle bg-white text-st rounded-circle d-flex align-items-center justify-content-center shadow"
                  style={{ width: "60px", height: "60px", cursor: "pointer" }}
                >
                  <FaPlay size={20} />
                </div>

                <div className="position-absolute bottom-0 start-0 m-3">
                  <Button
                    color="light"
                    size="sm"
                    onClick={() => setVideoModal(true)}
                    className="rounded-pill shadow-sm fw-semibold d-flex align-items-center gap-1"
                  >
                    <FaPlay size={12} /> Project Video
                  </Button>
                </div>
              </div>
            </Col>
          )}

          {/* RIGHT SIDE IMAGES */}
          {previewPhotos.length > 0 && (
            <Col lg="6" md="12">
              <Row className="g-3">
                {previewPhotos.map((photo, i) => (
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
                        src={`${IMAGE_URL}${photo}`}
                        alt={`Gallery ${i + 1}`}
                        width={400}
                        height={200}
                        className="img-fluid w-100"
                        style={{
                          objectFit: "cover",
                          height: "100%"
                        }}
                      />

                      {/* Show count badge on last image */}
                      {i === previewPhotos.length - 1 &&
                        photos.length > 4 && (
                          <div className="position-absolute bottom-0 end-0 m-2">
                            <Button
                              color="light"
                              size="sm"
                              className="rounded-pill shadow-sm fw-semibold d-flex align-items-center gap-1"
                            >
                              <FaRegImages size={14} /> {photos.length} Photos
                            </Button>
                          </div>
                        )}
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>
          )}
        </Row>
      </Container>

      {/* VIDEO MODAL */}
      {mainVideo && (
        <Modal
          isOpen={videoModal}
          toggle={() => setVideoModal(false)}
          centered
          size="lg"
        >
          <ModalBody className="p-0">
            <div className="ratio ratio-16x9">
              <video
                src={`${IMAGE_URL}${mainVideo}`}
                controls
                autoPlay
                className="w-100 h-100"
              />
            </div>
          </ModalBody>
        </Modal>
      )}

      {/* LIGHTBOX */}
      {lightboxOpen && (
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          index={lightboxIndex}
          slides={slides}
        />
      )}
    </section>
  );
};

export default ImageGrid;