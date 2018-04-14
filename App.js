/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  WebView
} from 'react-native';

import YTSearch from 'youtube-api-search'

import AppHeader from './src/Header';
import AppSearch from './src/Search';
import VideoList from './src/VideoList';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
const API_KEY = 'AIzaSyAr7sf1xSLK3v9DCFHnfbCvzyb42IQJ6Qk';
type Props = {};
export default class App extends Component<Props> {

  state = {
    loading:false,
    videos:[],
    videoID:"",
   };
   componentDidMount(){
     this.setState({loading:true})
     YTSearch({key:API_KEY,term:'Jagan reddy'},videos=>{
      //console.log(videos);
      this.setState({loading:false,videos})
     });
   }
   //'https://www.youtube.com/watch?v=mBHW5_2yVbc'
  onPressSearch = term => {
    this.setState({loading:true})
    YTSearch({key:API_KEY,term:term},videos=>{
      //console.log(videos);
      this.setState({loading:false,videos})
    });

  }
  render() {
    return (
    <View style={styles.container}>
      <AppHeader />
      <AppSearch loading={this.state.loading} onPressSearch={this.onPressSearch} />
          <WebView
            source={{uri: this.state.videoID}}
            style={{marginTop:10}}
          />
      <VideoList videos={this.state.videos} />
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  //  justifyContent: 'center',
  //  alignItems: 'center',
  backgroundColor:'#ddd'
  }
});
