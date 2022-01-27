import React, { useEffect, useState } from "react";
import axios from "axios";
import OreumImage from "./Sections/OreumImage";
import OreumInfo from "./Sections/OreumInfo";
import { Row, Col } from "antd";

function DetailOreumRoomPage(props) {
  const oreumId = props.match.params.oreumId;

  const [Oreum, setOreum] = useState({});

  useEffect(() => {
    axios
      .get(`/api/oreum/oreums_by_id?id=${oreumId}&type=single`)
      .then((response) => {
        if (response.data.success) {
          console.log("response.data", response.data);
          setOreum(response.data.oreum[0]);
        } else {
          alert("상세 정보 가져오기를 실패했습니다.");
        }
      });
  }, []);

  return (
    <div className="container mt-md-5">
      <Row gutter={(16, 16)}>
        <Col lg={12} sm={24}>
          <OreumImage detail={Oreum} />
        </Col>
        <Col lg={12} sm={24}>
          <OreumInfo detail={Oreum} />
        </Col>
      </Row>
    </div>
  );
}

export default DetailOreumRoomPage;
