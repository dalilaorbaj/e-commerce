import React from 'react';

const Product = (producto) => {

    const {imagen, titulo, descripcion, precio} = producto;
    return (
    <>
        <div className='detailsPage mt-5 mb-5' id="garden">
            <div className='primera' style={{marginTop: "10%", marginBottom: "10%"}}>
                <img src={require({imagen})} className="img-fluid" alt=""/>
            </div>
            <div className='segunda' style={{textAlign: "left", marginBottom: "10%", marginTop: "10%"}}>
                <h1 className="mb-3" style={{color: "#3b5d50"}}>{titulo}</h1>
                <h4 className="mr-5 ml-5 mb-3" style={{color: "Gray", fontWeight: "lighter", marginRight: "10%"}}>{descripcion}</h4>
                <b><h1 style={{color: "#3b5d50", fontWeight: "bolder", marginBottom: "5%"}}>${precio}</h1></b>
                <button className="btn btn-outline-black" type="button">Agregar al carrito</button>

            </div>
        </div>
    </>
)
}


export default Product;