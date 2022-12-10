import React from "react";
import s from "./About.module.scss";
const About = () => {
  return (
    <div className={s.container}>
      <div className={s.minicontainer}>
        <div className={s.imgwraaper}>
          <img
            src="http://kalanidhithemes.com/live-preview/landing-page/apper/all-demo/01-app-landing-page-defoult/images/about-frame.png"
            alt=""
            className={s.aboutframe}
            height={500}
          />
          <img
            src="http://kalanidhithemes.com/live-preview/landing-page/apper/all-demo/01-app-landing-page-defoult/images/about-screen.png"
            alt=""
            className={s.aboutscreen}
            height={300}
          />
        </div>
        <div className={s.aboutApp}>
          <div className={s.heading}>
            <h1 className={s.title}>
              Some awesome words <span> about app.</span>
            </h1>
            <p className={s.minititle}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry lorem Ipsum has been the industrys standard dummy text
              ever since the when an unknown printer took a galley of type and.
              Lorem ipsum dolor sit amet.
            </p>
          </div>
          <div className={s.count}>
            <div className={s.countdetail}>
              <div>
                {" "}
                <img
                  src="http://kalanidhithemes.com/live-preview/landing-page/apper/all-demo/01-app-landing-page-defoult/images/download.png"
                  alt=""
                />
              </div>
              <div className={s.cntinfo}>
                <p className={s.cnt}>17M+</p>
                <span className={s.cnttitle}>Download</span>
              </div>
            </div>
            <div className={s.countdetail}>
              <div>
                {" "}
                <img
                  src="http://kalanidhithemes.com/live-preview/landing-page/apper/all-demo/01-app-landing-page-defoult/images/followers.png"
                  alt=""
                />
              </div>
              <div className={s.cntinfo}>
                <p className={s.cnt}>17M+</p>
                <span className={s.cnttitle}>Download</span>
              </div>
            </div>
            <div className={s.countdetail}>
              <div>
                {" "}
                <img
                  src="http://kalanidhithemes.com/live-preview/landing-page/apper/all-demo/01-app-landing-page-defoult/images/followers.png"
                  alt=""
                />
              </div>
              <div className={s.cntinfo}>
                <p className={s.cnt}>17M+</p>
                <span className={s.cnttitle}>Download</span>
              </div>
            </div>
            <div className={s.countdetail}>
              <div>
                {" "}
                <img
                  src="http://kalanidhithemes.com/live-preview/landing-page/apper/all-demo/01-app-landing-page-defoult/images/countries.png"
                  alt=""
                />
              </div>
              <div className={s.cntinfo}>
                <p className={s.cnt}>17M+</p>
                <span className={s.cnttitle}>Download</span>
              </div>
            </div>
            <button className={s.btn}>START FREE TRIAL</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
