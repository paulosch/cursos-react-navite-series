import React, { Component } from 'react';
import { View, StyleSheet, FlatList } from 'react-native'

import series from '../../series.json'
import SerieCard from '../components/SerieCard';
import AddSerieCard from '../components/AddSerieCard';

class SeriesScreen extends Component {
    constructor(props){
        super(props)
    }
    
    isEven = number => (number % 2 === 0 ? true : false)

    render() {
        return (
            <View style={styles.container}>
                <FlatList 
                    data={[...series, { isLast: true, id: series.Lenght++}]}
                    renderItem={({ item, index }) => (
                        item.isLast 
                            ? <AddSerieCard 
                                isFirstColumn={this.isEven(index)}
                                onNavigate={() => this.props.navigation.navigate('SerieForm')} />
                            : <SerieCard 
                                serie={item} 
                                isFirstColumn={this.isEven(index)}
                                onNavigate={() => this.props.navigation.navigate('SerieDetail', { serie: item })}/>
                    )}
                    keyExtractor={item => item.id.toString()}
                    numColumns={2}
                    ListHeaderComponent={props => <View style={styles.marginTop}></View>}
                    ListFooterComponent={props => <View style={styles.marginBottom}></View>} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    marginTop: {
        marginTop: 2
    },
    marginBottom: {
        marginBottom: 2
    }
})

export default SeriesScreen