import React, { Component } from 'react'
import { ScrollView, Text, Image, StyleSheet } from 'react-native'

import Line from '../components/Line'
import LongText from '../components/LongText';

export default class SerieDetailScreen extends Component {
    constructor(props){
        super(props)
    }

    render() {
        const { serie } = this.props.navigation.state.params

        return (
            <ScrollView>
                <Image 
                    style={styles.image}
                    source={{ uri: serie.img }} 
                    resizeMethod='scale' />

                <Line label='Título' content={serie.title} />
                <Line label='Gênero' content={serie.gender} />
                <Line label='Nota' content={serie.rate} />
                <LongText label='Descrição' content={serie.description} />
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    image: {
        aspectRatio: 1,
        flex: 1
    }
})