"use client";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaInstagram, FaPhone, FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import SmallForm from "./SmallForm";
import logo from "../assets/images/logo.png"

const Footer = () => {
  return (
    <>
      <footer className="bg-light  pt-5 pb-3">
        <div className="container">
          <div className="row gy-4">
            {/* About Section */}
            <div className="col-lg-4 col-md-6">
              <Image src={logo} alt="logo" className="st-logo" />
              <p className="small mt-2">
                Digi Estate Group is a trusted real estate and property consulting firm delivering reliable solutions with transparency, innovation, and integrity.              </p>

              <div className="d-flex gap-3 mt-3">
                <a href="#" className="text-dark fs-5"><FaFacebookF /></a>
                <a href="#" className="text-dark fs-5"><FaTwitter /></a>
                <a href="#" className="text-dark fs-5"><FaLinkedinIn /></a>
                <a href="#" className="text-dark fs-5"><FaYoutube /></a>
                <a href="#" className="text-dark fs-5"><FaInstagram /></a>
              </div>
            </div>

            {/* Properties in India */}
            <div className="col-lg-4 col-md-6">
              <h6 className="fw-bold mb-3">Useful Links</h6>
              <div className="d-flex flex-column gap-1">
                <Link href="/" className="text-muted small text-decoration-none">
                  Home
                </Link>
                <Link href="/" className="text-muted small text-decoration-none">
                  About Us
                </Link>
                <Link href="/" className="text-muted small text-decoration-none">
                  Services
                </Link>
                <Link href="/" className="text-muted small text-decoration-none">
                  Projects
                </Link>
                <Link href="/" className="text-muted small text-decoration-none">
                  Blog
                </Link>
                <Link href="/" className="text-muted small text-decoration-none">
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Property Services */}
            <div className="col-lg-4 col-md-6">
              <h6 className="fw-bold mb-3">Contact Us</h6>
              <div className="d-flex flex-column gap-1">
                <div className="">
                  <Link href="tel:+919608498908" className="text-muted small text-decoration-none">
                    <span className="me-2">
                      <FaPhone className="text-st fs-5" />
                    </span>
                    +91 9608498908
                  </Link>
                </div>

                 <div className="mt-2">
                  <Link href="mailto:sales@digiestategroup.com" className="text-muted small text-decoration-none">
                    <span className="me-2">
                      <FaEnvelope className="text-st fs-5" />
                    </span>
                    sales@digiestategroup.com
                  </Link>
                </div>
                 <div className="mt-2">
                  <Link href="#" className="text-muted small text-decoration-none">
                    <span className="me-2">
                      <FaLocationDot className="text-st fs-5" />
                    </span>
                      Gola Road, Danapur, Patna 801503
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <hr className="my-4" />

          {/* Bottom Footer */}
          <div className="text-center text-muted small">
            <p className="small mt-3">
              © 2026 <b>DigiEstate Group.</b> All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* small form */}
      {/* <SmallForm /> */}
    </>

  );
};

export default Footer;
