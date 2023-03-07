import React from 'react';
import  Container  from '../../utils/Container';
import logo from '../../images/storelogo.svg'
import './Header.scss';
import { useTranslation } from 'react-i18next';
import { i18n } from '../../language/i18next';
import { Link } from 'react-router-dom';
import {AiOutlineEllipsis} from 'react-icons/ai';
import {BsChevronDown} from 'react-icons/bs';
const Header = () => {
    const {t} = useTranslation();
    function translationLang(e){
        e.preventDefault();
        if(e.target.value === "Ру"){
            i18n.changeLanguage('ru')
        }
        else if(e.target.value === "O'z"){
            i18n.changeLanguage('uz')
        }
        else if(e.target.value === "En"){
            i18n.changeLanguage('en')
        }
        else{
            i18n.changeLanguage('ru')
        }
    }
    return (
        <header className='header'>
            <Container>
                <div className='header-item'>
                <img src={logo} alt="" />
                 <div className='language'>
                    <span className={localStorage.getItem("lang") === "ru" && "active-lang"} onClick={() => i18n.changeLanguage('ru')}>Ру</span>
                    <span className={localStorage.getItem("lang") === "uz" && "active-lang"} onClick={() => i18n.changeLanguage('uz')}>O'z</span>
                    <span className={localStorage.getItem("lang") === "en" && "active-lang"} onClick={() => i18n.changeLanguage('en')}>En</span>
                 </div>
                 <div className='select-language'>
                 <BsChevronDown className='down'/>
                 <select onChange={translationLang}>
                    <option>Ру</option>
                    <option>O'z</option>
                    <option>En</option>
                 </select>
                 <AiOutlineEllipsis/>
                 </div>
                </div>
            </Container>
        </header>
    );
}

export default Header;
