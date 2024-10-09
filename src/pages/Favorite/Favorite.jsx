import React, {useContext} from 'react';
import {CustomContext} from "../../store/store";
import Card from "../../components/Card/Card";
import './Favorite.scss'

const Favorite = () => {
    const {favorites, products} = useContext(CustomContext); // Достаем массив всех товаров


    const favoriteItems = products.filter(product => favorites.includes(product.id));

    if (favoriteItems.length) {
        return (
            <section className='favorite'>
                <div className="container">
                    <h2 className='favorite__title'>Избранные товары</h2>
                    <div className="favorite__row">
                        {
                            favoriteItems.map(item => (
                                <Card key={item.id} item={item}/>
                            ))
                        }
                    </div>
                </div>
            </section>
        );
    } else {
        return <h2 className='favorite__text'>Список избранных пуст</h2>
    }
};

export default Favorite;
