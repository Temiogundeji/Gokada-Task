import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native'
import { Card, Headline, Paragraph } from 'react-native-paper';

const About = () => {
    return (
        <View style={Styles.container}>
            <Card style={Styles.cardStyle}>
                <Card.Content>
                    <Headline style={Styles.headLine}>PostApp v1.0</Headline>
                    <Paragraph style={Styles.paragraph}>
                        This is the first version of PostApp, developed by Temiogundeji.
                    </Paragraph>
                </Card.Content>
            </Card>
        </View>
    );
}

const Styles = StyleSheet.create({
    container: { 
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        padding: 22 
    },
    cardStyle: {
        height:  200
    },
    paragraph: {
        fontSize: 16,
        marginBottom: 20
    },
    headLine: {
        fontWeight:'bold',
        fontSize: 18,
        marginBottom: 15
    }
});

export default About;