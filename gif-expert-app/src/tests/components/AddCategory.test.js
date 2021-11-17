import react from "react";
import { AddCategory } from "../../components/AddCategory";
import {shallow} from 'enzyme';

describe('Pruebas en componente AddCategory', () => {

    const setCategories = jest.fn();
    
    let wrapper;
    
    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories}/>);
    })

    test('debe mostrarse correctamente', () => {
        
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de cambiar la caja de texto', () => {

        const input = wrapper.find('input');

        const value = 'Hola mundo';

        input.simulate('change', {
            target: {   value   }
        });

        expect(wrapper.find('p').text().trim()).toBe(value);
        // expect(input.props().value.trim()).toBe(value);
        
    });

    test('NO debe postear la informacion con submit', () => {

        wrapper.find('form').simulate('submit', { preventDefault(){}})

        expect(setCategories).not.toHaveBeenCalled();
        
    });

    test('debe de llamar el setCategories y limpiar caja de texto', () => {
        
        const value = 'Bye world'
        // simular input
        wrapper.find('input').simulate('change', { target: { value } });
        // verificar que el input contenga el value
        expect(wrapper.find('input').prop('value')).toBe(value);
        //simular submit 
        wrapper.find('form').simulate('submit', {preventDefault(){}})
        // llamr set categories
        expect(setCategories).toHaveBeenCalledTimes(1);
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
        // el value de input debe ser ''
        expect(wrapper.find('input').prop('value')).toBe('');
    })
    

    
    
    
    
})
