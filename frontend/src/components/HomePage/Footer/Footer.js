import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container footer-container">
        <div className="row">
          <div className="col12 text-center">
            <a
              id="footer-logo"
              href="/"
              title="Chili's Grill &amp; Bar - Local Restaurants Near Me | Chili's"
            >
              Chili's Grill &amp; Bar - Local Restaurants Near Me | Chili's
            </a>
            <ul className="footer-links">
              <li>
                <a id="footer-faq" href="/frequently-asked-questions">
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  id="footer-nutrition"
                  href="/media/docs/chilis-nutrition-menu-generic"
                  rel="noopener"
                  target="_blank"
                >
                  Nutrition Info
                </a>
              </li>
              <li>
                <a id="footer-employment" href="http://www.chilisjobs.com/">
                  Employment
                </a>
              </li>
              <li>
                <a
                  id="footer-chilis-jobs"
                  href="http://www.chilisjobs.com/our-story"
                >
                  Our Story
                </a>
              </li>
              <li>
                <a id="footer-who-we-are" href="/who-we-are">
                  Who We Are
                </a>
              </li>
              <li>
                <a id="footer-franchise" href="https://brinker.com/franchise">
                  Franchising
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col12 text-center footer-sublinks">
            <span className="copyright-info">
              © 2020 Brinker International All Rights Reserved
            </span>
            <a
              id="footer-terms"
              href="https://brinker.com/terms&amp;conditions"
              rel="noopener"
              target="_blank"
            >
              Terms &amp; Conditions
            </a>
            <a id="footer-sitemap" href="/sitemap">
              Sitemap
            </a>
            <a id="footer-ada" href="/web-accessibility">
              Web Accessibility
            </a>
            <a
              id="footer-privacy"
              href="https://brinker.com/privacy"
              rel="noopener"
              target="_blank"
            >
              Privacy Policy
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col12 text-center">
            <ul className="social-buttons">
              <li className="app-store-btn">
                <a
                  id="footer-app-store"
                  href="https://itunes.apple.com/us/app/chilis/id464383246"
                >
                  <img
                    alt="Download on the App Store"
                    src="data:image/webp;base64,UklGRlAFAABXRUJQVlA4TEQFAAAvd4AIEKUQZNv0/tqfQ0RMgF2VnNi2tSyP9fs/AJpT3W04VBLZ3d0TyXUejIBGJ1vjbzzskSMYRZKkaGTsHtne15EufPNJyAmQhm3b8Tb3+31fnNR2O9u2bdu2bdu2t9qYbSvrbG9Jjlp5fnzh8D+i/xMAEWtKQ/NJSyE2rX3NyzpDLLr+YcYA5DKcxsu8ns1mgGSf2dj8GTQJhm8WoJlR97KiUx2tEJTMNhU1VgQH2ISvZZOaF0mWZOW6WlbiffSFWbwtzlSwYs4E6xSVoX73B80z0nXesjLnoTrVGf4jOghujVHPzbmxvFmzQTJRidFNGGs2vjxY7VGbRKzu2LJwq9utMw+w8Xcbq9/VH6SCql8fmf0C0qmgNazCyA3Od9sfmOl2n380vOcil6/jw6fiTIXCd5ql9GStGr/Q1LjV7raoQ2LTh6Uqfh5wtTXAht+sqf459thc7Os7a579BlDOBNhg5qLG0ah4DXHtdx7bUcXpmazjHpypMHQtuhyRLNv3LXDuBMwTHeiEdSPLn8fsiQCqx0D9AS2P4MeJmON2UfHyZGg4t5i6RLBgBav0pFSpu/L+hzHqRvXQU7yTVtpuL85UaJHAL1xY7YyQGjRkP39MtGgun9K8/FnMnASg8lmmfodmR3GvOCR2EEQcZWc9mF62XbghP/f9TLkFIZeTd1cGGxV3zBeBsVzfyVAfFGpPw9oi/MLYPQ6OkYcOBSr3JS/vAcB5X8xsvvA69O4GQJEwVxGKqnNQIzaqme0kew8KsZFMJ8rN/XsxZQrs7v+F2h0mjsN/IkyBzCkByzXeHnZyrFwrhP0lLZhUWBmWneZiD36Rzki5u/6SCcxtK5z1X6i/PSbSlV4dFvQAyh3s8+f1YL7JLOtKE3LjGADGgSnkIo6BU0pNsFsFARCzsTSeYwB4pZwBYByYggFMqWS2i8IY21t2IjPwbpobgG2Xiyf++rJTCWnKwbpX9W9n8AC428Y6JlZ/pE/3x4D1uav/Hl0c6HO/5nGdD0on6fUpxWwWgqEPQZYo0y6yedQHQFzup+jFDymCl7769XPfik80HwCGkX6uF4D+5+j8ulaYQrdGrMj6URij6I7+ukeh74+7D/32VmUrzhmGPnawoCONRymKARBBuxicXxVUEFJpNFAy47cTAG6SjtKWKoExNA7wNnx3AWbSXgymT8HA3uziwDDqYyvQhKKNFhyhoc2b/9C5A6HUFMBqGiFoCzwBnDbWgNhn2kc6zpnqQPsABNALfhBtBNgH3cKFC/fTapsZXWCyipnT/DDm5eUVUA9RTQDTabKgzXUEcIIamQC8P+YVNzWIVgJQ0EfZYJoLyA3ZD8VTbAYKMOtgvjUdKVas2HAKFzUDsId6ClqjF4A7+aXNIIxqYQyNB1pQBIBydJsNpjkA+/hNBitRsoPnnigt2E+tATjp9M4IpTgpyhkMnoKWlnHonP9YANDCAyj5U+eOfrQDcPyUXRbCcZqKISJsNs7lAJkdgMkJEeW+eZNDRJ9Lw7zmS5oCACKoK0Lpy8vzafnDIGgLvj64kmtoCEDxKfPZ0+ycoUDRzPzH3dAhU3f8hjFZiaEmPO4YUxOuvOPtADR2pMwrKpUUnh23uRAsDFg3GuK66zojlNqsOnWkCSBoc6vuPL2jLABwLbYlxq2pxAC0ioitB1TcfiZyqAyoua4pADiMOh6/f7jEHp8YSjVhUtDmOuKv/av2G6qZ4m/9dPiL6pof4+NkSs4U5Er29whG73Sy+Lgf6TMbl23/sGHQw3IbL4saYtnM+taTRW1O51yWTYIA"
                  />
                </a>
              </li>
              <li>
                <a
                  id="footer-play-store"
                  href="https://play.google.com/store/apps/details?id=com.brinker.chilis"
                >
                  <img
                    alt="Get it on Google Play"
                    src="data:image/webp;base64,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"
                  />
                </a>
              </li>
              <li>
                <a
                  id="footer-facebook"
                  className="facebook-like"
                  href="https://www.facebook.com/Chilis/"
                  rel="noopener"
                  target="_blank"
                >
                  Like Us On Facebook
                </a>
              </li>
              <li>
                <a
                  id="footer-twiter"
                  className="twitter-follow"
                  href="https://twitter.com/intent/follow?original_referer=http%3A%2F%2Fwww.chilis.com&amp;region=follow_link&amp;screen_name=Chilis&amp;tw_p=followbutton&amp;variant=2.0"
                  rel="noopener"
                  target="_blank"
                >
                  Follow Us On Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
