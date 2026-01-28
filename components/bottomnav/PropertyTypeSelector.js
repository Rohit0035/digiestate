"use client";
import React, { useState } from "react";
import { Card, CardBody } from "reactstrap";
import { FaBuilding, FaHome, FaDrawPolygon, FaWarehouse, FaCity } from "react-icons/fa";

const propertyTypes = [
  { id: 1, name: "Flat", icon: <FaBuilding size={22} /> },
  { id: 2, name: "House/Villa", icon: <FaHome size={22} /> },
  { id: 3, name: "Plot/Land", icon: <FaDrawPolygon size={22} /> },
  { id: 4, name: "Commercial", icon: <FaWarehouse size={22} /> },
  { id: 5, name: "Office Space", icon: <FaCity size={22} /> },
];

const PropertyTypeSelector = () => {
  const [selectedTypes, setSelectedTypes] = useState([1, 2]); // default selected

  const toggleSelect = (id) => {
    setSelectedTypes((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="property-type-wrapper mt-3">
      <p className="fw-bold text-st mb-2">Property Type</p>
      <div className="scroll-container d-flex gap-3 pb-2">
        {propertyTypes.map((type) => {
          const isActive = selectedTypes.includes(type.id);
          return (
            <Card
              key={type.id}
              onClick={() => toggleSelect(type.id)}
              className={`border-0 shadow-sm text-center px-3 py-3 flex-shrink-0 property-card ${
                isActive ? "active" : ""
              }`}
              style={{
                width: "130px",
                minWidth: "120px",
                cursor: "pointer",
                backgroundColor: isActive ? "#e6f4ef" : "#f8f9fa",
                borderRadius: "10px",
                transition: "0.3s",
              }}
            >
              <CardBody className="p-0">
                <div className={`text-${isActive ? "success" : "secondary"}`}>
                  {type.icon}
                </div>
                <p
                  className={`mb-0 mt-2 small fw-semibold text-${
                    isActive ? "success" : "dark"
                  }`}
                >
                  {type.name}
                </p>
              </CardBody>
            </Card>
          );
        })}
      </div>

      <style jsx>{`
        .scroll-container {
          overflow-x: auto;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .scroll-container::-webkit-scrollbar {
          display: none;
        }
        .property-card:hover {
          background-color: #e6f4ef;
          transform: translateY(-2px);
        }
      `}</style>
    </div>
  );
};

export default PropertyTypeSelector;
