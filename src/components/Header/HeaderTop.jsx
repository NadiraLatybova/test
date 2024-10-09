import React from 'react';
import svg2 from '../assets/svg.svg'
import svg from '../assets/vector11.svg'
import svg1 from '../assets/svg1.svg'
import './HeaderTop.scss'
import {Link} from 'react-router-dom'


const HeaderTop = () => {
    return (
        <div className='headerTop'>
            <div className='container'>
                <nav className='headerTop__nav'>
                    <div className='headerTop__left'>
                        <div className='headerTop__loc'>
                            <img src={svg2} alt=""/>
                            Москва
                            <img src={svg} alt=""/>
                        </div>
                        <div className='headerTop__address'>
                            <p className="headerTop__address-text">
                                Проверить адрес
                            </p>
                        </div>
                        <div className='headerTop__time'>
                            <p className="headerTop__time-desc">Среднее время доставки*:</p>
                            <p className='headerTop__time-text'>00:24:19</p>
                        </div>
                    </div>
                    <div className='headerTop__right'>
                        <div className='Время работы: с 11:00 до 23:00__work'>
                            <p className='headerTop__work-text'>Время работы: с 11:00 до 23:00</p>
                        </div>
                        <div className='headerTop__icon'>
                            <img src={svg1} alt=""/>
                            <Link className='headerTop__link' to='/register'>Войти в аккаунт</Link>

                        </div>
                    </div>
                </nav>

            </div>
            <div className='headerTop__line'></div>
        </div>
    );
};

export default HeaderTop;