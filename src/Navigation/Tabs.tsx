/* eslint-disable react/no-unstable-nested-components */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AppStack from './AppStack';
import RequestHistory from '../views/HistoryViews/RequestHistory';
import ProfileView from '../views/Profile/ProfileView';

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName="App"
      screenOptions={{
        tabBarStyle: { backgroundColor: '#F5FFFF', paddingTop:5 },
        tabBarActiveTintColor:'#1D3261',
        tabBarInactiveTintColor:'#8E8E93',
        tabBarShowLabel: false,
        headerShown:false,
      }}
    >
      <Tab.Screen
        name="App"
        component={AppStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialCommunityIcons name={focused ? 'home' : 'home-outline'} color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Hisory"
        component={RequestHistory}
        options={{
          tabBarLabel: 'History',
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialCommunityIcons name={focused ? 'clipboard-list' : 'clipboard-list-outline'} color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileView}
        options={{
          tabBarLabel: 'History',
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialCommunityIcons name={focused ? 'account' : 'account-outline'} color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default Tabs;
