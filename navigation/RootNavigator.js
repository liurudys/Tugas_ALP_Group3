import React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import BookmarkIcn from '../assets/book-marker.png'
import UserIcon from '../assets/account.png'
import BookListIcon from '../assets/book-open-variant.png'

// Import mock screens
import BooksList from '../screens/BooksList';
import BookmarksList from '../screens/BookmarksList';
import UserList from '../screens/UserList';
import BookDetailScreen from '../screens/BookDetailScreen';
import { startDetecting } from 'react-native/Libraries/Utilities/PixelRatio';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const tabBarOptions = {
  showLabel: true,
  inactiveTintColor: '#2D3038',
  activeTintColor: '#000000',
  style: {
    height: '10%',
    backgroundColor: '#1E1B26'
  }
};



const StackNavigator = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen name='Book List Movie' component={BooksList} />
        <Stack.Screen name='BookDetail' component={BookDetailScreen} />
      </Stack.Navigator>
  )
}

const StackNavigatorBookmark = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen name='BookMarks List' component={BookmarksList} />
        <Stack.Screen name='BookDetail' component={BookDetailScreen} />
      </Stack.Navigator>
  )
}

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="UserLists"
        tabBarOptions={tabBarOptions}
       screenOptions={{headerShown :false}}
      >
        <Tab.Screen name='Book List Movie' 
          component={StackNavigator} 
          options={{
            tabBarIcon:()=><Image source={BookListIcon} style={{width:24,height:24}}/>
          }}
        />
        <Tab.Screen name='BookMarks List' 
          component={StackNavigatorBookmark} 
          options={{
            tabBarIcon:()=><Image source={BookmarkIcn} style={{width:24,height:24}}/>
          }}
        />
        <Tab.Screen name='All User List' 
          component={UserList} 
          options={{
            tabBarIcon:()=><Image source={UserIcon} style={{width:24,height:24}}/>
          }}
        />
      </Tab.Navigator>
     
      
    </NavigationContainer>

  );
};

export default RootNavigator;
