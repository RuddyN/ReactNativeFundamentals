import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isLoggedIn: false };
    }

    toggleuser = () => {
        this.setState(previousState => {
            return { isLoggedIn: !previousState.isLoggedIn }
        })
    }

    render() {
        let display = this.state.isLoggedIn ? 'Smaple User' : this.props.message;
        return (
            <View style={styles.headStyle}>
                <Image
                    style={styles.logoStyle}
                    source={require('./img/reactlogo.png')}
                />
                <Text style={styles.headText} onPress={this.toggleuser}>{display}</Text>
            </View>

        )
    }
}


const styles = StyleSheet.create({
    headText: {
        textAlign: 'right',
        color: '#fff',
        fontSize: 20,
        flex: 1,
    },
    headStyle: {
        paddingTop: 30,
        paddingBottom: 10,
        paddingRight: 10,
        backgroundColor: '#35605a',
        flex: 1,
        flexDirection: 'row',
        borderBottomWidth: 2,
        borderColor: '#000000',
    },
    logoStyle: {
        flex: 1,
        width: undefined,
        height: undefined,
    }
});