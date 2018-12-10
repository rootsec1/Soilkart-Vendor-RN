import React from 'react';
import { View, Image, StyleSheet, StatusBar } from 'react-native';
import * as Animatable from 'react-native-animatable';
import firebase from 'firebase';
//LOCAL
import config from '../../../config';

import 'core-js/es6/map';
import 'core-js/es6/symbol';
import 'core-js/fn/symbol/iterator';

export default class Splash extends React.PureComponent {
    componentWillMount() {
        if(firebase.apps.length===0) {
            firebase.initializeApp({
                apiKey: "AIzaSyDo5jCdYbKahPl4hekGz5QzEQwoaTkFIbU",
                authDomain: "soilkart-3d137.firebaseapp.com",
                databaseURL: "https://soilkart-3d137.firebaseio.com",
                projectId: "soilkart-3d137",
                storageBucket: "soilkart-3d137.appspot.com",
                messagingSenderId: "968338824712"
            });
        }
    }

    render() {
        const {
            containerStyle,
            imageStyle
        } = styles;
        
        return (
            <View style={containerStyle}>
                <StatusBar backgroundColor={config.COLOR_BACKGROUND} barStyle='dark-content' />

                <Animatable.View animation='bounceIn' onAnimationEnd={ this.onAnimationEnd.bind(this) }>
                    <Image style={imageStyle} source={require('../../assets/images/logo.png')} />
                </Animatable.View>
            </View>
        );
    }

    onAnimationEnd() {
        if(firebase.auth().currentUser===null) this.props.navigation.navigate('SignIn');
        else this.props.navigation.navigate('Home', firebase.auth().currentUser);
    }
};

const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: config.COLOR_BACKGROUND,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageStyle: {
        height: 256,
        width: 256
    }
});