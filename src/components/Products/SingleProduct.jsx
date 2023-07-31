import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useGetProductQuery } from '../../features/api/apislice'
import { ROUTES } from '../../utils/routes'
import Product from './Product'

const SingleProduct = () => {
	const { id } = useParams()
	const navigate = useNavigate()

	const { data, isLoading, isFetching, isSuccess } = useGetProductQuery({ id })
	React.useEffect(() => {
		if (!isLoading && !isFetching && !isSuccess) {
			navigate(ROUTES.HOME)
		}
	}, [isLoading, isFetching, isSuccess])
	return data ? <Product {...data} /> : <div className="preloader">Loading</div>
}

export default SingleProduct
