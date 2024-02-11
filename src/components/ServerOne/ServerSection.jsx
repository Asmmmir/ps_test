import React from "react";
import "./server-section.scss";

const ServerOne = () => {
  return (
    <div className="server-section">
      <div className="server-section__container">
        <div className="server-section__wrapper">
          <h1 className="server-section__title">Сервер 1</h1>
          <div className="server-section__processor">
            <div className="server-section__processor-wrapper">
              <img
                src="/ps_test/img2.svg"
                alt="processor"
                width={35}
                height={35}
              />
              <div className="server-section__fieldset-wrapper">
                <fieldset>
                  <legend>Процессор</legend>
                  <select name="processor">
                    <option value="Intel Xeon E5-2620 v3 2.40/3.20 Ггц">
                      2 x Intel Xeon E5-2620 v3 2.40/3.20 Ггц (всего 12 ядер, 24
                      потока)
                    </option>
                  </select>
                </fieldset>
                <p className="server-section__price">19 000 тг/мес</p>
              </div>
            </div>
          </div>
          <div className="server-section__system-disc">
            <div className="server-section__system-disc-wrapper">
              <img
                src="/ps_test/img1.svg"
                alt="processor"
                width={35}
                height={35}
              />
              <div className="server-section__fieldset-wrapper">
                <fieldset>
                  <legend>Системный диск 1</legend>
                  <select name="processor">
                    <option value="Intel Xeon E5-2620 v3 2.40/3.20 Ггц">
                      SSD 120 гб SATA
                    </option>
                  </select>
                </fieldset>
                <p className="server-section__price">19 000 тг/мес</p>
              </div>
            </div>
            <div className="server-section__add-disc">
              <p>Добавить еще дисков</p>
            </div>
          </div>

          <div className="server-section__netport">
            <div className="server-section__netport-wrapper">
              <img
                src="/ps_test/img3.svg"
                alt="netport"
                width={35}
                height={35}
              />
              <div className="server-section__fieldset-wrapper">
                <fieldset>
                  <legend>Сетевой порт 1</legend>
                  <select name="netport">
                    <option value="1Gbit/s">1Gbit/s</option>
                  </select>
                </fieldset>
                <p className="server-section__price">19 000 тг/мес</p>
              </div>
            </div>
          </div>
          <div className="server-section__ipmi">
            <div className="server-section__ipmi-wrapper">
              <img src="/ps_test/img3.svg" alt="ipmi" width={35} height={35} />
              <div className="server-section__fieldset-wrapper">
                <fieldset>
                  <legend>
                    IPMI <img src="/ps_test/question.svg" />
                  </legend>
                  <select name="ipmi">
                    <option value="Нет">Нет</option>
                  </select>
                </fieldset>
                <p className="server-section__price">0 тг/мес</p>
              </div>
            </div>
          </div>
          <div className="server-section__disc2">
            <div className="server-section__disc2-wrapper">
              <img src="/ps_test/img1.svg" alt="disc2" width={35} height={35} />
              <div className="server-section__fieldset-wrapper">
                <fieldset>
                  <legend>Диск 2</legend>
                  <select name="Disc 2">
                    <option value="Нет">Нет</option>
                  </select>
                </fieldset>
                <p className="server-section__price">0 тг/мес</p>
              </div>
            </div>
          </div>
          <div className="server-section__netport2">
            <div className="server-section__netport2-wrapper">
              <img
                src="/ps_test/img3.svg"
                alt="netport2"
                width={35}
                height={35}
              />
              <div className="server-section__fieldset-wrapper">
                <fieldset>
                  <legend>Сетевой порт 2</legend>
                  <select name="netport2">
                    <option value="Нет">1 Gbit/s</option>
                  </select>
                </fieldset>
                <p className="server-section__price">19 000 тг/мес</p>
              </div>
            </div>
          </div>
          <div className="server-section__memory">
            <div className="server-section__memory-wrapper">
              <img
                src="/ps_test/img4.svg"
                alt="memory"
                width={35}
                height={35}
              />
              <div className="server-section__fieldset-wrapper">
                <fieldset>
                  <legend>ОЗУ</legend>
                  <select name="memory">
                    <option value="32 Гб">32 Гб</option>
                  </select>
                </fieldset>
                <p className="server-section__price">19 000 тг/мес</p>
              </div>
            </div>
          </div>
          <div className="server-section__disc3">
            <div className="server-section__disc3-wrapper">
              <img src="/ps_test/img1.svg" alt="disc3" width={35} height={35} />
              <div className="server-section__fieldset-wrapper">
                <fieldset>
                  <legend>Диск 3</legend>
                  <select name="disc3">
                    <option value="Нет">Нет</option>
                  </select>
                </fieldset>
                <p className="server-section__price">0 тг/мес</p>
              </div>
            </div>
          </div>
          <div className="server-section__controller">
            <div className="server-section__controller-wrapper">
              <img
                src="/ps_test/img3.svg"
                alt="dcontroller"
                width={35}
                height={35}
              />
              <div className="server-section__fieldset-wrapper">
                <fieldset>
                  <legend>RAID 12Gbit/s</legend>
                  <select name="controller">
                    <option value="Нет">Нет</option>
                  </select>
                </fieldset>
                <p className="server-section__price">0 тг/мес</p>
              </div>
            </div>
          </div>
          <div className="server-section__description">
            <p>
              Все сервера комплектуются двумя блоками питания и подключаются к
              независимым ниниям электроснабжения
            </p>
            <p>
              {" "}
              <span className="server-section__total-price">232 000</span>{" "}
              тг/мес
            </p>
          </div>
        </div>
        <div className="server-section__button">
          <button>Добавить сервер</button>
        </div>
      </div>
    </div>
  );
};

export default ServerOne;
