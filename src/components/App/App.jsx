import AppRoutes from '../Routes/Routes'
import Sidebar from '../Sidebar/Sidebar'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const App = () => {
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
