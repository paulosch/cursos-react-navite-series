import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default ({ label = '', content = '-' }) => (
    <View style={styles.line}>
        <Text style={[
            styles.cell, 
            styles.label,
            label.length > 8 ? styles.longLabel : null
            ]}>{ label } </Text>
        <Text style={[styles.cell, styles.content]}>{ content }</Text>
    </View>
)

const styles = StyleSheet.create({
    line: {
        paddingTop: 3,
        paddingBottom: 3,
        paddingLeft: 3,
    },
    cell: {
        fontSize: 14,
        paddingLeft: 3,
    },
    label: {
        fontWeight: 'bold',
        flex: 2
    },
    content: {
        flex: 5
    },
    longLabel: {
        fontSize: 10
    }
})