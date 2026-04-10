"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import { useParams } from "next/navigation";
import BreadcrumbNav from "../../../components/BreadcrumbNav";
import BlogTrendingList from "../../../components/blogcategorysection/BlogTrendingList";
import { getBlogBySlug, getBlogs } from "../../../lib/api"; // create this API function
import { IMAGE_URL } from "../../../utils/api-config";
import PopularBlogs from "../../../components/blogcategorysection/PopularBlogs";

const BlogDetail = () => {
  const { slug } = useParams();   // ✅ get slug from URL
  const [blog, setBlog] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (slug) {
      fetchBlog();
    }
  }, [slug]);

  const fetchBlog = async () => {
    try {
      const response = await getBlogBySlug(slug);

      if (response.success) {
        setBlog(response.data);
      }
    } catch (error) {
      console.error("Failed to fetch blog:", error);
    }
  };

  const fetchBlogs = async () => {
          setLoading(true);
          try {
          const response = await getBlogs();
          if (response.success === true) {
              // Assuming response.data is an array of blog objects
              setBlogs(response.data);
          }
          } catch (error) {
          console.error("Failed to fetch blogs:", error);
          } finally {
          setLoading(false);
          }
      };
  
      useEffect(() => {
          fetchBlogs();
      }, []);

  if (!blog) return <p className="text-center py-5">Loading...</p>;

  return (
    <>
      <BreadcrumbNav dynamicTitle={blog?.title} />

      <section className="pb-5 pt-0">
        {/* BLOG IMAGE */}
        <Image
          src={`${IMAGE_URL}${blog.image}`}
          width={1200}
          height={400}
          className="w-100"
          alt={blog.title}
          style={{ height: "400px", objectFit: "cover" }}
        />

        <Container>
          <Row>
            <Col lg="9" className="mb-3">
              <div style={{ marginTop: "-60px" }}>
                <Card className="border-0 bg-light">
                  <CardBody>
                    <h3 className="fw-bold">{blog.title}</h3>

                    {/* DESCRIPTION (Quill HTML) */}
                    <div
                      className="mt-3"
                      dangerouslySetInnerHTML={{
                        __html: blog.description,
                      }}
                    />
                  </CardBody>
                </Card>
              </div>
            </Col>

            <Col lg="3" className="mb-3">
              <Card className="bg-light border-0">
                <CardBody className="p-0">
                  <PopularBlogs  blogs={blogs.slice(0, 3)}/>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default BlogDetail;