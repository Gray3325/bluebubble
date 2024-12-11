import React from "react";
import Image from "next/image";
import exJpg from "../app/image/ex.jpg";

const featuredDates = [
  {
    imgSrc: "/image/ex.jpg",
    imgAlt: "01",
    title: "Diverse products",
    depiction:
      "There is a diverse range of products to choose from, ranging from clothing to stationery, tableware, and even phone cases.",
  },
  {
    imgSrc: "/image/ex.jpg",
    imgAlt: "02",
    title: "Customized printing",
    depiction:
      "We offer a service where you can choose your preferred designs to be printed into finished products.",
  },
  {
    imgSrc: "/image/ex.jpg",
    imgAlt: "03",
    title: "Creator Store",
    depiction:
      "We also offer a creator store service, where you can have your own artwork printed into finished products for sale.",
  },
];

export default function Featured() {
  return (
    <div style={{ display: "flex" }}>
      {featuredDates.map((featuredDate) => (
        <div
          key={featuredDate}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "3em",
          }}
        >
          <Image
            width={500}
            height={500}
            src={exJpg}
            alt={featuredDate.imgAlt}
            style={{width:"15em",height:"15em",borderRadius:"1em"}}
          />
          <h3>{featuredDate.title}</h3>
          <p>{featuredDate.depiction}</p>
        </div>
      ))}
    </div>
  );
}
