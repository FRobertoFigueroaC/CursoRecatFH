import React, {useState} from 'react';
import {AddCategory} from "./components/AddCategory";

export const GiftExpertApp = () => {

    const [categories, setCategories] = useState(['Terror', 'Comedia', 'Drama']);


    return(
        <>
            <h2>GiftExpertApp</h2>
            {/*<AddCategory setCategories={setCategories}/>*/}
            <AddCategory/>
            <hr/>

            <ol>
                {
                    categories.map((category,i) => <li key={i}>{category}</li>)
                }
            </ol>
        </>
    )
}

export default GiftExpertApp;