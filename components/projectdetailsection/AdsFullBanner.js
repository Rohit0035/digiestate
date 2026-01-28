"use client";
import Image from "next/image";
import React from "react";
import { Card, CardBody } from "reactstrap";
import banimg from "../../assets/images/adspro.jpg"
import Link from "next/link";
const AdsFullBanner = () => {
    return (
        <>

            <Card className="mt-5" data-aos="fade-up">
                <Link href="#" className="w-100">
                    <CardBody>
                        <Image src={banimg} alt="smartmind">

                        </Image>
                    </CardBody>
                </Link>
            </Card>

        </>
    );
};
export default AdsFullBanner;