import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loginStatus: false,
  chapter: 0,
  unit: 0,
  star: [0,0,0,0,0],
  highscore: 0
};

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    login: (state, action) => {
      state = {
        loginStatus: true,
        chapter: action.payload.chapter,
        unit: action.payload.unit,
        star: action.payload.star,
        highscore: action.payload.highscore
      }
    },
    logout(state) {
      state = initialState;
    },
    clearUnit(state) {
      state.unit++;
    },
    clearChapter(state) {
      state.chapter++;
      state.unit = 0;
    },
  }
});

export const {
  login,
  logout,
  clearUnit,
  clearChapter
} = userSlice.actions;

export default userSlice.reducer;