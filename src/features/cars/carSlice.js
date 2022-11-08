import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loaded: false,
  cars: [],
  error: "",
};

export const fetchCars = createAsyncThunk("cars/fetchCars", () => {
  return axios
    .get("https://cars-f11ac-default-rtdb.firebaseio.com/cars.json")
    .then((response) => {
      return response.data;
    });
});

export const carSlice = createSlice({
  name: "cars",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchCars.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCars.fulfilled, (state, action) => {
      state.loading = false;
      state.cars = action.payload;
      state.error = "";
    });
    builder.addCase(fetchCars.rejected, (state, action) => {
      state.loading = false;
      state.cars = [];
      state.error = action.error.message;
    });
  },
});

export default carSlice.reducer;
