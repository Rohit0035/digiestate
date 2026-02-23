"use client";

import { useState } from "react";
import {
    Container,
    Row,
    Col,
    Badge,
    Pagination,
    PaginationItem,
    PaginationLink,
} from "reactstrap";
import Image from "next/image";
import Proimg from "../../assets/images/pro-1.jpg"
import Link from "next/link";
// ------------------ DUMMY DATA ------------------
const filters = ["Manipur", "Meghalaya", "Sikkim", "Goa_1", "Delhi", "Punjab"];

const allBlogs = Array.from({ length: 20 }).map((_, i) => ({
    id: i + 1,
    title: `Srikakulam Master Plan ${2040 + (i % 3)} – Urban Planning, Land Use, Infrastructure`,
    category: "Guides",
    desc: "The Srikakulam Master Plan covers land-use policy, zoning regulations, and development strategy.",
    author: "Nitin Shakya",
    date: "2025-11-17T13:00:00",
    img: Proimg, // replace with your image
    state: filters[i % filters.length],
}));

// -------------------------------------------------

const BlogListSection = () => {
    const [activeFilter, setActiveFilter] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const perPage = 6;

    // Filter logic
    const filteredBlogs = activeFilter
        ? allBlogs.filter((b) => b.state === activeFilter)
        : allBlogs;

    // Pagination logic
    const totalPages = Math.ceil(filteredBlogs.length / perPage);
    const displayed = filteredBlogs.slice(
        (currentPage - 1) * perPage,
        currentPage * perPage
    );

    return (
        <div className="pb-5 pt-0">

            {/* ---------------- CARD LIST ---------------- */}
            <Row className="gy-4">
                {displayed.map((blog) => (
                    <Col md="12" key={blog.id}>
                        <Link href="/blogdetail" className="text-dark">
                            <div className="d-flex flex-column flex-md-row align-items-start gap-3 p-3 bg-white border rounded shadow-sm">
                                {/* IMAGE */}
                                <div
                                    style={{
                                        width: "260px",
                                        minWidth: "260px",
                                        height: "180px",
                                        position: "relative",
                                    }}
                                    className="rounded overflow-hidden"
                                >
                                    <Image
                                        src={blog.img}
                                        alt={blog.title}
                                        fill
                                        style={{ objectFit: "cover" }}
                                    />
                                </div>
                                {/* CONTENT */}
                                <div className="flex-grow-1">
                                    <Badge color="info" className="mb-2">
                                        {blog.category}
                                    </Badge>

                                    <h5 className="fw-bold">{blog.title}</h5>

                                    <p className="text-muted mb-2">
                                        {blog.desc.slice(0, 60)}...
                                    </p>

                                    <small className="text-muted">
                                        {blog.date} by{" "}
                                        <span className="text-info fw-semibold">
                                            {blog.author}
                                        </span>
                                    </small>
                                </div>
                            </div>
                        </Link>
                    </Col>
                ))}
            </Row>

            {/* ---------------- PAGINATION ---------------- */}
            <div className="d-flex justify-content-center mt-4">
                <Pagination>
                    {[...Array(totalPages)].map((_, idx) => (
                        <PaginationItem active={idx + 1 === currentPage} key={idx}>
                            <PaginationLink
                                onClick={() => setCurrentPage(idx + 1)}
                            >
                                {idx + 1}
                            </PaginationLink>
                        </PaginationItem>
                    ))}
                </Pagination>
            </div>
        </div>
    );
};

export default BlogListSection;
