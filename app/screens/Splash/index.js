import React from 'react';
import { View, Image, StyleSheet, StatusBar } from 'react-native';
import * as Animatable from 'react-native-animatable';
//LOCAL
import config from '../../../config';

export default class Splash extends React.PureComponent {
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
        this.props.navigation.navigate('SignIn');
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