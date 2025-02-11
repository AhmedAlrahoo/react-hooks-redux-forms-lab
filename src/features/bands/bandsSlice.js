import { createSlice } from "@reduxjs/toolkit";

const bandsSlice = createSlice({
  name: "bands",
  initialState: {
    entities: [],
  },
  reducers: {
    // create reducer methods
    bandAdded(state,action){
      state.entities.push(action.payload)
    }
  },
});
export const {bandAdded} = bandsSlice.actions 
// export the action creators

export default bandsSlice.reducer;
