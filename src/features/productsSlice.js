import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"
const initialState = {
    items: [],
    status: null,
};

export const productsFetch  = createAsyncThunk(
    "products/productsFetch",
    async() => { 
        const  response = await axios.get("http://localhost:5000/products")
        return response?.data
    }
);

const  productsSlice =  createSlice({
    name: "products",
    initialState,
    reducers: {},
    // extraReducers: {
    //     [productsFetch.pending]: (state, action) => {
        
    //         state.status = "pending"
    //     }
    // },

    // extraReducers: {
    //     [productsFetch.fulfilled]: (state, action) => {
 
    //         state.status = "success"
    //         state.items = action.payload
    //     }
    // },

    // extraReducers: {
    //     [productsFetch.rejected]: (state, action) => {
           
    //         state.status = "rejected"
    //     },
    // },

    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(productsFetch.pending, (state, action) => {
          state.state.status = "pending";
        })
      },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(productsFetch.fulfilled, (state, action) => {
            state.status = "success";
            state.items = action.payload;
        })
      },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(productsFetch.rejected, (state, action) => {
            state.status = "rejected";
        })
      },
});

export default productsSlice.reducer;