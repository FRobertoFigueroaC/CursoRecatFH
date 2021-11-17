import { useFetchGifs } from "../../hooks/useFetchGifs"
import { renderHook }   from "@testing-library/react-hooks";


describe('pruebas en el hook useFetchGifs', () => {
    
    test('debe retornar el estado inicial', async() => {
        
        const category = 'Batman';
        
        const {result, waitForNextUpdate} = renderHook( () => useFetchGifs(category));
        
        const { data:images, loading } = result.current;

        await waitForNextUpdate();

        expect( images).toEqual([]);
        expect( loading).toBeTruthy();

    });
    
    test('debe rretornar un arreglo de imgs y loading en false', async() => {
        
        const category = 'Batman';
        
        const {result, waitForNextUpdate} = renderHook( () => useFetchGifs(category));
        await waitForNextUpdate();
        
        const { data:images, loading } = result.current;

        expect( images.length).toEqual(10);
        expect( loading).toBeFalsy();

    });
    
})
