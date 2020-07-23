import React from "react";

const CTABanner = () => {
  return (
    <div className="cta-banner">
      <div className="masthead">
        <div className="masthead-container masthead-cta-banner">
          <picture>
            {/*<!--[if IE 9]>*/}
            <video style={{ display: "none" }}>
              {/*<![endif]-->*/}
              <source
                media="(max-width: 479px)"
                srcSet="https://images.prismic.io/brinker-chilis/f9b6be32-961d-4e09-aca3-4eafecebce5f_10.17-Chilis-401.jpg?auto=compress,format&amp;rect=301,0,897,934&amp;w=480&amp;h=500"
              />
              {/*<!--[if IE 9]>*/}
            </video>
            {/*<![endif]--> */}
            <img
              className="background-image-blur image-cover masthead-image b-lazy unblur b-loaded"
              alt="Chili's now offer delivery through DoorDash &amp; Chilis.com"
              src="https://images.prismic.io/brinker-chilis/70bbba64-ecc9-44b2-a3d3-a450918137b6_10.17-Chilis-407.jpg?auto=compress,format&amp;rect=0,84,1400,448&amp;w=1600&amp;h=512"
            />
          </picture>
          <div className="banner-content cta-banner-content bg-overlay-light">
            <div className="body-section">
              <h2 className="cta-title">
                Get your Chili's favorites in a way that works for you.
              </h2>
              <p className="cta-description">
                Our To Go menu is available for Delivery, Curbside and Pickup.
              </p>
            </div>
            <div className="btn-container center cta-component">
              <a className="btn" id="home-7-button-1" href="/delivery">
                Learn about Delivery
              </a>
              <a className="btn inverse" id="home-7-button-2" href="/curbside">
                Learn about Curbside
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTABanner;
