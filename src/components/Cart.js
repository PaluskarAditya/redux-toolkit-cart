import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clear, remove } from '../store/cartSlice'

export default function Cart() {
  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch()
  const handleClick = (id) => {
    dispatch(remove(id))
  }

  const handleClear = () => [
    dispatch(clear())
  ]

  let total = 0

  return (
    <div className="cart">
      {cart.length>0?cart.map(prod=>{
        total+=prod.price
        return <div key={prod.id} className='cart-product'>
              <img src={prod.image} className='cart-img' alt="" />
              <h4>{prod.title}</h4>
              <h5>${prod.price}</h5>
              <button className='btn' onClick={()=>{handleClick(prod.id)}}>remove</button>
          </div>
      }):'no item in cart'}
      <p>total: ${total.toFixed(2)}</p>
      {total===0?'':<button className="btn" onClick={handleClear}>clear cart</button>}
      
    </div>
  )
}
