import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contacts: JSON.parse(localStorage.getItem("contacts")) || [],
  selectedContactId: null,
};

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    addContact: (state, action) => {
      const newContact = action.payload;
      const existingItem = state.contacts.find((item) => {
        return item.email === newContact.email;
      });

      if (!existingItem) {
        state.contacts.push({
          id: newContact.id,
          name: newContact.name,
          email: newContact.email,
          image: newContact.image,
        });
      }

      localStorage.setItem("contacts", JSON.stringify(state.contacts));
    },
    deleteContact: (state, action) => {
      const id = action.payload;
      state.contacts = state.contacts.filter((contact) => {
        return contact.id !== id;
      });

      localStorage.setItem("contacts", JSON.stringify(state.contacts));
    },
    updateContact: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.contacts.find((item) => {
        return item.id === newItem.id;
      });
      if (existingItem) {
        existingItem.name = newItem.name;
        existingItem.email = newItem.email;
        existingItem.image = newItem.image;
      }

      localStorage.setItem("contacts", JSON.stringify(state.contacts));
    },
    selectedContact: (state, action) => {
      state.selectedContactId = action.payload;
    },
  },
});

export const { addContact, deleteContact, updateContact, selectedContact } =
  contactSlice.actions;

export default contactSlice.reducer;
