import React, { useContext, useState } from 'react';
import { CartContext } from '../Context/cartContext';

// snackbar 
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Product({ producto }) {
    const { agregarProducto, carrito, cantidadTot } = useContext(CartContext);

    console.log('carro', carrito);

    console.log('tot baby', cantidadTot);

    const { id, imagen, titulo, descripcion, precio } = producto;

    const [open, setOpen] = useState(false);

    const handleClick = () => {
        agregarProducto(id)
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
    return (
        <>
            <div className='detailsPage mt-5 mb-5' id="garden">
                <div className='primera' style={{ marginTop: "10%", marginBottom: "10%" }}>
                    <img src={imagen} alt="imagenProducto" className="img-fluid" />
                </div>
                <div className='segunda' style={{ textAlign: "left", marginBottom: "10%", marginTop: "10%" }}>
                    <h1 className="mb-3" style={{ color: "#3b5d50" }}>{titulo}</h1>
                    <h4 className="mr-5 ml-5 mb-3" style={{ color: "Gray", fontWeight: "lighter", marginRight: "10%" }}>{descripcion}</h4>
                    <b><h1 style={{ color: "#3b5d50", fontWeight: "bolder", marginBottom: "5%" }}>${precio}</h1></b>
                    <button className="btn btn-outline-black" type="button" onClick={() => handleClick()}>Agregar al carrito</button>
                    
                    <Stack spacing={2} sx={{ width: '100%' }}>
                        
                        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                                El producto fue agregado correctamente!
                            </Alert>
                        </Snackbar>

                    </Stack>
                </div>
            </div>
        </>
    )
}


export default Product;
