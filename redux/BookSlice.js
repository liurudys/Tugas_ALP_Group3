import { createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from '../config';

const initialState = {
    books: [],
    bookmarks: []
};

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
    }
})

export const {setBook,setBookMark,removeBookmark} = BookSlice.actions
export const BookSelector = (s) => s
export default BookSlice.reducer
