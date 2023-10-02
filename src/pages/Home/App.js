import './styles.css'
import Hero from '../../components/Hero';
import Header from '../../components/Header';
import Main from '../../components/Main';
import Menu from '../../components/Menu';
import { useState } from 'react';

function App(props) {

  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  const handleThemeToggle = (newTheme) => {
    setTheme(newTheme);
  };
  return (
    <div data-theme={theme}>
      <div className='fullweb'>
        <Header onToggle={handleThemeToggle} />
        <div className='container-main'>
          <Hero />
          <div className='menu-main'>
            <Menu />
            <Main page={props.page} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
