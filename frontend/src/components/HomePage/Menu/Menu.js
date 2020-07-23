import React from "react";

const Menu = () => {
  return (
    <div class="container page-favorite">
      <div class="col12">
        <div class="page-title">
          <h1>Chili's Favorites</h1>
        </div>
      </div>
      <div
        id="chilis-favorite-carousel"
        class="owl-carousel animated fadeIn owl-theme"
        style={{ opacity: "1", display: "block" }}
      >
        <div class="owl-wrapper-outer">
          <div
            class="owl-wrapper"
            style={{ width: "4800px", left: "0px", display: "block" }}
          >
            <div class="owl-item" style={{ width: "400px" }}>
              <div class="guest-section" style={{ cursor: "pointer" }}>
                <div class="favorite-img">
                  <img
                    class="itemImg b-lazy b-loaded"
                    alt="My Chili's Rewards"
                    src="/images/google/xView-My-Favorites.jpg.pagespeed.ic.9AFPkLB4Pw.webp"
                  />
                </div>
                <div class="favorite-desc">
                  <div class="heading-tertiary heading-favorite">LOG IN</div>
                  <div class="outer-border">
                    <div class="inner-border">
                      <div class="extra-info">
                        <a>Log in</a> to your My Chili’s Rewards account to view
                        your favorites.
                      </div>
                    </div>
                  </div>
                </div>
                <div class="favorite-action">
                  <button
                    class="btn slim add-login-button"
                    data-add-default-btn="LOG IN"
                  >
                    LOG IN
                  </button>
                </div>
              </div>
            </div>
            <div class="owl-item" style={{ width: "400px" }}>
              <div class="favorite-item">
                <form
                  class="js-favorite-form favorite-form"
                  action="/chilis/favorites/add-favorites-to-cart"
                  method="post"
                >
                  <input
                    type="hidden"
                    name="_csrf"
                    value="73f74287-1fe2-4db7-ac06-be59789333fa"
                  />
                  <div class="favorite-img">
                    <input
                      id="item-name-P102596-0"
                      type="hidden"
                      name="chilisFavoriteProducts[0].name"
                      value="Oldtimer with Cheese"
                    />
                    <input
                      id="item-id-P102596-0"
                      type="hidden"
                      name="chilisFavoriteProducts[0].productMasterId"
                      value="P102596"
                    />
                    <input
                      id="item-alt-id-P102596-0"
                      type="hidden"
                      name="chilisFavoriteProducts[0].altProductMasterId"
                      value=""
                    />
                    <input
                      id="item-category-id-P102596-0"
                      type="hidden"
                      name="chilisFavoriteProducts[0].categoryMasterId"
                      value="C1004"
                    />
                    <img
                      class="itemImg b-lazy b-loaded"
                      alt="Oldtimer with Cheese"
                      src="https://images.prismic.io/brinker-chilis/e82db89d793cb44c0df27a29dcbbe218bf3acf51_oldtimerwithcheese.jpg?auto=compress,format"
                      title="Oldtimer with Cheese"
                    />
                  </div>
                  <div class="favorite-desc">
                    <div class="heading-tertiary heading-favorite">
                      Oldtimer with Cheese
                    </div>
                    <div class="outer-border">
                      <div class="inner-border">
                        <div class="extra-info">Beef Patty, No Pink, Fries</div>
                      </div>
                    </div>
                  </div>
                  <div class="favorite-action">
                    <button
                      id="P102596-0"
                      class="btn slim add-chilis-button"
                      href="#"
                      data-add-default-btn="Add to order"
                      data-added-to-cart-btn="Added To Cart"
                      data-unable-to-add-btn="Unable To Add "
                    >
                      Add to order
                    </button>
                    <input
                      type="hidden"
                      class="quantity"
                      value=""
                      id="chilisFavoriteProducts0.quantity"
                      name="chilisFavoriteProducts[0].quantity"
                    />
                  </div>
                </form>
              </div>
            </div>
            <div class="owl-item" style={{ width: "400px" }}>
              <div class="favorite-item">
                <form
                  class="js-favorite-form favorite-form"
                  action="/chilis/favorites/add-favorites-to-cart"
                  method="post"
                >
                  <input
                    type="hidden"
                    name="_csrf"
                    value="73f74287-1fe2-4db7-ac06-be59789333fa"
                  />
                  <div class="favorite-img">
                    <input
                      id="item-name-P100026-1"
                      type="hidden"
                      name="chilisFavoriteProducts[1].name"
                      value="Original Full Order Ribs"
                    />
                    <input
                      id="item-id-P100026-1"
                      type="hidden"
                      name="chilisFavoriteProducts[1].productMasterId"
                      value="P100026"
                    />
                    <input
                      id="item-alt-id-P100026-1"
                      type="hidden"
                      name="chilisFavoriteProducts[1].altProductMasterId"
                      value="P108134"
                    />
                    <input
                      id="item-category-id-P100026-1"
                      type="hidden"
                      name="chilisFavoriteProducts[1].categoryMasterId"
                      value="C1002"
                    />
                    <img
                      class="itemImg b-lazy b-loaded"
                      alt="Original Full Order Ribs"
                      src="https://images.prismic.io/brinker-chilis/c34229628023958343a3c99f37c6e58d8814b90a_originalfullorderribs.jpg?auto=compress,format"
                      title="Original Full Order Ribs"
                    />
                  </div>
                  <div class="favorite-desc">
                    <div class="heading-tertiary heading-favorite">
                      Original Full Order Ribs
                    </div>
                    <div class="outer-border">
                      <div class="inner-border">
                        <div class="extra-info">Roasted Street Corn, Fries</div>
                      </div>
                    </div>
                  </div>
                  <div class="favorite-action">
                    <button
                      id="P100026-1"
                      class="btn slim add-chilis-button"
                      href="#"
                      data-add-default-btn="Add to order"
                      data-added-to-cart-btn="Added To Cart"
                      data-unable-to-add-btn="Unable To Add "
                    >
                      Add to order
                    </button>
                    <input
                      type="hidden"
                      class="quantity"
                      value=""
                      id="chilisFavoriteProducts1.quantity"
                      name="chilisFavoriteProducts[1].quantity"
                    />
                  </div>
                </form>
              </div>
            </div>
            <div class="owl-item" style={{ width: "400px" }}>
              <div class="favorite-item">
                <form
                  class="js-favorite-form favorite-form"
                  action="/chilis/favorites/add-favorites-to-cart"
                  method="post"
                >
                  <input
                    type="hidden"
                    name="_csrf"
                    value="73f74287-1fe2-4db7-ac06-be59789333fa"
                  />
                  <div class="favorite-img">
                    <input
                      id="item-name-P106433-2"
                      type="hidden"
                      name="chilisFavoriteProducts[2].name"
                      value="Mix &amp; Match Fajitas"
                    />
                    <input
                      id="item-id-P106433-2"
                      type="hidden"
                      name="chilisFavoriteProducts[2].productMasterId"
                      value="P106433"
                    />
                    <input
                      id="item-alt-id-P106433-2"
                      type="hidden"
                      name="chilisFavoriteProducts[2].altProductMasterId"
                      value="P108194"
                    />
                    <input
                      id="item-category-id-P106433-2"
                      type="hidden"
                      name="chilisFavoriteProducts[2].categoryMasterId"
                      value="C1019"
                    />
                    <img
                      class="itemImg b-lazy b-loaded"
                      alt="Mix &amp; Match Fajitas"
                      src="https://images.prismic.io/brinker-chilis/70711607240dd73425c94f38502557da75f73e77_mixnmatchfajitas.jpg?auto=compress,format"
                      title="Mix &amp; Match Fajitas"
                    />
                  </div>
                  <div class="favorite-desc">
                    <div class="heading-tertiary heading-favorite">
                      Mix &amp; Match Fajitas
                    </div>
                    <div class="outer-border">
                      <div class="inner-border">
                        <div class="extra-info">Chicken, Steak</div>
                      </div>
                    </div>
                  </div>
                  <div class="favorite-action">
                    <button
                      id="P106433-2"
                      class="btn slim add-chilis-button"
                      href="#"
                      data-add-default-btn="Add to order"
                      data-added-to-cart-btn="Added To Cart"
                      data-unable-to-add-btn="Unable To Add "
                    >
                      Add to order
                    </button>
                    <input
                      type="hidden"
                      class="quantity"
                      value=""
                      id="chilisFavoriteProducts2.quantity"
                      name="chilisFavoriteProducts[2].quantity"
                    />
                  </div>
                </form>
              </div>
            </div>
            <div class="owl-item" style={{ width: "400px" }}>
              <div class="favorite-item">
                <form
                  class="js-favorite-form favorite-form"
                  action="/chilis/favorites/add-favorites-to-cart"
                  method="post"
                >
                  <input
                    type="hidden"
                    name="_csrf"
                    value="73f74287-1fe2-4db7-ac06-be59789333fa"
                  />
                  <div class="favorite-img">
                    <input
                      id="item-name-P102491-3"
                      type="hidden"
                      name="chilisFavoriteProducts[3].name"
                      value="Crispy Honey-Chipotle Chicken Crispers"
                    />
                    <input
                      id="item-id-P102491-3"
                      type="hidden"
                      name="chilisFavoriteProducts[3].productMasterId"
                      value="P102491"
                    />
                    <input
                      id="item-alt-id-P102491-3"
                      type="hidden"
                      name="chilisFavoriteProducts[3].altProductMasterId"
                      value=""
                    />
                    <input
                      id="item-category-id-P102491-3"
                      type="hidden"
                      name="chilisFavoriteProducts[3].categoryMasterId"
                      value="C1025"
                    />
                    <img
                      class="itemImg b-lazy b-loaded"
                      alt="Crispy Honey-Chipotle Chicken Crispers"
                      src="https://images.prismic.io/brinker-chilis/a18d51e26d756dcb9f5c1fc92c79619580673418_crispyhoneychipotlechickencrispers.jpg?auto=compress,format"
                      title="Crispy Honey-Chipotle Chicken Crispers"
                    />
                  </div>
                  <div class="favorite-desc">
                    <div class="heading-tertiary heading-favorite">
                      Crispy Honey-Chipotle Chicken Crispers
                    </div>
                    <div class="outer-border">
                      <div class="inner-border">
                        <div class="extra-info">Corn On The Cob, Fries</div>
                      </div>
                    </div>
                  </div>
                  <div class="favorite-action">
                    <button
                      id="P102491-3"
                      class="btn slim add-chilis-button"
                      href="#"
                      data-add-default-btn="Add to order"
                      data-added-to-cart-btn="Added To Cart"
                      data-unable-to-add-btn="Unable To Add "
                    >
                      Add to order
                    </button>
                    <input
                      type="hidden"
                      class="quantity"
                      value=""
                      id="chilisFavoriteProducts3.quantity"
                      name="chilisFavoriteProducts[3].quantity"
                    />
                  </div>
                </form>
              </div>
            </div>
            <div class="owl-item" style={{ width: "400px" }}>
              <div class="favorite-item">
                <form
                  class="js-favorite-form favorite-form"
                  action="/chilis/favorites/add-favorites-to-cart"
                  method="post"
                >
                  <input
                    type="hidden"
                    name="_csrf"
                    value="73f74287-1fe2-4db7-ac06-be59789333fa"
                  />
                  <div class="favorite-img">
                    <input
                      id="item-name-P106076-4"
                      type="hidden"
                      name="chilisFavoriteProducts[4].name"
                      value="Smokehouse Combo"
                    />
                    <input
                      id="item-id-P106076-4"
                      type="hidden"
                      name="chilisFavoriteProducts[4].productMasterId"
                      value="P106076"
                    />
                    <input
                      id="item-alt-id-P106076-4"
                      type="hidden"
                      name="chilisFavoriteProducts[4].altProductMasterId"
                      value=""
                    />
                    <input
                      id="item-category-id-P106076-4"
                      type="hidden"
                      name="chilisFavoriteProducts[4].categoryMasterId"
                      value="C1003"
                    />
                    <img
                      class="itemImg b-lazy b-loaded"
                      alt="Smokehouse Combo"
                      src="https://images.prismic.io/brinker-chilis/86e29bbdf8771db825d4d6692b70f75a87c731c7_smokehousecombo.jpg?auto=compress,format"
                      title="Smokehouse Combo"
                    />
                  </div>
                  <div class="favorite-desc">
                    <div class="heading-tertiary heading-favorite">
                      Smokehouse Combo
                    </div>
                    <div class="outer-border">
                      <div class="inner-border">
                        <div class="extra-info">
                          Crispy Honey-Chipotle Chicken Crispers®, Ranch
                          Dressing, Original BBQ Half Order House-Smoked Ribs
                          $2.00, Roasted Street Corn, Fries
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="favorite-action">
                    <button
                      id="P106076-4"
                      class="btn slim add-chilis-button"
                      href="#"
                      data-add-default-btn="Add to order"
                      data-added-to-cart-btn="Added To Cart"
                      data-unable-to-add-btn="Unable To Add "
                    >
                      Add to order
                    </button>
                    <input
                      type="hidden"
                      class="quantity"
                      value=""
                      id="chilisFavoriteProducts4.quantity"
                      name="chilisFavoriteProducts[4].quantity"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="owl-controls">
          <div class="owl-pagination">
            <div class="owl-page active">
              <span class=""></span>
            </div>
            <div class="owl-page">
              <span class=""></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;