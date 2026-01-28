"use client";
import React from "react";
import BreadcrumbNav from "../../components/BreadcrumbNav";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import BlogCateHero from "../../components/blogcategorysection/BlogCateHero";
import BlogListSection from "../../components/blogcategorysection/BlogListSection";
import BlogTrendingList from "../../components/blogcategorysection/BlogTrendingList";
import QuickLinks from "../../components/blogcategorysection/QuickLinks";
import PopularBlogs from "../../components/blogcategorysection/PopularBlogs";
const BlogCategory = () => {
    return (
        <>
            <BreadcrumbNav />
            <section className="py-5">
                <Container>
                    <Row>
                        <Col lg="9">
                            <Card className="bg-light border-0">
                                <CardBody>
                                    <h4 className="fw-bold mb-3">
                                        Read the Ultimate Guide for Real Estate Queries
                                    </h4>
                                    <BlogCateHero />
                                    <BlogListSection />

                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg="3">
                            <BlogTrendingList />
                            <QuickLinks />
                            <PopularBlogs/>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};
export default BlogCategory;