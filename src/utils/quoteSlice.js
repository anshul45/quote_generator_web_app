import { createSlice } from "@reduxjs/toolkit";

const loadBookmarksFromLocalStorage = () => {
  try {
    const data = localStorage.getItem("bookMarkQuote");
    if (data !== null) {
      return JSON.parse(data);
    }
  } catch (error) {
    console.error("Error:", error);
  }
  return [];
};

const saveBookmarksToLocalStorage = (bookMarkQuote) => {
  try {
    localStorage.setItem("bookMarkQuote", JSON.stringify(bookMarkQuote));
  } catch (error) {
    console.error("Error:", error);
  }
};

const quoteSlice = createSlice({
  name: "quote",
  initialState: {
    singleQuote: {},
    bookMarkQuote: loadBookmarksFromLocalStorage(),
    tags: [],
    currentPage: "Home",
    isOpenTags: false,
  },
  reducers: {
    addsingleQuote: (state, action) => {
      state.singleQuote = action.payload;
    },
    addToBookMark: (state, action) => {
      if (
        !state.bookMarkQuote.find((quote) => quote._id === action.payload._id)
      ) {
        state.bookMarkQuote.push(action.payload);
        saveBookmarksToLocalStorage(state.bookMarkQuote);
      }
    },
    addTags: (state, action) => {
      state.tags = action.payload;
    },
    removeFromBookMark: (state, action) => {
      state.bookMarkQuote = state.bookMarkQuote.filter(
        (quote) => quote._id !== action.payload
      );
      saveBookmarksToLocalStorage(state.bookMarkQuote);
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setIsOpenTags: (state) => {
      state.isOpenTags = !state.isOpenTags;
    },
  },
});

export const {
  addsingleQuote,
  addToBookMark,
  addTags,
  setCurrentPage,
  removeFromBookMark,
  setIsOpenTags,
} = quoteSlice.actions;

export default quoteSlice.reducer;
