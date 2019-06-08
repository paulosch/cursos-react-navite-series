import firebase from 'firebase'
import { Alert } from 'react-native'

export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS'
const userLoginSuccess = user => ({
    type: USER_LOGIN_SUCCESS,
    user
})

export const USER_LOGOUT = 'USER_LOGOUT'
const userLogout = () => ({
    type: USER_LOGOUT
})

export const tryLogin = ({ mail, password }) => dispatch => {
    return firebase.auth()
        .signInWithEmailAndPassword(mail, password)
        .then(user => {
            dispatch(userLoginSuccess(user))
            return user
        })
        .catch(error => {
            if (error.code === 'auth/user-not-found') {
                return new Promise((resolve, reject) => {
                    Alert.alert(
                        'Usuário não encontrado',
                        'Deseja criar uma conta?',
                        [{
                            text: 'Não',
                            onPress: () => resolve()
                        }, {
                            text: 'Sim',
                            onPress: () => {
                                firebase
                                    .auth()
                                    .createUserWithEmailAndPassword(mail, password)
                                    .then(resolve)
                                    .catch(reject)
                            }
                        }],
                        { cancelable: false }
                    )
                })
            }
            return Promise.reject(error)
        })
}
