import AppRoutes from '../Routes/Routes'
import Sidebar from '../Sidebar/Sidebar'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { useDispatch } from 'react-redux'
import { getCategories } from '../../features/categories/categoriesSlice'
import { useEffect } from 'react'
import { getProducts } from '../../features/products/productsSlice'

const App = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getProducts())
		dispatch(getCategories())
	}, [dispatch])

	return (
		<div className="app">
			<Header />
			<div className="container">
				<Sidebar />
				<AppRoutes />
			</div>
			<Footer />
		</div>
	)
}

export default App
