import React from 'react'
import { useDispatch } from 'react-redux'
import { add } from '../store/cartSlice'

export default function Prod(props) {
    const { image, title, price, prod } = props
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(add(prod))
    }

  return (
    <div className='product'>
        <img src={image} alt="" />
        <h4>{title}</h4>
        <h5>${price}</h5>
        <button className='btn' onClick={handleClick}>add to cart</button>
    </div>
  )
}
