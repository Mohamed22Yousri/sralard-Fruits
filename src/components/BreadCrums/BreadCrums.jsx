import React from 'react'
import './Breadcrums.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'

const BreadCrums = (props) => {
    const {prodcut} = props
  return (
    <div className='breadCrums'>
         الرئيسية <img src={arrow_icon} alt="" /> {prodcut.category} <img src={arrow_icon} alt="" /> {prodcut.name}
    </div>
  )
}

export default BreadCrums