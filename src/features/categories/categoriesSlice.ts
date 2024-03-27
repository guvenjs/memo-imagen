import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "@src/api/firebase";

import ICategoryCardItem from "@screens/home/components/types/ICategoryCardItem";

export const fetchCategories = createAsyncThunk<ICategoryCardItem[]>(
  "categories/fetchCategories",
  async () => {
    const snapshot = await db.collection("categories").get();
    const categories: ICategoryCardItem[] = snapshot.docs.map((doc) => ({
      id: doc.id,
      title: doc.data().name,
      wordsCount: doc.data().wordsCount,
    }));

    return categories;
  },
);

const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    loading: false,
    categories: [] as ICategoryCardItem[],
    error: null,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCategories.fulfilled, (state: any, action) => {
        state.loading = false;
        state.issues = action.payload;
      })
      .addCase(fetchCategories.rejected, (state: any, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      });
  },
});

export default categoriesSlice.reducer;
