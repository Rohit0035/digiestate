"use client";
import React, { useState } from "react";
import {
  Card,
  CardBody,
  Row,
  Col,
  Button,
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

/* ================= PRICE DATA (Patna) ================= */
const allData = [
  { month: "Nov’24", project: 5200, locality: 4800 },
  { month: "Dec’24", project: 5300, locality: 4850 },
  { month: "Jan’25", project: 5450, locality: 4950 },
  { month: "Mar’25", project: 5600, locality: 5050 },
  { month: "May’25", project: 5750, locality: 5150 },
  { month: "Aug’25", project: 6100, locality: 5300 },
  { month: "Oct’25", project: 6350, locality: 5450 },
];

const PropWorthInsights = () => {
  const [period, setPeriod] = useState("3M");
  const [tableView, setTableView] = useState(false);

  /* ================= FILTER ================= */
  const getFilteredData = () => {
    switch (period) {
      case "3M":
        return allData.slice(-3);
      case "6M":
        return allData.slice(-6);
      case "1Y":
      case "All":
      default:
        return allData;
    }
  };

  const filteredData = getFilteredData();

  return (
    <section className="pt-0" data-aos="fade-up">
      <Card className="border-0 bg-light p-3">
        {/* ================= HEADER ================= */}
        <div className="d-flex justify-content-between align-items-center flex-wrap">
          <h5 className="fw-bold mb-0">
            <span className="text-st">
              <FaChartLine className="me-2" />
            </span>
            PropWorth Insights{" "}
            <small className="text-muted">
              for DigiEstate Prime Plots – Patna
            </small>
          </h5>

          {/* ================= PERIOD BUTTONS ================= */}
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
              {tableView ? (
                <FaChartLine className="me-1" />
              ) : (
                <FaTable className="me-1" />
              )}
              {tableView ? "Graph View" : "Table View"}
            </Button>
          </div>
        </div>

        <CardBody>
          {/* ================= GRAPH / TABLE ================= */}
          {!tableView ? (
            <ResponsiveContainer width="100%" height={260}>
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
                  name="DigiEstate Prime Plots"
                />
                <Line
                  type="monotone"
                  dataKey="locality"
                  stroke="#f5c16c"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  name="Patna Locality Average"
                />
              </LineChart>
            </ResponsiveContainer>
          ) : (
            <Table bordered hover responsive className="text-center small mt-3">
              <thead className="table-light">
                <tr>
                  <th>Month</th>
                  <th>DigiEstate Prime Plots</th>
                  <th>Patna Average</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((d, i) => (
                  <tr key={i}>
                    <td>{d.month}</td>
                    <td>₹ {d.project.toLocaleString()} / sq.ft</td>
                    <td>₹ {d.locality.toLocaleString()} / sq.ft</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}

          {/* ================= LEGEND ================= */}
          <div className="d-flex justify-content-start gap-3 mt-3">
            <Badge color="danger" pill>
              DigiEstate Prime Plots
            </Badge>
            <Badge color="warning" pill className="text-dark">
              Patna Locality Average
            </Badge>
          </div>

          {/* ================= INSIGHT BOXES ================= */}
          <Row className="mt-4 small text-muted">
            <Col md="6" className="mb-2">
              <div className="p-3 bg-white rounded border h-100">
                Average property rates in{" "}
                <strong className="text-st">
                  DigiEstate Prime Plots, Patna
                </strong>{" "}
                reached <strong>₹6,350/sq.ft</strong> (Oct’25), showing a{" "}
                <strong className="text-success">~22% appreciation</strong>{" "}
                over the past year.
              </div>
            </Col>

            <Col md="6" className="mb-2">
              <div className="p-3 bg-white rounded border h-100">
                Average residential land prices across{" "}
                <strong className="text-st">Patna</strong> stand at{" "}
                <strong>₹5,450/sq.ft</strong> (Oct’25), reflecting steady{" "}
                <strong className="text-success"> long-term growth</strong>.
              </div>
            </Col>
          </Row>
          
        </CardBody>
      </Card>
    </section>
  );
};

export default PropWorthInsights;
