import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
import { BASE_URL } from '../config';

const initialState = {
    books: [],
    bookmarks: [],
    cart: []
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
        },
        addToCart:(s,payload)=>{
            let flag = false
            if (s.cart.length > 0) {
                for (let i = 0; i < s.cart.length; i++) {
                    if (s.cart[i].id == payload.payload.id) {
                        flag = true
                        
                        break;
                    }
                }

                if (flag) {
                    let id = s.cart.find(x => x.id == payload.payload.id)
                    id.Amount++                    
                } else {
                    var cols = {
                        id: payload.payload.id,
                        title: payload.payload.title,
                        authors: payload.payload.authors,
                        description: payload.payload.description,
                        edition: payload.payload.edition,
                        format: payload.payload.format,
                        num_pages: payload.payload.num_pages,
                        rating: payload.payload.rating,
                        review_count: payload.payload.review_count,
                        genres: payload.payload.genres,
                        genre_list: payload.payload.genre_list,
                        image_url: payload.payload.image_url,
                        Quote1: payload.payload.Quote1,
                        Quote2: payload.payload.Quote2,
                        Quote3: payload.payload.Quote3,
                        Amount: 1
                    }
                    s.cart.push(cols)
                }
            } else {
                var cols = {
                    id: payload.payload.id,
                    title: payload.payload.title,
                    authors: payload.payload.authors,
                    description: payload.payload.description,
                    edition: payload.payload.edition,
                    format: payload.payload.format,
                    num_pages: payload.payload.num_pages,
                    rating: payload.payload.rating,
                    review_count: payload.payload.review_count,
                    genres: payload.payload.genres,
                    genre_list: payload.payload.genre_list,
                    image_url: payload.payload.image_url,
                    Quote1: payload.payload.Quote1,
                    Quote2: payload.payload.Quote2,
                    Quote3: payload.payload.Quote3,
                    Amount: 1
                }
                s.cart.push(cols)
            }
            
            return s
        },
        removeFromCart:(s,payload)=>{
            let id = s.cart.find(x => x.id == payload.payload.id)
            if (id.Amount == 1) {
                const filerCart = s.cart.filter(x=>x.id !== payload.payload.id)
                s.cart = filerCart
            } else {
                id.Amount--
            }

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

export const {setBook, setBookMark, removeBookmark, addToCart, removeFromCart} = BookSlice.actions
export const BookSelector = (s) => s
export default BookSlice.reducer
