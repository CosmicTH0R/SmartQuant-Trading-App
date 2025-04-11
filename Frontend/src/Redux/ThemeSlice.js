// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   darkMode: localStorage.getItem('theme') === 'dark',
// };

// const themeSlice = createSlice({
//   name: 'theme',
//   initialState,
//   reducers: {
//     toggleTheme: (state) => {
//       state.darkMode = !state.darkMode;
//       document.documentElement.classList.toggle('dark', state.darkMode);
//       localStorage.setItem('theme', state.darkMode ? 'dark' : 'light');
//     },
//   },
// });

// export const { toggleTheme } = themeSlice.actions;
// export default themeSlice.reducer;



// import { createSlice } from "@reduxjs/toolkit";

// const getInitialTheme = () => {
//   const stored = localStorage.getItem("theme");
//   const dark = stored === "dark";
//   // Ensure document reflects the saved theme
//   if (dark) {
//     document.documentElement.classList.add("dark");
//   } else {
//     document.documentElement.classList.remove("dark");
//   }
//   return dark;
// };

// const initialState = {
//   darkMode: getInitialTheme(),
// };

// const themeSlice = createSlice({
//   name: "theme",
//   initialState,
//   reducers: {
//     toggleTheme: (state) => {
//       state.darkMode = !state.darkMode;
//       if (state.darkMode) {
//         document.documentElement.classList.add("dark");
//         localStorage.setItem("theme", "dark");
//       } else {
//         document.documentElement.classList.remove("dark");
//         localStorage.setItem("theme", "light");
//       }
//     },
//   },
// });

// export const { toggleTheme } = themeSlice.actions;
// export default themeSlice.reducer;



import { createSlice } from "@reduxjs/toolkit";

const getInitialTheme = () => {
  const stored = localStorage.getItem("theme");
  return stored === "dark";
};

const initialState = {
  darkMode: getInitialTheme(),
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
