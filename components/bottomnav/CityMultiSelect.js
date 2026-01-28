"use client";
import React, { useState } from "react";
import Select from "react-select";
import { Badge, Card, CardBody, Col, FormGroup, Label, Row } from "reactstrap";

const CityMultiSelect = () => {
  const [selectedCities, setSelectedCities] = useState([]);
  const [selectedLocalities, setSelectedLocalities] = useState([]);

  const cityOptions = [
    { value: "Bangalore", label: "Bangalore" },
    { value: "Mumbai", label: "Mumbai" },
    { value: "Delhi", label: "Delhi" },
    { value: "Chennai", label: "Chennai" },
    { value: "Hyderabad", label: "Hyderabad" },
    { value: "Pune", label: "Pune" },
  ];

  // Example locality data based on city
  const localityOptions = {
    Bangalore: ["Whitefield", "Koramangala", "Indiranagar", "HSR Layout", "JP Nagar"],
    Mumbai: ["Andheri", "Bandra", "Powai", "Juhu", "Dadar"],
    Delhi: ["Connaught Place", "Dwarka", "Rohini", "Saket", "Vasant Kunj"],
    Chennai: ["T Nagar", "Velachery", "Anna Nagar", "Adyar", "Porur"],
    Hyderabad: ["Banjara Hills", "Gachibowli", "Madhapur", "Kondapur", "Begumpet"],
    Pune: ["Kothrud", "Baner", "Hinjewadi", "Viman Nagar", "Wakad"],
  };

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      borderRadius: "25px",
      padding: "2px 4px",
      borderColor: state.isFocused ? "#198754" : "#dee2e6",
      boxShadow: state.isFocused ? "0 0 0 0.1rem rgba(25,135,84,.25)" : "none",
      "&:hover": { borderColor: "#198754" },
      minHeight: "42px",
    }),
    multiValue: (styles) => ({
      ...styles,
      backgroundColor: "#e6f4f0",
      borderRadius: "20px",
      padding: "2px 8px",
    }),
    multiValueLabel: (styles) => ({
      ...styles,
      color: "#198754",
      fontWeight: 500,
    }),
    multiValueRemove: (styles) => ({
      ...styles,
      color: "#198754",
      ":hover": { backgroundColor: "#198754", color: "white" },
    }),
    placeholder: (styles) => ({
      ...styles,
      color: "#6c757d",
    }),
  };

  // Combine all selected cities’ localities
  const availableLocalities = selectedCities
    .map((city) => localityOptions[city.value] || [])
    .flat();

  const toggleLocality = (loc) => {
    if (selectedLocalities.includes(loc)) {
      setSelectedLocalities(selectedLocalities.filter((l) => l !== loc));
    } else {
      setSelectedLocalities([...selectedLocalities, loc]);
    }
  };

  return (
    <Card className="border-0 bg-light shadow-sm mt-3">
      <CardBody>
        <Row>
          <Col md="12">
            <FormGroup>
              <Label className="fw-bold mb-2 text-st">Select City/Localities</Label>
              <Select
                isMulti
                options={cityOptions}
                value={selectedCities}
                onChange={setSelectedCities}
                placeholder="+ Add More"
                styles={customStyles}
              />
            </FormGroup>
          </Col>

          {/* Horizontal Scrollable Localities */}
          <Col md="12" className="mt-2">
            <FormGroup>
              <Label className="fw-bold mb-2 text-st">Top Localities</Label>
              <div
                className="d-flex flex-row gap-2 pb-2"
                style={{
                  overflowX: "auto",
                  whiteSpace: "nowrap",
                  scrollbarWidth: "thin",
                  scrollbarColor: "#ccc transparent",
                }}
              >
                {availableLocalities.length > 0 ? (
                  availableLocalities.map((loc, index) => (
                    <Badge
                      key={index}
                      pill
                      color={
                        selectedLocalities.includes(loc)
                          ? "success"
                          : "light"
                      }
                      onClick={() => toggleLocality(loc)}
                      className={`px-3 py-2 border ${
                        selectedLocalities.includes(loc)
                          ? "text-white border-success"
                          : "text-dark border-secondary"
                      }`}
                      style={{
                        cursor: "pointer",
                        fontSize: "14px",
                        userSelect: "none",
                        flex: "0 0 auto",
                      }}
                    >
                      {loc}
                    </Badge>
                  ))
                ) : (
                  <div className="text-muted small">
                    Select a city to see localities
                  </div>
                )}
              </div>
            </FormGroup>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

export default CityMultiSelect;
