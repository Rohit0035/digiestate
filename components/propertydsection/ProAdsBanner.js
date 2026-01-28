"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import proimgads from "../../assets/images/adspro.jpg"
import { Card } from "reactstrap";
const ProAdsBanner = () => {
    return (
       <>
          <Card data-aos="fade-up" className="border-0  my-3">
              <Link href="#">
                 <Image 
                    src={proimgads}
                    alt="smartmind"
                    className="rounded-3 w-100"
                 />
              </Link>
          </Card>
       </>
    );
};
export default ProAdsBanner;