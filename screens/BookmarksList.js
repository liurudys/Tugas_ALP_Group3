import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import BookmarkIcn from '../assets/book-plus.png'
import { removeBookmark,BookSelector } from '../redux/BookSlice';
import { useNavigation } from '@react-navigation/native';

export default function BookmarksList() {
  const bookmark = useSelector(BookSelector);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const removeFromBookmarkList = book => dispatch(removeBookmark(book));

  const handleRemoveBookmark = book => {
    removeFromBookmarkList(book);
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
            <TouchableOpacity onPress={() => navigation.navigate('BookDetail', { dataBuku : item.id })}>
                <Text style={{ fontSize: 22, paddingRight: 16, color: 'white' }}>
                  {item.title}
                </Text>
            </TouchableOpacity>
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
                onPress={() => handleRemoveBookmark(item)}
                activeOpacity={0.7}
                style={{
                  flexDirection: 'row',
                  padding: 2,
                  backgroundColor: '#2D3038',
                  borderRadius: 20,
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 40,
                  width: 40
                }}
              >
                <Image 
                  source={BookmarkIcn}
                  style={{width:25,height:25}}
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
        <Text style={{ color: 'white', fontSize: 22 }}>Bookmarks</Text>
        <View style={{ flex: 1, marginTop: 8 }}>
          {bookmark.book.bookmarks.length === 0 ? (
            <Text style={{ color: '#64676D', fontSize: 18 }}>
              Add a book to bookmark list.
            </Text>
          ) : (
            <FlatList
              data={bookmark.book.bookmarks}
              keyExtractor={item => item.id.toString()}
              renderItem={renderItem}
              showsVerticalScrollIndicator={false}
            />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}
