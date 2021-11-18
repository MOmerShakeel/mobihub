import React from "react";
import "./Repairs.css";
import {
  FaBookmark,
  FaCommentsDollar,
  FaUserCheck,
  FaRegClock,
  FaRegThumbsUp,
} from "react-icons/fa";
import SkewedContainer from "sc-react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import cover from "./img/2.jpg";
import banner from "../src/img/banner.png";
import image1 from "./img/PngItem_5092260.png";
import image2 from "./img/PngItem_2105020.png";
import image3 from "./img/Daco_5495910.png";
import Collapse from "./Bin/Collapse";
// import data from "./data.json";
import axios from "axios";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Repairs() {
  const [data, setData] = React.useState([]);
  React.useEffect((e) => {
    getData();
    const left = document.querySelector(".left");
    const right = document.querySelector(".right");
    const container = document.querySelector(".container");

    left.addEventListener("mouseenter", () => {
      container.classList.add("hover-left");
    });

    left.addEventListener("mouseleave", () => {
      container.classList.remove("hover-left");
    });

    right.addEventListener("mouseenter", () => {
      container.classList.add("hover-right");
    });

    right.addEventListener("mouseleave", () => {
      container.classList.remove("hover-right");
    });
  }, []);

  const getData = async () => {
    await axios
      .get("http://localhost:5000/api/brand/getBrands")
      .then((response) => {
        setData(response.data.brands);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const slider = (
    <AwesomeSlider className="aws-btn">
      <div className="coverOne">
        <div className="coverText">
          <Link
            to={{
              pathname: "https://mobihubrepairs.com/product-category/iphone/",
            }}
            className="coverTextSpan"
            target="_blank"
          >
            <div className="coverTextHolder">Browse Phones</div>
          </Link>
        </div>
        <img src={image1} alt="Cover 1" className="coverImage" />
      </div>
      <div className="coverOne">
        <div className="coverText">
          <Link
            to={{
              pathname:
                "https://mobihubrepairs.com/product-category/accessories/",
            }}
            className="coverTextSpan"
            target="_blank"
          >
            <div className="coverTextHolder">Check out mobile accessories</div>
          </Link>
        </div>
        <img src={image2} alt="Cover 2" className="coverImage" />
      </div>
      <div className="coverOne">
        <div className="coverText">
          <Link
            to="/"
            onClick={() => {
              window.scrollTo(0, 3000);
            }}
            className="coverTextSpan"
          >
            <div className="coverTextHolder">
              Get an exact quote on your issues
            </div>
          </Link>
        </div>
        <img src={image3} alt="Cover 3" className="coverImage" />
      </div>
    </AwesomeSlider>
  );
  return (
    <div className="body">
      <div className="top">
        <div className="firstsection">
          <span className="header">
            <img
              src="https://mobihubrepairs.com/wp-content/uploads/2021/07/New-Logo-PNG-01.png"
              style={{ width: "400px" }}
            />
          </span>
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
          <FaCommentsDollar className="yellowLogo" />
          <div className="yellowText">
            <p className="yellowHead">Cost Friendly</p>
            <p className="yellowDesc">
              Mobihub aims to provide the perfect balance between cost and
              customer satisfaction.
            </p>
          </div>
        </div>
        <div className="yellowBox">
          <FaUserCheck className="yellowLogo" />
          <div className="yellowText">
            <p className="yellowHead">Trained Experts</p>
            <p className="yellowDesc">
              MobiHub utilizes a team of professional technicians, who know the
              best way to fix your device.
            </p>
          </div>
        </div>
        <div className="yellowBox">
          <FaRegClock className="yellowLogo" />
          <div className="yellowText">
            <p className="yellowHead">Time Efficient</p>
            <p className="yellowDesc">
              In a hurry? Get your device fixed within 24 hours! Lightning fast
              service, at the best prices!
            </p>
          </div>
        </div>
        <div className="yellowBox">
          <FaRegThumbsUp className="yellowLogo" />
          <div className="yellowText">
            <p className="yellowHead">Premium Service</p>
            <p className="yellowDesc">
              Our representatives are trained to provide the best customer
              service possible! Feel right at home, as our team listens to your
              issues, and provides the best solution possible!
            </p>
          </div>
        </div>
      </div>
      <div>{slider}</div>
      <div className="tagline">
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <span className="textInYellowHeader">3 Month Warranty</span>
        </div>
        <div
          style={{ display: "flex", justifyContent: "center", margin: "20px" }}
        >
          <span className="textInYellow">
            MOBIHUB offers users the premium feature of a three month warranty!
            In the unlikely case that your device malfunctions within three
            months of being repaired, contact our representative and get your
            device fixed again, completely free of charge!
          </span>
        </div>
      </div>
      <span className="iconHeader">What makes MOBIHUB the best</span>
      <div class="container">
        <div class="split left">
          <span className="skewheader1">GENUINE PARTS</span>
          <div class="button1">
          MOBIHUB uses only genuine spare parts and accessories for all phone
            repairs. Always choose the best service and parts available when
            getting your phone fixed!
          </div>
        </div>
        <div class="split right">
        <span className="skewheader2">PRIVACY PROTECTION</span>
          <div class="button2">
MOBIHUB guarantees 100% user privacy when dealing with their device’s data. Have peace of mind when you leave your precious device in our hands. 
          </div>
        </div>
      </div>

      {/* 
      
      
              <span className="iconHeader">What makes MOBIHUB the best</span>
        <div className="iconBox">
          <div className="content">
            MOBIHUB uses only genuine spare parts and accessories for all phone
            repairs. Always choose the best service and parts available when
            getting your phone fixed!
          </div>
          <SkewedContainer
            className=""
            top=""
            bottom="left"
            noMargin ="false"
            bgColor="yellow"
            skew="5"
            style={{margin:"50px"}}
          >
            <img src={cover} className="cover" />
          </SkewedContainer>
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
      </div> */}
      <div>
        <Collapse id="quote" data={data} />
      </div>
    </div>
  );
}

export default Repairs;
