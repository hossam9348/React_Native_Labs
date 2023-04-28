import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const TodoDetails = (props) => {
    return (
      <View style={{ flex:1, justifyContent: "center", alignItems: "center", backgroundColor: "#FFFFFF" }}>
      <Text style={{margin:4, fontSize:22, backgroundColor:"yellow", borderRadius:10}}>{props.route.params.title}</Text>
      <Text style={{fontSize: 18, backgroundColor:"#DDDDDD", borderRadius:10}}>{props.route.params.description}</Text>
      </View>
    )
}

const styles = StyleSheet.create({
})

export default TodoDetails;
