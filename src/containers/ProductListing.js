import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductComponent from './ProductComponent';
import axios from 'axios';
import { setProducts } from '../redux/actions/productActions';
// import { setProducts } from '_redux_actions_productActions__WEBPACK_IMPORTED_MODULE_2__';

const ProductListing = () => {
    const products = useSelector((state)=>state);
    const dispatch = useDispatch();
    const fetchProducts = async ()=>{
        const response= await axios
        .get("https://fakestoreapi.com/products")
        .catch((err)=>{
            console.log("Err",err);
        });
        dispatch(setProducts(response.data));
    };
    useEffect(() => {
    fetchProducts();
    }, []);

    console.log("Products: ",products);
  return (
    <div className='ui grid container'>
        <ProductComponent/>
        </div>
  )
}

export default ProductListing