import React from 'react';
import { StyleSheet,ScrollView, View,Text,Image } from 'react-native';
import { Card } from 'react-native-elements';

const VideoList = ({ videos }) => {
console.log(videos);
return(
  <ScrollView>
    <View style={styles.containerStyle}>
    {
      videos.map(video => (
          <View key={video.etag}>
            <Card title={video.snippet.title} containerStyle={styles.cardStyle}>
              <Image
              style={styles.imageStyle}
              source={{ uri: video.snippet.thumbnails.medium.url }}
              />
                <Text style={styles.channelTitle}>{video.snippet.channelTitle}</Text>
                <Text style={styles.description}>{video.snippet.description}</Text>

            </Card>
          </View>
      ))
    }
    </View>
  </ScrollView>
  )
};


const styles = StyleSheet.create({
  containerStyle: {
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10
  },
  cardStyle: {
    padding: 5
  },
  imageStyle: {
    alignSelf: 'stretch',
    height: 180
  },
  title:{
    padding:5
  },
  channelTitle:{
    textAlign: 'right',
    padding:5,
    backgroundColor:'#596ee5',
    color:'#fff',
  },
  description:{
    fontSize:12,
    color:'#838481'
  }
});

export default VideoList;
