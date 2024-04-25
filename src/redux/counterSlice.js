import { createSlice } from "@reduxjs/toolkit";
import video from '../dataSource/video.json'

const youtubeSlice = createSlice({
    //  name the slice component
    name: 'videoMate',
    // initial value of the state
    initialState:{
        video
    },
    reducers: {
        // actions are created inside reducer key



        // increment count
        filterVideo : (state,action) => {
            // state.value = action.payload
            if (action.payload === "") { state.value = video; return; }
            const filterBySearch = video.filter((item) => {
                if (item.title?.toLowerCase()
                    .includes(action.payload?.toLowerCase())) { 
                return item; 
            }
            })
            state.value = filterBySearch
            
        },

        // reset count
        clear: (state) => {
            state.value = ''
        }
    }
})

//  slice returns actions as well as reducer

//  action

export const {filterVideo, clear} = youtubeSlice.actions

//  export reducer

export default youtubeSlice.reducer