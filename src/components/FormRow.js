import React from 'react'
import { View, StyleSheet } from 'react-native'

export default props => {
    const { children } = props
    
    return (
        <View style={styles.container}>
            { children }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: 'white',
        marginTop: 5,
        marginBottom: 5,
        elevation: 1
    }
})