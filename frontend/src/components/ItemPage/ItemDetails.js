import React from "react";

const ItemDetails = () => {
  return (
    <div id="pattern-library-item-detail" className="row">
      <div className="col6 detail-image-col">
        <div className="detail-image">
          <img
            alt="Queso Burger*"
            src="https://static.olocdn.net/menu/chilis/256be45b60d5065fb021093417373988.jpg"
            title="Queso Burger*"
            data-pagespeed-url-hash="3442366608"
            // onLoad="pagespeed.CriticalImages.checkImageForCriticality(this);"
          />
        </div>
      </div>
      <div className="col6 detail-info-col">
        <div
          className="breadcrumbs row"
          itemScope=""
          itemType="http://schema.org/BreadcrumbList"
        >
          <div className="col12">
            <span
              itemProp="itemListElement"
              itemScope=""
              itemType="http://schema.org/ListItem"
            >
              <span
                itemScope=""
                itemType="http://schema.org/Thing"
                itemProp="item"
              >
                <a href="/menu" itemProp="name" content="Menu">
                  Menu
                </a>
                <meta itemProp="url" content="/menu" />
              </span>
              <meta itemProp="position" content="1" />
            </span>
            <span className="arrow">›</span>
            <span
              itemProp="itemListElement"
              itemScope=""
              itemType="http://schema.org/ListItem"
            >
              <span
                itemScope=""
                itemType="http://schema.org/Thing"
                itemProp="item"
              >
                <a
                  href="/menu/big-mouth-burgers"
                  itemProp="name"
                  content="Big Mouth Burgers®"
                >
                  Big Mouth Burgers®
                </a>
                <meta itemProp="url" content="/menu/big-mouth-burgers" />
              </span>
              <meta itemProp="position" content="2" />
            </span>
            <span className="arrow">›</span>
            <span
              itemProp="itemListElement"
              itemScope=""
              itemType="http://schema.org/ListItem"
            >
              <span
                itemScope=""
                itemType="http://schema.org/Thing"
                itemProp="item"
              >
                <strong itemProp="name">Ndolè Poisson Braisé</strong>
                <meta
                  itemProp="url"
                  content="/menu/big-mouth-burgers/queso-burger"
                />
              </span>
              <meta itemProp="position" content="3" />
            </span>
          </div>
        </div>
        <h1 className="detail-title">Ndolè Poisson Braisé</h1>
        <div className="detail-description">
          <span>
            Say “cheese!” This half-pound patty comes smothered in white queso,
            crunchy tortilla strips &amp; pico.
          </span>
        </div>
        <input id="customize-item-flag" type="hidden" value="false" />
      </div>

      <div className="col6 detail-spacer-col"></div>

      <div className="col6 detail-restaurant-select-col">
        <form id="select-locations-form" className="restaurant-selection-form">
          <label>Order at your Chili's</label>
          <div className="row">
            <div className="col12 location-search-form-container">
              <div className="row">
                <div className="col12 search-text-field-container">
                  <div className="form-group">
                    <div className="input-group">
                      <span
                        className="algolia-autocomplete"
                        style={{
                          position: "relative",
                          display: "table-cell",
                          direction: "ltr",
                        }}
                      >
                        <input
                          className="form-control location-search-input js-location-search-input aa-hint"
                          type="search"
                          title="Enter a City, State or ZIP and search for a Chili's near you!"
                          data-parsley-errors-messages-disabled="true"
                          readOnly=""
                          aria-hidden="true"
                          autoComplete="off"
                          spellCheck="false"
                          tabIndex="-1"
                          style={{
                            position: "absolute",
                            top: "0px",
                            left: "0px",
                            borderColor: "transparent",
                            boxShadow: "none",
                            opacity: "1",
                            background:
                              "none 0% 0% / auto repeat scroll padding-box border-box rgb(255, 255, 255)",
                          }}
                        />
                        <input
                          id="location-search"
                          className="form-control location-search-input js-location-search-input aa-input"
                          name="query"
                          type="search"
                          title="Enter a City, State or ZIP and search for a Chili's near you!"
                          data-parsley-errors-messages-disabled="true"
                          placeholder="Search by City, State, ZIP OR Delivery Address"
                          required="required"
                          autoComplete="off"
                          spellCheck="false"
                          role="combobox"
                          aria-autocomplete="both"
                          aria-expanded="false"
                          aria-owns="algolia-autocomplete-listbox-0"
                          dir="auto"
                          style={{
                            position: "relative",
                            verticalAlign: "top",
                            backgroundColor: "transparent",
                          }}
                        />
                        <pre
                          aria-hidden="true"
                          style={{
                            position: "absolute",
                            visibility: "hidden",
                            whiteSpace: "pre",
                            fontFamily: "Barlow Condensed, sans-serif",
                            fontSize: "16px",
                            fontStyle: "normal",
                            fontVariant: "normal",
                            fontWeight: "400",
                            wordSpacing: "0px",
                            letterSpacing: "0px",
                            textIndent: "0px",
                            textRendering: "auto",
                            textTransform: "none",
                          }}
                        ></pre>
                        <span
                          className="aa-dropdown-menu"
                          role="listbox"
                          id="algolia-autocomplete-listbox-0"
                          style={{
                            position: "absolute",
                            top: "100%",
                            left: "0px",
                            zIndex: "100",
                            display: "none",
                            right: "auto",
                          }}
                        >
                          <div className="aa-dataset-1"></div>
                        </span>
                      </span>

                      <span className="input-group-btn">
                        <button
                          id="button-location-query"
                          className="btn search-button-query input-group-btn-inline disabled-fake js-location-search-submit"
                          title="Search"
                          type="submit"
                          validate="true"
                          aria-label="Search"
                        >
                          <span className="icon-search-location"></span>
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row js-geolocate-row">
                <div className="col12 center geolocate-col">
                  <div className="or-text">- or -</div>
                  <button
                    id="button-location-geolocate"
                    className="btn disabled-fake search-button-geolocate js-geolocate"
                  >
                    <span>Use</span> <span className="hide-xxs">My</span>
                    <span className="text-before-icon">Current Location</span>
                    <span className="icon-current-location"></span>
                  </button>
                </div>
              </div>
              <div className="row">
                <div className="col12">
                  <div
                    id="location-search-form-errors"
                    className="search-errors"
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div className="location-search-results-container">
            <select
              className="form-control location-search-results animated fadeIn js-location-search-results"
              disabled="disabled"
              id="store-number"
              name="storeNumber"
              title="Select a Chili's Location"
              data-parsley-required-message="Please enter a City, State or ZIP code and select a location"
              required="required"
            >
              <option value="" data-default="true">
                --Select a Chili's Location--
              </option>
            </select>
            <div className="location-search-results-errors js-location-search-results-errors"></div>
          </div>
          <input className="js-location-lat" type="hidden" />

          <input className="js-location-lng" type="hidden" />

          <input className="js-location-address" type="hidden" />

          <input className="js-location-address2" type="hidden" />

          <input className="js-location-state" type="hidden" />

          <input className="js-location-city" type="hidden" />

          <input className="js-location-zipcode" type="hidden" />
          <div
            className="location-not-enabled js-location-not-enabled"
            style={{ display: "none" }}
            data-call-default="Please call to place an order at this location."
            data-call-template="Please call <a href='tel:{0}'>{1}</a> to place an order at this location."
          ></div>
          <button
            className="btn select-location-btn js-select-location-btn animated fadeIn"
            type="submit"
            data-categoryname="big-mouth-burgers"
            data-itemname="queso-burger"
            data-alt="Selecting Location…"
          >
            Select this Chili's
          </button>
        </form>
      </div>
    </div>
  );
};

export default ItemDetails;
