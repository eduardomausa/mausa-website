import { createSlice } from "@reduxjs/toolkit";

interface ThemeModeState {
  value: string;
}

const initialState: ThemeModeState = {
  value: "dark",
};

const themeModeSlice = createSlice({
  name: "themeMode",
  initialState,
  reducers: {
    toggled(state) {
      switch (state.value) {
        case "dark":
          state.value = "light";
          break;
        case "light":
          state.value = "dark";
          break;
        default:
          break;
      }
    },
  },
});

export const { toggled } = themeModeSlice.actions;
export default themeModeSlice.reducer;
