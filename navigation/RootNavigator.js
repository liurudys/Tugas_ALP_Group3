import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

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

const screenOptions = (route, color) => {
  let iconName;

  switch (route.name) {
    case 'BooksList':
      iconName = 'view-dashboard';
      break;
    case 'BookmarksList':
      iconName = 'bookmark-multiple-outline';
      break;
    default:
      break;
  }

  return <MaterialCommunityIcons name={iconName} color={color} size={24} />;
};

const StackNavigator = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen name='BooksList' component={BooksList} />
        <Stack.Screen name='BookDetail' component={BookDetailScreen} />
      </Stack.Navigator>
  )
}

const StackNavigatorBookmark = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen name='Bookmarks List' component={BookmarksList} />
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
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => screenOptions(route, color)
        })}
       screenOptions={{headerShown :false}}
      >
        <Tab.Screen name='Daftar Buku' component={StackNavigator} />
        <Tab.Screen name='Bookmarks List' component={StackNavigatorBookmark} />
        <Tab.Screen name='All User List' component={UserList} />
      </Tab.Navigator>
     
      
    </NavigationContainer>

  );
};

export default RootNavigator;
