

import React from 'react'
// import { NavLink } from 'react-router-dom'
import FormatPrice from '../helpers/FormatPrice';
const ProductCard = (props) => {
//   const { id, name, image, price, category } = currElem;
    console.log("got the props",props);
  return (
    // <NavLink to={`/SingleProduct/${id}`}>
    //     <div className='card'>
    //         <figure>
    //             <img src={image} alt={name} />
    //             <figcaption className='caption'>{category}</figcaption>
    //         </figure>

    //         <div className='card-data'>
    //             <div className='card-data-flex'>
    //                 <h3>{name}</h3>
    //                 <p className="card-data--price"> { <FormatPrice price={price} /> } </p>
    //             </div>
    //         </div>
    //     </div>

    // </NavLink>
   
    props.items.map((item)=>(
        <div key={item.id} className="card" onClick={()=>props.selectItem(item)}>
            <figure>
                <img src={item.image} alt={item.FormatPricename} />
                <figcaption className="caption">{item.category}</figcaption>
            </figure>

            <div className="card-data">
                <div className="card-data-flex">
                    <h3>{item.name}</h3>
                    <p className="card-data--price"> {<FormatPrice price={item.price} />} </p>
                </div>
            </div>
        </div>
    ))
  )
};

export default ProductCard;