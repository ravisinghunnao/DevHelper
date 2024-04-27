import "./TemplateRepeater.css";
import React from "react";

function template() {
    return (
        <div className="container">
            <h1>TemplateRepeater</h1>
            <div className="row">
                <div className="col-md-4">
                    <textarea className="form-control" rows="10"></textarea>
                    <div className="col-md-12 center">
                        <div className="btn-group btn-group-justified">
                            <button className="btn btn-small btn-primary">Remove Enter</button>
                            <button className="btn btn-small btn-primary">Convert To Title Case</button>
                            <button className="btn btn-small btn-primary">Remove Space</button>
                            <button className="btn btn-small btn-primary">Remove Special Charecters</button>
                        </div>
                    </div>
                    <textarea className="form-control" rows="10"></textarea>
                </div>
                <div className="col-md-8">
                    <textarea className="form-control" rows="20"></textarea>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 center">

                </div>
            </div>
        </div>
    );
};

export default template;
