import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// Import mock screens
import BooksList from '../screens/BooksList';
import BookmarksList from '../screens/BookmarksList';
import UserList from '../screens/UserList';

const Tab = createBottomTabNavigator();

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

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='BooksList'
        tabBarOptions={tabBarOptions}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => screenOptions(route, color)
        })}
      >
        <Tab.Screen name='Daftar Buku' component={BooksList} />
        <Tab.Screen name='Bookmarks List' component={BookmarksList} />
        <Tab.Screen name='All User List' component={UserList} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
