import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchSchedule } from './redux/actions/schedule';

import { Header, Footer, Dropdown, Calendar, Schedule, LastUpdate, DownloadBtn } from './components';

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
            <DownloadBtn />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
