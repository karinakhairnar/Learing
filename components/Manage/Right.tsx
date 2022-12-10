import React from "react";
import s from "./Manage.module.scss";
const Right = () => {
  return (
    <div>
      <div>
        <div className={s.circle}>
        <img src="http://kalanidhithemes.com/live-preview/landing-page/apper/all-demo/01-app-landing-page-defoult/images/message_icon.png" alt="" width={150} className={s.msg}/>
        <img src="http://kalanidhithemes.com/live-preview/landing-page/apper/all-demo/01-app-landing-page-defoult/images/shield_icon.png" alt="" width={150}  className={s.security}/>
        <img src="http://kalanidhithemes.com/live-preview/landing-page/apper/all-demo/01-app-landing-page-defoult/images/screen.png" alt="" width={230} className={s.screen} height={450}/>
        <img src="http://kalanidhithemes.com/live-preview/landing-page/apper/all-demo/01-app-landing-page-defoult/images/mobile_frame_svg.svg" alt="" width={250} height={475} className={s.frame}/>
        </div>
        

      </div>
    </div>
  );
};

export default Right;
