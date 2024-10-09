import React from 'react';
import svg5 from '../assets/svg5.svg'
import './Path.scss'

const Path = () => {
    return (
        <div className='path'>
            <div className='container'>
                <div className='path__img'>
                    <img className='path__img-pic' src={svg5} alt=""/>
                </div>
                    <h2 className='path__title'>Акции</h2>
                </div>
        </div>
    );
};

export default Path;