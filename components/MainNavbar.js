"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  Collapse,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Row,
  Col,
} from "reactstrap";
import {
  FaChevronDown,
  FaBars,
  FaArrowLeft,
  FaTimes,
  FaChevronRight,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import "../assets/styles/navbar.css";

import menuData from "./menuData";
import CityPopup from "./CityPopup";
import Image from "next/image";
import logo from "../assets/images/logo.png";

export default function MainNavbar() {
  const router = useRouter();

  const [showSidebar, setShowSidebar] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [expandedChild, setExpandedChild] = useState(null);

  const [modalOpen, setModalOpen] = useState(false);
  const toggleModal = () => setModalOpen(!modalOpen);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
    setActiveSubmenu(null);
    setExpandedChild(null);
  };

  const openSubmenu = (menu) => {
    setActiveSubmenu(menu);
    setExpandedChild(null);
  };

  const closeSubmenu = () => setActiveSubmenu(null);

  const toggleChild = (child) => {
    setExpandedChild(expandedChild === child ? null : child);
  };

  /** ✅ SAFE NAVIGATION FUNCTION (FIX) */
  const navigateTo = (path) => {
    setShowSidebar(false);
    setActiveSubmenu(null);
    setExpandedChild(null);
    router.push(path);
  };

  const activeMenuData = menuData.find((m) => m.name === activeSubmenu);

  return (
    <>
      {/* === Top Header === */}
      <div className="top-header border-bottom d-none d-sm-block" style={{ padding: "8px 0px" }}>
        <div className="container small">
          <Row>
            <Col md="6">
              <div className="text-start">
                <a href="tel:919608498908" className="text-white">
                  +91 9608498908
                </a>
                <a href="mailto:sales@digiestategroup.com" className="text-white ms-2">
                  sales@digiestategroup.com
                </a>
              </div>
            </Col>
            <Col md="6">
              <div className="text-end">
                <a href="#" className="ms-2 text-white"><FaFacebook /></a>
                <a href="#" className="ms-2 text-white"><FaInstagram /></a>
                <a href="#" className="ms-2 text-white"><FaTwitter /></a>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      {/* === Main Navbar === */}
      <Navbar expand="lg" className="smart-navbar bg-white shadow-sm py-2">
        <div className="container">
          <div className="d-flex align-items-center w-100">
            <NavbarBrand href="/" className="d-lg-none">
              <Image src={logo} alt="logo" className="st-logo" />
            </NavbarBrand>
            <div className="ms-auto right-grid d-flex justify-content-end d-lg-none">
              <UncontrolledDropdown>
                <DropdownToggle caret color="primary" className="rounded-pill btn-danger w-100  btn btn-danger btn-sm px-4 ">
                  Login
                </DropdownToggle>
                <DropdownMenu style={{ zIndex: '9999 !important', position: 'absolute !important' }}>
                  <DropdownItem tag={Link} href="/signup">
                    Sign Up
                  </DropdownItem>

                  <DropdownItem tag={Link} href="/signin">
                    Sign In
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <Link href="/postproperty" className="rounded-pill text-white btn ms-2 btn-sm d-none d-sm-block" style={{ borderRadius: '100px', backgroundColor: '#417867' }}>
                Post Property
              </Link>
            </div>
            <div className="ms-auto d-lg-none">
              <button className="btn btn-link text-dark fs-5" onClick={toggleSidebar}>
                <FaBars />
              </button>
            </div>
          </div>

          {/* === Desktop Menu === */}
          <Collapse isOpen navbar className="d-none d-lg-flex">
            <NavbarBrand href="/">
              <Image src={logo} alt="logo" className="st-logo" />
            </NavbarBrand>

            <Nav className="align-items-center ms-auto me-auto" navbar>
              {menuData.map((menu) => (
                <NavItem key={menu.name} className="smart-megamenu-parent">
                  <Link href={menu.path || "#"} className="nav-link fw-semibold text-dark">
                    {menu.name}
                    {menu.submenu && <FaChevronDown className="small ms-1" />}
                  </Link>

                  {menu.submenu && (
                    <div className="smart-megamenu shadow-sm p-4 bg-white">
                      <div className="row g-4">
                        {menu.submenu.map((sub, i) => (
                          <div key={i} className="col">
                            <h6 className="fw-bold text-st mb-2">{sub.title}</h6>
                            <ul className="list-unstyled small">
                              {sub.items.map((item, j) => (
                                <li key={j}>
                                  <Link href={item.path} className="text-dark text-decoration-none">
                                    {item.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </NavItem>
              ))}
            </Nav>
            <div className="ms-auto right-grid d-flex justify-content-end">
              <UncontrolledDropdown>
                <DropdownToggle caret color="primary" className="rounded-pill btn-danger w-100  btn btn-danger btn-sm px-4 ">
                  Login
                </DropdownToggle>
                <DropdownMenu style={{ zIndex: '9999 !important', position: 'absolute !important' }}>
                  <DropdownItem tag={Link} href="/signup">
                    Sign Up
                  </DropdownItem>

                  <DropdownItem tag={Link} href="/signin">
                    Sign In
                  </DropdownItem>
                </DropdownMenu>

                {/* <DropdownMenu style={{ zIndex: '9999' }} className="d-none">
                    <DropdownItem>Profile</DropdownItem>
                    <DropdownItem>Settings</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Log out</DropdownItem>
                  </DropdownMenu> */}
              </UncontrolledDropdown>
              <Link href="/postproperty" className="rounded-pill text-white btn btn-sm ms-2 px-4 fw-bold d-none d-sm-block" style={{ borderRadius: '100px', backgroundColor: '#417867' }}>
                Post Property
              </Link>
            </div>
          </Collapse>
        </div>
      </Navbar>

      {/* === Mobile Sidebar === */}
      <div className={`smart-sidebar ${showSidebar ? "open" : ""}`}>
        <div className="sidebar-header d-flex align-items-center justify-content-between p-3 border-bottom">
          {activeSubmenu ? (
            <>
              <FaArrowLeft onClick={closeSubmenu} />
              <h6 className="mb-0 fw-bold">{activeSubmenu}</h6>
              <FaTimes onClick={toggleSidebar} />
            </>
          ) : (
            <>
              <h5 className="mb-0 fw-bold">Menu</h5>
              <FaTimes onClick={toggleSidebar} />
            </>
          )}
        </div>

        {/* === Parent Menu === */}
        <div className={`sidebar-body ${activeSubmenu ? "hide" : ""}`}>
          <ul className="list-unstyled mb-0">
            {menuData.map((menu) => (
              <li
                key={menu.name}
                onClick={() =>
                  menu.submenu
                    ? openSubmenu(menu.name)
                    : navigateTo(menu.path)
                }
              >
                {menu.name}
                {menu.submenu && <FaChevronRight className="float-end mt-1" />}
              </li>
            ))}
          </ul>
        </div>

        {/* === Submenu === */}
        <div className={`submenu-body ${activeSubmenu ? "show" : ""}`}>
          {activeMenuData && (
            <ul className="list-unstyled mb-0">
              {activeMenuData.submenu?.map((sub) => (
                <li key={sub.title}>
                  <div
                    className="d-flex justify-content-between align-items-center px-3 py-2"
                    onClick={() => toggleChild(sub.title)}
                  >
                    <span>{sub.title}</span>
                    <FaChevronDown
                      className={`small ${expandedChild === sub.title ? "rotate" : ""}`}
                    />
                  </div>

                  <Collapse isOpen={expandedChild === sub.title}>
                    <ul className="list-unstyled ms-3 mt-2 small">
                      {sub.items.map((item, i) => (
                        <li key={i}>
                          <a
                            className="text-dark text-decoration-none"
                            onClick={() => navigateTo(item.path)}
                          >
                            {item.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </Collapse>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* === Overlay === */}
      <div
        className={`smart-sidebar-overlay ${showSidebar ? "show" : ""}`}
        onClick={toggleSidebar}
      />

      <CityPopup isOpen={modalOpen} toggle={toggleModal} />
    </>
  );
}
