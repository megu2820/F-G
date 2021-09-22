import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "./Form.js";
import TABLE from "./Table.js";
function Tabs(props) {
  const [toggleState, setToggleState] = useState(1);


  const toggleTab = (index) => {
    setToggleState(index);
  };
  const addDataHandler = (userinput) => {
    props.addData(userinput);
  };

  return (
    <div className="container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Form
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => {
            toggleTab(2)}}
        >
          Table
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <h2>Aromatic Bar</h2>
          <small>
            We are Commited to provide you with the best dining experience
            possible,so we welcome your comments. Please fill out this
            questionnaire.Thank You!
          </small>
          <Form addDataHandler={addDataHandler} />
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <h2>All Feedback</h2>
          <TABLE />
        </div>
      </div>
    </div>
  );
}

export default Tabs;
