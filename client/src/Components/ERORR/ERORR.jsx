import React from "react";

export default function ERORR() {
  return (
    <div className="error">
      <div className="error-code m-b-10 m-t-20">
        404 <i className="fa fa-warning"></i>
      </div>
      <h3 className="font-bold">We couldn't find the page..</h3>

      <div className="error-desc">
        Sorry, but the page you are looking for was either not found or does not
        exist. <br />
        Try refreshing the page or click the button below to go back to the
        Homepage.
        <div>
          <a
            className=" login-detail-panel-button btn"
            href="http://www.vmware.com/"
          >
            <i className="fa fa-arrow-left"></i>
            Go back to Homepage
          </a>
        </div>
      </div>
    </div>
  );
}
