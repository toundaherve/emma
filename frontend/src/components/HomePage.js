import React from "react";
import "./HomePage.css";

function HomePage() {
  return (
    <div id="homepage">
      <header className="header">
        <div className="header__topbar"></div>

        <div className="container">
          <div className="wrapper">
            <nav className="header__nav">
              <span className="logo"></span>
              <button className="btn">Go to the menu</button>
            </nav>
          </div>
        </div>
      </header>

      <section className="hero">
        <div className="container">
          <div className="hero__outer">
            <div className="hero__inner pos-relative">
              <div className="hero__content">
                <div className="hero__title">
                  Fresh, hand rolled sushi delivered to your door.
                </div>
                <button className="btn btn--large btn--fluid">
                  Go to the menu
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="content">
        <div className="wrapper">
          <div className="container container--small">
            <section className="services">
              <article className="service">
                <div className="service__img"></div>
                <div className="service__info">
                  <h2 className="service__title">HANDMADE WITH LOVE</h2>
                  <p className="service__body">
                    We are passionate about Japanese food and we believe in
                    eating well. Our aim is to make delicious, fresh sushi daily
                    using only the finest quality ingredients and to deliver
                    your order with great care.
                  </p>
                  <p className="service__body">
                    Please visit us at one of our restaurants in London, or let
                    us deliver our delicious Japanese dishes loved by Londoners
                    straight to you.
                  </p>
                </div>
              </article>

              <article className="service">
                <div className="service__info">
                  <h2 className="service__title">DELIVERED WITH CARE</h2>
                  <p className="service__body">
                    Simply enter your postcode above and we’ll show your nearest
                    store and its menu, brimming with the delicious,
                    mouth-watering hand made sushi that has made us one of the
                    most popular Sushi delivery services in the Capital.
                  </p>
                  <p className="service__body">
                    Give your tastebuds a treat and order simply the best sushi
                    in London today at You Me Sushi.
                  </p>
                </div>
                <div className="service__img"></div>
              </article>
            </section>
          </div>
        </div>
      </main>

      <footer className="footer">
        <div className="container container--small">
          <div className="footer__inner">
            <div className="contact">
              <h6 className="contact__title">Follow us on social media</h6>

              <div className="social">
                <ul className="list list--flex">
                  <li className="list-item">
                    <span className="icon"></span>
                  </li>
                  <li className="list-item">
                    <span className="icon"></span>
                  </li>
                  <li className="list-item">
                    <span className="icon"></span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="legal">
              <ul className="list">
                <li className="list-item">
                  <p className="legal__text">Terms & Conditions</p>
                </li>
                <li className="list-item">
                  <p className="legal__text">Privacy Policy</p>
                </li>
                <li className="list-item">
                  <p className="legal__text">Sitemap</p>
                </li>
              </ul>

              <p className="legal__text">
                © Copyright. 2020 Chez Emma. All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
