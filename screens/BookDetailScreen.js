import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet
} from 'react-native';
import axios from 'axios';
import { BASE_URL } from '../config';


const BookDetailScreen = ({route}) => {
   
   const dataBuku = route.params;
   const BukuID = JSON.stringify(dataBuku);
   const jsonObj = JSON.parse(BukuID).dataBuku;

   const [data, setData] = useState()

    useEffect(() => {
        try {
            axios.get(BASE_URL+'&&id='+jsonObj).then(
                (result) => {
                    setData(result.data)
                }
            )
        }
        catch (e) {
            console.log(e)
        }
    },[])
   
    const renderList = ({ item }) => {
        return (
            <View style={style.listStyle}>
                <Text style={style.nameStyle}>{item.title}</Text>
                <Image
                    source={{ uri: item.image_url }}
                    resizeMode='cover'
                    style={style.imageStyle}
                />
                <Text style={{ textAlign : 'center', fontWeight : 'bold' }}> Authors : {item.authors}</Text>
                <Text style={{ marginTop : 30 }}>{item.description}</Text>
                <Text style={{ marginTop : 30 , fontStyle : 'italic'}}>genres : {item.genre_list}</Text>
            </View>
        )
    }

    return (
        <SafeAreaView style={[style.defaultBackground]}>
            <View>
                <FlatList data={data} renderItem={renderList}/>
            </View>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    defaultBackground: {
        backgroundColor: '#1E1B26',
        flex: 1,
    },
    listStyle: {
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 10,
        padding: 10,
       
    },
    nameStyle: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign : 'center',
    },
    imageStyle : {
        width: 200, 
        height: 300, 
        borderRadius: 10,
        alignSelf : 'center'
        
        
    }
})

export default BookDetailScreen;