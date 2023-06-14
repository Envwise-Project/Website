import React from "react";
import css from "./Small__Loading.module.css";

const Small__Loading = () => {
  return (
    <div className={css.loading}>
      <div className={css["three-body"]}>
        <div className={css["three-body__dot"]}></div>
        <div className={css["three-body__dot"]}></div>
        <div className={css["three-body__dot"]}></div>
      </div>
    </div>
  );
};

export default Small__Loading;
