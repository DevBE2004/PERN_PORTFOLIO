import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
  name: "menu",
  initialState: {
    isShowMenu: false,
    menuLeft: true,
    isShowModal: false,
    modalChildrent: null,
    clickImage: false,
    currentImage: null,
  },
  reducers: {
    setIsShowMenu: (state, action) => {
      state.isShowMenu = action.payload.isShowMenu;
    },
    setMenuLeft: (state, action) => {
      state.menuLeft = action.payload.menuleft;
    },
    setShowModal: (state, action) => {
      state.isShowModal = action.payload.isShowModal;
      state.modalChildrent = action.payload.modalChildrent;
    },
    setClickImage: (state, action) => {
      state.clickImage = action.payload.clickImage;
    },
    setCurrentImage: (state, action) => {
      state.currentImage = action.payload.currentImage;
    },
  },
});

export const {
  setIsShowMenu,
  setCurrentImage,
  setMenuLeft,
  setShowModal,
  setClickImage,
} = menuSlice.actions;
export default menuSlice.reducer;
