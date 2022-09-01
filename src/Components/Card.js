import React from 'react'
import './Carrousel.css';


function Card({prod}) {
  return (
    <div className="col-md-3 col-12 mx-auto">
  
    <a href="" className="card">
    <img src={require('../images/product-1.png')} className="card-image"/>
      <div className="card__overlay">
        <div className="card__header">
          <div className="card__header-text">
            <h3 className="card__title">{prod.cosa}</h3>            
          </div>
        </div>
        <p className="card__description">{prod.precio}</p>
      </div>
    </a>      
</div>
  )
}

export default Card