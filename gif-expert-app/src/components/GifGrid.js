import React from 'react';
import {useFetchGifs} from "../hooks/useFetchGifs";
import {GifGridItem} from "./GifGridItem";
import PropTypes from 'prop-types';


export const GifGrid = ({ category}) => {

    const {data:images, loading} = useFetchGifs(category)


    return(
        <>
            <h3 className='animate__bounceIn'>{category}</h3>
            {loading && <p className='animate__fadeOutRight'>Loading</p>}
            <div className='card-grid'>
                <ul>
                    {
                        images.map(img => (
                            <GifGridItem key={img.id} {...img }/>
                        ))
                    }
                </ul>
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
}