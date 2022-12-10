import React from "react";
import s from "./Design.module.scss";
const Design = () => {
  return (
    <div className={s.container}>
      <div className={s.minicontainer}>
        <div className={s.designInfo}>
          <div className={s.heading}>
            <h1 className={s.title}>
              Beautiful design with <span>modern UI</span>
            </h1>
            <p className={s.minititle}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry lorem Ipsum has been the industrys standard dummy text
              ever since the when an unknown printer took a galley of type and.
            </p>
          </div>
          <div className={s.description}>
            <div className={s.desc}>
              <img
                src="http://kalanidhithemes.com/live-preview/landing-page/apper/all-demo/01-app-landing-page-defoult/images/right_icon.png"
                alt=""
                width={20}
                height={20}
              />
              <div>
                <p className={s.designTitle}>Carefully designed</p>
                <p className={s.designdesc}>
                  Lorem Ipsum is simply dummy text of the printing and type
                  esetting industry lorem Ipsum has.
                </p>
              </div>
            </div>
            <div className={s.desc}>
              <img
                src="http://kalanidhithemes.com/live-preview/landing-page/apper/all-demo/01-app-landing-page-defoult/images/right_icon.png"
                alt=""
                width={20}
                height={20}
              />
              <div>
                <p className={s.designTitle}>Seamless Sync</p>
                <p className={s.designdesc}>
                  Simply dummy text of the printing and typesetting inustry
                  lorem Ipsum has Lorem dollar summit.
                </p>
              </div>
            </div>
            <div className={s.desc}>
              <img
                src="http://kalanidhithemes.com/live-preview/landing-page/apper/all-demo/01-app-landing-page-defoult/images/right_icon.png"
                alt=""
                width={20}
                height={20}
              />
              <div>
                <p className={s.designTitle}>Access Drive</p>
                <p className={s.designdesc}>
                Printing and typesetting industry lorem Ipsum has been the industrys standard dummy text of type setting.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={s.imgwraaper}>
          <img
            src="http://kalanidhithemes.com/live-preview/landing-page/apper/all-demo/01-app-landing-page-defoult/images/modern01.png"
            alt=""
            className={s.main}
          />
            <img
              src="http://kalanidhithemes.com/live-preview/landing-page/apper/all-demo/01-app-landing-page-defoult/images/secure_data.png"
              alt=""
              className={s.secure}
            />
            <img
            src="http://kalanidhithemes.com/live-preview/landing-page/apper/all-demo/01-app-landing-page-defoult/images/modern02.png"
            alt=""
            className={s.small}
          />
          <img
            src="http://kalanidhithemes.com/live-preview/landing-page/apper/all-demo/01-app-landing-page-defoult/images/modern03.png"
            alt=""
            className={s.modern}
          />
          
        </div>
      </div>
    </div>
  );
};

export default Design;
