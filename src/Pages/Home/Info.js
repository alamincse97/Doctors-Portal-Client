import React from 'react';
import clock from '../../assets/icons/clock.svg';
import InfoCard from './InfoCard';

const info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
           <InfoCard img={clock}></InfoCard> 
           <InfoCard img={clock}></InfoCard> 
           <InfoCard img={clock}></InfoCard> 
        </div>
    );
};

export default info;