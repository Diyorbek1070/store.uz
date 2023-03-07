import React from 'react';
import './WorkSchedule.scss';
import  Container  from '../../utils/Container';
import {TbPencilMinus} from 'react-icons/tb'
import {AiOutlineDown,AiOutlineMail} from 'react-icons/ai'
import {GrLocation} from 'react-icons/gr'
import {BsPinAngle,BsTelephone,BsGlobe} from 'react-icons/bs'
import {BiTimeFive} from 'react-icons/bi'
import xiaomi from '../../images/xiaomi.png'
import { useTranslation } from 'react-i18next';
const WorkSchedule = () => {
   const {t} = useTranslation();
    return (
        <section>
            <Container>
             <div  className='workSchedule'>
             <div className='workSchedule-item'>
                <h1><strong>A-STORE.UZ</strong>{t("workschedule_title")}</h1>
                <p>{t("workschedule_text")}</p>
               <div className='workSchedule-item_info'>
                  <div className='workSchedule-item_info__item'>
                    <div className='info__item__xiaomi'>
                       <img src={xiaomi} alt="" />
                       <div>
                        <p>XIAOMI</p>
                        <TbPencilMinus/><span>{t("info_item_date")}</span>
                       </div>
                    </div>
                    <div className='info__item__map'>    
                    <div>
                    <select>
                        <option value="Филиалы">{t("info_item_select")}</option>
                     </select>
                     <AiOutlineDown/>
                    </div>
                     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.8489953996077!2d69.28566991527546!3d41.355635805926134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef352b49e2ce1%3A0xe6aaa8e6c652842b!2zMTI5INC_0YDQvtGB0L_QtdC60YIg0JDQvNC40YDQsCDQotC10LzRg9GA0LAsINCi0LDRiNC60LXQvdGCLCDQo9C30LHQtdC60LjRgdGC0LDQvQ!5e0!3m2!1sru!2s!4v1678191559641!5m2!1sru!2s" width="200" height="250"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                  </div>
                  <div className='workSchedule-item_info_location'>
                    <GrLocation/><b>{t("info_item_locatsion")}</b>
                    <p><BsPinAngle/> {t("info_item_text")}</p>
                    <div className='info_location__item'>
                      <div className='info_location__item__number'>
                         <BsTelephone/>
                         <div>
                            <a href="tel:+998717777777">998717777777</a>
                            <p>{t("info_item_locatsion_number")}</p>
                         </div>
                      </div>
                      <div className='info_location__item__time'>
                        <BiTimeFive/>
                        <div>
                            <p>{t("info_item_locatsion_time")}<span>{t("info_item_locatsion_time2")}</span></p>
                            <p>{t("info_item_locatsion_time3")}<span>{t("info_item_locatsion_time4")}</span></p>
                        </div>
                      </div>
                      <div className='info_location__item__email'>
                         <div>
                            <BsGlobe/><a href="#">a-store.uz</a>
                         </div>
                         <div>
                            <AiOutlineMail/>
                            <a href="#">{t("info_item_locatsion_email")}</a>
                         </div>
                      </div>
                    </div>
                    <div className='media-map'>
                     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.8489953996077!2d69.28566991527546!3d41.355635805926134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef352b49e2ce1%3A0xe6aaa8e6c652842b!2zMTI5INC_0YDQvtGB0L_QtdC60YIg0JDQvNC40YDQsCDQotC10LzRg9GA0LAsINCi0LDRiNC60LXQvdGCLCDQo9C30LHQtdC60LjRgdGC0LDQvQ!5e0!3m2!1sru!2s!4v1678191559641!5m2!1sru!2s" width="200" height="250"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                     <div>
                    <select>
                        <option value="Филиалы">{t("info_item_select")}</option>
                     </select>
                     <AiOutlineDown/>
                    </div>
                    </div>
                    <p className='info_location__text'>{t("info_lacatsion_text")}</p>
                  </div>
               </div> 
            </div>
             </div>
            </Container>
        </section>
    );
}

export default WorkSchedule;
