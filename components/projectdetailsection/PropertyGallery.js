"use client";

import React, { useState, useMemo } from "react";
import { Card, CardBody } from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Image from "next/image";
import { IMAGE_URL } from "../../utils/api-config";

const PropertyGallery = ({ project = {} }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const photos = project?.photosAndVideos?.photos || [];
  const videos = project?.photosAndVideos?.videos || [];

  // Merge photos + videos into single media array
  const media = useMemo(() => {
    const photoItems = photos.map((photo) => ({
      type: "image",
      url: photo,
    }));

    const videoItems = videos.map((video) => ({
      type: "video",
      url: video,
    }));

    return [...photoItems, ...videoItems];
  }, [photos, videos]);

  // Prepare slides for Lightbox
  const slides = useMemo(() => {
    return media.map((item) =>
      item.type === "video"
        ? {
            type: "video",
            sources: [
              {
                src: `${IMAGE_URL}${item.url}`,
                type: "video/mp4",
              },
            ],
          }
        : {
            src: `${IMAGE_URL}${item.url}`,
          }
    );
  }, [media]);

  if (!media.length) return null;

  return (
    <section className="pt-0">
      <Card className="border-0 bg-white shadow-sm">
        <CardBody>
          {/* Header */}
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h5 className="fw-bold mb-0">
              {project?.title} Photos & Videos
            </h5>
          </div>

          {/* Swiper */}
          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={20}
            slidesPerView={3}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
            }}
          >
            {media.map((item, index) => (
              <SwiperSlide key={index}>
                <div
                  className="rounded overflow-hidden shadow-sm"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setPhotoIndex(index);
                    setLightboxOpen(true);
                  }}
                >
                  {item.type === "video" ? (
                    <video
                      src={`${IMAGE_URL}${item.url}`}
                      width="100%"
                      height="250"
                      className="rounded"
                      muted
                    />
                  ) : (
                    <Image
                      src={`${IMAGE_URL}${item.url}`}
                      alt="Project Image"
                      width={400}
                      height={250}
                      className="img-fluid rounded"
                    />
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </CardBody>
      </Card>

      {/* Lightbox */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={photoIndex}
        slides={slides}
      />
    </section>
  );
};

export default PropertyGallery;