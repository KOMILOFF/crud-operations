import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API = "https://692468313ad095fb8474154d.mockapi.io/Users";

export const fetchUsers = createAsyncThunk("users/fetch", async () => {
  const res = await axios.get(API);
  return res.data;
});

export const postUser = createAsyncThunk("users/post", async (data) => {
  const res = await axios.post(API, data);
  return res.data;
});

export const deleteUser = createAsyncThunk("users/delete", async (id) => {
  await axios.delete(`${API}/${id}`);
  return id;
});

export const editUser = createAsyncThunk("users/edit", async ({ id, data }) => {
  const res = await axios.put(`${API}/${id}`, data);
  return res.data;
});

const userSlice = createSlice({
  name: "users",
  initialState: {
    list: []
  },

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.list = action.payload;
      })
      .addCase(postUser.fulfilled, (state, action) => {
        state.list.push(action.payload);
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.list = state.list.filter((u) => u.id !== action.payload);
      })
      .addCase(editUser.fulfilled, (state, action) => {
        const i = state.list.findIndex((u) => u.id === action.payload.id);
        state.list[i] = action.payload;
      });
  }
});

export default userSlice.reducer;
