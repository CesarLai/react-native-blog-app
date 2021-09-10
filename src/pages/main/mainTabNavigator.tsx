import React from 'react'
import { Platform } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import * as Colors from '@/constants/color'
import Iconfont from '@/fonts'

import HomeTabPage from './homeTabPage'
import MessageTabPage from './messageTabPage'
import UserTabPage from './userTabPage'

const BottomTabs = createBottomTabNavigator()

const MainTabNavigator = () => {
  return (
    <BottomTabs.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        inactiveTintColor: Colors.TAB_INACTIVE_COLOR,
        activeTintColor: Colors.TAB_ACTIVE_COLOR,
        style: {
          height: Platform.OS === 'ios' ? 79 : 65
        },
        tabStyle: {
          height: Platform.OS === 'ios' ? 79 : 65,
          paddingTop: 5,
          paddingBottom: Platform.OS === 'ios' ? 24 : 10
        }
      }}
    >
      <BottomTabs.Screen
        name="Home"
        options={{
          tabBarLabel: '首页',
          tabBarIcon: props => {
            return (
              <Iconfont
                name={props.focused ? 'icon-home-fill' : 'icon-home'}
                size={props.size}
                color={props.color}
              />
            )
          }
        }}
        component={HomeTabPage}
      />
      <BottomTabs.Screen
        name="Message"
        options={{
          tabBarLabel: '消息',
          tabBarIcon: props => {
            return (
              <Iconfont
                name={props.focused ? 'icon-message-fill' : 'icon-message'}
                size={props.size}
                color={props.color}
              />
            )
          }
        }}
        component={MessageTabPage}
      />
      <BottomTabs.Screen
        name="User"
        options={{
          tabBarLabel: '用户',
          tabBarIcon: props => {
            return (
              <Iconfont
                name={props.focused ? 'icon-user-fill' : 'icon-user'}
                size={props.size}
                color={props.color}
              />
            )
          }
        }}
        component={UserTabPage}
      />
    </BottomTabs.Navigator>
  )
}

export default MainTabNavigator
