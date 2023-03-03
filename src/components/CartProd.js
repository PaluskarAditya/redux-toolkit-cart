import React from 'react'
import { useDispatch } from 'react-redux'
import { remove } from '../store/cartSlice'

export default function CartProd(props) {
	const dispatch = useDispatch()
	const handleClick = (id) => {
		dispatch(remove(id))
	}
	const { image, title, price, id } = props
	return (
		<div className='cart-product'>
        <img src={image} className='cart-img' alt="" />
        <h4>{title}</h4>
        <h5>${price}</h5>
        <button className='btn' onClick={()=>{handleClick(id)}}>remove</button>
    </div>
	)
}
