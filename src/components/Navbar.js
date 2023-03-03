import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { clear } from '../store/cartSlice'

export default function Navbar() {
	const cart = useSelector(state=>state.cart)
	return (
		<nav className="nav">
			<ul className="ul-left">
				<li>
					<Link to="/">Home</Link>
				</li>
			</ul>
			<ul className="ul-right">
				<li>
					<Link to="/cart">Cart</Link>
				</li>
				<p className='cart-price'>Cart: {cart.length}</p>
			</ul>
		</nav>
	)
}
