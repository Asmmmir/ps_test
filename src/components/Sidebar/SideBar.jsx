import React from "react";
import "./sidebar.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoPersonSharp } from "react-icons/io5";
import { BsMinecartLoaded } from "react-icons/bs";
import { MdLocalPhone } from "react-icons/md";
import { SiMicrosofttranslator } from "react-icons/si";
import { IoIosMoon } from "react-icons/io";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__container">
        <div className="sidebar__section">
          <div className="sidebar__logo">
            <img src="/ps_test/logo.png" alt="" width={60} height={100} />
          </div>
          <div className="sidebar__item">
            <GiHamburgerMenu size="20px" color="#84909c" />
          </div>
          <div className="sidebar__item">
            <IoPersonSharp size="20px" color="#84909c" />
          </div>
        </div>
        <div className="sidebar__section">
          <div className="sidebar__item">
            <BsMinecartLoaded size="20px" color="#84909c"  />
          </div>
          <div className="sidebar__item">
            <MdLocalPhone size="20px" color="#84909c" />
          </div>
        </div>
        <div className="sidebar__section">
          <div className="sidebar__item">
            <SiMicrosofttranslator size="20px" color="#84909c" />
          </div>
          <div className="sidebar__item">
            <IoIosMoon size="20px" color="#84909c" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
