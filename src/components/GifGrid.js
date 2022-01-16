import React from 'react';

import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from './hooks/useFetchGifs';

// import { getGifs } from '../helpers/getGifs'

export const GifGrid = ({ category }) => {

    //llamada a custom HOOK
    const { data:images, loading } = useFetchGifs(category);

    return (

        <>
        <h3 className='card animate__animated animate__fadeIn' > { category } </h3>  
        { loading && <p>Loading</p> }
        <div className='card-grid'>
        {
            images.map(img => (

                <GifGridItem 
                    key = { img.id } 
                    {...img }
                />
            ))
        }
        </div>

        </>

    )
}