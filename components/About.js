"use client";
import Image from "next/image";
import React from "react";
import aboutimg from "../assets/images/dg/abt-1.jpeg"
const About = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row align-items-center g-4">

          {/* LEFT IMAGE */}
          <div
            className="col-lg-6 col-md-12"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <Image
              src={aboutimg}
              alt="Digi Estate Group Real Estate"
              className="img-fluid rounded "
            />
          </div>

          {/* RIGHT CONTENT */}
          <div
            className="col-lg-6 col-md-12"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <span className="text-st fw-semibold text-uppercase">
              About Digi Estate Group
            </span>
            <h2 className="fw-bold mt-2">
              Building Trust Through <br className="d-none d-md-block" />
              Smart Real Estate Solutions
            </h2>
            <p className="text-muted mt-2">
              Digi Estate Group is a trusted real estate and property consulting
              company offering residential and commercial property solutions
              backed by transparency, expertise, and market insight.
            </p>
            <p className="text-muted">
              From property consultation and project marketing to site visits
              and investment guidance, we help our clients make confident and
              informed real estate decisions that deliver long-term value.
            </p>
            <div className="d-flex gap-3 mt-3 flex-wrap">
              <a href="/about" className="btn btn-danger rounded-pill btn">
                Know More About Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
