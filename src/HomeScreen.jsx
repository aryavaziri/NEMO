import { useEffect, useState, useContext } from "react";
import { Row, Col, Container, Modal, Button } from "react-bootstrap";
import explainer from "./media/nemo/3.png";
import house from "./media/nemo/2.png";
import Game from "./Game";

import cork from "./media/nemo/cork.png";
import elephant from "./media/nemo/elephant.png";
import hemp from "./media/nemo/hemp.png";
import bamboo from "./media/nemo/bamboo.png";
import mycilium from "./media/nemo/mycilium.png";
import straw from "./media/nemo/straw.png";

import { Tab } from "react-bootstrap";
import { Tabs } from "react-bootstrap";
// import Modal from 'react-bootstrap/Modal';

// import Sonnet from '../../components/Sonnet';

function HomeScreen() {
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [key, setKey] = useState("1");
  const [show, setShow] = useState(false);

  const [m1, setm1] = useState("");
  const [m2, setm2] = useState("");
  const [m3, setm3] = useState("");
  const [m4, setm4] = useState("");
  const [m5, setm5] = useState("");
  const [m6, setm6] = useState("");

  const [matArr, setMatArr] = useState([]);

  const [i, seti] = useState(50);
  const [j, setj] = useState(50);
  const [k, setk] = useState(50);
  const inci = () => (i < 300 ? seti(i + 30) : null);
  const incj = () => (j < 300 ? setj(j + 15) : null);
  const inck = () => (k < 300 ? setk(k + 20) : null);
  const inc = () => {
    inci();
    incj();
    inck();
    console.log(matArr);
  };
  useEffect(() => {
    if (i == 300 && j == 300 && k == 300) {
      setShow(true);
    }
  }, [i, j, k]);
  let interval;
  useEffect(() => {
    const timer = setTimeout(() => {
      nextpage();
    }, 5000);
    return () => clearTimeout(timer);
  }, [key]);

  useEffect(() => {
    seti(30);
    setj(15);
    setk(20);
  }, [key]);
  const nextpage = () => {
    if (key == "1") {
      setKey("2");
    } else if (key == "2") {
      setKey("3");
    } else if (key == "3") {
      setKey("4");
    } else if (key == "4") {
      setKey("5");
    } else if (key == "5") {
      setKey("6a");
    }
    console.log(key);
  };

  return (
    <>
      <div className="mx-5">
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3"
        >
          <Tab className="row" eventKey="1" title="1">
            <div className="col-5 mx-auto">
              <h2 className="mb-5 text-center">Game introduction</h2>
              <div className="d-flex row mt-5 pt-5">
                <div className="col-9">
                  Hoi!!!I’m Bob. I need new houses for my family, Can you help
                  me?
                </div>
                <img
                  className="col-3"
                  src={explainer}
                  style={{ height: "100px", objectFit: "contain" }}
                />
              </div>
            </div>
          </Tab>

          <Tab eventKey="2" title="2">
            <div className="col-5 mx-auto">
              <h2 className="mb-5 text-center">Game introduction</h2>
              <div className="d-flex row mt-5 pt-5">
                <img
                  className="col-3"
                  src={explainer}
                  style={{
                    height: "100px",
                    objectFit: "contain",
                    transform: "scaleX(-1)"
                  }}
                />
                <div className="col-9">
                  I’ll bring you to the future shops for my construction
                  materials
                </div>
              </div>
            </div>
          </Tab>
          <Tab eventKey="3" title="3">
            <div className="col-7 mx-auto">
              <h2 className="mb-5 text-center">Game introduction</h2>
              <div className="w-100 d-flex row mt-5 pt-5">
                <div className="col-9">
                  And before shopping, please help me build the house based on
                  the features of that material’s will be more stronger
                </div>
                <img
                  className="col-3"
                  src={explainer}
                  style={{ height: "100px", objectFit: "contain" }}
                />
              </div>
            </div>
          </Tab>
          <Tab eventKey="4" title="4">
            <div className="col-5 mx-auto">
              <h2 className="mb-5 text-center">Game introduction</h2>
              <div className="w-100 d-flex row mt-5 pt-5">
                <img
                  className="col-3"
                  src={explainer}
                  style={{
                    height: "100px",
                    objectFit: "contain",
                    transform: "scaleX(-1)"
                  }}
                />
                <div className="col-9">
                  So!! See you later, my dear friends and thanks for helping
                </div>
              </div>
            </div>
          </Tab>
          <Tab eventKey="5" title="5">
            <div className="col-5 mx-auto">
              {/* <h2 className='mb-5 text-center'>Game introduction</h2> */}
              <div className="w-100 d-flex row pt-5 mt-5">
                <div className="col-9">
                  Welcome to Karma future materials, We sell 6 different
                  materials for future buildings
                </div>
                <img
                  className="col-3"
                  src={house}
                  style={{ height: "100px" }}
                />
              </div>
            </div>
          </Tab>
          <Tab className="row justify-content-center" eventKey="6a" title="6a">
            <h1 className="text-center">Select a material for roof</h1>
            <div className="row justify-content-center p-2 materials">
              <div
                onClick={() => {
                  setKey("6b");
                  seti(0);
                  setj(0);
                  setk(0);
                  setMatArr([...matArr, "straw"]);
                }}
                className={`border col-5 d-flex m-3 p-3 rounded overflow-hidden ${
                  m1 ? " selected" : ""
                }`}
              >
                <img className="w-50 p-2" src={straw} />
                <div className="p-3">
                  <h3>Straw bales</h3>
                  <p>Hi, I'm the compressed bundled of straws</p>
                  <p className="text-success fw-bolder">Pros</p>
                  <p className="text-success">Environmentally friendly</p>
                  <p className="text-success">Good insulation</p>
                  <p className="text-success">Cost-effective</p>
                  <p className="text-danger fw-bolder">Cons</p>
                  <p className="text-danger">Fire risk</p>
                  <p className="text-danger">Moisture susceptibility</p>
                  <p className="text-danger">Limited use</p>
                </div>
              </div>
              <div
                onClick={() => {
                  setKey("6b");
                  seti(0);
                  setj(0);
                  setk(0);
                  setMatArr([...matArr, "elephant grass"]);
                }}
                className={`border col-5 d-flex m-3 p-3 rounded overflow-hidden ${
                  m2 ? " selected" : ""
                }`}
              >
                <img className="w-50 p-2" src={elephant} />
                <div className="p-3">
                  <h3>Elephant grass</h3>
                  <p>Hi, I'm the tall grass native in asia and africa</p>
                  <p className="text-success fw-bolder">Pros</p>
                  <p className="text-success">Renewable resource</p>
                  <p className="text-success">Good insulation</p>
                  <p className="text-success">Low environmental impact</p>
                  <p className="text-danger fw-bolder">Cons</p>
                  <p className="text-danger">Limited structural strength</p>
                  <p className="text-danger">Susceptible to moisture</p>
                  <p className="text-danger">Limited availability</p>
                </div>
              </div>
            </div>
          </Tab>
          <Tab className="row justify-content-center" eventKey="6b" title="6b">
            <h1 className="text-center">Select a material for wall</h1>
            <div className="row justify-content-center p-0 materials">
              <div
                onClick={() => {
                  setKey("6c");
                  seti(0);
                  setj(0);
                  setk(0);
                  setMatArr([...matArr, "mycilium"]);
                }}
                className={`border col-5 d-flex m-3 p-3 rounded overflow-hidden ${
                  m3 ? " selected" : ""
                }`}
              >
                <img className="w-50 p-2" src={mycilium} />
                <div className="p-3">
                  <h3>Mycelium</h3>
                  <p>Hi, I'm the root of the fungi</p>
                  <p className="text-success fw-bolder">Pros</p>
                  <p className="text-success">Renewable resource</p>
                  <p className="text-success">Strong and lightweight</p>
                  <p className="text-success">Biodegradable</p>
                  <p className="text-danger fw-bolder">Cons</p>
                  <p className="text-danger">Limited availability</p>
                  <p className="text-danger">Limited research</p>
                  <p className="text-danger">Moisture sensitivity</p>
                </div>
              </div>
              <div
                onClick={() => {
                  setKey("6c");
                  seti(0);
                  setj(0);
                  setk(0);
                  setMatArr([...matArr, "cork"]);
                }}
                className={`border col-5 d-flex m-3 p-3 rounded overflow-hidden ${
                  m4 ? " selected" : ""
                }`}
              >
                <img className="w-50 p-2" src={cork} />
                <div className="p-3">
                  <h3>Cork</h3>
                  <p>Hi, I'm made by cork tree</p>
                  <p className="text-success fw-bolder">Pros</p>
                  <p className="text-success">Renewable resource</p>
                  <p className="text-success">Good insulation</p>
                  <p className="text-success">Lightweight and durable</p>
                  <p className="text-danger fw-bolder">Cons</p>
                  <p className="text-danger">Limited structural strength</p>
                  <p className="text-danger">Limited availability</p>
                  <p className="text-danger">Cost</p>
                </div>
              </div>
            </div>
          </Tab>
          <Tab className="row justify-content-center" eventKey="6c" title="6c">
            <h1 className="text-center">Select a material for floor</h1>
            <div className="row justify-content-center p-0 materials">
              <div
                onClick={() => {
                  setKey("7");
                  seti(0);
                  setj(0);
                  setk(0);
                  setMatArr([...matArr, "hemp"]);
                }}
                className={`border col-5 d-flex m-3 p-3 rounded overflow-hidden ${
                  m5 ? " selected" : ""
                }`}
              >
                <img className="w-50 p-2" src={hemp} />
                <div className="p-3">
                  <h3>Hemp</h3>
                  <p>Hi, I'm the botanical class of Cannabis</p>
                  <p className="text-success fw-bolder">Pros</p>
                  <p className="text-success">Renewable resource</p>
                  <p className="text-success">High strength-to-weight ratio</p>
                  <p className="text-success">Good insulation</p>
                  <p className="text-danger fw-bolder">Cons</p>
                  <p className="text-danger">Limited availability</p>
                  <p className="text-danger">Moisture sensitivity</p>
                  <p className="text-danger">Cost</p>
                </div>
              </div>
              <div
                onClick={() => {
                  setKey("7");
                  seti(0);
                  setj(0);
                  setk(0);
                  setMatArr([...matArr, "bamboo"]);
                }}
                className={`border col-5 d-flex m-3 p-3 rounded overflow-hidden ${
                  m6 ? " selected" : ""
                }`}
              >
                <img className="w-50 p-2" src={bamboo} />
                <div className="p-3">
                  <h3>Bamboo</h3>
                  <p>Hi, I'm the evergreen perennial flower plant</p>
                  <p className="text-success fw-bolder">Pros</p>
                  <p className="text-success">Renewable resource</p>
                  <p className="text-success">High strength-to-weight ratio</p>
                  <p className="text-success">Versatile</p>
                  <p className="text-danger fw-bolder">Cons</p>
                  <p className="text-danger">Moisture sensitivity</p>
                  <p className="text-danger">Limited availability</p>
                  <p className="text-danger">Cost</p>
                </div>
              </div>
            </div>
          </Tab>
          <Tab
            className="row justify-content-center"
            style={{ maxWidth: "1200px", margin: "0 auto" }}
            eventKey="7"
            title="7"
          >
            <Modal
              backdrop="static"
              className="mt-5"
              centered
              show={show}
              onHide={handleClose}
            >
              <Button
                className="p-3 fs-2"
                variant="success"
                onClick={() => {
                  handleClose();
                  setKey("9");
                }}
              >
                Congratulations! Job is done.
              </Button>
            </Modal>
            <h2 className="text-center">Growing</h2>
            <div className="text-center">
              Now it’s growing, if you want to speed up , please add as much
              soil and fertiliser and water to speed up
            </div>
            <div className="text-center">
              {" "}
              please noted that some materials need more time to grow{" "}
            </div>
            <div className="d-flex">
              <div className="col-4 justify-content-around align-items-center d-flex flex-column">
                <div
                  onClick={inc}
                  className="p-2 m-0 text-center align-items-center on-hover"
                  style={{
                    userSelect: "none",
                    lineHeight: "100px",
                    fontSize: 22,
                    width: "120px",
                    height: "120px",
                    borderRadius: "50%",
                    background: "red",
                    boxShadow: "0 0 20px 15px inset gray",
                    color: "white"
                  }}
                >
                  Water
                </div>
                <div
                  onClick={inc}
                  className="p-2 m-0 text-center align-items-center on-hover"
                  style={{
                    userSelect: "none",
                    lineHeight: "100px",
                    fontSize: 22,
                    width: "120px",
                    height: "120px",
                    borderRadius: "50%",
                    background: "red",
                    boxShadow: "0 0 20px 15px inset gray",
                    color: "white"
                  }}
                >
                  Soil
                </div>
                <div
                  onClick={inc}
                  className="p-2 m-0 text-center align-items-center on-hover"
                  style={{
                    userSelect: "none",
                    lineHeight: "100px",
                    fontSize: 22,
                    width: "120px",
                    height: "120px",
                    borderRadius: "50%",
                    background: "red",
                    boxShadow: "0 0 20px 15px inset gray",
                    color: "white"
                  }}
                >
                  Fertiliser
                </div>
              </div>

              <div
                className="col-8 justify-content-around d-flex row"
                style={{ height: "400px" }}
              >
                <div className="col-12 justify-content-around d-flex row">
                  <img
                    src={`${matArr.includes("straw") ? straw : elephant}`}
                    alt=""
                    className="col-4"
                    style={{
                      height: "300px",
                      objectFit: "contain",
                      transition: "1s",
                      transform: `scale(${i / 300})`
                    }}
                  />
                  <img
                    src={`${matArr.includes("mycilium") ? mycilium : cork}`}
                    alt=""
                    className="col-4"
                    style={{
                      height: "300px",
                      objectFit: "contain",
                      transition: "1s",
                      transform: `scale(${j / 300})`
                    }}
                  />
                  <img
                    src={`${matArr.includes("hemp") ? hemp : bamboo}`}
                    alt=""
                    className="col-4"
                    style={{
                      height: "300px",
                      objectFit: "contain",
                      transition: "1s",
                      transform: `scale(${k / 300})`
                    }}
                  />
                </div>
                <div className="d-flex w-100 justify-content-between">
                  <div
                    style={{ width: "30%", height: "30px" }}
                    className="position-relative rounded-pill bg-info p-0"
                  >
                    <div
                      style={{
                        width: `${i / 3}%`,
                        height: `30px`,
                        left: 0,
                        bottom: 0
                      }}
                      className="position-absolute rounded-pill align-bottom bg-danger p-0"
                    ></div>
                  </div>
                  <div
                    style={{ width: "30%", height: "30px" }}
                    className="position-relative rounded-pill bg-info p-2"
                  >
                    <div
                      style={{
                        width: `${j / 3}%`,
                        height: `30px`,
                        left: 0,
                        bottom: 0
                      }}
                      className="position-absolute rounded-pill align-bottom bg-warning p-0"
                    ></div>
                  </div>
                  <div
                    style={{ width: "30%", height: "30px" }}
                    className="position-relative rounded-pill bg-info p-2"
                  >
                    <div
                      style={{
                        width: `${k / 3}%`,
                        height: `30px`,
                        left: 0,
                        bottom: 0
                      }}
                      className="position-absolute rounded-pill align-bottom bg-primary p-0"
                    ></div>
                    {/* <p style={{ left: 0, top: "100%" }} className='position-absolut'>Arya</p> */}
                  </div>
                </div>
              </div>
            </div>
          </Tab>
          <Tab eventKey="8" title="8">
            <h2>Animation</h2>
            <div className="w-100 d-flex row">
              <div className="col-5"></div>
            </div>
          </Tab>
          <Tab eventKey="9" title="9">
            <Game materials={matArr} />
          </Tab>
        </Tabs>
      </div>
    </>
  );
}

export default HomeScreen;
