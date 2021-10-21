import React, { useEffect } from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  SafeAreaView
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import {setBook,BookSelector,setBookMark,removeBookmark} from '../redux/BookSlice'
import axios from "axios";
import { BASE_URL } from '../config';
export default function BooksList() {
  const books = useSelector(BookSelector);
  const dispatch = useDispatch();

 
  const addToBookmarkList = book => dispatch(setBookMark(book));
  const removeFromBookmarkList = book => dispatch(removeBookmark(book));

  useEffect(() => {
    axios.get(BASE_URL).then(
      (r)=>{
        dispatch(setBook(r.data))
      }
    )
  }, []);

  const handleAddBookmark = book => {
    addToBookmarkList(book);
  };

  const handleRemoveBookmark = book => {
    removeFromBookmarkList(book);
  };

  const ifExists = book => {
    if (books.book.bookmarks.find(item => item.id === book.id)) {
      return true;
    }

    return false;
  };

  const renderItem = ({ item }) => {
    return (
      <View style={{ marginVertical: 12 }}>
        <View style={{ flexDirection: 'row', flex: 1 }}>
          {/* Book Cover */}
          <Image
            source={{ uri: item.image_url }}
            resizeMode='cover'
            style={{ width: 100, height: 150, borderRadius: 10 }}
          />
          {/* Book Metadata */}
          <View style={{ flex: 1, marginLeft: 12 }}>
            {/* Book Title */}
            <View>
              <Text style={{ fontSize: 22, paddingRight: 16, color: 'white' }}>
                {item.title}
              </Text>
            </View>
            {/* Meta info */}
            <View
              style={{
                flexDirection: 'row',
                marginTop: 10,
                alignItems: 'center'
              }}
            >
              <MaterialCommunityIcons
                color='#64676D'
                name='book-open-page-variant'
                size={20}
              />
              <Text style={{ fontSize: 14, paddingLeft: 10, color: '#64676D' }}>
                {item.num_pages}
              </Text>
              <MaterialCommunityIcons
                color='#64676D'
                name='star'
                size={20}
                style={{ paddingLeft: 16 }}
              />
              <Text style={{ fontSize: 14, paddingLeft: 10, color: '#64676D' }}>
                {item.rating}
              </Text>
            </View>
            {/* Buttons */}
            <View style={{ marginTop: 14 }}>
              <TouchableOpacity
                onPress={() =>
                  ifExists(item)
                    ? handleRemoveBookmark(item)
                    : handleAddBookmark(item)
                }
                activeOpacity={0.7}
                style={{
                  flexDirection: 'row',
                  padding: 2,
                  backgroundColor: ifExists(item) ? '#F96D41' : '#2D3038',
                  borderRadius: 20,
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 40,
                  width: 40
                }}
              >
                <MaterialCommunityIcons
                  color={ifExists(item) ? 'white' : '#64676D'}
                  size={24}
                  name={ifExists(item) ? 'bookmark-outline' : 'bookmark'}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#1E1B26' }}>
      <View style={{ flex: 1, paddingHorizontal: 16 }}>
        <Text style={{ color: 'white', fontSize: 22 }} onPress={()=>console.log(books.book)}>Penjualan Terbaik :</Text>
        <View style={{ flex: 1, marginTop: 8 }}>
          <FlatList
            data={books.book.books}
            keyExtractor={item => item.id.toString()}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
