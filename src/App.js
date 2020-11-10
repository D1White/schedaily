import arrow from './assets/img/arrow.svg';
import radio_filled from './assets/img/radio_filled.svg';
import radio from './assets/img/radio.svg';
import download from './assets/img/download.svg';


import { Header, Footer } from './components';

function App() {
  return (
    <div>
      <Header />
      <main>
        <div className="container">
          <div className="main-content">
            <div className="main__header">
              <div className="main__calendar">
                <div className="calendar__component">
                  <span className="calendar__dayOfWeek">Пн</span>
                  <span className="calendar__date">14</span>
                </div>
                <div className="calendar__component">
                  <span className="calendar__dayOfWeek">Вт</span>
                  <span className="calendar__date">15</span>
                </div>
                <div className="calendar__component">
                  <span className="calendar__dayOfWeek">Ср</span>
                  <span className="calendar__date">16</span>
                </div>
                <div className="calendar__component active">
                  <span className="calendar__dayOfWeek active">Чт</span>
                  <span className="calendar__date active">17</span>
                </div>
                <div className="calendar__component">
                  <span className="calendar__dayOfWeek">Пт</span>
                  <span className="calendar__date">18</span>
                </div>
                <div className="calendar__component disable">
                  <span className="calendar__dayOfWeek disable">Сб</span>
                  <span className="calendar__date disable">19</span>
                </div>
                <div className="calendar__component disable">
                  <span className="calendar__dayOfWeek disable">Вс</span>
                  <span className="calendar__date disable">20</span>
                </div>
              </div>
              <div className="dropdown">
                <div className="dropdownbtn">
                  <span className="dropdownbtn__text">Группа</span>
                  <img src={arrow} alt='arrow' className="dropdownbtn__ico invert" />
                </div>
                <ul className="dropdown-content visible">
                  <li className="dropdown__component">ИПЗ-32</li>
                  <li className="dropdown__component">ИПЗ-32</li>
                </ul>
              </div>
            </div>
            <div className="schedule">
              <div className="schedule__component">
                <div className="schedule__time">
                  <span className="schedule__time-start">09:00</span>
                  <span className="schedule__time-end">10:20</span>
                </div>

                <div className="timeline">
                  <img src={radio_filled}  alt='radio filled' />
                  <hr className="timeline__line" />
                </div>

                <div className="schedule__info active">
                  <h2 className="schedule__couple active">
                    Архітектура комп`ютера.
                  </h2>
                  <div className="schedule__info__footer">
                    <span className="schedule__teacher active">
                      Заболотний В.О;
                    </span>
                    <span className="schedule__teacher active">каб. 118</span>
                  </div>
                </div>
              </div>
              <div className="schedule__component">
                <div className="schedule__time">
                  <span className="schedule__time-start">10:30</span>
                  <span className="schedule__time-end">11:50</span>
                </div>

                <div className="timeline">
                  <img src={radio} alt='radio' className="timeline__ico" />
                  <hr className="timeline__line" />
                </div>

                <div className="schedule__info">
                  <h2 className="schedule__couple">Операційні системи</h2>
                  <div className="schedule__info__footer">
                    <span className="schedule__teacher">Заболотний В.О;</span>
                    <span className="schedule__teacher">каб. 118</span>
                  </div>
                </div>
              </div>
              <div className="schedule__component">
                <div className="schedule__time">
                  <span className="schedule__time-start">12:10</span>
                  <span className="schedule__time-end">13:30</span>
                </div>

                <div className="timeline">
                  <img src={radio} alt='radio' className="timeline__ico" />
                  <hr className="timeline__line" />
                </div>

                <div className="schedule__info">
                  <h2 className="schedule__couple">Іноземна мова (за ПРС)</h2>
                  <div className="schedule__info__footer">
                    <span className="schedule__teacher">
                      Ковтун Г.В. (підгр. 1), Войлошникова Т.В. (п2);
                    </span>
                    <span className="schedule__teacher">онлайн</span>
                  </div>
                </div>
              </div>
              <div className="schedule__component">
                <div className="schedule__time">
                  <span className="schedule__time-start">13:40</span>
                  <span className="schedule__time-end">15:00</span>
                </div>

                <div className="timeline">
                  <img src={radio} alt='radio' className="timeline__ico" />
                </div>

                <div className="schedule__info">
                  <h2 className="schedule__couple">Операційні системи</h2>
                  <div className="schedule__info__footer">
                    <span className="schedule__teacher">Заболотний В.О;</span>
                    <span className="schedule__teacher">онлайн</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="lastUpdate">
              <span className="lastUpdate__text">Время последнего обновления:</span>
              <span className="lastUpdate__text">Oct 28 2020, 14:28</span>
            </div>
            <div className="download">
              <button className="download-btn">
                <span>Скачать рассписание</span>
                <img src={download} alt="download" />
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
