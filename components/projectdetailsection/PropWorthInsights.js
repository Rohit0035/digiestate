"use client";
import React, { useState } from "react";
import {
  Card,
  CardBody,
  Row,
  Col,
  Button,
  Nav,
  NavItem,
  NavLink,
  Table,
  Badge,
} from "reactstrap";
import classnames from "classnames";
import { FaChartLine, FaTable } from "react-icons/fa";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const allData = [
  { month: "Nov’24", project: 16500, locality: 14500 },
  { month: "Dec’24", project: 15500, locality: 14200 },
  { month: "Jan’25", project: 15800, locality: 14300 },
  { month: "Mar’25", project: 16000, locality: 14400 },
  { month: "May’25", project: 16100, locality: 14500 },
  { month: "Aug’25", project: 17800, locality: 14600 },
  { month: "Oct’25", project: 17654, locality: 14700 },
];

const PropWorthInsights = () => {
  const [activeTab, setActiveTab] = useState("project");
  const [period, setPeriod] = useState("3M");
  const [tableView, setTableView] = useState(false);

  // Filter data based on selected period
  const getFilteredData = () => {
    switch (period) {
      case "3M":
        return allData.slice(-3);
      case "6M":
        return allData.slice(-6);
      case "1Y":
        return allData; // since dataset covers roughly 1 year
      case "All":
      default:
        return allData;
    }
  };

  const filteredData = getFilteredData();

  return (
    <section className="pt-0" data-aos="fade-up">
      <Card className="border-0 bg-light p-3">
        {/* HEADER */}
        <div className="d-flex justify-content-between align-items-center flex-wrap">
          <h5 className="fw-bold mb-0">
            <span className="text-st">
              <FaChartLine className="me-2" />
            </span>
            PropWorth Insights{" "}
            <small className="text-muted">for Sumadhura Capitol Residences</small>
          </h5>

          {/* PERIOD BUTTONS */}
          <div className="d-flex align-items-center mt-3 mt-md-0">
            {["3M", "6M", "1Y", "All"].map((p) => (
              <Button
                key={p}
                size="sm"
                outline
                color={period === p ? "danger" : "secondary"}
                className={classnames("mx-1", {
                  "bg-danger text-white": period === p,
                })}
                onClick={() => setPeriod(p)}
              >
                {p}
              </Button>
            ))}

            <Button
              size="sm"
              outline
              color="secondary"
              className={classnames("ms-2 d-flex align-items-center", {
                "bg-danger text-white": tableView,
              })}
              onClick={() => setTableView(!tableView)}
            >
              {tableView ? <FaChartLine className="me-1" /> : <FaTable className="me-1" />}
              {tableView ? "Graph View" : "Table View"}
            </Button>
          </div>
        </div>

       

        <CardBody>
          {/* GRAPH / TABLE VIEW */}
          {!tableView ? (
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={filteredData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="project"
                  stroke="#dc3545"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  name="Sumadhura Capitol Residences"
                />
                <Line
                  type="monotone"
                  dataKey="locality"
                  stroke="#f5c16c"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  name="Whitefield"
                />
              </LineChart>
            </ResponsiveContainer>
          ) : (
            <Table bordered hover responsive className="text-center small mt-3">
              <thead className="table-light">
                <tr>
                  <th>Month</th>
                  <th>Sumadhura Capitol Residences</th>
                  <th>Whitefield</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((d, i) => (
                  <tr key={i}>
                    <td>{d.month}</td>
                    <td>{d.project.toLocaleString()} / sq.ft</td>
                    <td>{d.locality.toLocaleString()} / sq.ft</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}

          {/* LEGEND */}
          <div className="d-flex justify-content-start gap-3 mt-3">
            <Badge color="danger" pill>
              Sumadhura Capitol Residences
            </Badge>
            <Badge color="warning" pill className="text-dark">
              Whitefield
            </Badge>
          </div>

          {/* INFO TEXT */}
          <Row className="mt-4 small text-muted">
            <Col md="6" className="mb-2">
              <div className="p-3 bg-white rounded border h-100">
                Average property rates in{" "}
                <strong className="text-st">Sumadhura Capitol Residences</strong> at{" "}
                <strong>₹16,514/sq.ft</strong> (Oct’25), reflecting a{" "}
                <strong className="text-success">9.63% growth</strong> compared to past
                months.
              </div>
            </Col>
            <Col md="6" className="mb-2">
              <div className="p-3 bg-white rounded border h-100">
                Average prices for Flat-Multistorey Apartment in{" "}
                <strong className="text-st">Whitefield</strong> is{" "}
                <strong>₹14,676/sq.ft</strong> (Oct’25), reflecting a{" "}
                <strong className="text-success">2.35% growth</strong> compared to past
                months.
              </div>
            </Col>
          </Row>

          {/* FOOTER */}
          <div className="mt-4 p-3 bg-white border rounded text-center">
            <Row className="align-items-center">
              <Col md="8" sm="12">
                <p className="mb-0 fw-bold">
                  Interested in knowing the Estimated Sale Value of this project?
                </p>
              </Col>
              <Col md="4" sm="12" className="mt-2 mt-md-0">
                <Button color="danger" className="w-100 fw-bold">
                  Check Estimate Now
                </Button>
              </Col>
            </Row>
          </div>
        </CardBody>
      </Card>
    </section>
  );
};

export default PropWorthInsights;
