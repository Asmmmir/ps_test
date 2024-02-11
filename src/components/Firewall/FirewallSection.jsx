import React from "react";
import "./firewall-section.scss";

const FirewallSection = () => {
  return (
    <div className="firewall">
      <div className="firewall__container">
        <div className="firewall__wrapper">
          <div className="firewall__ip-address">
            <h1 className="firewall__title">Фаервол FortiGate</h1>
            <div className="firewall__select">
              <div className="firewall__image">
                <img
                  src="/ps_test/img7.svg"
                  alt="firewall image"
                  width={35}
                  height={35}
                />
              </div>
              <fieldset>
                <legend>
                  Выберите блок
                  <img src="/ps_test/question.svg" alt="" />
                </legend>
                <select name="firewall">
                  <option value="Do not order">Не заказывать</option>
                </select>
              </fieldset>
            </div>
            <div className="firewall__price">
              {" "}
              <span>0</span> тг/мес
            </div>
          </div>
        </div>
        <div className="firewall__cart">
          <div className="firewall__cart-wrapper">
            <div className="firewall__button">
              <button>Добавить в корзину</button>
            </div>
            <div className="firewall__total-price">
              <p>
                За <span>415 000</span> тг/мес{" "}
              </p>
            </div>
            <div className="firewall__feature">
              <p>
                В стоимость входит подключение к сети Интернет на скорости{" "}
                <br /> до 100 Мбит/c, без ограничения объема трафика.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirewallSection;
