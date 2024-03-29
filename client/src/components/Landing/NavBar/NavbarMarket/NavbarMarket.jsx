import React, { useState, useEffect } from "react";
import style from "./NavbarMarket.module.scss";
import { useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { NavLink, Link } from "react-router-dom";
import {
  IoChevronDownOutline,
  IoGlobeOutline,
  IoPerson,
} from "react-icons/io5";
import PopUpMarket from "./PopUp/PopUpMarket";
import PopUpUser from "./PopUp/PopUpUser";
import { useAccountModal } from "@rainbow-me/rainbowkit";
import PopUpLanguage from "./PopUp/PopUpLanguage";
import MobileMenu from "./MobileMenu/MobileMenu";
import { Divide as Hamburger } from "hamburger-react";
import closeIcon from "../../../../assets/close.svg";
import copyIcon from "../../../../assets/Copy.svg";
import logoutIcon from "../../../../assets/Logout.svg";
import envwiseLogo from "../../../../assets/ENVWISE.png";

function NavbarMarket() {
  const { logout, user } = useAuth0();
  const { openAccountModal } = useAccountModal();
  const [active, setActive] = useState(false);
  const { currency } = useSelector((state) => state.reducerCompleto);
  const [activeMenu, setActiveMenu] = useState(false);
  const [activeMenuMobile, setActiveMenuMobile] = useState(false);
  const [activeLanguage, setActiveLanguage] = useState(false);
  const screenWidth = window.innerWidth || document.body.clientWidth;
  const [userModal, setUserModal] = useState(false);
  let admin = null;

  if (user?.sub === import.meta.env.VITE_ADMIN_DEV1)
    admin = import.meta.env.VITE_ADMIN_DEV1;
  if (user?.sub === import.meta.env.VITE_ADMIN_DEV2)
    admin = import.meta.env.VITE_ADMIN_DEV2;
  if (user?.sub === import.meta.env.VITE_ADMIN_ALAN)
    admin = import.meta.env.VITE_ADMIN_ALAN;
  if (user?.sub === import.meta.env.VITE_ADMIN_LUIS)
    admin = import.meta.env.VITE_ADMIN_LUIS;
  if (user?.sub === import.meta.env.VITE_ADMIN_JAVVAD)
    admin = import.meta.env.VITE_ADMIN_JAVVAD;

  const handleUserModal = () => {
    if (userModal) setUserModal(false);
    if (!userModal) setUserModal(true);
  };

  useEffect(() => {
    document.addEventListener("click", (e) => {
      const isDropdownButton = e.target.matches("[data-dropdown-button]");
      const isMenuButton = e.target.matches("[data-dropdown-menu]");
      const isMenuButtonMobile = e.target.matches("[data-dropdown-menumobile]");
      const isLanguageButton = e.target.matches("[data-dropdown-language]");

      if (!isMenuButton && e.target.closest("[data-menu]") != null) return;
      if (!isMenuButtonMobile && e.target.closest("[data-menumobile]") != null)
        return;
      if (!isDropdownButton && e.target.closest("[data-dropdown]") != null)
        return;
      if (!isLanguageButton && e.target.closest("[data-language]") != null)
        return;

      if (!isDropdownButton) {
        setActive(false);
      }
      // if (!isMenuButton) {
      //   setActiveMenu(false);
      // }
      // if (!isMenuButtonMobile) {
      //   setActiveMenuMobile(false);
      // }
      if (!isLanguageButton && e.target.closest("[data-language]") === null) {
        setActiveLanguage(false);
      }
    });
  }, []);
  return (
    <div>
      {screenWidth > 600 ? (
        <div className={style.container}>
          <div className={style.flexContainer}>
            <a href="https://envwise.com/">
              <img
                src={envwiseLogo}
                alt="ENVWISE"
                className={style.envwiseLogo}
              />
            </a>
            <div className={style.buttons}>
              <div
                data-dropdown-button
                onClick={() => setActive(!active)}
                className={active ? style.button2 : style.button}
              >
                <p>PRODUCTS</p>
                <IoChevronDownOutline />
              </div>
              <p>ABOUT US</p>
              <NavLink to="/support">
                <p>SUPPORT</p>
              </NavLink>
            </div>
            <div className={style.buttons2}>
              <div className={style.language}>
                <div
                  className={style.languageButton}
                  data-dropdown-language
                  onClick={() => setActiveLanguage(!activeLanguage)}
                >
                  <IoGlobeOutline />
                  <p>{currency}</p>
                </div>
                {activeLanguage ? <PopUpLanguage data-language /> : null}
              </div>
              <div className={openAccountModal ? style.user : style.user1}>
                <div className={style.hamburgerContainer}>
                  <div
                    data-dropdown-menu
                    className={style.hamburger}
                    onClick={() => setActiveMenu(!activeMenu)}
                  >
                    <Hamburger size={18} toggled={activeMenu} />
                  </div>
                  {user ? (
                    <div className={style["notification-badge"]}>
                      <img
                        src={user.picture}
                        alt={user.name}
                        className={style.userImage}
                        onClick={handleUserModal}
                      />
                    </div>
                  ) : null}
                  {userModal && (
                    <div className={style.userModal}>
                      <div className={style["userModal-content"]}>
                        <div className={style["userModal-header"]}>
                          <span
                            className={style["userModal-close"]}
                            onClick={handleUserModal}
                          >
                            <img src={closeIcon} alt="Close" />
                          </span>
                          <h2>Profile</h2>
                        </div>

                        <div className={style["userModal-body"]}>
                          <img src={user.picture} alt="user" />
                          <h4>{user.name}</h4>
                          <p>Record of all transactions of the last 30 days</p>
                          <div className={style["userModal-btn"]}>
                            {admin ? (
                              <Link to="./create" className={style.formBtn}>
                                Admin Form
                              </Link>
                            ) : (
                              <button>
                                <img src={copyIcon} alt="Copy" />
                                <p>Address</p>
                              </button>
                            )}

                            <button
                              onClick={() =>
                                logout({
                                  logoutParams: {
                                    returnTo: `${window.location.origin}/marketplace/`,
                                  },
                                })
                              }
                            >
                              <img src={logoutIcon} alt="logout" />
                              <p>Disconnect</p>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                {openAccountModal && (
                  <div onClick={openAccountModal} className={style.account}>
                    <IoPerson />
                  </div>
                )}
                {activeMenu ? (
                  <PopUpUser data-menu setActiveMenu={setActiveMenu} />
                ) : null}
              </div>
            </div>
          </div>
          {active ? <PopUpMarket data-dropdown /> : null}
        </div>
      ) : (
        <div className={style.container}>
          <div
            className={
              openAccountModal ? style.flexContainer : style.flexContainer2
            }
          >
            <div
              data-dropdown-menumobile
              className={
                openAccountModal ? style.MobileMenuIcon : style.MobileMenuIcon2
              }
              onClick={() => setActiveMenuMobile(!activeMenuMobile)}
            >
              <Hamburger
                size={20}
                toggled={activeMenuMobile}
                data-dropdown-menumobile
              />
            </div>
            <a href="/" className={openAccountModal ? style.icon : style.icon2}>
              <img
                src={envwiseLogo}
                alt="ENVWISE"
                className={style.envwiseLogo}
              />
            </a>
            {openAccountModal && (
              <div onClick={openAccountModal} className={style.accountIcon}>
                <IoPerson />
              </div>
            )}
          </div>
          {user ? (
            <div className={style["notification-badge"]}>
              <img
                src={user.picture}
                alt={user.name}
                className={style.userImage}
                onClick={handleUserModal}
              />
            </div>
          ) : null}
          {userModal && (
            <div className={style.userModal}>
              <div className={style["userModal-content"]}>
                <div className={style["userModal-header"]}>
                  <span
                    className={style["userModal-close"]}
                    onClick={handleUserModal}
                  >
                    <img src={closeIcon} alt="Close" />
                  </span>
                  <h2>Profile</h2>
                </div>

                <div className={style["userModal-body"]}>
                  <img src={user.picture} alt="user" />
                  <h4>{user.name}</h4>
                  <p>Record of all transactions of the last 30 days</p>
                  <div className={style["userModal-btn"]}>
                    {admin ? (
                      <Link to="./create" className={style.formBtn}>
                        Admin Form
                      </Link>
                    ) : (
                      <button>
                        <img src={copyIcon} alt="Copy" />
                        <p>Address</p>
                      </button>
                    )}

                    <button
                      onClick={() =>
                        logout({
                          logoutParams: {
                            returnTo: `${window.location.origin}/marketplace/`,
                          },
                        })
                      }
                    >
                      <img src={logoutIcon} alt="logout" />
                      <p>Disconnect</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeMenuMobile ? <MobileMenu data-menumobile /> : null}
        </div>
      )}
    </div>
  );
}

export default NavbarMarket;
