"use client";

import { Card, CardBody } from "reactstrap";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import proimg from "../../assets/images/pro-1.jpg"
import Link from "next/link";

const stories = [
    {
        id: 1,
        title: "What is Color Capping Trend? How to Use It In Your Homes",
        date: "2025-10-27T17:51:00",
        author: "Mansi Ranjan",
        img: proimg,
    },
    {
        id: 2,
        title: "Cute and Simple Pom Pom Home Decor Ideas",
        date: "2025-10-11T12:00:00",
        author: "Mansi Ranjan",
        img: proimg,
    },
     {
        id: 3,
        title: "Cute and Simple Pom Pom Home Decor Ideas",
        date: "2025-10-11T12:00:00",
        author: "Mansi Ranjan",
        img: proimg,
    },
     {
        id: 4,
        title: "Cute and Simple Pom Pom Home Decor Ideas",
        date: "2025-10-11T12:00:00",
        author: "Mansi Ranjan",
        img: proimg,
    },
     {
        id: 5,
        title: "Cute and Simple Pom Pom Home Decor Ideas",
        date: "2025-10-11T12:00:00",
        author: "Mansi Ranjan",
        img: proimg,
    },
];

const BlogTrendingList = () => {
    return (
        <Card className="bg-light mb-3 border-0" data-aos="zoom-in">
            <CardBody>
                <h5 className="fw-bold mb-3 d-flex align-items-center">
                    Trending Web Stories
                </h5>

                <div className="d-flex flex-column gap-3">
                    <Link href="#">
                        {stories.map((story) => (
                            <Card
                                key={story.id}
                                className="border-0 shadow-sm rounded-4 overflow-hidden mb-2"
                            >
                                <div
                                    style={{ position: "relative", height: "170px" }}
                                    className="rounded-4 overflow-hidden"
                                >
                                    <Image
                                        src={story.img}
                                        alt={story.title}
                                        fill
                                        style={{ objectFit: "cover" }}
                                    />

                                    {/* Play Icon */}
                                    <div
                                        style={{
                                            position: "absolute",
                                            top: "10px",
                                            left: "10px",
                                            background: "rgba(0,0,0,0.6)",
                                            width: "30px",
                                            height: "30px",
                                            borderRadius: "50%",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                        }}
                                    >
                                        <FaPlay size={12} color="#fff" />
                                    </div>

                                    {/* Overlay Bottom */}
                                    <div
                                        style={{
                                            position: "absolute",
                                            left: 0,
                                            right: 0,
                                            bottom: 0,
                                            padding: "12px",
                                            background:
                                                "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.8))",
                                        }}
                                    >
                                        <h6 className="text-white fw-semibold mb-1">
                                            {story.title}
                                        </h6>

                                        <small className="text-white-50">
                                            {story.date} &nbsp; By :{" "}
                                            <span className="text-white fw-semibold">
                                                {story.author}
                                            </span>
                                        </small>
                                    </div>
                                </div>

                                <CardBody className="p-0"></CardBody>
                            </Card>
                        ))}
                    </Link>
                </div>
            </CardBody>

        </Card>
    );
};

export default BlogTrendingList;
