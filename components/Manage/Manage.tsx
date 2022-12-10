import Button from "antd/lib/button";
import React from "react";
import s from "./Manage.module.scss";
import Image from "next/image";
import Right from "./Right";
import Companies from "@components/Companies/Companies";

const Manage = () => {
  return (
    <div className={s.container}>
      <div className={s.minicontainer}>
        <div className={s.left}>
          <h1 className={s.title}>
            Best way <span>to manage your customers.</span>
          </h1>
          <p className={s.minititle}>
            Lorem Ipsum is simply dummy text of the printing and setting indus
            orem Ipsum has been the industrys.
          </p>
          <div className={s.btn}>
            <Button>
              <img
                src="http://kalanidhithemes.com/live-preview/landing-page/apper/all-demo/01-app-landing-page-defoult/images/appstore_blue.png"
                alt=""
                className={s.show}
              />
              <img
                src="http://kalanidhithemes.com/live-preview/landing-page/apper/all-demo/01-app-landing-page-defoult/images/appstore_white.png"
                alt=""
                className={s.hide}
              />
            </Button>
            <Button>
              <img
                src="http://kalanidhithemes.com/live-preview/landing-page/apper/all-demo/01-app-landing-page-defoult/images/googleplay_blue.png"
                alt=""
                className={s.show}
              />
              <img
                src="http://kalanidhithemes.com/live-preview/landing-page/apper/all-demo/01-app-landing-page-defoult/images/googleplay_white.png"
                alt=""
                className={s.hide}
              />
            </Button>
          </div>
          <div className={s.count}>
            <Image src="/images/group.png" width={100} height={50} alt="Icon" />
            <div className={s.used}>
              <p  className={s.minititle}>12M +</p>
              <p  className={s.minititle}>used this app</p>
            </div>
          </div>
        </div>
        <div className={s.right}>
            <Right/>
        </div>
      </div>
        <div className={s.banner}>
          <img src="http://kalanidhithemes.com/live-preview/landing-page/apper/all-demo/01-app-landing-page-defoult/images/banner-shape.svg" alt="" />
        </div>
       <Companies/>
    </div>
  );
};

export default Manage;
