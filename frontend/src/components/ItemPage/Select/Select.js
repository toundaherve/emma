import React from "react";

const Select = () => {
  return (
    <div className="location-search-results-container">
      <select
        className="form-control location-search-results animated fadeIn js-location-search-results"
        id="store-number"
        name="storeNumber"
        title="Select a Chili's Location"
        data-parsley-required-message="Please enter a City, State or ZIP code and select a location"
        required="required"
        style="display: inline-block;"
      >
        <option value="" data-default="true">
          --Select a Chili's Location--
        </option>
        <option
          data-web-enabled="true"
          data-loyalty-mca="true"
          data-loyalty-plenti="undefined"
          data-name="Secaucus"
          data-crossstreettext="Secaucus - To Go and Delivery only"
          data-phone="(201) 319-0804"
          data-zipcode="07094"
          data-state="NJ"
          data-delivery-enabled="true"
          value="001.005.1158"
        >
          Secaucus - To Go and Delivery only - 700 Plaza Dr., Secaucus, NJ 07094
        </option>
        <option
          data-web-enabled="true"
          data-loyalty-mca="true"
          data-loyalty-plenti="undefined"
          data-name="Cooper Ave."
          data-crossstreettext="Cooper Ave. - To Go and Delivery only"
          data-phone="(718) 366-4272"
          data-zipcode="11385"
          data-state="NY"
          data-delivery-enabled="true"
          value="001.005.1138"
        >
          Cooper Ave. - To Go and Delivery only - 80-16 Cooper Avenue, Glendale,
          NY 11385
        </option>
        <option
          data-web-enabled="true"
          data-loyalty-mca="true"
          data-loyalty-plenti="undefined"
          data-name="East Rutherford"
          data-crossstreettext="East Rutherford - To Go and Delivery only"
          data-phone="(201) 438-4150"
          data-zipcode="07073"
          data-state="NJ"
          data-delivery-enabled="true"
          value="001.005.1089"
        >
          East Rutherford - To Go and Delivery only - 140 Route 17, East
          Rutherford, NJ 07073
        </option>
        <option
          data-web-enabled="true"
          data-loyalty-mca="true"
          data-loyalty-plenti="undefined"
          data-name="Staten Island"
          data-crossstreettext="Staten Island - To Go and Delivery only"
          data-phone="(718) 697-0883"
          data-zipcode="10314"
          data-state="NY"
          data-delivery-enabled="true"
          value="001.005.0727"
        >
          Staten Island - To Go and Delivery only - 1497 Richmond Avenue, Staten
          Island, NY 10314
        </option>
        <option
          data-web-enabled="true"
          data-loyalty-mca="true"
          data-loyalty-plenti="undefined"
          data-name="Paramus"
          data-crossstreettext="Paramus - To Go and Delivery only"
          data-phone="(201) 226-0600"
          data-zipcode="07652"
          data-state="NJ"
          data-delivery-enabled="true"
          value="001.005.0535"
        >
          Paramus - To Go and Delivery only - 75 S State Rt 17, Paramus, NJ
          07652
        </option>
        <option
          data-web-enabled="true"
          data-loyalty-mca="true"
          data-loyalty-plenti="undefined"
          data-name="Little Falls"
          data-crossstreettext="Little Falls - To Go and Delivery only"
          data-phone="(973) 785-0005"
          data-zipcode="07424"
          data-state="NJ"
          data-delivery-enabled="true"
          value="001.005.0236"
        >
          Little Falls - To Go and Delivery only - 1165 Rt. 46 E., Little Falls,
          NJ 07424
        </option>
        <option
          data-web-enabled="true"
          data-loyalty-mca="true"
          data-loyalty-plenti="undefined"
          data-name="Clark"
          data-crossstreettext="Clark - To Go and Delivery only"
          data-phone="(732) 815-0600"
          data-zipcode="07066"
          data-state="NJ"
          data-delivery-enabled="true"
          value="001.005.0615"
        >
          Clark - To Go and Delivery only - 225 Central Ave., Clark, NJ 07066
        </option>
        <option
          data-web-enabled="true"
          data-loyalty-mca="true"
          data-loyalty-plenti="undefined"
          data-name="Edison"
          data-crossstreettext="Edison - To Go and Delivery only"
          data-phone="(732) 906-9112"
          data-zipcode="08820"
          data-state="NJ"
          data-delivery-enabled="true"
          value="001.005.0221"
        >
          Edison - To Go and Delivery only - 1655 Oaktree Rd., Edison, NJ 08820
        </option>
        <option
          data-web-enabled="true"
          data-loyalty-mca="true"
          data-loyalty-plenti="undefined"
          data-name="E. Hanover"
          data-crossstreettext="E. Hanover - To Go and Delivery only"
          data-phone="(973) 884-3565"
          data-zipcode="07936"
          data-state="NJ"
          data-delivery-enabled="true"
          value="001.005.0354"
        >
          E. Hanover - To Go and Delivery only - 138 State Route 10 Ste 1, East
          Hanover, NJ 07936
        </option>
        <option
          data-web-enabled="true"
          data-loyalty-mca="true"
          data-loyalty-plenti="undefined"
          data-name="Westbury"
          data-crossstreettext="Westbury"
          data-phone="(516) 222-7001"
          data-zipcode="11590"
          data-state="NY"
          data-delivery-enabled="true"
          value="001.005.0451"
        >
          Westbury - 1205 Corporate Dr., Westbury, NY 11590
        </option>
      </select>
      <div className="location-search-results-errors js-location-search-results-errors"></div>
    </div>
  );
};

export default Select;
