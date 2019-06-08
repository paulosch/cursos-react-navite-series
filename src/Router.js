import { createStackNavigator } from 'react-navigation'

import LoginScreen from './screens/LoginScreen'
import SeriesScreen from './screens/SeriesScreen'
import SerieDetailScreen from './screens/SerieDetailScreen'
import SerieFormScreen from './screens/SerieFormScreen'

export default createStackNavigator({
  'Login': {
    screen: LoginScreen,
    navigationOptions: {
      title: 'Bem vindo!'
    }
  },
  'Main': {
    screen: SeriesScreen
  },
  'SerieForm': {
    screen: SerieFormScreen,
    navigationOptions: {
      title: 'Bem vindo!'
    }
  },
  'SerieDetail': {
    screen: SerieDetailScreen,
    navigationOptions: ({ navigation }) => {
      const { serie } = navigation.state.params
      return {
        title: serie.title
      }
    }
  }
}, {
    navigationOptions: {
      title: 'Séries!',
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#841584'
      },
      headerTitleStyle: {
        color: 'white'
      }
    }
  })