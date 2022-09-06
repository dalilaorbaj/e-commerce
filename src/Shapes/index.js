import {number, shape, string} from 'prop-types'

export const ProductoShape = shape({
    imagen: string.isRequired, 
    titulo:string.isRequired,
    descripcion: string, 
    precio: number.isRequired
})