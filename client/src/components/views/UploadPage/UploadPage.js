import React, { useState } from "react";
import FileUpload from "../../utils/FileUpload";
import Axios from "axios";
import { useHistory } from "react-router-dom";

const 지역들 = [
  { key: 1, value: "제주시" },
  { key: 2, value: "서귀포시" },
  { key: 3, value: "애월읍" },
  { key: 4, value: "한림읍" },
  { key: 5, value: "한경면" },
  { key: 6, value: "대정읍" },
  { key: 7, value: "안덕면" },
  { key: 8, value: "중문" },
  { key: 9, value: "남원읍" },
  { key: 10, value: "표선면" },
  { key: 11, value: "성산읍" },
  { key: 12, value: "구좌읍" },
  { key: 13, value: "조천읍" },
];

function UploadPage(props) {
  let history = useHistory();

  const [이름, 이름설정] = useState("");
  const [설명, 설명설정] = useState("");
  const [톡방, 톡방설정] = useState("");
  const [지역, 지역설정] = useState(0);
  const [이미지, 이미지설정] = useState([]);

  const 오름방입력 = (e) => {
    이름설정(e.currentTarget.value);
  };
  const 설명입력 = (e) => {
    설명설정(e.currentTarget.value);
  };
  const 톡방입력 = (e) => {
    톡방설정(e.currentTarget.value);
  };
  const 지역입력 = (e) => {
    지역설정(e.currentTarget.value);
  };

  const updateImages = (newImages) => {
    이미지설정(newImages);
  };

  const 오름방등록 = (e) => {
    e.preventDefault();

    if (!이름 || !설명 || !톡방 || !지역 || !이미지) {
      return alert("모든 값을 넣어주셔야 합니다.");
    }

    //서버에 채운 값들을 request로 보낸다.
    const body = {
      writer: props.user.userData._id,
      title: 이름,
      description: 설명,
      kakao: 톡방,
      images: 이미지,
      area: 지역,
    };

    Axios.post("/api/oreum", body).then((response) => {
      if (response.data.success) {
        alert("등록에 성공 했습니다.");
        props.history.push("/");
      } else {
        alert("등록에 실패 했습니다.");
      }
    });
  };

  return (
    <div className="container mt-4" style={{ maxWidth: "700px" }}>
      <div className="text-center">
        <h2>오름방 업로드</h2>
      </div>
      <div className="row">
        <form onSubmit={오름방등록}>
          {/* {drop} */}
          <FileUpload refreshFunction={updateImages} />
          <br />
          <br />
          <label>오름방 이름</label>
          <input className=" form-control" onChange={오름방입력} value={이름} />
          <br />
          <br />
          <label>설명</label>
          <textarea
            className=" form-control"
            onChange={설명입력}
            value={설명}
          />
          <br />
          <br />
          <label>카카오톡 오픈방 주소</label>
          <input className=" form-control" onChange={톡방입력} value={톡방} />
          <br />
          <br />
          <select className="form-select" onChange={지역입력} value={지역}>
            <option selected>지역 선택</option>
            {지역들.map((item) => (
              <option key={item.key} value={item.key}>
                {item.value}
              </option>
            ))}
          </select>
          <br />
          <br />
          <button className="btn btn-dark" htmlType="submit">
            확인
          </button>
        </form>
      </div>
    </div>
  );
}

export default UploadPage;
