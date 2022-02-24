import {Text, Button, FlatList} from 'native-base'
import { useContext, useEffect } from 'react';
import { getProducts } from '../../Actions/Actions';
import { ProductsContext } from '../../Context/context';
import ProductCard from '../Details/ProductCard';
const List = (props) => {
    const {state, dispatch} = useContext(ProductsContext);
    console.log(state);
    useEffect(()=>{
        const action =  async()=>{ //resolve the promise of this action by async or then
            dispatch(await getProducts())
        }
        action();
    },[])
    return(
        <>
        <FlatList
        data={state.products} 
        renderItem={({item: product})=>(
            <ProductCard product={product} {...props} />
        )}
        />
        </>
    )
}

export default List;