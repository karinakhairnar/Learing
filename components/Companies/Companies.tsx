import React from "react";
import s from "./Companies.module.scss";
import Swipers from "./Swipers";
const Companies = () => {
  return (
    <div className={s.container}>
      <div className={s.minicontainer}>
        <h1 className={s.title}>
          Trusted by<span> 150+ </span> companies
        </h1>
        <p className={s.minititle}>
          Lorem Ipsum is simply dummy text of the printing and typese tting
          indus orem Ipsum has beenthe standard dummy.
        </p>
      </div>
      <div></div>
      <Swipers />
    </div>
  );
};

export default Companies;
