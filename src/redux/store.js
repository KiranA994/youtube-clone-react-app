import { configureStore } from "@reduxjs/toolkit";
import youtubeSlice from "./counterSlice";

export const store = configureStore({
// reducer 

reducer: {
    counterReducer: youtubeSlice
}

}
)