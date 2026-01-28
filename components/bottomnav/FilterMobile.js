"use client";
import React, { useState } from "react";
import {
  AiFillHome,
  AiOutlineSearch,
  AiOutlineHeart,
} from "react-icons/ai";
import { GiCrown } from "react-icons/gi";
import FilterMobileSidebar from "./FilterMobileSidebar";
import Link from "next/link";

const BottomNav = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const handleToggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <>
      {/* ===== Mobile Bottom Nav ===== */}
      <div
        className="d-lg-none fixed-bottom  shadow-sm py-1 px-3"
        style={{
          zIndex: 1050,
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          backgroundColor: "#417867",
        }}
      >
        <div className="text-center">
          <Link href="/">
            <AiFillHome size={22} className="text-white fw-bold" />
            <div className="small fw-semibold text-white">Home</div>
          </Link>
        </div>

        {/* Search Button → Opens Sidebar */}
        <div className="text-center" onClick={handleToggleSidebar}>
          <AiOutlineSearch size={22} className="text-white fw-bold" />
          <div className="small fw-semibold text-white">Search</div>
        </div>

        <div className="text-center">
          <Link href="/">
            <AiOutlineHeart size={22} className="text-white fw-bold" />
            <div className="small fw-semibold text-white">Shortlist</div>
          </Link>
        </div>

        <div className="text-center">
          <Link href="/">
            <GiCrown size={22} className="text-white fw-bold" />
            <div className="small fw-semibold text-white">SM Prime</div>
          </Link>
        </div>
      </div>

      {/* ===== Sidebar (Offcanvas) ===== */}
      <FilterMobileSidebar
        isOpen={isSidebarOpen}
        toggle={handleToggleSidebar}
      />
    </>
  );
};

export default BottomNav;
