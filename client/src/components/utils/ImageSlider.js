import React from "react";
import { Carousel } from "antd";

function ImageSlider(props) {
  return (
    <div>
      <Carousel autoplay>
        {props.images.map((image, i) => (
          <div key={i} className="mt-3">
            <img
              style={{ width: "100%", maxHeight: "200px" }}
              src={`https://weoreum.herokuapp.com/${image}`}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default ImageSlider;
