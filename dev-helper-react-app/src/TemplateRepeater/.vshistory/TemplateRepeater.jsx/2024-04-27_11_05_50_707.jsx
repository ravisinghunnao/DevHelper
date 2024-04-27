import "./TemplateRepeater.css";
import React from "react";

function template() {
  return (
    <div className="template-repeater">
          <h1>TemplateRepeater</h1>
          <div className="template-repeater-container">
              <div className="template-repeater-item">
                  <button className="btn btn-primary">Button</button>
              </div>
          </div>
    </div>
  );
};

export default template;
