import React from "react";
import { useEffect, useState, useContext } from "react";

import cork from "./media/nemo/cork.png";
import elephant from "./media/nemo/elephant.png";
import hemp from "./media/nemo/hemp.png";
import bamboo from "./media/nemo/bamboo.png";
import mycilium from "./media/nemo/mycilium.png";
import straw from "./media/nemo/straw.png";

function Game({ materials }) {
  const [mat, setMat] = useState(0);
  const builder = (el) => {
    if (mat == 2) {
      el.classList.add("mat2");
      el.classList.remove("bg-light");
      el.classList.remove("mat1");
      el.classList.remove("mat3");
    }
    // if (mat == 3) {
    //     el.classList.add("mat3")
    //     el.classList.remove("bg-light")
    //     el.classList.remove("mat2")
    //     el.classList.remove("mat1")
    // }
  };
  const builderx = (el) => {
    // if (mat == 2) {
    //     el.classList.add("mat2")
    //     el.classList.remove("bg-light")
    //     el.classList.remove("mat1")
    //     el.classList.remove("mat3")
    // }
    if (mat == 3) {
      el.classList.add("mat3");
      el.classList.remove("bg-light");
      el.classList.remove("mat2");
      el.classList.remove("mat1");
    }
  };
  const builder2 = (el) => {
    if (mat == 1) {
      el.classList.add("mat1a");
    }
  };
  const builder3 = (el) => {
    if (mat == 1) {
      el.classList.add("mat1b");
    }
  };
  return (
    <div className="w-100 h-100">
      {/* <h1>Building a house</h1> */}
      <div className="w-100 row" style={{ height: "500px" }}>
        <div className="col-8 bg-dark rounded">
          <div className="d-flex justify-content-center">
            <div
              onClick={(e) => {
                builder3(e.target);
              }}
              className="arrow-up"
            ></div>
          </div>
          <div
            style={{ marginTop: "-5px" }}
            className="d-flex justify-content-center"
          >
            <div
              onClick={(e) => {
                builder2(e.target);
              }}
              className="arrow-down"
            ></div>
          </div>
          <div
            style={{ marginTop: "-32px" }}
            className="d-flex justify-content-center"
          >
            <div
              onClick={(e) => {
                builder3(e.target);
              }}
              className="arrow-up"
            ></div>
            <div
              onClick={(e) => {
                builder3(e.target);
              }}
              className="arrow-up"
            ></div>
          </div>
          <div
            style={{ marginTop: "-5px" }}
            className="d-flex justify-content-center"
          >
            <div
              onClick={(e) => {
                builder2(e.target);
              }}
              className="arrow-down"
            ></div>
            <div
              onClick={(e) => {
                builder2(e.target);
              }}
              className="arrow-down"
            ></div>
          </div>
          <div
            style={{ marginTop: "-32px" }}
            className="d-flex justify-content-center"
          >
            <div
              onClick={(e) => {
                builder3(e.target);
              }}
              className="arrow-up"
            ></div>
            <div
              onClick={(e) => {
                builder3(e.target);
              }}
              className="arrow-up"
            ></div>
            <div
              onClick={(e) => {
                builder3(e.target);
              }}
              className="arrow-up"
            ></div>
          </div>
          <div
            style={{ marginTop: "-5px" }}
            className="d-flex justify-content-center"
          >
            <div
              onClick={(e) => {
                builder2(e.target);
              }}
              className="arrow-down"
            ></div>
            <div
              onClick={(e) => {
                builder2(e.target);
              }}
              className="arrow-down"
            ></div>
            <div
              onClick={(e) => {
                builder2(e.target);
              }}
              className="arrow-down"
            ></div>
          </div>
          <div
            style={{ marginTop: "-32px" }}
            className="d-flex justify-content-center"
          >
            <div
              onClick={(e) => {
                builder3(e.target);
              }}
              className="arrow-up"
            ></div>
            <div
              onClick={(e) => {
                builder3(e.target);
              }}
              className="arrow-up"
            ></div>
            <div
              onClick={(e) => {
                builder3(e.target);
              }}
              className="arrow-up"
            ></div>
            <div
              onClick={(e) => {
                builder3(e.target);
              }}
              className="arrow-up"
            ></div>
          </div>
          <div
            style={{ marginTop: "-5px" }}
            className="d-flex justify-content-center"
          >
            <div
              onClick={(e) => {
                builder2(e.target);
              }}
              className="arrow-down"
            ></div>
            <div
              onClick={(e) => {
                builder2(e.target);
              }}
              className="arrow-down"
            ></div>
            <div
              onClick={(e) => {
                builder2(e.target);
              }}
              className="arrow-down"
            ></div>
            <div
              onClick={(e) => {
                builder2(e.target);
              }}
              className="arrow-down"
            ></div>
          </div>
          <div
            style={{ marginTop: "-32px" }}
            className="d-flex justify-content-center"
          >
            <div
              onClick={(e) => {
                builder3(e.target);
              }}
              className="arrow-up"
            ></div>
            <div
              onClick={(e) => {
                builder3(e.target);
              }}
              className="arrow-up"
            ></div>
            <div
              onClick={(e) => {
                builder3(e.target);
              }}
              className="arrow-up"
            ></div>
            <div
              onClick={(e) => {
                builder3(e.target);
              }}
              className="arrow-up"
            ></div>
            <div
              onClick={(e) => {
                builder3(e.target);
              }}
              className="arrow-up"
            ></div>
          </div>
          <div className="d-flex justify-content-center">
            <div
              onClick={(e) => {
                builder(e.target);
              }}
              style={{ height: "100px", width: "40px" }}
              className="bg-light rounded m-1"
            ></div>
            <div
              onClick={(e) => {
                builder(e.target);
              }}
              style={{ height: "100px", width: "40px" }}
              className="bg-light rounded m-1"
            ></div>
            <div
              onClick={(e) => {
                builder(e.target);
              }}
              style={{ height: "100px", width: "40px" }}
              className="bg-light rounded m-1"
            ></div>
            <div
              onClick={(e) => {
                builder(e.target);
              }}
              style={{ height: "100px", width: "40px" }}
              className="bg-light rounded m-1"
            ></div>
            <div
              onClick={(e) => {
                builder(e.target);
              }}
              style={{ height: "100px", width: "40px" }}
              className="bg-light rounded m-1"
            ></div>
            <div
              onClick={(e) => {
                builder(e.target);
              }}
              style={{ height: "100px", width: "40px" }}
              className="bg-light rounded m-1"
            ></div>
            <div
              onClick={(e) => {
                builder(e.target);
              }}
              style={{ height: "100px", width: "40px" }}
              className="bg-light rounded m-1"
            ></div>
            <div
              onClick={(e) => {
                builder(e.target);
              }}
              style={{ height: "100px", width: "40px" }}
              className="bg-light rounded m-1"
            ></div>
            <div
              onClick={(e) => {
                builder(e.target);
              }}
              style={{ height: "100px", width: "40px" }}
              className="bg-light rounded m-1"
            ></div>
            <div
              onClick={(e) => {
                builder(e.target);
              }}
              style={{ height: "100px", width: "40px" }}
              className="bg-light rounded m-1"
            ></div>
          </div>
          <div className="d-flex justify-content-center">
            <div
              onClick={(e) => {
                builder(e.target);
              }}
              style={{ height: "100px", width: "40px" }}
              className="bg-light rounded m-1"
            ></div>
            <div
              onClick={(e) => {
                builder(e.target);
              }}
              style={{ height: "100px", width: "40px" }}
              className="bg-light rounded m-1"
            ></div>
            <div
              onClick={(e) => {
                builder(e.target);
              }}
              style={{ height: "100px", width: "40px" }}
              className="bg-dark rounded m-1"
            ></div>
            <div
              onClick={(e) => {
                builder(e.target);
              }}
              style={{ height: "100px", width: "40px" }}
              className="bg-dark rounded m-1"
            ></div>
            <div
              onClick={(e) => {
                builder(e.target);
              }}
              style={{ height: "100px", width: "40px" }}
              className="bg-light rounded m-1"
            ></div>
            <div
              onClick={(e) => {
                builder(e.target);
              }}
              style={{ height: "100px", width: "40px" }}
              className="bg-light rounded m-1"
            ></div>
            <div
              onClick={(e) => {
                builder(e.target);
              }}
              style={{ height: "100px", width: "40px" }}
              className="bg-dark rounded m-1"
            ></div>
            <div
              onClick={(e) => {
                builder(e.target);
              }}
              style={{ height: "100px", width: "40px" }}
              className="bg-dark rounded m-1"
            ></div>
            <div
              onClick={(e) => {
                builder(e.target);
              }}
              style={{ height: "100px", width: "40px" }}
              className="bg-light rounded m-1"
            ></div>
            <div
              onClick={(e) => {
                builder(e.target);
              }}
              style={{ height: "100px", width: "40px" }}
              className="bg-light rounded m-1"
            ></div>
          </div>
          <div className="d-flex justify-content-center">
            <div
              onClick={(e) => {
                builder(e.target);
              }}
              style={{ height: "100px", width: "40px" }}
              className="bg-light rounded m-1"
            ></div>
            <div
              onClick={(e) => {
                builder(e.target);
              }}
              style={{ height: "100px", width: "40px" }}
              className="bg-light rounded m-1"
            ></div>
            <div
              onClick={(e) => {
                builder(e.target);
              }}
              style={{ height: "100px", width: "40px" }}
              className="bg-light rounded m-1"
            ></div>
            <div
              onClick={(e) => {
                builder(e.target);
              }}
              style={{ height: "100px", width: "40px" }}
              className="bg-light rounded m-1"
            ></div>
            <div
              onClick={(e) => {
                builder(e.target);
              }}
              style={{ height: "100px", width: "40px" }}
              className="bg-light rounded m-1"
            ></div>
            <div
              onClick={(e) => {
                builder(e.target);
              }}
              style={{ height: "100px", width: "40px" }}
              className="bg-light rounded m-1"
            ></div>
            <div
              onClick={(e) => {
                builder(e.target);
              }}
              style={{ height: "100px", width: "40px" }}
              className="bg-light rounded m-1"
            ></div>
            <div
              onClick={(e) => {
                builder(e.target);
              }}
              style={{ height: "100px", width: "40px" }}
              className="bg-light rounded m-1"
            ></div>
            <div
              onClick={(e) => {
                builder(e.target);
              }}
              style={{ height: "100px", width: "40px" }}
              className="bg-light rounded m-1"
            ></div>
            <div
              onClick={(e) => {
                builder(e.target);
              }}
              style={{ height: "100px", width: "40px" }}
              className="bg-light rounded m-1"
            ></div>
          </div>
          <div className="d-flex justify-content-center">
            <div
              onClick={(e) => {
                builderx(e.target);
              }}
              style={{ height: "45px", width: "45px" }}
              className="bg-light rounded m-1"
            ></div>
            <div
              onClick={(e) => {
                builderx(e.target);
              }}
              style={{ height: "45px", width: "45px" }}
              className="bg-light rounded m-1"
            ></div>
            <div
              onClick={(e) => {
                builderx(e.target);
              }}
              style={{ height: "45px", width: "45px" }}
              className="bg-light rounded m-1"
            ></div>
            <div
              onClick={(e) => {
                builderx(e.target);
              }}
              style={{ height: "45px", width: "45px" }}
              className="bg-light rounded m-1"
            ></div>
            <div
              onClick={(e) => {
                builderx(e.target);
              }}
              style={{ height: "45px", width: "45px" }}
              className="bg-light rounded m-1"
            ></div>
            <div
              onClick={(e) => {
                builderx(e.target);
              }}
              style={{ height: "45px", width: "45px" }}
              className="bg-light rounded m-1"
            ></div>
            <div
              onClick={(e) => {
                builderx(e.target);
              }}
              style={{ height: "45px", width: "45px" }}
              className="bg-light rounded m-1"
            ></div>
            <div
              onClick={(e) => {
                builderx(e.target);
              }}
              style={{ height: "45px", width: "45px" }}
              className="bg-light rounded m-1"
            ></div>
            <div
              onClick={(e) => {
                builderx(e.target);
              }}
              style={{ height: "45px", width: "45px" }}
              className="bg-light rounded m-1"
            ></div>
            <div
              onClick={(e) => {
                builderx(e.target);
              }}
              style={{ height: "45px", width: "45px" }}
              className="bg-light rounded m-1"
            ></div>
            <div
              onClick={(e) => {
                builderx(e.target);
              }}
              style={{ height: "45px", width: "45px" }}
              className="bg-light rounded m-1"
            ></div>
            <div
              onClick={(e) => {
                builderx(e.target);
              }}
              style={{ height: "45px", width: "45px" }}
              className="bg-light rounded m-1"
            ></div>
            <div
              onClick={(e) => {
                builderx(e.target);
              }}
              style={{ height: "45px", width: "45px" }}
              className="bg-light rounded m-1"
            ></div>
            <div
              onClick={(e) => {
                builderx(e.target);
              }}
              style={{ height: "45px", width: "45px" }}
              className="bg-light rounded m-1"
            ></div>
            <div
              onClick={(e) => {
                builderx(e.target);
              }}
              style={{ height: "45px", width: "45px" }}
              className="bg-light rounded m-1"
            ></div>
            <div
              onClick={(e) => {
                builderx(e.target);
              }}
              style={{ height: "45px", width: "45px" }}
              className="bg-light rounded m-1"
            ></div>
          </div>
        </div>
        <div className="col-4 d-flex flex-column">
          <div className=" h-75">
            Now, You can use the materials you have chose previously, to help
            Bob build his house. Just remember that each material is applicable
            at special parts of the house.
          </div>
          <div className="d-flex justify-content-evenly h-25">
            {/* <div onClick={() => { setMat(1); }} className={`rounded p-2 text-center m-2 bg-info w-100 ${mat == 1 ? 'selected2' : ''}`}>{materials[0]}</div> */}
            <div
              onClick={() => {
                setMat(1);
              }}
              className={`rounded p-2 text-center m-2 bg-info w-100 ${
                mat == 1 ? "selected2" : ""
              }`}
            >
              <img
                src={`${materials.includes("straw") ? straw : elephant}`}
                alt=""
                className="h-100 w-100"
                style={{ objectFit: "contain" }}
              />
              {/* <img src={`${matArr.includes("mycilium") ? mycilium : cork}`} alt="" className='col-4' style={{ height: "300px", objectFit: "contain", transition: "1s", transform: `scale(${j / 300})` }} /> */}
              {/* <img src={`${matArr.includes("hemp") ? hemp : bamboo}`} alt="" className='col-4' style={{ height: "300px", objectFit: "contain", transition: "1s", transform: `scale(${k / 300})` }} /> */}
            </div>
            <div
              onClick={() => {
                setMat(2);
              }}
              className={`rounded p-2 text-center m-2 bg-warning w-100 ${
                mat == 2 ? "selected2" : ""
              }`}
            >
              <img
                src={`${materials.includes("mycilium") ? mycilium : cork}`}
                alt=""
                className="h-100 w-100"
                style={{ objectFit: "contain" }}
              />
            </div>
            <div
              onClick={() => {
                setMat(3);
              }}
              className={`rounded p-2 text-center m-2 bg-danger w-100 ${
                mat == 3 ? "selected2" : ""
              }`}
            >
              <img
                src={`${materials.includes("hemp") ? hemp : bamboo}`}
                alt=""
                className="h-100 w-100"
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Game;
