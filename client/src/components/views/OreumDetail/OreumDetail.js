import React, { useState } from "react";
import { useParams } from "react-router-dom";
import OreumData from "./db.json";
import { Row, Col } from "antd";
import ImageGallery from "react-image-gallery";
import { Tab, Tabs } from "react-bootstrap";
import OreumTabs from "./Sections/OreumTabs";
import Scroll from "../../utils/Scroll";

function OreumDetail() {
  const [오름, 오름설정] = useState(OreumData);
  let { id } = useParams();
  let 찾은오름 = 오름.find((오름들) => 오름들.id == id);

  const [오름이미지, 오름이미지설정] = useState(찾은오름.image);

  const images = [
    {
      original: 오름이미지,
      thumbnail: 오름이미지,
    },
  ];

  return (
    <div className="container mt-md-5">
      <div>
        <h1 className="text-center fw-bold">{찾은오름.title}</h1>
      </div>
      <Row gutter={(16, 16)}>
        <Col lg={12} sm={24}>
          <ImageGallery items={images} />
        </Col>
        <Col lg={12} sm={24}>
          <table className="table fs-5">
            <thead></thead>
            <tbody>
              <tr>
                <th scope="row" style={{ width: 100 }}>
                  주소
                </th>
                <td>{찾은오름.place}</td>
              </tr>
              <tr>
                <th scope="row">표고</th>
                <td>{찾은오름.pyogo}</td>
              </tr>
              <tr>
                <th scope="row">비고</th>
                <td>{찾은오름.vigo}</td>
              </tr>
              <tr>
                <th scope="row">설 명</th>
                <td>{찾은오름.explain}</td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>
      <br />
      <OreumTabs 오름={찾은오름} />
      <Scroll />
    </div>
  );
}

export default OreumDetail;
