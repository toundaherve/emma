import React from "react";
import PropTypes from "prop-types";

const Feature = ({ direction }) => {
  return (
    <div className={`featured-item grid-layout ${direction}`}>
      <div className="section-content image-content">
        <picture>
          {/*<!--[if IE 9]>*/}
          <video style={{ display: "none" }}>
            {/*<![endif]-->*/}
            <source
              media="(max-width: 479px)"
              srcSet="https://images.prismic.io/brinker-chilis/e7cbde66-69e8-4f99-84eb-9a8ef4eef766_CHI-21748_GCLandingPage_GCinBulk3.jpg?auto=compress,format&amp;rect=0,0,800,600&amp;w=480&amp;h=360"
            />
            <source
              media="(max-width: 991px)"
              srcSet="https://images.prismic.io/brinker-chilis/cad8a972-13e0-4677-94d4-294ad4df0778_CHI-21748_GCLandingPage_Mobile-Tablet_GCinBulk3.jpg?auto=compress,format&amp;rect=60,0,360,360&amp;w=496&amp;h=496"
            />
            {/*<!--[if IE 9]>*/}
          </video>
          {/*<![endif]-->*/}
          <img
            className="background-image-blur background-image-center b-lazy unblur b-loaded"
            alt="Chili's Gift Cards Buy in Bulk "
            src="https://images.prismic.io/brinker-chilis/e7cbde66-69e8-4f99-84eb-9a8ef4eef766_CHI-21748_GCLandingPage_GCinBulk3.jpg?auto=compress,format&amp;rect=0,0,800,600&amp;w=800&amp;h=600"
          />
        </picture>
      </div>
      <div className="section-content text-content">
        <div className="text-container">
          <h2>The gift that 'sizzles'</h2>
          <div
            className="featured-description-container"
            style={{ textAlign: "center" }}
          >
            <p>
              Purchase a Chili's gift card for every &amp; any occasion. Our
              e-gift cards are also a perfect way to send a 'thank you' or
              'thinking of you' note from afar.
            </p>
          </div>
          <div className="cta-component text-center">
            <a className="btn" id="home-2-button-1" href="/gift-cards">
              Buy Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

// Feature.propTypes = {
//   direction: PropTypes.oneOf(["left, right"]),
// };

export default Feature;
