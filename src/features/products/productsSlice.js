import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { BASE_URL } from '../../utils/constants'

const initialState = {
	list: [],
	isLoading: false,
	filtered: [],
	related: [],
}

export const getProducts = createAsyncThunk('products/getProducts', async (_, thunkApi) => {
	try {
		const response = await axios(`${BASE_URL}/products`)
		return response.data
	} catch (e) {
		console.log(e)
		thunkApi.rejectWithValue(e)
	}
})

const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		filterByPrice(state) {
			state.filtered = state.list.filter(({ price }) => price < 100)
		},
	},
	extraReducers: (builder) => {
		builder.addCase(getProducts.pending, (state) => {
			state.isLoading = true
		})
		builder.addCase(getProducts.fulfilled, (state, { payload }) => {
			state.list = payload
			state.isLoading = false
		})
		builder.addCase(getProducts.rejected, (state) => {
			state.isLoading = false
		})
	},
})

export const { filterByPrice } = productsSlice.actions

export default productsSlice.reducer
