import contactReducer from "./contactsSlice";
import filterReducer from "./filtersSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filters: filterReducer,
  },
});
