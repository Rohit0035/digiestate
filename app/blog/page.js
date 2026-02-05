"use client";
import React from "react";
import BlogHero from "../../components/blogsection/BlogHero";
import BreadcrumbNav from "../../components/BreadcrumbNav";
import BlogCategorySlider from "../../components/blogsection/BlogCategorySlider";
import HomeBlogSection from "../../components/blogsection/HomeBlogSection";
import HomeImprovementSection from "../../components/blogsection/HomeImprovementSection";
import YoutubeSection from "../../components/blogsection/YoutubeSection";
const BlogIndex = () => {
  return (
    <>
      <BreadcrumbNav />
      <BlogHero />
      <BlogCategorySlider />
      <HomeBlogSection/>
      <HomeImprovementSection/>
      <YoutubeSection/>
    </>
  );
};
export default BlogIndex;