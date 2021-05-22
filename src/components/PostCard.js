import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Card, Paragraph, Headline } from 'react-native-paper';

const PostCard = ({ title, body, urlToImage, author, publishedAt }) => (
  <Card style={Styles.cardStyle}>
    <Card.Content>
        <View style={{marginBottom: 15}}>
            <Headline style={Styles.titleStyle}>{title}</Headline>
            <Headline style={Styles.authorStyle}>{author}</Headline>
            <Headline style={Styles.authorStyle}>{publishedAt}</Headline>
        </View>
    </Card.Content>
    <Card.Cover style={{marginBottom: 15}} source={{ uri: urlToImage }} />
    <Card.Content>
      <Paragraph style={{fontSize: 13}}>{body}</Paragraph>
    </Card.Content>
  </Card>
);

const Styles = StyleSheet.create({
    cardStyle: {
        marginBottom: 20
    },
    titleStyle: {
        fontSize: 17,
        fontWeight:'bold'
    },
    authorStyle: {
        fontSize: 15,
        fontStyle: 'italic'
    }
});

export default PostCard;

