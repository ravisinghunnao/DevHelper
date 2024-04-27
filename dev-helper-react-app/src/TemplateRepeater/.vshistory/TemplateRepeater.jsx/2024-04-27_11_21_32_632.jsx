import "./TemplateRepeater.css";
import React from "react";

function template() {
  return (
    <div className="container">
          <h1>TemplateRepeater</h1>
          <div className="row">
              <div className="col-md-3">
                  <textarea className="form-control" rows="10"></textarea>
                  <textarea className="form-control" rows="10"></textarea>
              </div>
              <div className="col-md-9">
                  <button className="btn btn-danger">Button</button>
              </div>
          </div>
    </div>
  );
};

export default template;
