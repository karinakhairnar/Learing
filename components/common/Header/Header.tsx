import { BrandLogo } from "@components/ui";
import Image from "next/image";
import Link from "next/link";
import { FC, useState } from "react";
import s from "./Header.module.scss";
import { MenuItems } from "./MenuItems";
import { Select } from "antd";
interface Props {
  hideMenu?: boolean;
}
const Header: FC<Props> = ({ hideMenu }) => {
  const [isMenuActive, setMenuActive] = useState(false);

  const menuToggle = () => {
    setMenuActive((t) => !t);

    if (isMenuActive) {
      document.body.style.overflow = "unset";
    } else {
      document.body.style.overflow = "hidden";
    }
  };
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
    <div className={`${s.container} ${hideMenu ? s.hideMenu : ""}`}>
      <div className={s.menuWrapper}>
        <div
          className={`${s.hamburgerMenu} hamburger-menu ${
            isMenuActive ? s.active : ""
          }`}
          onClick={menuToggle}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={s.logo}>
          <Link href="/">
            <a>
              <img
                src="http://kalanidhithemes.com/live-preview/landing-page/apper/all-demo/01-app-landing-page-defoult/images/logo.png"
                alt="logo"
                layout="fill"
              />
            </a>
          </Link>
        </div>
        <div className={`${s.content} header-content`}>
          <div className={`${s.menuItems} ${isMenuActive ? s.active : ""}`}>
            {/* {MenuItems.map((item, i) => (
              <Link href={item.url} key={i}>
                <a
                  className={s.item}
                  target={item.isExternal ? "_blank" : "_self"}
                  onClick={() => {
                    setMenuActive(false);
                  }}
                >
                  {item.label}
                </a>
              </Link>
            ))} */}

            {/* <div className={s.socialWrapper}>
              <Link href="#">
                <a className={s.links}>
                  <Image
                    alt="img"
                    src="/images/icons/fb.svg"
                    width={25}
                    height={25}
                  />
                </a>
              </Link>
              <Link href="#">
                <a className={s.links}>
                  <Image
                    alt="icon"
                    src="/images/icons/insta.svg"
                    width={25}
                    height={25}
                  />
                </a>
              </Link>
              <Link href="#">
                <a className={s.links}>
                  <Image
                    alt="icon"
                    src="/images/icons/linkedin.svg"
                    width={25}
                    height={25}
                  />
                </a>
              </Link>
              <Link href="#">
                <a className={s.links}>
                  <Image
                    alt="icon"
                    src="/images/icons/twitter.svg"
                    width={25}
                    height={25}
                  />
                </a>
              </Link>
            </div> */}

            {/* <Select
              defaultValue="Home"
              className="homepage-select"
              style={{ width: 120 }}
              onChange={handleChange}
              options={[
                {
                  value: "Home Default",
                  label: "Home Default",
                },
                {
                  value: "Home Default HERO",
                  label: "Home Default HERO",
                },
                {
                  value: "Home Default WAVE",
                  // disabled: true,
                  label: "Home Default WAVE",
                },
                {
                  value: "Home Gredient",
                  label: "Home Gredient",
                },
              ]}
            /> */}
            <p>Home</p>
            <p>Feactures</p>
            <p>How it works</p>
            <p>Pages</p>
            <p>Pricing</p>
            <p>Pages</p>
            <p>Pricing</p>
            <p>Blogs</p>
            {/* <Select
              defaultValue="pages"
              className="homepage-select"
              style={{ width: 120 }}
              onChange={handleChange}
              options={[
                {
                  value: "About us",
                  label: "About us",
                },
                {
                  value: "Reviews",
                  label: "Reviews",
                },
                {
                  value: "Contact us",
                  // disabled: true,
                  label: "Contact us",
                },
                {
                  value: "FQA",
                  label: "FQA",
                },
              ]}
            /> */}

            {/* <Select
              defaultValue="Blogs"
              style={{ width: 120 }}
              className="homepage-select"
              onChange={handleChange}
              options={[
                {
                  value: "Blog list",
                  label: "Blog list",
                },
                {
                  value: "Blog Single",
                  label: "Blog Single",
                },
              ]}
            /> */}
            <p>Contact</p>
          </div>

          <div className={`btn-primary ${s.walletbtn}`}>
            <Link href="#">
              <a>GET STARTED</a>
            </Link>
          </div>

          <div className="ml-md-3 ml-1">
            {/* <Image
              src="/images/icons/theme-toggle.svg"
              alt="theme toggle icon"
              width={43}
              height={43}
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
