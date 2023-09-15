import './styles.css'
import Hero from '../../components/Hero';
import Header from '../../components/Header';
import Main from '../../components/Main';
import Menu from '../../components/Menu';

function App(props) {
  return (
    <div>
      <Header />
      <div className='container-main'>
        <Hero />
        <div className='menu-main'>
        <Menu />
        <Main page={props.page}/>
        </div>
      </div>
    </div>
  );
}

export default App;
