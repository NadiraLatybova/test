import React, {useContext} from 'react';
import './Card.scss'
import pizza1 from '../assets/pizza.avif'
import { MdFavoriteBorder,MdFavorite} from  "react-icons/md";
import {CustomContext} from "../../store/store";


const Card = ({item}) => {

    const {favorites, changeFavorites} = useContext(CustomContext)
    return (
        <div className='card'>
            <span onClick={()=>changeFavorites(item.id)} className='card__favorite'>
                {
                   favorites.includes(item.id)?
                        <MdFavorite color={'red'}/>
                        : <MdFavoriteBorder/>
                }


            </span>

                <img className='card__img' src={pizza1} alt=""/>

            <div className='card__row'>
                <h2 className='card__title'>{item.title}</h2>
                <p className='card__text'>{item.description}</p>
                <div className='card__content'>
                    <button className='card__content-btn'>Выбрать</button>
                    <p className='card__content-price'>{item.price} с</p>
                </div>
            </div>

        </div>


    );
};

export default Card;