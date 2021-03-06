import React, { useEffect, useState } from "react";
import "./LandingPage.css";
import Map from "./Sections/Map";
import axios from "axios";
import ImageSlider from "../../utils/ImageSlider";
import { Card, Row, Col } from "antd";
import CheckBox from "./Sections/CheckBox";
import { area } from "./Sections/datas";
import SearchFeature from "./Sections/SearchFeature";
import OreumWeather from "./Sections/OreumWeather";
import Scroll from "../../utils/Scroll";
import { Link } from "react-router-dom";

function LandingPage() {
  const [OreumRooms, setOreumRooms] = useState([]);
  setOreumRooms;
  const [Skip, setSkip] = useState(0);
  const [Limit, setLimit] = useState(4);
  const [PostSize, setPostSize] = useState(0);
  const [Filters, setFilters] = useState({
    area: [],
  });
  const [SearchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    let body = {
      skip: Skip,
      limit: Limit,
    };
    getOreum(body);
  }, []);

  const getOreum = (body) => {
    axios.post("/api/oreum/oreums", body).then((response) => {
      if (response.data.success) {
        if (body.loadMore) {
          setOreumRooms([...OreumRooms, ...response.data.oreumInfo]);
        } else {
          setOreumRooms(response.data.oreumInfo);
        }
        setPostSize(response.data.postSize);
      } else {
        alert("정보를 가져오는데 실패 했습니다.");
      }
    });
  };

  const moreButton = () => {
    let skip = Skip + Limit;

    let body = {
      skip: skip,
      limit: Limit,
      loadMore: true,
    };
    getOreum(body);
    setSkip(skip);
  };

  const setOreumCard = OreumRooms.map((oreum, i) => {
    return (
      <Col lg={6} md={8} xs={24} key={i} className="mt-2">
        <Card
          cover={
            <Link to={`/oreum/${oreum._id}`}>
              <ImageSlider images={oreum.images} />
            </Link>
          }
        >
          <p className="fs-5">{oreum.title}</p>
        </Card>
      </Col>
    );
  });

  const showFilterResults = (filters) => {
    let body = {
      skip: 0,
      limit: Limit,
      filters: filters,
    };

    getOreum(body);
    setSkip(0);
  };

  const handleFilters = (filters, category) => {
    const newFilters = { ...Filters };

    newFilters[category] = filters;

    showFilterResults(newFilters);
  };

  const updateSearchTerm = (newSearchTerm) => {
    let body = {
      skip: 0,
      limit: Limit,
      filters: Filters,
      searchTerm: newSearchTerm,
    };

    setSkip(0);
    setSearchTerm(newSearchTerm);
    getOreum(body);
  };

  return (
    <>
      <div className="bg">
        <div>
          <p className="text-center fs-1 font-NanumSquare fw-bolder text-white bg-title">
            우리 오름 같이 갈 사람을 구해봐요
          </p>
          <div className="d-md-flex justify-content-center">
            <OreumWeather />
            <Map />
          </div>
        </div>
      </div>

      <div
        className="text-center  bg-dark bg-gradient rounded  mt-4"
        style={{ width: 200, margin: "auto" }}
      >
        <h2 className="text-white">오름방 목록</h2>
      </div>

      <div className="container mt-4 overflow-hidden ">
        <CheckBox
          list={area}
          handleFilters={(filters) => handleFilters(filters, "area")}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            margin: "1rem auto",
          }}
        >
          <div className="btn border border-dark  me-3 ">
            <a href="oreum/upload" className="text-dark">
              오름방 등록
            </a>
          </div>
          <SearchFeature refreshFunction={updateSearchTerm} />
        </div>
        <div className="row gx-5">{setOreumCard}</div>
        <br />
        {PostSize >= Limit && (
          <div className="d-flex justify-content-center">
            <button className="btn btn-dark" onClick={moreButton}>
              더보기
            </button>
          </div>
        )}
      </div>
      <Scroll />
    </>
  );
}

export default LandingPage;
