import { createSlice } from "@reduxjs/toolkit";
import {tvs as tvActions} from "../tvs/tvSlice"

const initialState = {
  phones: 5
}

const phoneSlice = createSlice({
  name: "phone", //
  initialState: initialState,
  reducers: {
    phones: (state, action) => { // ceci génère une action avec {type: "phone/phones", payload: undefined} => généré par reduxToolkit
      state.phones--
    }
  },
  extraReducers: (builder) => {
    builder
    .addCase(tvActions,  (state, action) => {
       state.phones--
    })
  }

})


export default phoneSlice.reducer;
export const { phones } = phoneSlice.actions;
