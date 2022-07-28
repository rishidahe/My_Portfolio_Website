import React from "react";
import Rishikesh from "../assets/rishi.jpg";
import India from "../assets/india (1).png";

function Title(props) {
  // const name = "Rishikesh Dahe.";
  // const leadText = "I am a Software Developer from INDIA";
  const { name, leadText } = props;
  return (
    <div className="container">
      <div className="row text-center align-items-center my-5 py-5">
        <div className="col-12 col-md-6">
          <img
            className="img-fluid rounded-circle w-75"
            src={Rishikesh}
            alt="Rishikesh_Dahe"
          />
        </div>
        <div className="col-12 col-md-6">
          <div className="font-weight-light" style={{ fontSize: "50px" }}>
            Hi, I am <span className="text-info">{name}</span>
          </div>
          <h4 className="font-weight-light">
            {leadText}
            <img
              className="mb-2 ml-1"
              src={India}
              alt="INDIA"
              width="30"
              height="30"
            />
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Title;
