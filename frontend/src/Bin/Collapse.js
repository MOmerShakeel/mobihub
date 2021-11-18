import React, { useState } from "react";
import { useHistory } from "react-router";
import { render } from "sass";
import "./Collapse.css";
import axios from "axios";

const list = [
  { item: "Screen Break" },
  { item: "Battery Not Responding" },
  { item: "Charging Port" },
  { item: "Body Dent" },
  { item: "Camera Shattered" },
  { item: "Screen Shatter" },
  { item: "Battery Not Working" },
  { item: "Other(Mention below)" },
];

const Collapse = (props) => {
  const history = useHistory();
  const all = props.data;
  console.log(all);
  const [brand, setBrand] = useState("");
  const [phone, setPhone] = useState("");
  const [problem, setProblem] = useState([]);
  const [problemStatement, setProblemStatement] = useState("");
  const [optionalProblem, setOptionalProblem] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");

  React.useEffect(() => {
    renderList();
  }, [problem]);
  const renderBrands = () => {
    return all.map((value) => {
      if (value.name === brand) {
        return (
          <div
            onClick={() => {
              setBrand(value.name);
            }}
            style={{
              cursor: "pointer",
              border: "5px solid #FFC700",
              minHeight: "150px",
              maxHeight: "150px",
              minWidth: "150px",
              maxWidth: "150px",
              backgroundPosition: "center",
              backgroundImage: `url(${value.brandImage})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
            className="main_content"
          ></div>
        );
      } else {
        return (
          <div
            onClick={() => {
              setBrand(value.name);
            }}
            style={{
              cursor: "pointer",
              minHeight: "150px",
              maxHeight: "150px",
              minWidth: "150px",
              maxWidth: "150px",
              border: "1px groove grey",
              backgroundImage: `url(${value.brandImage})`,
              backgroundPosition: "center",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
            className="main_content"
          ></div>
        );
      }
    });
  };
  let data = [];

  const renderPhonesWhole = () => {
    if (brand === "")
      return (
        <>
          <h1>Please select a brand above</h1>
        </>
      );
    else
      return (
        <>
          <h1>Select Your Phone Model</h1>
          <div className="phoneBox">{renderPhones()}</div>
        </>
      );
  };
  const renderPhones = () => {
    data = all.filter((item) => brand.includes(item.name));
    return data[0].phone.map((value) => {
      if (value.phoneName !== phone) {
        return (
          <>
            <div className="phoneBox">
              <div className="container">
                <div
                  onClick={() => {
                    setPhone(value.phoneName);
                  }}
                  className="phones"
                  style={{
                    cursor: "pointer",
                    width: "250px",
                    height: "300px",
                    backgroundImage: `url(${value.phoneImage})`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
                <p className="phonetext">{value.phoneName}</p>
              </div>
            </div>
          </>
        );
      } else if (value.phoneName === phone) {
        return (
          <>
            <div className="phoneBox">
              <div
                className="container"
                style={{ border: "5px solid #FFC700" }}
              >
                <div
                  onClick={() => {
                    setPhone(value.phoneName);
                  }}
                  className="phones"
                  style={{
                    cursor: "pointer",
                    width: "250px",
                    height: "300px",
                    backgroundImage: `url(${value.phoneImage})`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
                <p className="phonetext">{value.phoneName}</p>
              </div>
            </div>
          </>
        );
      }
    });
  };

  const addToProblem = (input) => {
    if (problem.indexOf(input) === -1) {
      problem.push(input);
      setProblemStatement(input + " & " + problemStatement);
    } else {
      problem.pop(input);
      let temp = "";
      for (var i = 0; i < problem.length; i++) {
        temp = temp + problem[i] + " & ";
      }
      setProblemStatement(temp);
    }
  };
  const renderList = () => {
    return list.map((value) => {
      if (!problemStatement.includes(value.item))
        return (
          <div
            className="listBox"
            onClick={() => {
              addToProblem(value.item);
            }}
          >
            {value.item}
          </div>
        );
      else
        return (
          <div
            className="selectedListBox"
            onClick={() => {
              addToProblem(value.item);
            }}
          >
            {value.item}
          </div>
        );
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const collection = {
      "brand": brand,
      "model": phone,
      "problem": problem,
      "name": name,
      "address": address,
      "contact": contact,
      "optional": optionalProblem,
    };
    console.log(collection);
    // const { brand, phone, problem, name, address, contact, optionalProblem } =
    //   collection;

    await axios
      .post("http://localhost:5000/api/contact/submit", collection)
      .then(function (response) {
        console.log(response);
        console.log("Success");
        alert("Sumitted. We will reach out to you shortly")
        setAddress("")
        setBrand("")
        setContact("")
        setName("")
        setOptionalProblem("")
        setPhone("")
        setProblem([])
        setProblemStatement("")
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="catBox">
        <h1>Select Your Brand</h1>
        <div className="phoneBox">{renderBrands()}</div>
      </div>
      <div className="catBox">{renderPhonesWhole()}</div>
      <div className="catBox">
        <h1>What problem are you facing?</h1>
        <div className="phoneBox">{renderList()}</div>
      </div>
      <div className="catBox">
        <h1>Contact Information</h1>
        <input
          type="text"
          className="inputBox"
          placeholder="Full Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="text"
          className="inputBox"
          placeholder="Full Address"
          value={address}
          onChange={(e) => {
            setAddress(e.target.value);
          }}
        />
        <input
          type="text"
          className="inputBox"
          placeholder="Contact number or Email"
          value={contact}
          onChange={(e) => {
            setContact(e.target.value);
          }}
        />
        <input
          type="text"
          className="inputBox"
          placeholder="Describe your problem(Optional)"
          value={optionalProblem}
          onChange={(e) => {
            setOptionalProblem(e.target.value);
          }}
        />
        <button
          type="submit"
          className="submit"
          onClick={(e) => {
            handleSubmit(e);
          }}
        >
          {" "}
          Submit{" "}
        </button>
      </div>
    </div>
  );
};

export default Collapse;
