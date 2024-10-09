import React from 'react';
import './Header.scss'
import svg3 from '../assets/svg3.svg'
import svg4 from '../assets/svg4.svg'
import {MdFavorite} from "react-icons/md";
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <header className='header'>
            <div className="container">
                <div className='header__content'>
                    <div className='header__left'>
                        <img src={svg3} alt=""/>
                        <h2 className='header__title'>Куда пицца</h2>
                    </div>
                    <div className='header__icon'>
           <span className='header__icon-favorite'>
               <Link to='/favorite'>
                          <MdFavorite color={'red'}/>
               </Link>

           </span>

                        <img src={svg4} alt=""/>
                    </div>
                </div>

            </div>
        </header>
    );
};

export default Header;