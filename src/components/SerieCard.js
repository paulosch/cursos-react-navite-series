import React from 'react'
import { View, Text, StyleSheet, 
    Dimensions, Image, TouchableOpacity } from 'react-native'

export default SerieCard = ({ serie, isFirstColumn, onNavigate }) => {
    return (
        <TouchableOpacity 
            onPress={onNavigate}
            style={[styles.container, 
                isFirstColumn ? styles.firstColumn : styles.lastColumn]}>
            <View style={styles.card}>
                <Image
                    source={{ uri: serie.img }}
                    aspectRatio={1}
                    resizeMode='cover' />

                <View style={styles.cardTitleWrapper}>
                    <Text style={styles.cardTitle}>{`${serie.title}`}</Text>
                </View>
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
        flex: 1,
        elevation: 5
    },
    cardTitleWrapper: {
        backgroundColor: 'black',
        position: 'absolute',
        bottom: 0,
        opacity: .8,
        width: '100%',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 3,
        paddingRight: 3,
        alignItems: 'center'
    },
    cardTitle: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold'
    },
    firstColumn: {
        paddingLeft: 4,
    },
    lastColumn: {
        paddingRight: 4,
    }
})