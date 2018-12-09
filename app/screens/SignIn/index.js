import React from 'react';
import { StyleSheet, Alert } from 'react-native';
import { Text, Icon, Left, Right, Container, Content, Input, Button, Item, Spinner } from 'native-base';
import firebase from 'firebase';
//LOCAL
import config from '../../../config';

import 'core-js/es6/map'
import 'core-js/es6/symbol'
import 'core-js/fn/symbol/iterator'

export default class SignIn extends React.Component {
    state = {
        email: '',
        password: '',
        progress: false
    };

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
            titleTextStyle,
            subtitleTextStyle,
            inputTextStyle,
            buttonTextStyle
        } = styles;

        return (
            <Container style={{backgroundColor: config.COLOR_BACKGROUND}}>
                <Content padder contentContainerStyle={containerStyle}>
                    <Text style={titleTextStyle}>{ "Welcome" }</Text>
                    <Text style={subtitleTextStyle}>{ "Sign in to continue." }</Text>

                    <Item style={{marginTop: 40}}>
                        <Icon active name='ios-mail-outline' />
                        <Input
                            value={this.state.email}
                            onChangeText={ text => this.setState({ email: text }) }
                            style={inputTextStyle}
                            placeholder='EMAIL ADDRESS'
                            selectionColor={config.COLOR_ACCENT}
                            keyboardType='email-address'
                        />
                    </Item>

                    <Item style={{marginTop: 20}}>
                        <Icon active name='ios-key-outline' />
                        <Input
                            value={this.state.password}
                            onChangeText={ text => this.setState({ password: text }) }
                            secureTextEntry
                            style={inputTextStyle}
                            placeholder='PASSWORD'
                            selectionColor={config.COLOR_ACCENT}
                        />
                    </Item>

                    <Button onPress={this.onSignInButtonPress.bind(this)} block style={{backgroundColor: config.COLOR_ACCENT, marginTop: 64}}>
                        {
                            this.state.progress?
                            <Spinner color='white' />:
                            <Text style={buttonTextStyle}>{ "Sign In" }</Text>
                        }   
                    </Button>
                </Content>
            </Container>
        );
    }

    onSignInButtonPress() {
        this.setState({ progress: true });
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(response=>{
            this.setState({ progress: false });
            this.props.navigation.navigate('Home', response.user);
        }).catch(err=>{
            this.setState({ progress: false });
            Alert.alert(config.APP_NAME, err.toString());
        });
    }
};

const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: config.COLOR_BACKGROUND,
        paddingTop: 24,
        paddingLeft: 16,
        paddingRight: 16
    },
    titleTextStyle: {
        fontFamily: 'Fredoka',
        fontSize: 64,
        color: config.COLOR_TEXT_DARK,
        marginTop: 24
    },
    subtitleTextStyle: {
        fontSize: 20,
        marginStart: 4,
        color: config.COLOR_TEXT_LIGHT
    },
    inputTextStyle: {
        fontSize: 16,
        color: 'black'
    },
    buttonTextStyle: {
        fontSize: 20,
        color: 'white',
        fontFamily: 'Fredoka'
    }
});