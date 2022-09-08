import {number, shape, string} from 'prop-types'

export const ProductoShape = shape({
    id: number.isRequired,
    imagen: string.isRequired, 
    titulo:string.isRequired,
    descripcion: string, 
    precio: number.isRequired
})