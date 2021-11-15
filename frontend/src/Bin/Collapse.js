import React, { useState } from "react";
import { render } from "sass";
import "./Collapse.css";

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
  const all = props.data;
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
              border: "5px solid #FECB12",
              minHeight: "150px",
              maxHeight: "150px",
              minWidth: "150px",
              maxWidth: "150px",
              backgroundPosition: "center",
              backgroundImage: `url(${value.thumb})`,
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
              backgroundImage: `url(${value.thumb})`,
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
    return data[0].phones.map((value) => {
      if (value.name !== phone) {
        return (
          <>
            <div className="phoneBox">
              <div className="container">
                <div
                  onClick={() => {
                    setPhone(value.name);
                  }}
                  className="phones"
                  style={{
                    cursor: "pointer",
                    width: "250px",
                    height: "300px",
                    backgroundImage: `url(${value.thumb})`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
                <p className="phonetext">{value.name}</p>
              </div>
            </div>
          </>
        );
      } else if (value.name === phone) {
        return (
          <>
            <div className="phoneBox">
              <div
                className="container"
                style={{ border: "5px solid #FECB12" }}
              >
                <div
                  onClick={() => {
                    setPhone(value.name);
                  }}
                  className="phones"
                  style={{
                    cursor: "pointer",
                    width: "250px",
                    height: "300px",
                    backgroundImage: `url(${value.thumb})`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
                <p className="phonetext">{value.name}</p>
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
  const handleSubmit = () => {
    const collection = {
      brand: brand,
      model: phone,
      problem: problem,
      name: name,
      address: address,
      contact: contact,
      optional: optionalProblem,
    };
    console.log(collection);
    alert(
      "Your request has been generated and recieved. We will get back to you shortly. Thank You."
    );
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
          onClick={() => {
            handleSubmit();
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
