import "./TemplateRepeater.css";
import React from "react";

function template() {
    return (
        <div className="container">
            <div className="row d-flex">
                <div className="col-md-4">
                    <textarea className="form-control" rows="7"></textarea>
                    <div className="col-md-12 center">
                        <div className="btn-group btn-group-justified">
                            <button className="btn btn-small btn-primary">Remove Enter</button>
                            <button className="btn btn-small btn-primary">Convert To Title Case</button>
                            <button className="btn btn-small btn-primary">Remove Space</button>
                            <button className="btn btn-small btn-primary">Remove Special Charecters</button>
                        </div>
                    </div>
                    <textarea className="form-control" rows="7"></textarea>
                </div>
                <div className="col-md-8 d-flex flex-fill">
                    <textarea className="form-control flex-fill" rows="15"></textarea>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 center">
                        <button className="btn btn-primary btn-large mr-2-custom">Generate Template</button>
                        <button className="btn btn-primary btn-large">Generate SQL View</button>
                    
                </div>
            </div>
        </div>
    );
};

export default template;
