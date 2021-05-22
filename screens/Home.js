import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native'
import { Card, Paragraph } from 'react-native-paper';

const Home = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'flex-start', padding: 22 }}>
            <Card>
                <Card.Title title="Post " subtitle="Card Subtitle" />
                <Card.Content>
                    <Paragraph>Card content</Paragraph>
                </Card.Content>
            </Card>
        </View>
    );
}


export default Home;