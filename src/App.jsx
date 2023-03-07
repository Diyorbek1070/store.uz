import { NavLink } from 'react-router-dom';
import './App.scss';
import Header from './components/header/Header';
import Search from './components/search/Search';
import Routes from './routes';
import Container from './utils/Container';
import { useTranslation } from 'react-i18next';
function App() {
  const {t} = useTranslation();
  return (
    <div className="App">
      <Header/>
      <Search/>
      <Container>
      <div className='workSchedule-navbar'>
        <div>
        <Routes/>
         <div className='navbar'>
           <NavLink className="navbar__link" activeClassName='navbar__link-active' to="/Информация">{t("navbar_link1")}</NavLink>
           <NavLink className="navbar__link" activeClassName='navbar__link-active' to="/Фотогалерея">{t("navbar_link2")}</NavLink>
           <NavLink className="navbar__link" activeClassName='navbar__link-active' exact to="/График работы">{t("navbar_link3")}</NavLink>
           <NavLink className="navbar__link" activeClassName='navbar__link-active' to="/Виды деятельности">{t("navbar_link4")}</NavLink>
         </div>
        </div>
       <div className='workSchedule-item2'>
       </div>
      </div>
      </Container>
    </div>
  );
}

export default App;
