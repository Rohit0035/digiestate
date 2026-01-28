"use client";
import Image from "next/image";
import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import proimg from "../../assets/images/pro-1.jpg"; 

const ImageGridWithLightbox = () => {
  const [open, setOpen] = useState(false);

  // Works for both local imports (like proimg) and URLs from API
  const images = [
    proimg,
    proimg,
    proimg,
    proimg,
    proimg,
  ];

  // Convert to valid Lightbox slides
  const slides = images.map((img) => ({
    src: typeof img === "string" ? img : img.src, // handles both imported and remote URLs
  }));

  return (
    <div className="image-grid position-relative rounded-3 overflow-hidden mb-2">
      {/* Main Image */}
      <div className="row g-2">
        <div className="col-12">
          <Image
            src={typeof images[0] === "string" ? images[0] : images[0].src}
            alt="Main"
            width={600}
            height={400}
            className="img-fluid rounded-3 w-100"
            style={{ height: "200px", objectFit: "cover", cursor: "pointer" }}
            onClick={() => setOpen(true)}
          />
        </div>

        {/* Thumbnail Images */}
        {images.slice(1, 3).map((img, index) => (
          <div className="col-4" key={index}>
            <Image
              src={typeof img === "string" ? img : img.src}
              alt={`Thumbnail ${index + 1}`}
              width={200}
              height={150}
              className="img-fluid rounded-3 w-100"
              style={{ height: "95px", objectFit: "cover", cursor: "pointer" }}
              onClick={() => setOpen(true)}
            />
          </div>
        ))}

        {/* +Photos Overlay */}
        <div className="col-4 position-relative">
          <Image
            src={typeof images[3] === "string" ? images[3] : images[3].src}
            alt="More Photos"
            width={200}
            height={150}
            className="img-fluid rounded-3 w-100"
            style={{ height: "95px", objectFit: "cover", cursor: "pointer" }}
            onClick={() => setOpen(true)}
          />
          <div
            className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
            style={{
              background: "rgba(0,0,0,0.5)",
              color: "#fff",
              fontWeight: "500",
              fontSize: "16px",
              borderRadius: "8px",
              cursor: "pointer",
            }}
            onClick={() => setOpen(true)}
          >
            +{images.length - 4} Photos
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides}
      />
    </div>
  );
};

export default ImageGridWithLightbox;
