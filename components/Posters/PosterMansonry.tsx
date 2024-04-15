/* eslint-disable @next/next/no-img-element */
import React, { ComponentType } from "react";
import Masonry from "./Masonry";

const Columns = {
  default: 3,
  1200: 3,
  1000: 2,
  700: 1,
};

const imagesArr = [
  {
    id: 11,
    src: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/d7598e136988765.620363e2df777.png",
  },
  {
    id: 2,
    src: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/b586be124021147.60faf4bb365a7.jpg",
  },
  {
    id: 3,
    src: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/ef2a38126387419.612ccbbbe8c2c.png",
  },
  {
    id: 4,
    src: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/f2712d124651907.6108d94173d3b.jpg",
  },
  {
    id: 5,
    src: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/9aecd6124020861.60faf37533e62.png",
  },
  {
    id: 6,
    src: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/7521fa124021057.60faf449c63b9.png",
  },
  {
    id: 7,
    src: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/2676af124020963.60faf3d90e4b2.jpg",
  },
  {
    id: 8,
    src: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/e453e1124021293.60faf566aa34f.jpg",
  },
];

const imagesDivArr = imagesArr.map((images) => {
  return (
    <div key={images.id}>
      <img loading="lazy" key={images.id} src={images.src} alt={"poster-img"} />
    </div>
  );
});
export const PosterMansonry = () => {
  return (
    <>
      <Masonry
        breakpointCols={Columns}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {imagesDivArr}
      </Masonry>
    </>
  );
};
