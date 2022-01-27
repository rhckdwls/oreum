import React, { useState } from "react";
import Dropzone from "react-dropzone";
import { BsPlus } from "react-icons/bs";
import axios from "axios";

function FileUpload(props) {
  const [이미지, 이미지변경] = useState([]);

  const 이미지등록 = (files) => {
    let formData = new FormData();
    const config = {
      header: { "content-type": "multipart/fomr-data" },
    };
    formData.append("file", files[0]);
    axios.post("/api/oreum/image", formData, config).then((response) => {
      if (response.data.success) {
        이미지변경([...이미지, response.data.filePath]);
        props.refreshFunction([...이미지, response.data.filePath]);
      } else {
        alert("파일을 저장하는데 실패했습니다.");
      }
    });
  };

  const deleteHandler = (image) => {
    const currenIndex = 이미지.indexOf(image);

    let newImages = [...이미지];
    newImages.splice(currenIndex, 1);

    이미지변경(newImages);
    props.refreshFunction(newImages);
  };

  return (
    <div className="d-md-flex justify-content-md-between mt-3">
      <Dropzone onDrop={이미지등록}>
        {({ getRootProps, getInputProps }) => (
          <section>
            <div
              style={{
                width: 300,
                height: 240,
                border: "1px solid lightgray",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              {...getRootProps()}
            >
              <input {...getInputProps()} />
              <BsPlus style={{ fontSize: "4rem" }} />
              <br />
            </div>
          </section>
        )}
      </Dropzone>
      <div
        className="bg-secondary bg-opacity-25 mt-3"
        style={{
          display: "flex",
          widthh: "300px",
          height: "240px",
          overflowX: "scroll",
        }}
      >
        {이미지.map((이미지, index) => (
          <div onClick={() => deleteHandler(이미지)} key={index}>
            <img
              style={{ minWidth: "300px", width: "300px", height: "240px" }}
              src={`http://localhost:5000/${이미지}`}
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FileUpload;
