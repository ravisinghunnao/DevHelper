import "./TemplateRepeater.css";
import React from "react";

function template() {
  return (
    <div className="container">
          <h1>TemplateRepeater</h1>
          <div className="row">
              <div className="col-md-3">
                  <button className="btn btn-primary">Button</button>
              </div>
              <div className="col-md-9">
                  <button className="btn btn-danger">Button</button>
              </div>
          </div>
    </div>
  );
};

export default template;
