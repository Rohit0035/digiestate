"use client";
import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Nav,
  NavItem,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  Modal,
  ModalBody,
  Button,
} from "reactstrap";
import Select from "react-select";
import {
  FaMapMarkerAlt,
  FaRupeeSign,
  FaHome,
  FaBuilding,
  FaCouch,
  FaUserTie,
  FaFilter,
} from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import "../assets/styles/navbarfilter.css";

const FilterNavbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState({
    location: false,
    budget: false,
    bhk: false,
    property: false,
    furnishing: false,
    postedby: false,
  });

  const [modal, setModal] = useState({ open: false, type: "" });

  const toggleDropdown = (key) => {
    setDropdownOpen((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleModal = (type = "") => {
    setModal((prev) => ({
      open: !prev.open,
      type: type || "",
    }));
  };

  // Dummy Select Options
  const locationOptions = [
    { value: "koramangala", label: "Koramangala" },
    { value: "indiranagar", label: "Indiranagar" },
    { value: "whitefield", label: "Whitefield" },
    { value: "hebbal", label: "Hebbal" },
  ];

  const budgetOptions = [
    { value: "10-20L", label: "₹10L - ₹20L" },
    { value: "20-40L", label: "₹20L - ₹40L" },
    { value: "40-60L", label: "₹40L - ₹60L" },
    { value: "60L+", label: "₹60L+" },
  ];

  const bhkOptions = [
    { value: "1bhk", label: "1 BHK" },
    { value: "2bhk", label: "2 BHK" },
    { value: "3bhk", label: "3 BHK" },
    { value: "4bhk", label: "4 BHK" },
  ];

  const propertyTypeOptions = [
    { value: "apartment", label: "Apartment" },
    { value: "villa", label: "Villa" },
    { value: "independent", label: "Independent House" },
    { value: "studio", label: "Studio" },
  ];

  const furnishingOptions = [
    { value: "furnished", label: "Fully Furnished" },
    { value: "semi", label: "Semi Furnished" },
    { value: "unfurnished", label: "Unfurnished" },
  ];

  const postedByOptions = [
    { value: "owner", label: "Owner" },
    { value: "dealer", label: "Dealer" },
    { value: "builder", label: "Builder" },
  ];

  // FIXED FUNCTION: takes key parameter
  const getSelectOptions = (key) => {
    switch (key) {
      case "location":
        return locationOptions;
      case "budget":
        return budgetOptions;
      case "bhk":
        return bhkOptions;
      case "property":
        return propertyTypeOptions;
      case "furnishing":
        return furnishingOptions;
      case "postedby":
        return postedByOptions;
      default:
        return [];
    }
  };

  const getTitle = () => {
    const titles = {
      location: "Select Location",
      budget: "Select Budget",
      bhk: "Select BHK",
      property: "Select Property Type",
      furnishing: "Select Furnishing",
      postedby: "Select Posted By",
    };
    return titles[modal.type] || "";
  };

  return (
    <>
      {/*Desktop Navbar */}
      <div
        className="filter-navbar  shadow-sm  d-none d-md-block mb-3"
        style={{
          color: "white",
          padding: "6px 0",
          zIndex: 1050,
          backgroundColor:'#0d55a3'
        }}
      >
        <Container>
          <Row>
            <Col xs="12">
              <Nav className="d-flex flex-wrap">
                {[
                  { key: "location", icon: <FaMapMarkerAlt size={14} />, label: "Location" },
                  { key: "budget", icon: <FaRupeeSign size={14}/>, label: "Budget" },
                  { key: "bhk", icon: <FaHome size={14} />, label: "BHK" },
                  { key: "property", icon: <FaBuilding size={14} />, label: "Property Type" },
                  { key: "furnishing", icon: <FaCouch size={14} />, label: "Furnishing" },
                  { key: "postedby", icon: <FaUserTie size={14} />, label: "Posted By" },
                ].map((item) => (
                  <NavItem key={item.key}>
                    <Dropdown
                      isOpen={dropdownOpen[item.key]}
                      toggle={() => toggleDropdown(item.key)}
                    >
                      <DropdownToggle
                        color="light"
                        className="rounded-pill px-3 py-1 d-flex align-items-center me-2"
                      >
                        <span className="me-2 text-st small">{item.icon}</span>
                        {item.label}
                        <IoIosArrowDown className="ms-2" />
                      </DropdownToggle>
                      <DropdownMenu className="p-3" style={{ minWidth: "250px" }}>
                        <Select
                          isMulti
                          options={getSelectOptions(item.key)} 
                          placeholder={`Select ${item.label}`}
                        />
                      </DropdownMenu>
                    </Dropdown>
                  </NavItem>
                ))}
              </Nav>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Mobile Sticky Bottom Bar */}
      <div className="filter-bottom-bar d-md-none">
        {[
          { key: "location", icon: <FaMapMarkerAlt />, label: "Location" },
          { key: "budget", icon: <FaRupeeSign />, label: "Budget" },
          { key: "bhk", icon: <FaHome />, label: "BHK" },
          { key: "property", icon: <FaBuilding />, label: "Property" },
          { key: "filter", icon: <FaFilter />, label: "More" },
        ].map((item) => (
          <div
            key={item.key}
            className="filter-bottom-icon"
            onClick={() => toggleModal(item.key)}
          >
            {item.icon}
            <small>{item.label}</small>
          </div>
        ))}
      </div>

      {/*Bottom Modal */}
      <Modal
        isOpen={modal.open}
        toggle={() => toggleModal()}
        className="filter-modal-bottom"
        centered
      >
        <ModalBody>
          <div className="text-center mb-2">
            <div className="filter-modal-handle"></div>
            <h6 className="fw-bold mb-3">{getTitle()}</h6>
          </div>
          <Select
            isMulti
            options={getSelectOptions(modal.type)} 
            placeholder={getTitle()}
            className="mb-3"
          />
          <div className="d-flex justify-content-between">
            <Button color="secondary" outline onClick={() => toggleModal()}>
              Cancel
            </Button>
            <Button color="danger" onClick={() => toggleModal()}>
              Apply
            </Button>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
};

export default FilterNavbar;
