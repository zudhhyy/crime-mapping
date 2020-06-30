import React from 'react'
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useSelector } from 'react-redux'

import Home from "../screen/Home";
import CrimeMap from "../screen/Page1";
import CreateReport from "../screen/Page2";
import MyReport from "../screen/Page3";
import Account from "../screen/Page4";
import Page5 from "../screen/Page5";
import SignIn from "../screen/SignIn";
import SignUp from "../screen/SignUp";

const Tab = createBottomTabNavigator();

export default TabComponent = () => {

    const isLogin = useSelector(state => state.userReducer.isLogin)

    return (
        <>
        <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          activeTintColor: "#5891FE",
          inactiveTintColor: "#707070",
        }}
        >
        {isLogin ? (
            <>
              <Tab.Screen
                name="Home"
                component={Home}
                options={{
                  tabBarLabel: "Home",
                  tabBarIcon: ({ color, size }) => <Icon name="home" color={color} size={size} />,
                }}
              />
              <Tab.Screen
                name="Crime Map"
                component={CrimeMap}
                options={{
                  tabBarLabel: "Crime Map",
                  tabBarIcon: ({ color, size }) => (
                    <Icon name="map-marker-radius" color={color} size={size} />
                  ),
                }}
              />
              <Tab.Screen
                name="Create"
                component={CreateReport}
                options={{
                  tabBarLabel: "Create",
                  tabBarIcon: ({ color, size }) => <Icon name="plus" color={color} size={size} />,
                }}
              />
              <Tab.Screen
                name="My Report"
                component={MyReport}
                options={{
                  tabBarLabel: "My Report",
                  tabBarIcon: ({ color, size }) => (
                    <Icon name="clipboard-text-outline" color={color} size={size} />
                  ),
                }}
              />
              <Tab.Screen
                name="Account"
                component={Account}
                options={{
                  tabBarLabel: "Account",
                  tabBarIcon: ({ color, size }) => <Icon name="account" color={color} size={size} />,
                }}
              />
              
            </>
          ) : (
            <>
              <Tab.Screen name="Sign In" component={SignIn} />
              <Tab.Screen name="Sign Up" component={SignUp} />
            </>
          )
        }
        </Tab.Navigator>
        </>
    )
}