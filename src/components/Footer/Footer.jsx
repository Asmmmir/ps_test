import React from "react";
import './footer.scss'
import { FaFacebookF } from "react-icons/fa6";
import { SlSocialVkontakte } from "react-icons/sl";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__wrapper">
          <div className="footer__company">
            <p>© 2003–2023 ТОО «Интернет-компания PS»</p>
          </div>
          <div className="footer__contacts">
            <ul className="footer__link">
              <li className="footer__link-item">
                <a href="#">Контакты</a>
              </li>
              <li className="footer__link-item">
                <a href="#">Правила использования</a>
              </li>
              <li className="footer__link-item">
                <a href="#">Публичная оферта</a>
              </li>
              <li className="footer__link-item">
                <a href="#">Политика конфиденциальности</a>
              </li>
            </ul>
          </div>
          <div className="footer__social">
            <div className="footer__social-item">
              <FaFacebookF size={32}  />
            </div>
            <div className="footer__social-item">
              <SlSocialVkontakte size={32}   />
            </div>
            <div className="footer__social-item">
              <FaTwitter size={32}  />
            </div>
            <div className="footer__social-item">
              <FaInstagram  size={32} />
            </div>
            <div className="footer__social-item">
              <FaTelegramPlane size={32}   />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
