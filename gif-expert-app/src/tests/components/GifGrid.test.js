import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom'

import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';

jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en el gif grid', () => {

    const category = 'Star Wars';
    
    test('debe mostrarse correctamente', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading:true,
        });

        const wrapper = shallow(<GifGrid category={category} />);
        expect(wrapper).toMatchSnapshot();
    });


    test('debe de mostrar items cuando se cargan imagenes useFetchGifs', () => {

        const gifs = [
            {id: '1', url: 'www.something.com/img', title: 'Something'},
            {id: '2', url: 'www.something.com/img2', title: 'Something2'}
        ];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading:false,
        });

        const wrapper = shallow(<GifGrid category={category} />);

        expect( wrapper.find('p').exists()   ).toBe(false);

        expect( wrapper.find('GifGridItem').length ).toBe(gifs.length)
        
    });
    
    
    
})
