import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../context/ShopContext'
import Item from '../item/Item'

const ShopCategory = (props) => {
  const {all_prodcut} = useContext(ShopContext)
  return (
    <div className='shopCategory'>
      {/* <img className='shopCategory-banner' src={props.banner} alt="" /> */}
      <div className="shopCategory-indexSort">
      
       
      </div>
      <div className="category-prodcuts">
        {all_prodcut.map((item , i )=>{
          if(props.category === item.category){
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} unit={item.unit}/>
          }
           else{
            return null
           }
        })}
      </div>
    </div>
  )
}

export default ShopCategory