import { createSlice } from "@reduxjs/toolkit";
import {tvs as tvActions} from "../tvs/tvSlice"

const initialState = {
  phones: 5,
  tablets: 10
}

const phoneSlice = createSlice({
  name: "phone", //
  initialState: initialState,
  reducers: {
    phones: (state, action) => { // ceci génère une action avec {type: "phone/phones", payload: undefined} => généré par reduxToolkit
      state.phones--
    },
    tablets: (state, action) => { // Action {type: "phone/tablets", payload: number}
      state.tablets -= action.payload
    }
  },
  extraReducers: (builder) => {
    builder
    .addCase(tvActions,  (state, action) => {
       state.phones--
    })
  }

  // extraReducers: {
  //   ["tv/tvs"]: (state) => { // pas besoin action
  //       state.phones--
  //   }
  // }

})


export default phoneSlice.reducer;
export const { phones, tablets } = phoneSlice.actions;
