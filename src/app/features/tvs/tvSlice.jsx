import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  tvs: 20
}

const tvSlice = createSlice({
  name: "tv",
  initialState: initialState,
  reducers : {
    tvs: (state, action) => {  // ceci génère une action avec {type: "tv/tvs", payload: any} => généré par reduxToolkit
      state.tvs -= action.payload
    },
    addTvs: (state, action) => { // Action {type: 'tv/addtvs', payload: any}
      state.tvs += action.payload
    }
  }
})

export default tvSlice.reducer;
export const {tvs, addTvs} = tvSlice.actions;
