import React from "react";
import s from "./Features.module.scss";
const Features = () => {
  return (
    <div className={s.container}>
      <div className={s.heading}>
        <h1 className={s.title}>
          <span>Features</span> that makes app different!
        </h1>
        <p className={s.minititle}>
          Lorem Ipsum is simply dummy text of the printing and typese tting
          indus orem Ipsum has beenthe standard dummy.
        </p>
      </div>
      <div className={s.info}>
        <div className={s.feacturesinfo}>
          <div className={s.leftinfo}>
            <div className={s.data}>
              <img
                src="http://kalanidhithemes.com/live-preview/landing-page/apper/all-demo/01-app-landing-page-defoult/images/shield_icon.png"
                alt=""
                width={150}
              />
              <p className={s.infotitle}>Secure data</p>
              <p className={s.infodisc}>
                Lorem Ipsum is simply dummy text of the printing and type
                setting indus ideas.
              </p>
            </div>
            <div className={s.data}>
              <img
                src="http://kalanidhithemes.com/live-preview/landing-page/apper/all-demo/01-app-landing-page-defoult/images/functional.png"
                alt=""
                width={100}
              />
              <p className={s.infotitle}>Fully functional</p>
              <p className={s.infodisc}>
                Simply dummy text of the printing and typesetting indus lorem
                Ipsum is dummy.
              </p>
            </div>
          </div>
          <div className={s.imgwrapper}>
            <img
              src="http://kalanidhithemes.com/live-preview/landing-page/apper/all-demo/01-app-landing-page-defoult/images/features_frame.png"
              alt=""
              width={250}
              height={475}
            />
          </div>
          <div className={s.rightinfo}>
            <div className={s.data}>
              <img
                src="http://kalanidhithemes.com/live-preview/landing-page/apper/all-demo/01-app-landing-page-defoult/images/live-chat.png"
                alt=""
                width={100}
              />
              <p className={s.infotitle}>Live chat</p>
              <p className={s.infodisc}>
                Lorem Ipsum is simply dummy text of the printing and type
                setting indus ideas.
              </p>
            </div>
            <div className={s.data}>
              <img
                src="http://kalanidhithemes.com/live-preview/landing-page/apper/all-demo/01-app-landing-page-defoult/images/support.png"
                alt=""
                width={100}
              />
              <p className={s.infotitle}>24-7 Support</p>
              <p className={s.infodisc}>
              Simply dummy text of the printing and typesetting indus lorem Ipsum is dummy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
