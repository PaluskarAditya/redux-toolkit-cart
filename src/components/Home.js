import React, { useEffect, useState } from 'react'
import Prod from './Prod'
import { BarLoader } from 'react-spinners'

export default function Home() {
	const [products, setProd] = useState([])
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		const fetchProd = async () => {
			setLoading(true)
			if (loading) {
				<BarLoader loading={loading} size={150}/>
			}
			const uri = 'https://fakestoreapi.com/products'
			const res = await fetch(uri)
			const data = await res.json()
			// console.log(data)
			setProd(data)
			setLoading(false)
		}
		fetchProd()
	}, [])

	return (
		<div className='all-products'>
			{
				products.map(prod => {
					return <Prod key={prod.id} image={prod.image} title={prod.title} prod={prod} price={prod.price} />
				})
			}
		</div>
	)
}
