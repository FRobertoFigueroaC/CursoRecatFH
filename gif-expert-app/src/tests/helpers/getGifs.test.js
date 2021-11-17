import { getGifs } from "../../helpers/getGifs"


describe('Pruebas con getGifs fetch', () => {
    
    test('debe traer 10 elementos', async() => {
        
        const gifs = await getGifs('Grogu');

        expect(gifs.length).toBe(10);
    })
    
    
    test('el arrgelo debe tener 0 elementos si se envia string vacio', async() => {
        
        const gifs = await getGifs('');

        expect(gifs.length).toBe(0);
    })

    test('el arrgelo debe tener 0 elementos si no se envia nada', async() => {
        
        const gifs = await getGifs();

        expect(gifs.length).toBe(0);
    })
    
})
