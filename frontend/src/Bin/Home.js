import React from "react";
import Header from "./Header";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "./Home.css";
import image1 from "../src/img/1.jpg";
import image2 from "../src/img/2.jpg";
import icon1 from "../src/img/iplace.png";
import icon2 from "../src/img/iprofessional.png";
import icon3 from "../src/img/ilosses.png";
import icon4 from "../src/img/iclock.png";
import icon5 from "../src/img/ipremium.png";
import icon6 from "../src/img/iguarantee.png";
import Footer from "./Footer.js"

const slider = (
  <AwesomeSlider className="aws-btn">
    <div>
      <img src={image1} alt="Cover 1" />
    </div>
    <div>
      <img src={image2} alt="Cover 2" />
    </div>
  </AwesomeSlider>
);

function Home() {
  return (
    <>
      <div>
        <Header />
      </div>
      <div>{slider}</div>
      <div className="why">
        <h1 className="align-center trust">Why trust Us</h1>
        <h4 className="align-center">
          "Trust cements relationships by allowing people to live and work
          together, feel safe and belong to a group"
        </h4>
        <div>
          <div className="gridContainerHome firstSectionComponentsHome">
            <ul className="gridItemHome">
              <li className="listComponentHome">
                <div>
                  <img className="icon" src={icon1} alt="Cover 2" />
                  <p className="line">Trained Professionals</p>
                </div>
              </li>
              <li className="listComponentHome">
                <div>
                  <img className="icon" src={icon2} alt="Cover 2" />
                  <p className="line">Trained Professionals</p>
                </div>
              </li>
              <li className="listComponentHome">
                <div>
                  <img className="icon" src={icon3} alt="Cover 2" />
                  <p className="line">Trained Professionals</p>
                </div>
              </li>
              </ul>
              <ul className="gridItemHome">
              <li className="listComponentHome">
                <div>
                  <img className="icon" src={icon4} alt="Cover 2" />
                  <p className="line">Trained Professionals</p>
                </div>
              </li>
              <li className="listComponentHome">
                <div>
                  <img className="icon" src={icon5} alt="Cover 2" />
                  <p className="line">Trained Professionals</p>
                </div>
              </li>
              <li className="listComponentHome">
                <div>
                  <img className="icon" src={icon6} alt="Cover 2" />
                  <p className="line">Trained Professionals</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
