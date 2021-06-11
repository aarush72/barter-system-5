import React from 'react';
import {
    View,
    Text,
    TextInput,
    Modal,
    KeyboardAvoidingView,
    StyleSheet,
    TouchableOpacity,
    Alert,
    ScrollView
} from 'react-native';
import HomeScreen from '../screens/HomeScreen'
import RequestScreen from '../screens/RequestScreen.js'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {Image} from 'react-native'

export const AppTabNavigator = createBottomTabNavigator({
    DonateBooks: {
        screen: BookDonateScreen,
        navigationOptions: {
            tabBarIcon: <Image source={require("../assets/request-list.png")}
                style={{ width: 20, height: 20 }} />, tabBarLabel: "Donate Books",
        }
    },

    BookRequest: {
        screen: BookRequestScreen,
        navigationOptions: {
            tabBarIcon: <Image source={require("../assets/request-book.png")}
                style={{ width: 20, height: 20 }} />,
            tabBarLabel: "Book Request",
        }
    }
});


