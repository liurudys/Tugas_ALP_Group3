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

const UserList = () => {
    const [data, setData] = useState()

    useEffect(() => {
        try {
            axios.get('https://jsonplaceholder.typicode.com/users').then(
                (result) => {
                    setData(result.data)
                }
            )
        }
        catch (e) {
            console.log(e)
        }
    })

    const renderList = ({ item }) => {
        return (
            <View style={style.listStyle}>
                <Text style={style.nameStyle}>{item.name}</Text>
                <Text>Username: {item.username}</Text>
                <Text>Company name: {item.company.name}</Text>
                <Text>Email: {item.email}</Text>
                <Text>Website: {item.website}</Text>
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
        backgroundColor: '#64676D',
        margin: 10,
        borderRadius: 10,
        padding: 10,
    },
    nameStyle: {
        fontSize: 24,
        fontWeight: 'bold',
    }
})

export default UserList