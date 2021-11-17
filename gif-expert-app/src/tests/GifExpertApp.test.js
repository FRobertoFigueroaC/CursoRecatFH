

import React from 'react';
import { shallow } from "enzyme";
import { GiftExpertApp } from "../GifExpertApp";

describe('Pruebas de GiftExpertApp ', () => {


    test('debe conicidir con snapshot', () => {
        const wrapper = shallow(<GiftExpertApp/>);     

        expect( wrapper).toMatchSnapshot();
    });

    test('debe mostrar una lista de categorias', () => {
        
        const categorias = ['Star Wars', 'Batman'];

        const wrapper = shallow(<GiftExpertApp defaultCategories={categorias}/>);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categorias.length);
    })
    
    
    
});
