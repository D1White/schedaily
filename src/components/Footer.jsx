import React from "react";

import mail from "../assets/img/mail.svg";
import github from "../assets/img/github.svg";
import telegram from "../assets/img/telegram.svg";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer__tagline">
          <span className="logo">Schedaily</span>
          <span className="footer__tagline__text">
            - сайт созданый студентом для студентов
          </span>
        </div>
        <div className="footer__a">
          <span>
            Информация и файл рассписания взят с сайта
            <a href="http://omc.univ.kiev.ua/" rel="noreferrer" target="_blank">
              Оптико-механического колледжа
            </a>
            .
          </span>
        </div>
        <div className="footer__contacts">
          <span className="footer__contacts__text">
            Контакты для обратной связи
          </span>
          <div className="footer__contacts__btns">
            <a
              href="mailto:danilo.bilyi@gmail.com"
              rel="noreferrer"
              target="_blank"
            >
              <div className="footer__contact">
                <img src={mail} alt="mail" />
              </div>
            </a>
            <a
              href="https://github.com/D1White"
              rel="noreferrer"
              target="_blank"
            >
              <div className="footer__contact">
                <img src={github} alt="github" />
              </div>
            </a>
            <a href="https://t.me/d_white" rel="noreferrer" target="_blank">
              <div className="footer__contact">
                <img src={telegram} alt="telegram" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
