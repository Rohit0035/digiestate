"use client";
import Image from "next/image";
import React from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import blogimg from "../../assets/images/pro-1.jpg"
import BreadcrumbNav from "../../components/BreadcrumbNav";
import PopularBlogs from "../../components/blogcategorysection/PopularBlogs";
import BlogTrendingList from "../../components/blogcategorysection/BlogTrendingList";
const BlogDetail = () => {
    return (
        <>
            <BreadcrumbNav />
            <section className="pb-5 pt-0">
                <Image
                    src={blogimg}
                    className="w-100"
                    alt="smartmind"
                    style={{
                        height: '400px'
                    }}
                />
                <Container>
                    <Row>
                        <Col lg="9" className="mb-3" data-aos="zoom-in">
                            <div className="left-content" style={{ marginTop: '-60px' }}>
                                <Card className="border-0 bg-light">
                                    <CardBody>
                                        <h3 className="mb-0 fw-bold">
                                            Bihar Residential Certificate - How to Apply, Check Status & Download
                                        </h3>
                                        <p className="mt-3">
                                            Looking forward to getting a Bihar residential certificate to apply for the state government housing scheme? Check out the blog to learn about the step-by-step process.
                                        </p>
                                        <p className="mt-3">
                                            The Bihar residential certificate is an important document that is essential for various purposes. This document is the proof of a person's permanent address. It is required in various fields of life like government housing schemes, education, getting a government job, electricity and water connection, etc. It also helps you to enjoy certain government benefits.
                                        </p>
                                        <p className="mt-3">
                                            Gone are the days when one had to visit government-certified centers and stand in long queues to get this certificate. Now, the government has launched the RTPS (Right To Public Services) portal. The Bihar government launched this portal to prevent corruption. It has also made it easy to obtain certain documents like income certificate, caste certificate, and Bihar residential certificate.
                                        </p>
                                    </CardBody>
                                </Card>
                            </div>
                        </Col>
                        <Col lg="3" className="mb-3" data-aos="zoom-in">
                            <div className="right-content pt-4">
                                <Card className="bg-light border-0">
                                     <CardBody className="p-0">
                                        <BlogTrendingList/>
                                     </CardBody>
                                </Card>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};
export default BlogDetail;