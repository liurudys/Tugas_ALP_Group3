import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
import { BASE_URL } from '../config';

const initialState = {
    books: [],
    bookmarks: []
};

export const getBook = createAsyncThunk('book/getBook',async ()=>{
    const result = await axios.get(BASE_URL)
    return result.data
})
const BookSlice = createSlice({
    name:'book',
    initialState,
    reducers:{
        setBook: (s,payload)=>{
            s.books = payload.payload
            return s
        },
        setBookMark:(s,payload)=>{
            s.bookmarks.push(payload.payload)
            return s
        },
        removeBookmark:(s,payload)=>{
            const filerBookmark = s.bookmarks.filter(x=>x.id !== payload.payload.id)
            s.bookmarks = filerBookmark
            return s
        }
    },
    extraReducers:{
        [getBook.fulfilled]:(state,action)=>{
            state.books = action.payload
            return state
        }
    }
})

export const {setBook,setBookMark,removeBookmark} = BookSlice.actions
export const BookSelector = (s) => s
export default BookSlice.reducer
