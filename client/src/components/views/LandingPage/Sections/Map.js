import React, { useState, useEffect } from "react";

import { useHistory } from "react-router-dom";

const { kakao } = window;

function Map() {
  let history = useHistory();
  useEffect(() => {
    const mapContainer = document.getElementById("myMap");
    const mapOption = {
      center: new kakao.maps.LatLng(33.402237, 126.494586),
      level: 10,
    };
    var map = new kakao.maps.Map(mapContainer, mapOption);

    var positions = [
      {
        content: "아부오름",
        latlng: new kakao.maps.LatLng(33.448875, 126.777283),
      },
      {
        content: "아끈다랑쉬",
        latlng: new kakao.maps.LatLng(33.47413717, 126.8306516),
      },
      {
        content: "알밤오름",
        latlng: new kakao.maps.LatLng(33.480757, 126.885675),
      },
      {
        content: "알오름",
        latlng: new kakao.maps.LatLng(33.489746, 126.713135),
      },
      {
        content: "안돌오름",
        latlng: new kakao.maps.LatLng(33.455814, 126.757126),
      },
      {
        content: "안세미",
        latlng: new kakao.maps.LatLng(33.467098, 126.608124),
      },
      {
        content: "백약이오름",
        latlng: new kakao.maps.LatLng(33.43680944, 126.7897666),
      },
      {
        content: "밝은오름",
        latlng: new kakao.maps.LatLng(33.360935, 126.265854),
      },
      {
        content: "바농오름",
        latlng: new kakao.maps.LatLng(33.45377549, 126.6538018),
      },
      {
        content: "비치미오름",
        latlng: new kakao.maps.LatLng(33.426395, 126.76329),
      },

      {
        content: "밧돌오름",
        latlng: new kakao.maps.LatLng(33.460716, 126.76297),
      },
      {
        content: "천아오름",
        latlng: new kakao.maps.LatLng(33.404919, 126.298607),
      },
      {
        content: "칡오름",
        latlng: new kakao.maps.LatLng(33.283329, 126.603737),
      },
      {
        content: "대병악",
        latlng: new kakao.maps.LatLng(33.306248, 126.367577),
      },
      {
        content: "대수산봉",
        latlng: new kakao.maps.LatLng(33.438522, 126.902069),
      },
      {
        content: "대왕산",
        latlng: new kakao.maps.LatLng(33.455917, 126.872673),
      },
      {
        content: "다랑쉬",
        latlng: new kakao.maps.LatLng(33.475208, 126.819862),
      },
      {
        content: "달산봉",
        latlng: new kakao.maps.LatLng(33.345638, 126.832405),
      },
      {
        content: "당오름",
        latlng: new kakao.maps.LatLng(33.468353, 126.777916),
      },
      {
        content: "당산봉",
        latlng: new kakao.maps.LatLng(33.308826, 126.172981),
      },
      { content: "단산", latlng: new kakao.maps.LatLng(33.243938, 126.288719) },
      {
        content: "도청오름",
        latlng: new kakao.maps.LatLng(33.315445, 126.814339),
      },
      {
        content: "독자봉",
        latlng: new kakao.maps.LatLng(33.387119, 126.854477),
      },
      {
        content: "돔배오름",
        latlng: new kakao.maps.LatLng(33.429062, 126.668571),
      },
      {
        content: "돛오름",
        latlng: new kakao.maps.LatLng(33.48107138, 126.8015166),
      },
      {
        content: "둔지봉",
        latlng: new kakao.maps.LatLng(33.502773, 126.795341),
      },
      {
        content: "두산봉",
        latlng: new kakao.maps.LatLng(33.481148, 126.885353),
      },
      {
        content: "어대오름",
        latlng: new kakao.maps.LatLng(33.49564978, 126.7608417),
      },
      {
        content: "어도오름",
        latlng: new kakao.maps.LatLng(33.421005, 126.307381),
      },
      {
        content: "은월봉(윤드리오름)",
        latlng: new kakao.maps.LatLng(33.46896, 126.854477),
      },
      {
        content: "갑선이오름",
        latlng: new kakao.maps.LatLng(33.359951, 126.781845),
      },
      {
        content: "개오름(성읍)",
        latlng: new kakao.maps.LatLng(33.423016, 126.772675),
      },
      {
        content: "가마오름",
        latlng: new kakao.maps.LatLng(33.305321, 126.246628),
      },
      {
        content: "감낭오름",
        latlng: new kakao.maps.LatLng(33.324684, 126.350502),
      },
      {
        content: "가세오름",
        latlng: new kakao.maps.LatLng(33.331295, 126.78109),
      },
      {
        content: "가시오름",
        latlng: new kakao.maps.LatLng(33.247208, 126.243866),
      },
      {
        content: "거린오름",
        latlng: new kakao.maps.LatLng(33.304913, 126.332619),
      },
      {
        content: "걸리오름",
        latlng: new kakao.maps.LatLng(33.376331, 126.815575),
      },
      {
        content: "거문오름",
        latlng: new kakao.maps.LatLng(33.456268, 126.720299),
      },
      {
        content: "거슨새미",
        latlng: new kakao.maps.LatLng(33.450577, 126.759544),
      },
      {
        content: "갯거리오름",
        latlng: new kakao.maps.LatLng(33.3766636, 126.292931),
      },
      {
        content: "극락오름",
        latlng: new kakao.maps.LatLng(33.436234, 126.414978),
      },
      {
        content: "금오름",
        latlng: new kakao.maps.LatLng(33.35722, 126.305847),
      },
      {
        content: "고근산",
        latlng: new kakao.maps.LatLng(33.268082, 126.514198),
      },
      {
        content: "궁대악",
        latlng: new kakao.maps.LatLng(33.435707, 126.823044),
      },
      { content: "군산", latlng: new kakao.maps.LatLng(33.251938, 126.370857) },
      {
        content: "이달봉",
        latlng: new kakao.maps.LatLng(33.363838, 126.348381),
      },
      {
        content: "이달이촛대봉",
        latlng: new kakao.maps.LatLng(33.366447, 126.347038),
      },
      {
        content: "인정오름",
        latlng: new kakao.maps.LatLng(33.283649, 126.585411),
      },
      {
        content: "자배봉",
        latlng: new kakao.maps.LatLng(33.299992, 126.675797),
      },
      {
        content: "제지기오름",
        latlng: new kakao.maps.LatLng(33.241749, 126.609947),
      },
      {
        content: "저지오름",
        latlng: new kakao.maps.LatLng(33.334156, 126.2509),
      },
      {
        content: "정물오름",
        latlng: new kakao.maps.LatLng(33.339428, 126.329353),
      },
      {
        content: "제석오름",
        latlng: new kakao.maps.LatLng(33.347694, 126.835685),
      },
      {
        content: "지미봉",
        latlng: new kakao.maps.LatLng(33.495327, 126.901497),
      },
      {
        content: "좌보미",
        latlng: new kakao.maps.LatLng(33.43609516, 126.8067627),
      },
      {
        content: "모구리오름",
        latlng: new kakao.maps.LatLng(33.408043, 126.8284),
      },
      {
        content: "모지오름",
        latlng: new kakao.maps.LatLng(33.393829, 126.767769),
      },
      {
        content: "무악(개오름)",
        latlng: new kakao.maps.LatLng(33.315536, 126.369118),
      },
      {
        content: "명월오름",
        latlng: new kakao.maps.LatLng(33.382324, 126.279259),
      },
      {
        content: "묘산봉",
        latlng: new kakao.maps.LatLng(33.543922, 126.744804),
      },
      {
        content: "남산봉",
        latlng: new kakao.maps.LatLng(33.384289, 126.810814),
      },
      {
        content: "낭끼오름",
        latlng: new kakao.maps.LatLng(33.435303, 126.841972),
      },
      { content: "넉시악", latlng: new kakao.maps.LatLng(33.305565, 126.7146) },
      {
        content: "늡서리",
        latlng: new kakao.maps.LatLng(33.441711, 126.66494),
      },
      {
        content: "높은오름",
        latlng: new kakao.maps.LatLng(33.457088, 126.792419),
      },
      {
        content: "삼매봉",
        latlng: new kakao.maps.LatLng(33.244247, 126.54631),
      },
      {
        content: "생길이오름",
        latlng: new kakao.maps.LatLng(33.305759, 126.642708),
      },
      {
        content: "서걸세",
        latlng: new kakao.maps.LatLng(33.280914, 126.618401),
      },
      {
        content: "설오름",
        latlng: new kakao.maps.LatLng(33.370998, 126.769951),
      },
      {
        content: "성불오름",
        latlng: new kakao.maps.LatLng(33.423302, 126.749092),
      },
      {
        content: "섯알오름",
        latlng: new kakao.maps.LatLng(33.20594, 126.281504),
      },
      {
        content: "서우봉",
        latlng: new kakao.maps.LatLng(33.54575, 126.677505),
      },
      {
        content: "새신오름",
        latlng: new kakao.maps.LatLng(33.297661, 126.238441),
      },
      {
        content: "식은이오름",
        latlng: new kakao.maps.LatLng(33.473301, 126.747414),
      },
      {
        content: "식산봉",
        latlng: new kakao.maps.LatLng(33.465843, 126.919968),
      },
      {
        content: "소병악",
        latlng: new kakao.maps.LatLng(33.308426, 126.373634),
      },
      {
        content: "송악산",
        latlng: new kakao.maps.LatLng(33.200703, 126.289551),
      },
      {
        content: "수산봉(물메)",
        latlng: new kakao.maps.LatLng(33.473545, 126.388649),
      },
      {
        content: "통오름",
        latlng: new kakao.maps.LatLng(33.39328, 126.855972),
      },
      {
        content: "토산봉",
        latlng: new kakao.maps.LatLng(33.32391, 126.773849),
      },
      {
        content: "따라비오름",
        latlng: new kakao.maps.LatLng(33.38892, 126.754288),
      },
      {
        content: "우진제비",
        latlng: new kakao.maps.LatLng(33.467384, 126.698135),
      },
      {
        content: "월랑지",
        latlng: new kakao.maps.LatLng(33.438665, 126.809734),
      },
      {
        content: "원물오름",
        latlng: new kakao.maps.LatLng(33.322323, 126.344551),
      },
      {
        content: "열안지오름",
        latlng: new kakao.maps.LatLng(33.47307434, 126.605356),
      },
      {
        content: "영천악",
        latlng: new kakao.maps.LatLng(33.295338, 126.600677),
      },
      {
        content: "영주산",
        latlng: new kakao.maps.LatLng(33.40456816, 126.7962446),
      },
      {
        content: "용눈이오름",
        latlng: new kakao.maps.LatLng(33.45987829, 126.8326896),
      },
      {
        content: "유건에오름",
        latlng: new kakao.maps.LatLng(33.413563, 126.847069),
      },
    ];

    for (var i = 0; i < positions.length; i++) {
      // 마커를 생성합니다
      var marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: positions[i].latlng, // 마커의 위치
      });

      // 마커에 표시할 인포윈도우를 생성합니다
      var infowindow = new kakao.maps.InfoWindow({
        content: positions[i].content, // 인포윈도우에 표시할 내용
      });

      // 마커에 mouseover 이벤트와 mouseout 이벤트를 등록합니다
      // 이벤트 리스너로는 클로저를 만들어 등록합니다
      // for문에서 클로저를 만들어 주지 않으면 마지막 마커에만 이벤트가 등록됩니다
      kakao.maps.event.addListener(
        marker,
        "mouseover",
        makeOverListener(map, marker, infowindow)
      );
      kakao.maps.event.addListener(
        marker,
        "mouseout",
        makeOutListener(infowindow)
      );
    }
    function makeOverListener(map, marker, infowindow) {
      return function () {
        infowindow.open(map, marker);
      };
    }
    function makeOutListener(infowindow) {
      return function () {
        infowindow.close();
      };
    }
  }, []);

  return (
    <div>
      <div
        id="myMap"
        className=" img-fluid map ms-md-5 mt-2"
        style={{
          width: "600px",
          height: "400px",
        }}
      ></div>
      <button
        className="btn btn-dark d-block mt-2 btn-lg"
        style={{ margin: "auto" }}
        onClick={() => {
          history.push("/searchoreum");
        }}
      >
        오름 검색 하러가기
      </button>
    </div>
  );
}

export default Map;
