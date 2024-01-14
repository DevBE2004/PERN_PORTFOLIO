import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
  name: "menu",
  initialState: {
    isShowMenu: false,
    menuLeft: true,
  },
  reducers: {
    setIsShowMenu: (state, action) => {
      state.isShowMenu = action.payload.isShowMenu;
    },
    setMenuLeft: (state, action) => {
      state.menuLeft = action.payload.menuleft;
    },
  },
});

export const { setIsShowMenu, setMenuLeft } = menuSlice.actions;
export default menuSlice.reducer;
