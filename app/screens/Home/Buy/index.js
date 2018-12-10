import React from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { Container, Content, Left, Right, Thumbnail, Text, View, Icon } from 'native-base';
//LOCAL
import config from '../../../../config';

export default class Buy extends React.Component {
    render() {
        const {
            containerStyle,
            titleTextStyle
        } = styles;

        return (
            <Container style={{backgroundColor: config.COLOR_BACKGROUND}}>
                <Content padder contentContainerStyle={containerStyle}>
                    <StatusBar backgroundColor={config.COLOR_BACKGROUND} barStyle='dark-content' />
                    <View style={{flexDirection: 'row', flex: 1, justifyContent: 'space-around'}}>
                        <Left>
                            <Text style={titleTextStyle}>{ "Buy" }</Text>
                        </Left>
                        <Right>
                            <Icon color={config.COLOR_TEXT_LIGHT} name='md-cart' />
                        </Right>
                    </View>

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