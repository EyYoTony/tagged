import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MemoryRouter } from 'react-router';
import { NativeRouter } from 'react-router-native';

class App extends Component {
    render() {
        return (
            <NativeRouter>
                <View style={styles.container}>
                    <Text>Holy shit!</Text>
                </View>
            </NativeRouter>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default App;
