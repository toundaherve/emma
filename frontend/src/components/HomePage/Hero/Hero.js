import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero">
      <div className="masthead">
        <div className="masthead-container">
          <picture>
            {/*<!--[if IE 9]>*/}
            <video style={{ display: "none" }}>
              {/*<![endif]--></video>*/}
              <source
                media="(max-width: 479px)"
                srcSet="https://images.prismic.io/brinker-chilis/332f213b-0908-4491-84da-38da77c2f269_Chili%27s+To+Go+at+home+1.jpg?auto=compress,format&amp;rect=216,0,768,800&amp;w=480&amp;h=500"
              />
              {/*<!--[if IE 9]>*/}
            </video>
            {/*<![endif]--> */}
            <img
              className="background-image-blur image-cover masthead-image b-lazy unblur b-loaded"
              alt="Chili's To Go "
              src="https://images.prismic.io/brinker-chilis/332f213b-0908-4491-84da-38da77c2f269_Chili%27s+To+Go+at+home+1.jpg?auto=compress,format&amp;rect=0,208,1200,384&amp;w=1600&amp;h=512"
            />
          </picture>
          <div className="banner-content hero-content bg-overlay-light">
            <h1
              className="headline-container headline-container-hero center"
              style={{ color: "#F5E9DA" }}
            >
              <span className="subheader top header-shadow">
                Fresh and Homemade
              </span>
              <span className="header header-shadow">Cameroonian food</span>
              <span className="subheader header-shadow">Pickup - Delivery</span>
            </h1>
            <div className="btn-container cta-component center">
              <Link to="/menu" id="home-hero-button-1" className="btn">
                Start Order
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
