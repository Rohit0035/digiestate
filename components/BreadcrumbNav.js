"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Breadcrumb, BreadcrumbItem, Container } from "reactstrap";
import { FaHome } from "react-icons/fa";

const BreadcrumbNav = () => {
    const pathname = usePathname();
    const parts = pathname.split("/").filter(Boolean);

    const breadcrumbs = parts.map((part, index) => {
        const href = "/" + parts.slice(0, index + 1).join("/");
        const isLast = index === parts.length - 1;
        const label = part.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

        return (
            <BreadcrumbItem key={href} active={isLast}>
                {isLast ? (
                    label
                ) : (
                    <Link href={href} className="text-decoration-none text-st fw-semibold">
                        {label}
                    </Link>
                )}
            </BreadcrumbItem>
        );
    });

    return (
        <div className="bg-light p-2 rounded shadow-sm mb-0">
            <Container>
                <Breadcrumb >
                    <BreadcrumbItem>
                        <Link href="/" className="text-st fw-semibold text-decoration-none">
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
