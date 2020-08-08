import React from "react";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      className="section footer-classNameic context-dark bg-image"
      style={{ backgroundColor: "#2d3246" }}
    >
      <div className="container">
        <div className="row row-30">
          <div className="col-md-4 col-xl-5">
            <div className="pr-xl-4">
              <NavLink className="brand" to="index.html">
                <img
                  className="brand-logo-light"
                  src="images/agency/logo-inverse-140x37.png"
                  alt=""
                  width="140"
                  height="37"
                  srcSet="images/agency/logo-retina-inverse-280x74.png 2x"
                />
              </NavLink>
              <p>
                We are an award-winning creative agency, dedicated to the best
                result in web design, promotion, business consulting, and
                marketing.
              </p>
              <p className="rights">
                <span>©  </span>
                <span className="copyright-year">2018</span>
                <span> </span>
                <span>Waves</span>
                <span>. </span>
                <span>All Rights Reserved.</span>
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <h5>Contacts</h5>
            <dl className="contact-list">
              <dt>Address:</dt>
              <dd>798 South Park Avenue, Jaipur, Raj</dd>
            </dl>
            <dl className="contact-list">
              <dt>email:</dt>
              <dd>
                <NavLink to="mailto:#">dkstudioin@gmail.com</NavLink>
              </dd>
            </dl>
            <dl className="contact-list">
              <dt>phones:</dt>
              <dd>
                <NavLink to="tel:#">https://karosearch.com</NavLink>{" "}
                <span>or</span>{" "}
                <NavLink to="tel:#">https://karosearch.com</NavLink>
              </dd>
            </dl>
          </div>
          <div className="col-md-4 col-xl-3">
            <h5>Links</h5>
            <ul className="nav-list">
              <li>
                <NavLink to="#">About</NavLink>
              </li>
              <li>
                <NavLink to="#">Projects</NavLink>
              </li>
              <li>
                <NavLink to="#">Blog</NavLink>
              </li>
              <li>
                <NavLink to="#">Contacts</NavLink>
              </li>
              <li>
                <NavLink to="#">Pricing</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row no-gutters social-container">
        <div className="col">
          <NavLink className="social-inner" to="#">
            <span className="icon mdi mdi-facebook"></span>
            <span>Facebook</span>
          </NavLink>
        </div>
        <div className="col">
          <NavLink className="social-inner" to="#">
            <span className="icon mdi mdi-instagram"></span>
            <span>instagram</span>
          </NavLink>
        </div>
        <div className="col">
          <NavLink className="social-inner" to="#">
            <span className="icon mdi mdi-twitter"></span>
            <span>twitter</span>
          </NavLink>
        </div>
        <div className="col">
          <NavLink className="social-inner" to="#">
            <span className="icon mdi mdi-youtube-play"></span>
            <span>google</span>
          </NavLink>
        </div>
      </div>
    </footer>
  );
}
