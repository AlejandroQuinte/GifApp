import React, { useState } from 'react';
import {AddCatergory} from './components/AddCatergory'
import { GifGrid } from './components/GifGrid';

 export const GifExpertApp = ()=>{

    //const categories = ['One Punch','Samurai X','Dragon Ball'];
    const [categories, setCategories] = useState(['One Punch Man']);

    // const handleAdd = (value)=>{
    //     setCategories([...categories,value]);
    // }


    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCatergory setCategories={setCategories}/>
            <hr/>


            <ol>
                {
                    categories.map(category=> 
                        <GifGrid
                            key={category}
                            category={category}
                        />
                    )
                }
            </ol>
        </>
    );
};
