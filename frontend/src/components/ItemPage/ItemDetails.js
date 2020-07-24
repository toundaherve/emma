import React from "react";

const ItemDetails = () => {
  return (
    <div id="pattern-library-item-detail" className="row">
      <div class="col6 detail-image-col">
        <div class="detail-image">
          <img
            alt="Queso Burger*"
            src="https://static.olocdn.net/menu/chilis/256be45b60d5065fb021093417373988.jpg"
            title="Queso Burger*"
            data-pagespeed-url-hash="3442366608"
            onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
          />
        </div>
      </div>
      <div class="col6 detail-info-col">
        <div
          class="breadcrumbs row"
          itemscope=""
          itemtype="http://schema.org/BreadcrumbList"
        >
          <div class="col12">
            <span
              itemprop="itemListElement"
              itemscope=""
              itemtype="http://schema.org/ListItem"
            >
              <span
                itemscope=""
                itemtype="http://schema.org/Thing"
                itemprop="item"
              >
                <a href="/menu" itemprop="name" content="Menu">
                  Menu
                </a>
                <meta itemprop="url" content="/menu" />
              </span>
              <meta itemprop="position" content="1" />
            </span>
            <span class="arrow">›</span>
            <span
              itemprop="itemListElement"
              itemscope=""
              itemtype="http://schema.org/ListItem"
            >
              <span
                itemscope=""
                itemtype="http://schema.org/Thing"
                itemprop="item"
              >
                <a
                  href="/menu/big-mouth-burgers"
                  itemprop="name"
                  content="Big Mouth Burgers®"
                >
                  Big Mouth Burgers®
                </a>
                <meta itemprop="url" content="/menu/big-mouth-burgers" />
              </span>
              <meta itemprop="position" content="2" />
            </span>
            <span class="arrow">›</span>
            <span
              itemprop="itemListElement"
              itemscope=""
              itemtype="http://schema.org/ListItem"
            >
              <span
                itemscope=""
                itemtype="http://schema.org/Thing"
                itemprop="item"
              >
                <strong itemprop="name">Queso Burger*</strong>
                <meta
                  itemprop="url"
                  content="/menu/big-mouth-burgers/queso-burger"
                />
              </span>
              <meta itemprop="position" content="3" />
            </span>
          </div>
        </div>
        <h1 class="detail-title">Queso Burger*</h1>
        <div class="detail-description">
          <span>
            Say “cheese!” This half-pound patty comes smothered in white queso,
            crunchy tortilla strips &amp; pico.
          </span>
        </div>
        <input id="customize-item-flag" type="hidden" value="false" />
      </div>

      <div class="col6 detail-spacer-col"></div>

      <div class="col6 detail-restaurant-select-col">
        <form id="select-locations-form" class="restaurant-selection-form">
          <label>Order at your Chili's</label>
          <div class="row">
            <div class="col12 location-search-form-container">
              <div class="row">
                <div class="col12 search-text-field-container">
                  <div class="form-group">
                    <div class="input-group">
                      <span
                        class="algolia-autocomplete"
                        style={{
                          position: "relative",
                          display: "table-cell",
                          direction: "ltr",
                        }}
                      >
                        <input
                          class="form-control location-search-input js-location-search-input aa-hint"
                          type="search"
                          title="Enter a City, State or ZIP and search for a Chili's near you!"
                          data-parsley-errors-messages-disabled="true"
                          readonly=""
                          aria-hidden="true"
                          autocomplete="off"
                          spellcheck="false"
                          tabindex="-1"
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
                          class="form-control location-search-input js-location-search-input aa-input"
                          name="query"
                          type="search"
                          title="Enter a City, State or ZIP and search for a Chili's near you!"
                          data-parsley-errors-messages-disabled="true"
                          placeholder="Search by City, State, ZIP OR Delivery Address"
                          required="required"
                          autocomplete="off"
                          spellcheck="false"
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
                          class="aa-dropdown-menu"
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
                          <div class="aa-dataset-1"></div>
                        </span>
                      </span>

                      <span class="input-group-btn">
                        <button
                          id="button-location-query"
                          class="btn search-button-query input-group-btn-inline disabled-fake js-location-search-submit"
                          title="Search"
                          type="submit"
                          validate="true"
                          aria-label="Search"
                        >
                          <span class="icon-search-location"></span>
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row js-geolocate-row">
                <div class="col12 center geolocate-col">
                  <div class="or-text">- or -</div>
                  <button
                    id="button-location-geolocate"
                    class="btn disabled-fake search-button-geolocate js-geolocate"
                  >
                    <span>Use</span> <span class="hide-xxs">My</span>
                    <span class="text-before-icon">Current Location</span>
                    <span class="icon-current-location"></span>
                  </button>
                </div>
              </div>
              <div class="row">
                <div class="col12">
                  <div
                    id="location-search-form-errors"
                    class="search-errors"
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div class="location-search-results-container">
            <select
              class="form-control location-search-results animated fadeIn js-location-search-results"
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
            <div class="location-search-results-errors js-location-search-results-errors"></div>
          </div>
          <input class="js-location-lat" type="hidden" />

          <input class="js-location-lng" type="hidden" />

          <input class="js-location-address" type="hidden" />

          <input class="js-location-address2" type="hidden" />

          <input class="js-location-state" type="hidden" />

          <input class="js-location-city" type="hidden" />

          <input class="js-location-zipcode" type="hidden" />
          <div
            class="location-not-enabled js-location-not-enabled"
            style={{ display: "none" }}
            data-call-default="Please call to place an order at this location."
            data-call-template="Please call <a href='tel:{0}'>{1}</a> to place an order at this location."
          ></div>
          <button
            class="btn select-location-btn js-select-location-btn animated fadeIn"
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
