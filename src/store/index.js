import { configureStore } from "@reduxjs/toolkit";
import carsReducer from "../features/cars/carSlice";

const store = configureStore({
  reducer: {
    cars: carsReducer,
  },
});

export default store;
