import React from 'react';
import './Search.scss'
import hamburmenu from '../../images/hamburgermenu.svg'
import selecttrange from '../../images/selectrange.png';
import Container  from '../../utils/Container';
import {AiOutlineSearch} from 'react-icons/ai';
import {BsChevronDown} from 'react-icons/bs'
import { useTranslation } from 'react-i18next';
const Search = () => {
    const {t} = useTranslation();
    return (
        <div className='search'>
            <Container>
              <div className='search-item'>
                <img src={hamburmenu} alt="" />
                <form className='search-item__form'>
                    <select>
                        <option value="Taшкент">{t("search_select")}</option>
                    </select>
                    <input type="text" placeholder={t("search_input")}/>
                    <button type='submit'><AiOutlineSearch/></button>
                </form>
              </div>
            </Container>
        </div>
    );
}

export default Search;
