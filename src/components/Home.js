import React, { useEffect, useState } from 'react'
import Prod from './Prod'

export default function Home() {
	const [products, setProd] = useState([])

	useEffect(() => {
		const fetchProd = async () => {
			const uri = 'https://fakestoreapi.com/products'
			const res = await fetch(uri)
			const data = await res.json()
			// console.log(data)
			setProd(data)
		}
		fetchProd()
	}, [])

	return (
		<div className='all-products'>
			{
				products.map(prod=>{
					return <Prod key={prod.id} image={prod.image} title={prod.title} prod={prod} price={prod.price}/>
				})
			}
		</div>
	)
}
