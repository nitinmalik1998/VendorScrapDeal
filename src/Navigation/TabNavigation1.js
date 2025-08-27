import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from './src/Screens/Home';
import Schedule from './src/Screens/Schedule';
import Profile from './src/Screens/Profile';
import Earning from './src/Screens/Earning';
import { NavigationContainer } from '@react-navigation/native';


const TabNavigation = () => {
  const TabNav = createBottomTabNavigator();

  const tabsConfig = [
    {
      name: 'Home',
      component: Home,
      iconLibrary: Icon,
      iconName: 'home',
      label: 'Home',
    },
    {
      name: 'Schedule',
      component: Schedule,
      iconLibrary: Icon2,
      iconName: 'calendar-clock',
      label: 'Schedule',
    },
    {
      name: 'Earning',
      component: Earning,
      iconLibrary: Icon1,
      iconName: 'rupee',
      label: 'Earning',
    },
    {
      name: 'Profile',
      component: Profile,
      iconLibrary: Icon,
      iconName: 'user',
      label: 'Profile',
    },
  ];

  return (
    <NavigationContainer>
    <TabNav.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#00A572',
        tabBarInactiveTintColor: 'grey',
        tabBarStyle: {
          backgroundColor: 'white',
          height: 73,
          borderTopWidth: 0.5,
          borderTopColor: 'rgba(0,0,0,0.1)',
        },
        tabBarItemStyle: {
          marginTop: 9,
          marginHorizontal:5
        },
        headerShown: false,
      }}>
      {tabsConfig.map(tab => (
        <TabNav.Screen
          key={tab.name}
          name={tab.name}
          component={tab.component}
          options={{
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  borderRadius: 18,
                  marginHorizontal: -35,
                  marginVertical: -10,
                  backgroundColor: focused ? '#E0F7ED' : 'transparent',
                  padding: focused ? 8 : 0,
                }}>
                <tab.iconLibrary
                  name={tab.iconName}
                  size={24}
                  color={focused ? '#00A572' : 'grey'}
                />
                {focused && (
                  <Text
                    style={{
                      color: '#00A572',
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14.2,
                      marginLeft: 5,
                      fontWeight: '600',
                    }}>
                    {tab.label}
                  </Text>
                )}
              </View>
            ),
            tabBarLabel: () => null,
          }}
        />
      ))}
    </TabNav.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigation;
