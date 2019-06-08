import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableWithoutFeedback,
    LayoutAnimation,
    NativeModules
} from 'react-native'

NativeModules.UIManager.setLayoutAnimationEnabledExperimental && NativeModules.UIManager.setLayoutAnimationEnabledExperimental(true);

export default class LongText extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isExpanded: false
        }
    }

    toggleIsExpanded() {
        const { isExpanded } = this.state
        this.setState({ isExpanded: !isExpanded })
    }

    componentWillUpdate(nextProps, nextState) {
        LayoutAnimation.spring();
    }

    render() {
        const { label = '', content = '-' } = this.props
        const { isExpanded } = this.state

        return (
            <View style={styles.line}>
                <Text style={[
                    styles.cell,
                    styles.label
                ]}>{label}</Text>

                <TouchableWithoutFeedback onPress={() => this.toggleIsExpanded()}>
                    <View>
                        <Text
                            style={[
                                styles.cell,
                                styles.content,
                                isExpanded ? styles.expanded : styles.collapsed]}
                        >{content}</Text>
                    </View>

                </TouchableWithoutFeedback>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    line: {
        paddingTop: 3,
        paddingBottom: 3,
    },
    cell: {
        fontSize: 14,
        paddingLeft: 3,
        paddingRight: 3,
    },
    label: {
        fontWeight: 'bold',
        flex: 1,
        textDecorationLine: 'underline',
        paddingBottom: 3
    },
    content: {
        flex: 3,
        textAlign: 'justify', //IOS
        paddingBottom: 3,
    },
    collapsed: {
        maxHeight: 65
    },
    expanded: {
        flex: 1
    }
})