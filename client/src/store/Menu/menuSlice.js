import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
  name: "menu",
  initialState: {
    isShowMenu: false,
    menuLeft: false,
  },
  reducers: {
    setIsShowMenu: (state, action) => {
      state.isShowMenu = action.payload.isShowMenu;
    },
    setMenuLeft: (state, action) => {
      state.menuLeft = action.payload.menuLeft;
    },
  },
});

export const { setIsShowMenu, setMenuLeft } = menuSlice.actions;
export default menuSlice.reducer;
