import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import "./page.css";
import axios from "axios";
import OreumData from "./db.json";
import { useHistory } from "react-router-dom";
import Calendar from "./Sections/Calendar";

function SearchOreum() {
  let history = useHistory();
  const [Oreums, setOreums] = useState(OreumData.slice(0, 90));
  const [pageNumber, setPageNumber] = useState(0);
  const [오름검색, 오름검색설정] = useState("");
  const [페이지, 페이지설정] = useState(10);

  const usersPerPage = 페이지;
  const pagesVisited = pageNumber * usersPerPage;

  const newOreum = [
    ...Oreums.filter((val) => {
      if (오름검색 === "") {
        return val;
      } else if (
        val.title.toLowerCase().includes(오름검색.toLowerCase()) ||
        val.place.toLowerCase().includes(오름검색.toLowerCase())
      ) {
        return val;
      }
    }),
  ];

  const displayUsers = newOreum
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .filter((val) => {
      if (오름검색 === "") {
        return val;
      } else if (
        val.title.toLowerCase().includes(오름검색.toLowerCase()) ||
        val.place.toLowerCase().includes(오름검색.toLowerCase())
      ) {
        return val;
      }
    })
    .map((oreum, i) => {
      return (
        <tr
          onClick={() => {
            history.push("/oreum/detail/" + oreum.id);
          }}
        >
          <th scope="row">{oreum.id}</th>
          <td>{oreum.title}</td>
          <td>{oreum.place}</td>
        </tr>
      );
    });

  const pageCount = Math.ceil(newOreum.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div>
      <div className="bg2 container">
        <div className="d-md-flex justify-content-center ">
          <Calendar />
          <div>
            <img
              style={{ width: 400 }}
              src="./assets/map.png"
              className="img-fluid"
            />
            <input
              type="text"
              placeholder="오름검색 / 이름,주소"
              className="form-control "
              onChange={(e) => {
                오름검색설정(e.target.value);
              }}
              value={오름검색}
            />
          </div>
        </div>
      </div>

      <div className="mt-4 container">
        <h4>
          총 <span className="text-danger">{newOreum.length}개</span> 오름이
          검색되었습니다.
        </h4>
        <table class="table table-hover ">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">이름</th>
              <th scope="col">주소</th>
            </tr>
          </thead>
          <tbody>{displayUsers}</tbody>
        </table>

        <ReactPaginate
          pageCount={pageCount}
          previousLabel={"<"}
          nextLabel={">"}
          marginPagesDisplayed={9}
          onPageChange={changePage}
          containerClassName={"pagination justify-content-center "}
          activeClassName={"page-item page-link"}
          previousClassName={"page-link page-item"}
          nextClassName={"page-link page-item"}
        />
      </div>
    </div>
  );
}

export default SearchOreum;
