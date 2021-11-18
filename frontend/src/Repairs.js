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

function Repairs() {
  const [data,setData] = React.useState([]);
  React.useEffect((e) => {
    getData();
  },[]);

  const getData = async () => {
    await axios
      .get("http://localhost:5000/api/brand/getBrands")
    .then((response) => {

      setData(response.data.brands);
    })
    .catch((error) => {
      console.log(error);
    });
  }
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
          <span className="header"><img src="https://mobihubrepairs.com/wp-content/uploads/2021/07/New-Logo-PNG-01.png" style={{ width: "400px" }} /></span>
          <div className="firstSectionComponents">
            <span className="firstSectionHeading">
            Any device. Anywhere. Any Time.
            </span>
            <ul className="gridItem">
              <li className="listComponent">
                <FaBookmark className="bookmarkicon" />
                <p>Guranteed Satisfaction</p>
              </li>
              <li className="listComponent">
                <FaBookmark className="bookmarkicon" />
                <p>Expert Technicians</p>
              </li>
              <li className="listComponent">
                <FaBookmark className="bookmarkicon" />
                <p>Certified Grades</p>
              </li>
            </ul>
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
            Mobihub aims to provide the perfect balance between cost and customer satisfaction.
            </p>
          </div>
        </div>
        <div className="yellowBox">
          <FaBookmark className="yellowLogo" />
          <div className="yellowText">
            <p className="yellowHead">Trained Experts</p>
            <p className="yellowDesc">
            MobiHub utilizes a team of professional technicians, who know the best way to fix your device. 
            </p>
          </div>
        </div>
        <div className="yellowBox">
          <FaBookmark className="yellowLogo" />
          <div className="yellowText">
            <p className="yellowHead">Time Efficient</p>
            <p className="yellowDesc">
            In a hurry? Get your device fixed within 24 hours! Lightning fast service, at the best prices!
            </p>
          </div>
        </div>
        <div className="yellowBox">
          <FaBookmark className="yellowLogo" />
          <div className="yellowText">
            <p className="yellowHead">Premium Service</p>
            <p className="yellowDesc">
            Our representatives are trained to provide the best customer service possible! Feel right at home, as our team listens to your issues, and provides the best solution possible!
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
