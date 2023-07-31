import React from 'react'
import Poster from '../Poster/Poster'
import { useDispatch, useSelector } from 'react-redux'
import Products from '../Products/Products'
import Categories from '../Categories/Categories'
import Banner from '../Banner/Banner'
import { filterByPrice } from '../../features/products/productsSlice'
const Home = () => {
	const dispatch = useDispatch()
	const { products: {list, filtered}, categories } = useSelector((state) => state)

	React.useEffect(() => {
		if (!list.length) return

		dispatch(filterByPrice())
	}, [dispatch, list.length])


	return (
		<>
			<Poster />
			<Products title="Trending" products={list} amount={5} />
			<Categories title="Worth seeing" categories={categories.list} amount={5} />
			<Banner />
			<Products title="Less than 100$" products={filtered} amount={5} />
		</>
	)
}

export default Home
