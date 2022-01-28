import React, { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";

function OreumImage(props) {
  const [Images, setImages] = useState([]);

  useEffect(() => {
    if (props.detail.images && props.detail.images.length > 0) {
      let images = [];

      props.detail.images.map((item) => {
        images.push({
          original: `http://weoreum.herokuapp.com/${item}`,
        });
      });
      setImages(images);
    }
  }, [props.detail]);

  return (
    <div className="mt-3">
      <ImageGallery items={Images} />
    </div>
  );
}

export default OreumImage;
