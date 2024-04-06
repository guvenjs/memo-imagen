import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "@src/api/firebase";

export const fetchWordsByCategory = createAsyncThunk(
  "words/fetchWordsByCategory",
  async (categoryId) => {
    const snapshot = await db
      .collection(`categories/${categoryId}/words`)
      .get();
    const words = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return words;
  },
);

const wordsSlice = createSlice({
  name: "words",
  initialState: {
    loading: false,
    words: {},
    error: null,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchWordsByCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWordsByCategory.fulfilled, (state: any, action) => {
        state.loading = false;
        state.issues = action.payload;
      })
      .addCase(fetchWordsByCategory.rejected, (state: any, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      });
  },
});

export default wordsSlice.reducer;
