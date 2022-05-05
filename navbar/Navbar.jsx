import React, { useState } from "react";
import styles from "./navbar.module.css";
import search from "../search.svg";
import profile from "../profile.svg";
import bag from "../bag.svg";
import Pins from "./LocationPInCode";

// import * as FaIcons from "react-icons/fa";
// import * as AiIcons from "react-icons/ai";
// import * as IoIcons from "react-icons/io";
// import * as RIIcons from "react-icons/ri";

export const Navbar = () => {
  const [pin, setPin] = useState(false);
  const [pinCity, setCity] = useState("Mumbai");
  const [query, setQuery] = useState("");

  const [searchDiv, setSearch] = useState(false);

  const [profileBar, setProfile] = useState(false);

  const [cart, setCart] = useState(false);

  const [shop, setShop] = useState(false);
  const [learn, setLearn] = useState(false);

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
            <div
              onMouseLeave={() => setShop(false)}
              onMouseEnter={() => setShop(true)}
            >
              SHOP ▼
            </div>
            <div
              onMouseLeave={() => setLearn(false)}
              onMouseEnter={() => setLearn(true)}
            >
              LEARN ▼
            </div>
            <div>GROW</div>
            {/* <ul>
              <li
                onMouseLeave={() => setShop(false)}
                onMouseEnter={() => setShop(true)}
              >
                SHOP
              </li>
              <li>LEARN</li>
              <li>GROW</li>
            </ul> */}
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
                onClick={() => setSearch(!searchDiv)}
              />
            </div>

            <div className={styles.iconsLogo} onClick={() => setProfile(true)}>
              <img src={profile} alt="profile" />
            </div>

            <div className={styles.iconsLogo} onClick={() => setCart(true)}>
              <img src={bag} alt="cart" />
            </div>
          </div>
        </div>
      </nav>
      {/* dropdown shop */}
      <div
        onMouseLeave={() => setShop(false)}
        onMouseEnter={() => (shop ? setShop(true) : null)}
        className={shop ? styles.shopDrop : styles.shopHide}
      >
        <p>ALL FRUITS</p>
        <p>FRESH CUTS</p>
        <p>FRUIT COMBOS</p>
        <p>GIFTS BY KIMAYE</p>
        <p>GRAPE FAMILY BY KIMAYE</p>
        <p>RETURN AND REPLACEMENT</p>
        <p style={{ opacity: "0.6" }}>FRUITS X SUBSCRIPTION</p>
        <p>COMMUNITY BUYING</p>
      </div>

      <div
        onMouseLeave={() => setLearn(false)}
        onMouseEnter={() => (learn ? setLearn(true) : null)}
        className={learn ? styles.learnDrop : styles.learnHide}
      >
        <p>OUR STORY</p>
        <p>WHY KIMAYE</p>
        <p>TRACEABILITY</p>
        <p>BEYOND FRUITS</p>
      </div>
      {/* black screen */}
      <div
        className={
          pin || profileBar || cart ? styles.backDrop : styles.backDrophide
        }
      ></div>
      {/* pincode check */}
      {pin ? (
        <div className={styles.CheckPins}>
          <div>
            <p className={styles.closingX} onClick={() => setPin(false)}>
              X
            </p>
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
      {/* search div */}
      <div
        className={
          pin || profileBar || cart || !searchDiv
            ? styles.hideSearchDiv
            : styles.slidingSearchbar
        }
      >
        <input type="text" placeholder="Search for product" />
        <button>SEARCH</button>
      </div>

      {/* profile sidebar */}

      <div className={profileBar ? styles.sidebar : styles.sidebarToggle}>
        <div className={styles.sidebarHead}>
          <div>
            <h1>SIGN IN</h1>
            <p onClick={() => setProfile(false)}>CLOSE X</p>
          </div>
        </div>

        <div className={styles.sidebarForm}>
          <div>
            <label for="usernameInside">
              Email Address <span className={styles.required}>*</span>{" "}
            </label>
            <br />
            <input type="text" id="usernameInside" />
          </div>

          <div>
            <label for="passwordInside">
              Password <span className={styles.required}>*</span>{" "}
            </label>
            <br />
            <input type="text" id="passwordInside" />
          </div>

          <div className={styles.forgotPass}>
            {/* <ul>
              <li>Forgot your password?</li>
            </ul> */}
            <p>Forgot your password?</p>
          </div>

          <button className={styles.loginButton}>LOGIN</button>
        </div>

        <div className={styles.signInSocial}>
          <div style={{ backgroundColor: "#2d5073" }}>
            <p>Sign in with Facebook</p>
            <div>f</div>
          </div>
          <div style={{ backgroundColor: "#dd4b39" }}>
            <p>Sign in with Google</p>
            <div>G</div>
          </div>
        </div>

        <div className={styles.createAc}>
          <img src={profile} alt="profile" />
          <h4>No account yet?</h4>
          <p>
            Welcome to Kimaye! Help us with a few details to know you better as
            you take the journey of enjoying our safe and tasty fruits.
          </p>
          <button className={styles.createAcBt}>Create An Account</button>
        </div>
      </div>

      {/* <AiIcons.AiFillApple /> */}
      {/* cart sidebar */}

      <div className={cart ? styles.sidebar : styles.sidebarToggle}>
        <div className={styles.sidebarHead}>
          <div>
            <h1>SHOPPING CART</h1>
            <p onClick={() => setCart(false)}>CLOSE X</p>
          </div>
        </div>
      </div>
    </>
  );
};
