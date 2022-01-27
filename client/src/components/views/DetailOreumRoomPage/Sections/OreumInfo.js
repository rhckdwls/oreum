import React from "react";
import { Descriptions } from "antd";

function OreumInfo(props) {
  return (
    <div className="mt-3  ">
      <p className="border-bottom border-2 border-dark p-1 fs-2">
        {props.detail.title}
      </p>
      <br />
      <p className="border-bottom border-2  p-2 fs-4">
        카카오톡방 주소 : {props.detail.kakao}
      </p>
      <p className=" p-2 fs-4">{props.detail.description}</p>
    </div>
  );
}

export default OreumInfo;
