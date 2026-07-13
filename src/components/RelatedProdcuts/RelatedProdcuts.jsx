import React from 'react'
import data from '../Assets/data'
import Item from '../item/Item'
import './RelatedProdcuts.css'

const RelatedProdcuts = () => {
  return (
    <div className='relatedProdcuts'>
        <h1>المنتجات</h1>
        <hr/>
        <div className="relatedProdcuts-item">
            {data.map((item , i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
    </div>
  )
}

export default RelatedProdcuts