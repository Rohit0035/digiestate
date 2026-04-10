"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Breadcrumb, BreadcrumbItem, Container } from "reactstrap";
import { FaHome } from "react-icons/fa";

const BreadcrumbNav = ({ dynamicTitle }) => {
  const pathname = usePathname();
  const parts = pathname.split("/").filter(Boolean);

  const breadcrumbs = parts.map((part, index) => {
    const href = "/" + parts.slice(0, index + 1).join("/");
    const isLast = index === parts.length - 1;

    // Hide internal folder name like "blogdetail"
    if (part === "blogdetail") {
      return (
        <BreadcrumbItem key={href}>
          <Link href="/blogs-list" className="text-decoration-none fw-semibold">
            Blogs
          </Link>
        </BreadcrumbItem>
      );
    }
    if (part === "project-details") {
      return (
        <BreadcrumbItem key={href}>
          <Link href="/projects" className="text-decoration-none fw-semibold">
            Projects
          </Link>
        </BreadcrumbItem>
      );
    }

    // If last item and dynamicTitle exists, use real title
    const label =
      isLast && dynamicTitle
        ? dynamicTitle
        : part.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());

    return (
      <BreadcrumbItem key={href} active={isLast}>
        {isLast
          ? label
          : <Link href={href} className="text-decoration-none fw-semibold">
              {label}
            </Link>}
      </BreadcrumbItem>
    );
  });

  return (
    <div className="bg-light p-2 rounded shadow-sm mb-0">
      <Container>
        <Breadcrumb>
          <BreadcrumbItem>
            <Link href="/" className="fw-semibold text-decoration-none">
              <FaHome className="me-1" /> Home
            </Link>
          </BreadcrumbItem>
          {breadcrumbs}
        </Breadcrumb>
      </Container>
    </div>
  );
};

export default BreadcrumbNav;
