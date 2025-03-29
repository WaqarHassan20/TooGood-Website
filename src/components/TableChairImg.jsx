import React from "react";
import ChairTablePhoto from "../assets/images/ChairTablePhoto.webp";

function TableChairImg() {
  return (
    <div className="h-screen w-sc object-cover object-center">
      <img className="h-full w-full" src={ChairTablePhoto} />
    </div>
  );
}

export default TableChairImg;
