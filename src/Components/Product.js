import React from 'react';



const Product = () => {
	return (
    <>
        <div className='detailsPage mt-5 mb-5' id="garden">
            <div className='primera' style={{marginTop: "10%", marginBottom: "10%"}}>
                <img src={require('../images/product-1.png')} alt="Image" className="img-fluid" />
            </div>
            <div className='segunda' style={{textAlign: "left", marginBottom: "10%", marginTop: "10%"}}>
                <h1 className="mb-3" style={{color: "#3b5d50"}}>Nordic chair</h1>
                <h4 className="mr-5 ml-5 mb-3" style={{color: "Gray", fontWeight: "lighter", marginRight: "10%"}}>Como base, lleva una estructura metálica muy resistente, con acabado en negro. La silla está tapizada en poliéster suave y se puede adquirir en varios colores alegres, que aportarán un toque desenfadado y único a tu salón.</h4>
                <b><h1 style={{color: "#3b5d50", fontWeight: "bolder", marginBottom: "5%"}}>$15.499</h1></b>
                <button className="btn btn-outline-black" type="button">Agregar al carrito</button>

            </div>
        </div>
    </>
)
}

export default Product;
