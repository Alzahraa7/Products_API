import axios from "axios";
const baseURL ='https://fakestoreapi.com/products';

export const getProducts = async () =>{
    let products = [];
    try{ //handling error
        const response = await axios.get(baseURL);
        products = response.data;
    }
    catch(error){
        console.log(error);
    }
    return {
        type:'PRODUCT_LIST',
        payload:products
    }
}

export const getProductsDetails = async (id) =>{
    let productDetails = {};
    try{ //handling error
        const response = await axios.get(`${baseURL}/${id}`);
        productDetails = response.data;
    }
    catch(error){
        console.log(error);
    }
    return {
        type:'PRODUCT_DETAILS',
        payload:productDetails
    }
}

export const clear = ()=>{
    return{
        type:'CLEAR',
        
    }
}