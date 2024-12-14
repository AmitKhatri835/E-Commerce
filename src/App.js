import './App.css';
import Category from './components/Category';
import axios from 'axios';
import Products from './components/Products';
import { useEffect } from 'react';
import { useState } from 'react';

function App() {

  let [categories, setCategories] = useState([])
  let [finalPro, setFinalPro] = useState([])
  let [catName, setCatName] = useState("")

  let getCategory = () =>{
      axios.get('https://dummyjson.com/products/category-list')
      .then((res)=>res.data)
      .then((finalRes)=>{
        setCategories(finalRes);
      })
    }

    let getProducts=()=>{
      axios.get('https://dummyjson.com/products')
      .then((proRes)=>proRes.data)
      .then((finalRes)=>{
        setFinalPro(finalRes.products);
      })
    }

    useEffect(()=>{
      getCategory();
      getProducts();
    },[]);

    useEffect(()=>{
      if(catName!==""){
          axios.get(`https://dummyjson.com/products/category/${catName}`)
          .then((proRes)=>proRes.data)
          .then((finalRes)=>{
            setFinalPro(finalRes.products);
          })
        }
    },[catName])

    let pitems = finalPro.map((v,i)=>{
      return(
        <Products key={i} items={v} />
      )
    })
    
  return (
    <>
      <div className="py-[40px] max-w-[1320px] mx-[auto] ">
        <h1 className="text-[40px] pb-[30px] text-center font-bold " >Our Products</h1>
        <div className="grid grid-cols-[30%_auto] gap-[20px]">
          <div>
            <Category categories={categories} setCatName={setCatName} />
          </div>
          <div>
            <div className="grid grid-cols-3 gap-4">
              {
                finalPro.length>=1?
              pitems
              :
              "No Items Found"
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
