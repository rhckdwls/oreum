import React from "react";
import { SmileOutlined } from "@ant-design/icons";

function Footer() {
  return (
    <div
      className="mt-3"
      style={{
        backgroundColor: "#333",
        height: "80px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "1rem",
        color: "#fff",
      }}
    >
      <p>
        {" "}
        Jin <SmileOutlined />
      </p>
    </div>
  );
}

export default Footer;
