import React from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { Container, Content, Header, Left, Right, Thumbnail, Text } from 'native-base';
//LOCAL
import config from '../../../../config';

export default class Sell extends React.Component {
    render() {
        const {
            containerStyle,
            titleTextStyle
        } = styles;

        return (
            <Container style={{backgroundColor: config.COLOR_BACKGROUND}}>
                <Content padder contentContainerStyle={containerStyle}>
                    <StatusBar backgroundColor={config.COLOR_BACKGROUND} barStyle='dark-content' />
                    <Text style={titleTextStyle}>{ "Sell" }</Text>
                </Content>
            </Container>
        );
    }
};

const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: config.COLOR_BACKGROUND,
        paddingTop: 16,
        paddingLeft: 16,
        paddingRight: 16
    },
    titleTextStyle: {
        fontFamily: 'Fredoka',
        fontSize: 40,
        color: config.COLOR_TEXT_DARK
    }
});