import React from "react";
import "./Repairs.css";
import { FaSearch, FaBookmark } from "react-icons/fa";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import logo1 from "./img/noun_Price List_2515479.png";
import banner from "../src/img/banner.png";
import image1 from "./img/PngItem_5092260.png";
import image2 from "./img/PngItem_2105020.png";
import image3 from "./img/Daco_5495910.png";
import Collapse from "./Bin/Collapse";
// import data from "./data.json";
import axios from "axios";
const data = [];
function Repairs() {
  axios
    .get("http://localhost:5000/api/phone/getPhones")
    .then((response) => {
      console.log(response);
      data = response.data;
    })
    .catch((error) => {
      console.log(error);
    });
  const slider = (
    <AwesomeSlider className="aws-btn">
      <div className="coverOne">
        <div className="coverText">
          <div className="coverTextSpan">This is a text here</div>
        </div>
        <img src={image1} alt="Cover 1" className="coverImage" />
      </div>
      <div className="coverOne">
        <div className="coverText">
          <div className="coverTextSpan">This is a text here</div>
        </div>
        <img src={image2} alt="Cover 2" className="coverImage" />
      </div>
      <div className="coverOne">
        <div className="coverText">
          <div className="coverTextSpan">This is a text here</div>
        </div>
        <img src={image3} alt="Cover 3" className="coverImage" />
      </div>
    </AwesomeSlider>
  );
  return (
    <div className="body">
      <div className="top">
        <div className="firstsection">
          <span className="header">Mobihub Repairs</span>
          <div className="firstSectionComponents">
            <span className="firstSectionHeading">
              Get your phones repaired at your doorstep
            </span>
            <ul className="gridItem">
              <li className="listComponent">
                <FaBookmark className="bookmarkicon" />
                <p>Trained Professionals</p>
              </li>
              <li className="listComponent">
                <FaBookmark className="bookmarkicon" />
                <p>Doorstep Service</p>
              </li>
              <li className="listComponent">
                <FaBookmark className="bookmarkicon" />
                <p>6-months warranty</p>
              </li>
            </ul>

            <div>
              <input
                type="text"
                class="searchTerm"
                placeholder="Search for your phone..."
              />
              <button type="submit" class="searchButton">
                <i>
                  <FaSearch />
                </i>
              </button>
            </div>
          </div>
        </div>
        <div className="imageContainer">
          <img className="firstSectionImage" src={banner} alt="Side Bar"></img>
        </div>
      </div>
      <div className="containerYellowBoxes">
        <div className="yellowBox">
          <FaBookmark className="yellowLogo" />
          <div className="yellowText">
            <p className="yellowHead">Cost Friendly</p>
            <p className="yellowDesc">
              This is a dummy text.This is a dummy text. This is a dummy text.
              This is a dummy text. This is a dummy text. This is a dummy
              text.This is a dummy text. This is a dummy text. This is a dummy
              text. This is a dummy text.
            </p>
          </div>
        </div>
        <div className="yellowBox">
          <FaBookmark className="yellowLogo" />
          <div className="yellowText">
            <p className="yellowHead">Fully Authentic</p>
            <p className="yellowDesc">
              This is a dummy text.This is a dummy text. This is a dummy text.
              This is a dummy text. This is a dummy text. This is a dummy
              text.This is a dummy text. This is a dummy text. This is a dummy
              text. This is a dummy text.
            </p>
          </div>
        </div>
        <div className="yellowBox">
          <FaBookmark className="yellowLogo" />
          <div className="yellowText">
            <p className="yellowHead">Time Efficient</p>
            <p className="yellowDesc">
              This is a dummy text.This is a dummy text. This is a dummy text.
              This is a dummy text. This is a dummy text. This is a dummy
              text.This is a dummy text. This is a dummy text. This is a dummy
              text. This is a dummy text.
            </p>
          </div>
        </div>
        <div className="yellowBox">
          <FaBookmark className="yellowLogo" />
          <div className="yellowText">
            <p className="yellowHead">User Friendly</p>
            <p className="yellowDesc">
              This is a dummy text. This is a dummy text. This is a dummy text.
              This is a dummy text. This is a dummy text. This is a dummy
              text.This is a dummy text. This is a dummy text. This is a dummy
              text. This is a dummy text.
            </p>
          </div>
        </div>
      </div>
      <div>{slider}</div>
      <div>
        <div
          style={{
            marginTop: "150px",
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <span className="textInYellowHeader">LOREM IPSUM</span>
        </div>
        <div
          style={{ display: "flex", justifyContent: "center", margin: "20px" }}
        >
          <span className="textInYellow">
            This is a dummy text. This is a dummy text. This is a dummy text.
            This is a dummy text. This is a dummy text. This is a dummy text.
            This is a dummy text. This is a dummy text. This is a dummy text.
            This is a dummy text. This is a dummy text. This is a dummy text.{" "}
          </span>
        </div>
      </div>
      <div className="iconBox">
        <span className="iconHeader">LOREM IPSUM</span>
      </div>
      <div
        style={{
          margin: "30px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <FaBookmark className="icon" />
        <FaBookmark className="icon" />
        <FaBookmark className="icon" />
        <FaBookmark className="icon" />
        <FaBookmark className="icon" />
        <FaBookmark className="icon" />
      </div>
      <div className="iconBox2">
        <div>
          <span className="iconHeader2">LOREM IPSUM</span>
        </div>
        <div
          style={{
            margin: "30px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}
        >
          <div className="oneIcon2">
            <FaBookmark className="icon2" />
            <div className="textIcon2">
              <span>LOREM IPSUM</span>
              <p>This is a dummy text</p>
            </div>
          </div>
          <div className="oneIcon2">
            <FaBookmark className="icon2" />
            <div className="textIcon2">
              <span>LOREM IPSUM</span>
              <p>This is a dummy text</p>
            </div>
          </div>
          <div className="oneIcon2">
            <FaBookmark className="icon2" />
            <div className="textIcon2">
              <span>LOREM IPSUM</span>
              <p>This is a dummy text</p>
            </div>
          </div>
          <div className="oneIcon2">
            <FaBookmark className="icon2" />
            <div className="textIcon2">
              <span>LOREM IPSUM</span>
              <p>This is a dummy text</p>
            </div>
          </div>
          <div className="oneIcon2">
            <FaBookmark className="icon2" />
            <div className="textIcon2">
              <span>LOREM IPSUM</span>
              <p>This is a dummy text</p>
            </div>
          </div>
          <div className="oneIcon2">
            <FaBookmark className="icon2" />
            <div className="textIcon2">
              <span>LOREM IPSUM</span>
              <p>This is a dummy text</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Collapse data={data} />
      </div>
    </div>
  );
}

export default Repairs;
