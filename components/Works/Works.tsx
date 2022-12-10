import React from "react";
import s from "./Works.module.scss";
import Image from "next/image";
const Works = () => {
  return (
    <div className={s.container}>
      <div className={s.minicontainer}>
        <div className={s.heading}>
          <h1 className={s.title}>
            <span> How it works</span>-3 easy steps{" "}
          </h1>
          <p className={s.minititle}>
            Lorem Ipsum is simply dummy text of the printing and typese tting
            indus orem Ipsum has beenthe standard dummy.
          </p>
        </div>
        <div className={s.steps}>
          <div className={s.step}>
            <div className={s.stepInfoL}>
              <p className={s.stepsTitle}>Download app</p>
              <div className={s.imgwrapper}>
                <Image
                  src="/images/group.png"
                  width={100}
                  height={50}
                  alt="Icon"
                />
              </div>
              <p className={s.stepsdesc}>
                Download App either for Windows, Mac or Android
              </p>
            </div>
            <div className={s.stepcnt}>
              <img
                src="http://kalanidhithemes.com/live-preview/landing-page/apper/all-demo/01-app-landing-page-defoult/images/icon_bg.png"
                alt=""
              />
            </div>
            <div className={s.stepImg}>
              <img
                src="http://kalanidhithemes.com/live-preview/landing-page/apper/all-demo/01-app-landing-page-defoult/images/download_app.jpg"
                alt=""
              />
            </div>
          </div>
          <div className={s.step}>
            <div className={s.stepImg}>
              <img
                src="http://kalanidhithemes.com/live-preview/landing-page/apper/all-demo/01-app-landing-page-defoult/images/create_account.jpg"
                alt=""
              />
            </div>
            <div className={s.stepcnt}>
              <img
                src="http://kalanidhithemes.com/live-preview/landing-page/apper/all-demo/01-app-landing-page-defoult/images/icon_bg.png"
                alt=""
              />
            </div>
            <div className={s.stepInfoR}>
              <p className={s.stepsTitle}>Create account</p>
              {/* <div className={s.imgwrapper}>
                <Image
                  src="/images/group.png"
                  width={100}
                  height={50}
                  alt="Icon"
                />
              </div> */}
              <p className={s.steptrial}>14 days free trial</p>
              <p className={s.stepsdesc}>
                Sign up free for App account. One account for all devices.
              </p>
            </div>
          </div>
          <div className={s.step}>
            <div className={s.stepInfoL}>
              <p className={s.stepsTitle}>It’s done, enjoy the app</p>
              {/* <div className={s.imgwrapper}>
                <Image
                  src="/images/group.png"
                  width={100}
                  height={50}
                  alt="Icon"
                />
              </div> */}
              <p className={s.steptrial}>
                Have any questions check our <a href="#">FAQs</a>{" "}
              </p>
              <p className={s.stepsdesc}>
                Get most amazing app experience,Explore and share the app
              </p>
            </div>
            {/* <p className={s.cnt}>03</p> */}
            <div className={s.stepcnt}>
              <img
                src="http://kalanidhithemes.com/live-preview/landing-page/apper/all-demo/01-app-landing-page-defoult/images/icon_bg.png"
                alt=""
              />
            </div>
            <div className={s.stepImg}>
              <img
                src="http://kalanidhithemes.com/live-preview/landing-page/apper/all-demo/01-app-landing-page-defoult/images/enjoy_app.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div>
          <video>
            <source src="https://youtu.be/tgbNymZ7vqY" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default Works;
