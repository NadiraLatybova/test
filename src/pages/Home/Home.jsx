import React, {useContext, useEffect} from 'react';
import Card from "../../components/Card/Card";
import './Home.scss'
import { CiFilter } from "react-icons/ci"
import {CustomContext} from "../../store/store";
import Path from "../../components/Path/Path";




const Home = () => {

    const {products}= useContext(CustomContext)


    console.log(products)

    return (

        <div className='home'>

            <div className='container'>
                <div className='home__row-content'>
                    <Path/>
                    <Path/>
                    <Path/>
                    <Path/>
                    <Path/>
                    <Path/>
                    <Path/>
                    <Path/>
                </div>

                <div className='home__content'>
                    <h1 className='home__content-title'>Пицца</h1>
                    <div className='home__content-block'>
                        <CiFilter />
                        Фильтры
                    </div>
                </div>
                <div className='home__row'>
                    {
                        products.map((item)=>(
                                <Card key={item.id} item={item}/>
                            ))
                    }
                </div>

            </div>


        </div>
    );
};

export default Home;