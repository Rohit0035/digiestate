"use client"
import React, { useState } from "react";
import {
  Container,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Row,
  Col,
  Card,
  CardBody,
} from "reactstrap";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import {
  FaBuilding,
  FaBus,
  FaTrain,
  FaSchool,
  FaShoppingBag,
  FaHospital,
} from "react-icons/fa";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// --- Custom Icon using SVG inside Leaflet DivIcon ---
const markerIcon = L.divIcon({
  className: "custom-leaflet-icon",
  html: `
    <div class="custom-marker">
      <svg xmlns="http://www.w3.org/2000/svg" fill="#ff6a00" viewBox="0 0 384 512" width="28" height="28">
        <path d="M192 0C86 0 0 86 0 192c0 87.3 57.3 160.8 136.5 183.8L192 512l55.5-136.2C326.7 352.8 384 279.3 384 192 384 86 298 0 192 0zM192 272c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"/>
      </svg>
    </div>
  `,
  iconSize: [28, 28],
  iconAnchor: [14, 28],
});

const locations = {
  1: {
    name: "Commercial Hub",
    points: [{ name: "Brigade Opus", distance: "2.5 Km", lat: 13.035, lng: 77.58 }],
  },
  2: {
    name: "Transportation Hub",
    points: [{ name: "Bangalore Baptist Hospital", distance: "0.9 Km", lat: 13.03, lng: 77.59 }],
  },
  3: {
    name: "Metro Stations",
    points: [{ name: "Hebbal Metro Station", distance: "1.2 Km", lat: 13.04, lng: 77.59 }],
  },
  4: {
    name: "Educational Institutes",
    points: [
      { name: "Air Force School", distance: "3.0 Km", lat: 13.05, lng: 77.58 },
      { name: "Jain Heritage School", distance: "1.5 Km", lat: 13.03, lng: 77.58 },
    ],
  },
  5: {
    name: "Shopping Centre",
    points: [{ name: "Esteem Mall", distance: "1.6 Km", lat: 13.03, lng: 77.59 }],
  },
  6: {
    name: "Hospital",
    points: [
      { name: "Columbia Asia Hospital", distance: "1.8 Km", lat: 13.035, lng: 77.59 },
      { name: "Hebbal Hospital", distance: "0.9 Km", lat: 13.03, lng: 77.595 },
    ],
  },
};

// 🔹 Subcomponent for Map re-centering when tab changes
function ChangeMapView({ coords }) {
  const map = useMap();
  map.setView(coords, 14);
  return null;
}

const NearbyLandmarkMap = () => {
  const [activeTab, setActiveTab] = useState("1");

  const toggleTab = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const activePoints = locations[activeTab].points;
  const center = [activePoints[0].lat, activePoints[0].lng];

  return (
    <Container fluid className="p-3 border rounded bg-white shadow-sm">
      <h5 className="fw-bold mb-3">Popular Landmarks Nearby</h5>

      {/* Map Section */}
      <div className="rounded overflow-hidden mb-4" style={{ height: "300px" }}>
        <MapContainer
          center={center}
          zoom={14}
          style={{ height: "100%", width: "100%" }}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <ChangeMapView coords={center} />
          {activePoints.map((point, i) => (
            <Marker key={i} position={[point.lat, point.lng]} icon={markerIcon}>
              <Popup>
                <b>{point.name}</b>
                <br />
                Distance: {point.distance}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      {/* Tabs */}
      <Nav tabs className="border-bottom mb-3 flex-nowrap overflow-auto small">
        {[
          { id: "1", icon: <FaBuilding />, label: "Commercial Hub" },
          { id: "2", icon: <FaBus />, label: "Transportation Hubs" },
          { id: "3", icon: <FaTrain />, label: "Metro Stations" },
          { id: "4", icon: <FaSchool />, label: "Educational Institutes" },
          { id: "5", icon: <FaShoppingBag />, label: "Shopping Centre" },
          { id: "6", icon: <FaHospital />, label: "Hospital" },
        ].map((tab) => (
          <NavItem key={tab.id}>
            <NavLink
              className={`small fw-semibold d-flex align-items-center ${
                activeTab === tab.id ? "text-st border-st border-bottom" : ""
              }`}
              onClick={() => toggleTab(tab.id)}
              style={{ cursor: "pointer", fontSize: "12px", whiteSpace: "nowrap" }}
            >
              {tab.icon} <span className="ms-2">{tab.label}</span>
            </NavLink>
          </NavItem>
        ))}
      </Nav>

      {/* Tab Content */}
      <TabContent activeTab={activeTab}>
        <TabPane tabId={activeTab}>
          <Row>
            {activePoints.map((item, index) => (
              <Col md="6" key={index}>
                <Card className="mb-2 border-0 landmark-card">
                  <CardBody>
                    <p className="mb-1 fw-semibold">
                      {item.name}{" "}
                      <span className="text-muted small">({item.distance})</span>
                    </p>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
        </TabPane>
      </TabContent>
    </Container>
  );
};

export default NearbyLandmarkMap;
