import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import PostCard from '../components/PostCard';
import { View, StyleSheet, ActivityIndicator, ScrollView } from "react-native";
import { Headline } from 'react-native-paper';
import { getAllPosts } from '../actions/postAction';
const selectPosts  = state => state.posts.posts;

const Posts = ({ navigation }) => {

    const dispatch = useDispatch();
    const posts = useSelector(selectPosts);
    const isLoading = useSelector(state => state.posts.isLoading);
    const [myPosts, setMyPosts] = useState(null);

    useEffect(() => {
        dispatch(getAllPosts());
    }, []);

    function truncateContent(str, num) {
        let strLength = str.length;
        let slicedStr = "";
        if(strLength > num){
          slicedStr = str.substring(0, num);
          slicedStr = slicedStr+'...';
        }
        else{
          slicedStr = str;
        }
        return slicedStr;
      }

    useEffect(() => {
        console.log(posts);
        if (posts && posts.length > 0) {
            const postList = posts.map((post, i) => {
            return <PostCard
              id={post.id}
              key={i}
              title={post.title}
              body={post.content}
              urlToImage={post.urlToImage}
              author={post.author}
              publishedAt={moment(post.publishedAt).fromNow()}
            />
        });
        console.log(postList);
          setMyPosts(postList);
        }
      }, [posts]);

      


    return (
        <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'flex-start', padding: 22 }}>
            <Headline style={Styles.heading}>Recent Posts</Headline>
                {isLoading ? <ActivityIndicator color="#ff0000" size={25} /> : null}
                <ScrollView style={{height: 50}}>{ myPosts }</ScrollView> 
        </View>
    );
}

const Styles = StyleSheet.create({
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 12
    }
});

export default Posts;