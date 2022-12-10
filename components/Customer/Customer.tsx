import React from "react";
import s from "./Customer.module.scss";
const Customer = () => {
  return (
    <div className={s.container}>
      <div className={s.minicontainer}>
        <div className={s.heading}>
          <h1 className={s.title}>
            What our<span> customer say</span>
          </h1>
          <p className={s.minititle}>
            Lorem Ipsum is simply dummy text of the printing and typese tting
            indus orem Ipsum has beenthe standard dummy.
          </p>
        </div>
        <div className={s.customers}>
            {/* <img src="http://kalanidhithemes.com/live-preview/landing-page/apper/all-demo/01-app-landing-page-defoult/images/avtar_testimonial.png" alt="" /> */}
        </div>
      </div>
    </div>
  );
};

export default Customer;
