import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { Card, Paragraph } from 'react-native-paper';

const Home = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'flex-start', padding: 22 }}>
            <Card style={Styles.cardStyle}>
                <Card.Title style={Styles.titleStyle} title="Post App "  />
                <Card.Content>
                    <Paragraph style={{fontSize: 16}}>React Native is an open-source mobile application framework created by Facebook, Inc. It is used to develop applications for Android, Android TV, iOS, macOS and so on.</Paragraph>
                </Card.Content>
            </Card>
        </View>
    );
}

const Styles = StyleSheet.create({
    cardStyle: {
        backgroundColor: '#e91e63',
        borderWidth: 1,
        borderColor:'#f4511e'

    }
});


export default Home;