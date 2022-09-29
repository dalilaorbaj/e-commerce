import React, {useContext} from 'react'
import { ProductContext } from '../Context/productsContext';
import CardProduct from './CardProduct'


const AllProducts = () =>  {
    const {productos} = useContext(ProductContext);

  return (
    <>
<div className="row">
    {productos.map((producto) => {
        return (
            <CardProduct  producto={producto} key={producto.id} />
        )
    })}
    
</div>
    
    </>
  )
}


export default AllProducts