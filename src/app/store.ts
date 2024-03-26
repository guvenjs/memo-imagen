import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "@features/categories/categoriesSlice";
import wordsReducer from "@features/words/wordsSlice";

export default configureStore({
  reducer: {
    categories: categoriesReducer,
    words: wordsReducer,
  },
});
