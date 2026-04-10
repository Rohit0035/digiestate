"use client";
import React, { useEffect, useState, useCallback } from "react";
import BreadcrumbNav from "../../components/BreadcrumbNav";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import BlogListSection from "../../components/blogcategorysection/BlogListSection";
import PopularBlogs from "../../components/blogcategorysection/PopularBlogs";
import { getBlogs } from "../../lib/api";

const BlogCategory = () => {
  const [blogs, setBlogs] = useState([]); // API data
  const [loading, setLoading] = useState(true);

  // Wrap fetchBlogs in useCallback to avoid useEffect missing dependency warning
  const fetchBlogs = useCallback(async () => {
    setLoading(true);
    try {
      const response = await getBlogs();
      if (response.success === true) {
        setBlogs(response.data); // Assuming response.data is an array
      }
    } catch (error) {
      console.error("Failed to fetch blogs:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchBlogs();
  }, [fetchBlogs]); // ✅ Include fetchBlogs here

  if (loading) return <div className="text-center py-5">Loading blogs...</div>;

  return (
    <>
      <BreadcrumbNav />
      <section className="py-5">
        <Container>
          <Row>
            <Col lg="9">
              <Card className="bg-light border-0">
                <CardBody>
                  <h4 className="fw-bold mb-3">Real Estate News</h4>
                  <BlogListSection blogs={blogs} />
                </CardBody>
              </Card>
            </Col>
            <Col lg="3">
              {/* Pass a key to each blog inside PopularBlogs to fix the JSX key warning */}
              <PopularBlogs blogs={blogs.slice(0, 3)} />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default BlogCategory;