import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import download from './assets/img/download.svg';

import { fetchSchedule } from './redux/actions/schedule';

import { Header, Footer, Dropdown, Calendar, Schedule, LastUpdate } from './components';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSchedule());
  }, [])// eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <Header />
      <main>
        <div className="container">
          <div className="main-content">
            <div className="main__header">
              <Calendar />
              <Dropdown />
            </div>
            <Schedule />
            <LastUpdate />
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
