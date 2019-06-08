import React, { Component } from 'react'
import { ScrollView, Picker, Slider, View, Text, TextInput, Alert,
        StyleSheet, Button, Image, KeyboardAvoidingView, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'

import FormRow from '../components/FormRow'
import { setField, saveSerie } from '../actions'

class SerieDetailScreen extends Component {

    constructor(props){
        super(props);

        this.state = {
            isLoading = false
        }
    }

    renderImage() {
        const { serieForm } = this.props
        if(serieForm.img)
            return <Image source={{uri: serieForm.img}} style={{width: '100%', height: 400}} />
    }

    render() {
        const { serieForm, setField, saveSerie, navigation } = this.props
        return (
            <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={140} enabled>
                <ScrollView style={styles.container}>
                    <FormRow>
                        <TextInput
                            placeholder='Título'
                            value={serieForm.title}
                            onChangeText={value => setField('title', value)}
                            autoCapitalize='words'
                            underlineColorAndroid='transparent'
                            style={styles.input} />
                    </FormRow>

                    <FormRow>
                        <TextInput
                            placeholder='URL da imagem'
                            value={serieForm.img}
                            onChangeText={value => setField('img', value)}
                            autoCapitalize='none'
                            underlineColorAndroid='transparent'
                            style={styles.input} />
                    </FormRow>

                    { this.renderImage() }

                    <FormRow>
                        <Picker
                            style={styles.noPadding}
                            selectedValue={serieForm.gender}
                            onValueChange={itemValue => setField('gender', itemValue)}>
                            <Picker.Item label="Ficção Científica" value="scienceFiction" />
                            <Picker.Item label="Comédia" value="comedy" />
                            <Picker.Item label="Drama" value="drama" />
                            <Picker.Item label="Ação" value="action" />
                        </Picker>
                    </FormRow>


                    <FormRow>
                        <View style={styles.nota}>
                            <Text>Nota: </Text>
                            <Text>{serieForm.rate}</Text>
                        </View>
                        <Slider
                            value={serieForm.rate}
                            onValueChange={value => setField('rate', value)}
                            maximumValue={100}
                            step={1} />
                    </FormRow>

                    <FormRow>
                        <TextInput
                            style={styles.input} 
                            placeholder='Descrição'
                            value={serieForm.description}
                            onChangeText={value => setField('description', value)}
                            autoCapitalize='sentences'
                            underlineColorAndroid='transparent'
                            numberOfLines={8}
                            multiline={true} />
                    </FormRow>

                    {
                        this.state.isLoading 
                        ? <ActivityIndicator />
                        : <Button title='Salvar' 
                                onPress={ async () => {
                                        this.setState( {isLoading: true });

                                        try{
                                            await saveSerie(serieForm);
                                            navigation.goBack();
                                        } catch(e){
                                            Alert.alert("Erro!!", e.message);
                                        } finally{
                                            this.setState( {isLoading: false });                                        
                                        }
                                    }
                                }
                            />
                    }
                </ScrollView>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
    },
    input: {
        paddingLeft: 5,
        paddingRight: 5,
    },
    noPadding: {
        padding: 0,
    },
    nota: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 10,
    }
})

const mapStateToProps = state => ({
    serieForm: state.serieForm
})

const mapDispatchToProps = {
    setField,
    saveSerie
}

export default connect(mapStateToProps, mapDispatchToProps)(SerieDetailScreen)