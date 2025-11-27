import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  tvs: 20
}

const tvSlice = createSlice({
  name: "tv",
  initialState: initialState,
  reducers : {
    tvs: (state) => {  // ceci génère une action avec {type: "tv/tvs", payload: undefined} => généré par reduxToolkit
      state.tvs--
    }
  }
})

export default tvSlice.reducer;
export const {tvs} = tvSlice.actions;
