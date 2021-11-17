import React from 'react';
import {shallow} from 'enzyme';
import { GifGridItem } from "../../components/GifGridItem";

describe('Pruebas en <GifGridItem/>', () => {
    const title = 'Titulo';
    const url = 'https://localhost/algo.jpg'

    const wrapper = shallow(<GifGridItem title={title} url={url}/>);

    test('debe mostrar el componente correctamente', () => {    
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de tener un parrafo con el title', () => {
        
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    });

    test('debe de la imagen igual al url y el alt igual al title', () => {
        
        const img = wrapper.find('img');
        expect(img.props().src).toBe(url);
        expect(img.props().alt).toBe(title);
    });
    
    test('debe tener la clase el animate_bounceIn', () => {
        const div = wrapper.find('div')

        const className = div.props().className;

        expect(className.includes('animate__bounceIn')).toBe(true);
    })
    

    
})