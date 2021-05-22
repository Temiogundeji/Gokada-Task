import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { Card, Headline, Paragraph } from 'react-native-paper';

const Home = ({ navigation }) => {
    return (
        <View style={Styles.container}>
            <Card style={Styles.cardStyle}>
                <Card.Content >
                <Headline style={Styles.titleStyle}>Welcome</Headline>
                    <Paragraph style={Styles.paragraph}>Post App gives you quality news in realtime with just little subscription free. We are the best content agregator.</Paragraph>
                </Card.Content>
            </Card>
            <Headline style={Styles.headLine}>Categories</Headline>
            <View style={Styles.catRow}>
                <Card style={Styles.catCardStyle}>
                    <Card.Content style={{alignSelf:'center'}}>
                        <Text style={Styles.catText}>Agriculture</Text>
                    </Card.Content>
                </Card>
                <Card style={Styles.catCardStyle}>
                    <Card.Content style={{alignSelf:'center'}}>
                        <Text style={Styles.catText}>Sport</Text>
                    </Card.Content>
                </Card>
            </View>
            <View style={Styles.catRow}>
                <Card style={Styles.catCardStyle}>
                    <Card.Content style={{alignSelf:'center'}}>
                        <Text  style={Styles.catText}>Politics</Text>
                    </Card.Content>
                </Card>
                <Card style={Styles.catCardStyle}>
                    <Card.Content style={{alignSelf:'center'}}>
                        <Text style={Styles.catText}>Education</Text>
                    </Card.Content>
                </Card>
            </View>
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
        backgroundColor: '#EB9694',
        marginBottom: 20
    },
    titleStyle: {
        fontSize:18,
        fontWeight: 'bold',
        color:'#ffffff'
    },
    paragraph: {
        fontSize: 16,
        color: '#ffffff'
    },
    headLine: {
        marginBottom: 10,
        fontSize: 18,
        fontWeight: 'bold'
    },
    catRow: { 
        display: 'flex',
        flexDirection:'row',
        justifyContent: 'space-between',
        marginBottom: 15
    },
    catCardStyle: {
        width: '48%',
        padding: 25,
        shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
        },
        catText: {
            fontSize: 14,
            fontWeight: '600'
        }
});


export default Home;