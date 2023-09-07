import './styles.css'
import Hero from '../../components/Hero';
import Header from '../../components/Header';
import Main from '../../components/Main';
import Menu from '../../components/Menu';

function App() {
  return (
    <div>
      <Header />
      <div className='container-main'>
        <Hero />
        <div className='menu-main'>
        <Menu />
        <Main title='Home' />
        </div>
      </div>
    </div>
  );
}

export default App;
