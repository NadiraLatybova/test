import {createContext, useEffect, useState} from "react"
import axios from "axios";



export const CustomContext = createContext()

const Context = (props)=>{

    const [products,setProducts]= useState([])
    const [favorites,setFavorites]= useState([])

    useEffect(()=>{
        axios('http://localhost:8080/products')
            .then(({data})=>setProducts(data))

        if (localStorage.getItem('favorites')!== null){
            setFavorites(JSON.parse(localStorage.getItem('favorites')))
        }
    },[])


     const changeFavorites = (id)=>{
        if (favorites.includes(id)){
            setFavorites((prev)=>prev.filter(item=> item !== id))
        }else {
            setFavorites((prev)=>[...prev,id])
        }

     }

     useEffect(()=>{
         localStorage.setItem('favorites',JSON.stringify(favorites))
     },[favorites])


    let value = {
        products,
        favorites,
        changeFavorites
    }

    return <CustomContext.Provider value={value}>
        {props.children}
    </CustomContext.Provider>
}

export default Context