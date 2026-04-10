"use client";

import { useEffect, useState } from "react";
import {
  Row,
  Col,
  Badge,
  Pagination,
  PaginationItem,
  PaginationLink
} from "reactstrap";
import Image from "next/image";
import Link from "next/link";
import { getBlogs } from "../../lib/api";
import { IMAGE_URL } from "../../utils/api-config";

const BlogListSection = ({ blogs = [] }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 6;

  // --- REVISED LOGIC FOR API DATA ---

  // 1. Calculate totals based on the 'blogs' state, not 'allBlogs'
  const totalPages = Math.ceil(blogs.length / perPage);

  // 2. Slice the 'blogs' state for the current view
  const displayed = blogs.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  );

  const getShortDescription = (html, wordLimit = 5) => {
    if (!html) return "No description available...";

    // Convert HTML string into DOM
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");

    // Extract text content
    const text = doc.body.textContent || "";

    // Split into words
    const words = text.trim().split(/\s+/);

    // Return limited words
    return (
      words.slice(0, wordLimit).join(" ") +
      (words.length > wordLimit ? "..." : "")
    );
  };

  return (
    <div className="pb-5 pt-0">
      {/* ---------------- CARD LIST ---------------- */}
      <Row className="gy-4">
        {displayed.length > 0
          ? displayed.map(blog =>
              <Col md="12" key={blog._id || blog.id}>
                {/* Note: Use blog._id if coming from MongoDB */}
                <Link
                  href={`/blog/${blog.slug}`}
                  className="text-dark text-decoration-none"
                >
                  <div className="d-flex flex-column flex-md-row align-items-start gap-3 p-3 bg-white border rounded shadow-sm">
                    {/* IMAGE */}
                    <div
                      style={{
                        width: "260px",
                        minWidth: "260px",
                        height: "180px",
                        position: "relative"
                      }}
                      className="rounded overflow-hidden bg-light"
                    >
                      <Image
                        // Use the path returned from your API (ensure it's a full URL if needed)
                        src={
                          `${IMAGE_URL}${blog.image}` ||
                          "/placeholder-image.jpg"
                        }
                        alt={blog.title}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    {/* CONTENT */}
                    <div className="flex-grow-1">
                      {/* <Badge color="info" className="mb-2">
                        {blog.category || "General"}
                      </Badge> */}

                      <h5 className="fw-bold">
                        {blog.title}
                      </h5>

                      <p className="text-muted mb-2">
                        {getShortDescription(blog.description, 6)}
                      </p>

                      <small className="text-muted">
                        {new Date(blog.createdAt).toLocaleDateString()} by{" "}
                        <span className="text-info fw-semibold">
                          {blog.author || "Admin"}
                        </span>
                      </small>
                    </div>
                  </div>
                </Link>
              </Col>
            )
          : <Col className="text-center">No blogs found.</Col>}
      </Row>

      {/* ---------------- PAGINATION ---------------- */}
      {totalPages > 1 &&
        <div className="d-flex justify-content-center mt-4">
          <Pagination>
            <PaginationItem disabled={currentPage === 1}>
              <PaginationLink
                previous
                onClick={() => setCurrentPage(currentPage - 1)}
              />
            </PaginationItem>

            {[...Array(totalPages)].map((_, idx) =>
              <PaginationItem active={idx + 1 === currentPage} key={idx}>
                <PaginationLink onClick={() => setCurrentPage(idx + 1)}>
                  {idx + 1}
                </PaginationLink>
              </PaginationItem>
            )}

            <PaginationItem disabled={currentPage === totalPages}>
              <PaginationLink
                next
                onClick={() => setCurrentPage(currentPage + 1)}
              />
            </PaginationItem>
          </Pagination>
        </div>}
    </div>
  );
};

export default BlogListSection;
