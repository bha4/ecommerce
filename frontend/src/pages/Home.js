import React, { Fragment, useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { useSearchParams } from 'react-router-dom';


const Home = () => {
  const [products,setProducts]=useState([]);
  const [searchParams,setSearchParams]=useSearchParams()
  useEffect(()=>{
    fetch(process.env.React_APP_API_URL+'/product?'+searchParams)
    .then((res)=>res.json())
    .then((json)=>setProducts(json.products))
  },[searchParams])
  return (
    <Fragment>
        <h1 id="products_heading">Latest Products</h1>

        <section id="products" className="container mt-5">
        <div className="row">
        {products.map(product=><ProductCard product={product}/>)}   
        
        </div>
        </section>
    </Fragment>
  )
}

export default Home;