"use client";
import Image from "next/image";
import React from "react";
import { Card, CardBody, Row, Col } from "reactstrap";
import proimg from "../../assets/images/pro-1.jpg"
import Link from "next/link";
import { IMAGE_URL } from "../../utils/api-config";

const PopularBlogs = ({blogs=[]}) => {

    return (
        <>
            <Card className="bg-light mt-3 border-0">
                <CardBody>
                    <h5 className="fw-bold mb-3 d-flex align-items-center">
                        Popular Blogs
                    </h5>
                    {
                        blogs.map((blog, index) => (
                            <Link href={`/blogdetail/${blog.slug}`} key={blog._id} className=" mb-3 w-100 text-dark">
                                <Row className="mb-3">
                                    <Col xs="4" className="pe-0 position-relative">
                                        <Image
                                            src={`${IMAGE_URL}${blog.image}`}
                                            alt="smartmind"
                                            style={{
                                                width: '100%',
                                                height: '80px'
                                            }}
                                            width={100}
                                            height={100}
                                            className="me-2 rounded w-100"
                                        />
                                        {/* <span className="small bg-dark p-1 text-white"
                                            style={{
                                                width: '25px',
                                                height: '25px',
                                                borderRadius: '100px',
                                                position: 'absolute',
                                                top: '-3px'
                                            }}>
                                            #1
                                        </span> */}
                                    </Col>
                                    <Col xs="8">
                                        <h6 className="mb-0 st-txt-o">
                                            {blog.title}
                                        </h6>
                                        <small className="st-txt-o">
                                            {new Date(blog.createdAt).toLocaleDateString()} by{" "} {blog.author || "Admin"}
                                        </small>
                                    </Col>
                                </Row>
                            </Link>
                        ))
                    }
                </CardBody>
            </Card>
        </>
    );
};
export default PopularBlogs;