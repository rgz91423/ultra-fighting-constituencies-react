import React from 'react';
import { StyleSheet, Text, View, WebView, FlatList } from 'react-native';
import Post from './Post';
import * as firebase from 'firebase';


const POST_URL = 'http://35.193.238.241/wp-json/wp/v2/posts';


// Initialize Firebase
/*
const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);
*/
export default class Posts extends React.Component {

    _keyExtractor = (item, index) => item.id;

    constructor() {
        super();
        this.itemsRef = undefined;//firebaseApp.database().ref('isUpdated');
        this.state = {
            isLoading: true,
        };
    }

    componentWillMount() {
        this.state = {
            isLoading: true,
        }
        this.fetchAllPosts();
        /*
        this.itemsRef.on('value', (item) => {
            
            console.log(item);
            console.log(typeof item.val());
            if (item.val() === true) {
                console.log("Updating Value");
                this.state = {
                    isLoading: true,
                }
                this.fetchAllPosts();

            } else {
                console.log("No Update Needed");
            }
            
        });*/
    }

    componentDidMount() {
        this.fetchAllPosts();
    }

    fetchAllPosts() {
        fetch(POST_URL,
            {
                headers: {
                  'Cache-Control': 'no-cache',
                },
                cache: 'no-store'
              } 
        )
        .then((response) => response.json())
        .then((responseData) => {
            this.setState({
                isLoading: false,
                posts: responseData
            })
        })
        .done();
    }

    renderPost(post) {
        return (
        <View style={styles.card} key={post.id} >
            <Text>{post.title.rendered}</Text>
        </View>
        )
    }


    render() {
        const isLoading = this.state.isLoading;

        if (isLoading) {
            return (
            <View style={styles.container}>
                <Text>Loading...</Text>
            </View>
            )
        }
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.posts} keyExtractor={this._keyExtractor}
                    renderItem={({item}) => <Text style={styles.card}>{item.title.rendered}</Text>}
                    />
            </View>

            
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  card: {
      backgroundColor: '#fff',
      padding: 20,
      marginTop: 0,
      borderStyle: 'solid',
      borderColor: '#ccc',
      borderWidth: 1,
      fontSize:20
  }
});
