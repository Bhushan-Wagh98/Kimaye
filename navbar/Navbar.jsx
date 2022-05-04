import React, { useState } from "react";
import styles from "./navbar.module.css";
import search from "../search.svg";
import profile from "../profile.svg";
import bag from "../bag.svg";
import Pins from "./LocationPInCode";

export const Navbar = () => {
  const [pin, setPin] = useState(false);
  const [pinCity, setCity] = useState("Mumbai");
  const [query, setQuery] = useState("");

  const [searchDiv, setSearch] = useState(false);

  const pinInputChange = (e) => {
    let value = e.target.value;
    setQuery(value);
  };
  const submitPinInput = () => {
    let pincode = +query;
    let mumbai = Pins.mumbai;
    let delhi = Pins.delhi;
    let flag = false;

    for (let i = 0; i < delhi.length; i++) {
      if (pincode === delhi[i]) {
        setCity("Delhi");
        setPin(false);
        flag = true;
        break;
      }
    }
    if (flag === false) {
      for (let i = 0; i < mumbai.length; i++) {
        if (pincode === mumbai[i]) {
          setCity("Mumbai");
          setPin(false);
          flag = true;
          break;
        }
      }
    }
    if (flag === false) {
      alert(
        `Sorry! We do not deliver to your pincode currently. Showing you results for ${pinCity}`
      );
      setPin(false);
    }
  };
  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.navbar}>
          <div className={styles.hoverList}>
            <ul>
              <li>SHOP</li>
              <li>LEARN</li>
              <li>GROW</li>
            </ul>
          </div>
          <div className={styles.navbarLogo}>
            <a href="/">
              <img
                src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/website-logo_400x.png?v=1596288204"
                alt="Kimaye"
              />
            </a>
          </div>
          <div className={styles.icons}>
            <div
              className={styles.map}
              onClick={() => {
                setPin(true);
                setSearch(false);
              }}
            >
              <img
                src="https://cdn.icon-icons.com/icons2/2642/PNG/512/google_map_location_logo_icon_159350.png"
                alt="Map Logo"
              />
              <p>{pinCity}</p>
            </div>

            <div className={styles.iconsLogo}>
              <img
                src={search}
                alt="search"
                onClick={() => {
                  if (!pin) setSearch(!searchDiv);
                }}
              />
            </div>

            <div className={styles.iconsLogo}>
              <img src={profile} alt="profile" />
            </div>

            <div className={styles.iconsLogo}>
              <img src={bag} alt="cart" />
            </div>
          </div>
        </div>
      </nav>

      {/* pincode check */}
      {pin ? (
        <div className={styles.CheckPins}>
          <div>
            <h1 className={styles.closingX} onClick={() => setPin(false)}>
              X
            </h1>
          </div>

          <div className={styles.inputDiv}>
            <img
              src="https://drpo5mjxhw4s.cloudfront.net/media/sac/popup/3.svg?v1"
              alt="delivery man"
            />
            <h3 className={styles.pinDisc}>
              We are currently available in Mumbai & Delhi. Please enter your
              pin code below to check if we deliver to your area.
            </h3>
            <input
              onChange={pinInputChange}
              onKeyUp={(e) => {
                if (e.code === "Enter") submitPinInput();
              }}
              type="text"
              value={query}
              placeholder="Enter your pin code"
            />
            <button onClick={submitPinInput}>DONE</button>
          </div>
        </div>
      ) : null}

      {searchDiv ? (
        <div className={styles.slidingSearchbar}>
          <input type="text" placeholder="Search for product" />
          <button>SEARCH</button>
        </div>
      ) : null}
    </>
  );
};
