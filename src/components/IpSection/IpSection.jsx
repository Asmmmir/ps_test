import React from "react";
import "./ip-section.scss";

const BlockIpAdress = () => {
  return (
    <div className="block-ip">
      <div className="block-ip__container">
        <div className="block-ip__wrapper">
          <div className="block-ip__ip-address">
            <h1 className="block-ip__title">Блок IP-адресов</h1>
            <div className="block-ip__select">
              <div className="block-ip__image">
                <img
                  src="/ps_test/img5.svg"
                  alt="block ip image"
                  width={35}
                  height={35}
                />
              </div>
              <fieldset>
                <legend>
                  Блок IP-адресов <img src="/ps_test/question.svg" alt="" />
                </legend>
                <select name="block-ip">
                  <option value="Блок из 4 IP-адресов (/30)">
                    Блок из 4 IP-адресов (/30)
                  </option>
                </select>
              </fieldset>
            </div>
            <div className="block-ip__price">
              {" "}
              <span>4 000</span> тг/мес
            </div>
          </div>
          <div className="block-ip__advantage">
            <img src="/ps_test/img6.svg" alt="" width={35} height={35} />
            <p>
              Мы поддерживаем IPv6 и можем предоставить <br /> блок IP-адрессов
              /64 бесплатно
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockIpAdress;
