import React from "react";
import { FaGithub } from "react-icons/fa";

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
      <p className="fs-4">
        Jin{" "}
        <a href="https://github.com/rhckdwls/oreum" target="_blank">
          <FaGithub />
        </a>
      </p>
    </div>
  );
}

export default Footer;
