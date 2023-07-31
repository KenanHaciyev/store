import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { BASE_URL } from '../../utils/constants'

const initialState = {
	list: [],
	isLoading: false,
}

export const getCategories = createAsyncThunk('categories/getCategories', async (_, thunkApi) => {
	try {
		const response = await axios(`${BASE_URL}/categories`)
		return response.data.slice(0, 5)
	} catch (e) {
		console.log(e)
		thunkApi.rejectWithValue(e)
	}
})

const categoriesSlice = createSlice({
	name: 'categories',
	initialState,
	extraReducers: (builder) => {
		builder.addCase(getCategories.pending, (state) => {
			state.isLoading = true
		})
		builder.addCase(getCategories.fulfilled, (state, { payload }) => {
			state.list = payload
			state.isLoading = false
		})
		builder.addCase(getCategories.rejected, (state) => {
			state.isLoading = false
		})
	},
})


export default categoriesSlice.reducer
