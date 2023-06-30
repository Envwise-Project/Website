import React, { useState } from "react";
import CustomConnectButtom from "../../../../SideBar/CustomConnectButtom";
import style from "./PopUpUser.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { setCurrency } from "../../../../../../redux/reducer";
import { IoChevronDownOutline } from "react-icons/io5";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

function PopUpUser({ setActiveMenu }) {
  const screenWidth = window.innerWidth || document.body.clientWidth;
  const { currency, isAdmin } = useSelector((state) => state.reducerCompleto);
  const [active, setActive] = useState("null");
  const dispatch = useDispatch();
  const languages = [
    "English",
    "Español",
    "Français",
    "Português",
    "Русский",
    "日本語",
    "简体中文",
    "繁体中文",
    "한국어",
    "Tiếng Việt",
    "Indonesian",
    "ภาษาไทย",
  ];
  const currencies = [
    "USD - $",
    "CNY - ¥",
    "JPY - ¥",
    "KRW - ₩",
    "EUR - €",
    "GBP - £",
    "HKD - $",
    "IDR - Rp",
    "INR - ₹",
    "RUB - ₽",
  ];

  const { logout, user } = useAuth0();
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

  return (
    <div className={style.container} data-menu>
      <div className={style.flexContainer}>
        <div className={style.connect}>
          <CustomConnectButtom />
        </div>
        {screenWidth < 800 ? (
          <div className={style.buttons}>
            <a href="/">Home</a>
            <a href="/about">About us</a>
            {admin ? (
              <Link
                to="./create"
                className={style.formBtn}
                onClick={() => setActiveMenu(false)}
              >
                Post your property
              </Link>
            ) : null}
            <a href="/contact">Contacts</a>
            <a>Notifications</a>
            <a>FAQ</a>
            {isAdmin ? <a href="/admin">Admin menu</a> : null}
            <div
              className={
                active === "language" ? style.dropdownActive : style.dropdown
              }
              onClick={() =>
                setActive(active === "language" ? "null" : "language")
              }
            >
              <a>Language</a>
              <IoChevronDownOutline />
            </div>
            <div
              className={active === "language" ? style.flexList : style.notList}
            >
              {languages.map((p) => (
                <p>{p}</p>
              ))}
            </div>
            <div
              className={
                active === "currency" ? style.dropdownActive : style.dropdown
              }
              onClick={() =>
                setActive(active === "currency" ? "null" : "currency")
              }
            >
              <a>{currency}</a>
              <IoChevronDownOutline />
            </div>
            <div
              className={active === "currency" ? style.flexList : style.notList}
            >
              {currencies.map((p) => (
                <p onClick={() => dispatch(setCurrency(p))}>{p}</p>
              ))}
            </div>
            <div className={style.ConnectButtom}>
              <CustomConnectButtom />
            </div>
          </div>
        ) : (
          <div className={style.buttons}>
            <a>Notifications</a>
            <a>FAQ</a>
            {admin ? (
              <Link
                to="./create"
                className={style.formBtn}
                onClick={() => setActiveMenu(false)}
              >
                Post your property
              </Link>
            ) : null}
            {isAdmin ? <a href="/admin">Admin menu</a> : null}
          </div>
        )}
      </div>
    </div>
  );
}

export default PopUpUser;
