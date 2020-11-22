import React from "react";

function Header() {
  const date = new Date();
  const options = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    weekday: 'short',
    timezone: 'UTC',
  };

  const [clickNum, setClickNum] = React.useState(0);
  const [logoText, setLogoText] = React.useState('Schedaily');

  React.useEffect(() => {
    if (clickNum === 5) {
      setLogoText('Sharaga');
    }else {
      setLogoText('Schedaily');
    }
  }, [clickNum])

  const logoClick = () => {
    setClickNum(clickNum + 1);
  }

  return (
    <header>
      <div className="header-container">
        <span className="logo" onClick={logoClick}>{logoText}</span>
        <span className="header__date">{date.toLocaleString("ru", options).slice(0,12)}</span>
      </div>
    </header>
  );
}

export default Header;
