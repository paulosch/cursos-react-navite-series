import React from 'react'
import {
    View, StyleSheet,
    Dimensions, Image, TouchableOpacity
} from 'react-native'

export default AddSerieCard = ({ isFirstColumn, onNavigate }) => {
    return (
        <TouchableOpacity
            onPress={onNavigate}
            style={[styles.container,
            isFirstColumn ? styles.firstColumn : styles.lastColumn]}>
            <View style={styles.card}>
                <Image
                    source={require('../../resources/add-button-inside-black-circle.png')}
                    style={styles.image} />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '50%',
        padding: 2,
        height: Dimensions.get('window').width / 2
    },
    card: {
        flex: 1
    },
    firstColumn: {
        paddingLeft: 4,
    },
    lastColumn: {
        paddingRight: 4,
    },
    image: {
        width: '100%',
        height: '100%'
    }
})