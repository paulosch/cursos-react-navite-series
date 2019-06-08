import React, { Component } from 'react'
import firebase from 'firebase'
import { connect } from 'react-redux'
import {
    View, StyleSheet, TextInput, Text,
    Button, ActivityIndicator
} from 'react-native'

import FormRow from '../components/FormRow'
import { tryLogin } from '../actions'

class LoginScreen extends Component {

    constructor(props) {
        super(props)

        this.state = {
            mail: '',
            password: '',
            isLoading: false,
            message: ''
        }
    }

    componentDidMount() {
        const config = {
            apiKey: "AIzaSyDT6kV7aLUMEu8yfM3SabfZfYFVuEW61XA",
            authDomain: "series-d1190.firebaseapp.com",
            databaseURL: "https://series-d1190.firebaseio.com",
            projectId: "series-d1190",
            storageBucket: "series-d1190.appspot.com",
            messagingSenderId: "252501465717"
        };

        firebase.initializeApp(config);
    }

    onChangeHandler(field, value) {
        this.setState({
            [field]: value
        })
    }

    tryLogin() {
        const { mail, password } = this.state
        this.setState({ isLoading: true, message: '' })

        this.props.tryLogin({ mail, password })
            .then(user => {
                if(user)
                    return this.props.navigation.replace('Main')
                
                this.setState({ isLoading: false, message: '' })
            })                                                                       
            .catch(error => {
                this.setState({ isLoading: false, message: error.message })
            })
    }

    renderButton() {
        if (this.state.isLoading)
            return <ActivityIndicator size="large" color="#841584" />

        return (
            <Button
                onPress={() => this.tryLogin()}
                title="Entrar"
                color="#841584"
            />
        )
    }

    renderMessage() {
        const { message } = this.state

        if (!message)
            return null

        return (
            <View>
                <Text>{message}</Text>
            </View>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <FormRow>
                    <TextInput
                        value={this.state.mail}
                        onChangeText={value => this.onChangeHandler('mail', value)}
                        autoCapitalize='none'
                        keyboardType='email-address'
                        underlineColorAndroid='transparent'
                        textContentType='emailAddress'
                        style={styles.input}
                        placeholder='jose@mail.com' />
                </FormRow>

                <FormRow>
                    <TextInput
                        value={this.state.password}
                        onChangeText={value => this.onChangeHandler('password', value)}
                        autoCapitalize='none'
                        underlineColorAndroid='transparent'
                        textContentType='password'
                        style={styles.input}
                        secureTextEntry
                        placeholder='******' />
                </FormRow>

                <View style={styles.btn}>
                    {this.renderButton()}
                    {this.renderMessage()}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        // flex: 1,
        // flexDirection: 'column',
        // justifyContent: 'center',
        // flexWrap: 'wrap',
    },
    input: {
        paddingLeft: 5,
        paddingRight: 5,
    },
    btn: {
        marginTop: 5,
    }
})

export default connect(null, { tryLogin })(LoginScreen)