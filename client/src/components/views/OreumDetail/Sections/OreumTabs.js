import React, { useState, useRef, useEffect } from "react";
import { Tab, Tabs } from "react-bootstrap";

const { kakao } = window;

function OreumTabs(props) {
  useEffect(() => {
    const container = document.getElementById("myMap");
    const options = {
      center: new kakao.maps.LatLng(props.오름.latitude, props.오름.longitude),
      level: 4,
    };
    const map = new kakao.maps.Map(container, options);
  }, []);

  const inputRef = useRef();

  const [댓글, 댓글변경] = useState([
    "오 한번 가고싶네요",
    "오름이 정말 멋지네요",
    "abcdefghweweqweqweqwe",
  ]);
  const [입력값, 입력값변경] = useState("");

  const 댓글창 = 댓글.map((글) => {
    return (
      <div className="mt-3">
        <h6>{글}</h6>
        <hr />
      </div>
    );
  });

  const 댓글등록 = (e) => {
    e.preventDefault();
    if (inputRef.current.value == "") {
      return;
    } else {
      const new댓글 = [...댓글];
      new댓글.unshift(입력값);
      댓글변경(new댓글);
      입력값변경("");
      inputRef.current.focus();
    }
  };

  return (
    <Tabs
      defaultActiveKey="map"
      id="uncontrolled-tab-example"
      className="mb-3 mytap  nav nav-fill nav-justified "
    >
      <Tab eventKey="map" title="지도">
        <div
          className="img-fluid"
          id="myMap"
          style={{
            width: "500px",
            height: "500px",
            margin: "auto",
          }}
        ></div>
      </Tab>
      <Tab eventKey="comment" title="댓글">
        <div className="d-flex ">
          <form className=" input-group">
            <input
              type="text"
              placeholder="댓글 작성하기"
              className="form-control me-4"
              onChange={(e) => {
                입력값변경(e.target.value);
              }}
              value={입력값}
              ref={inputRef}
            />
            <button
              className="btn btn-dark form-label "
              style={{ width: 100 }}
              onClick={댓글등록}
            >
              등록
            </button>
          </form>
        </div>
        {댓글창}
      </Tab>
    </Tabs>
  );
}

export default OreumTabs;
