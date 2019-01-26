/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Picker, FlatList} from 'react-native';

export default class App extends Component {

  state = {
    location: 'valley',
    pesticides: [
      {key: 'Object 1'},
      {key: 'Object 2'},
      {key: 'Object 3'}
    ]
  };


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.locationContainer}>
          <Text>Choose location</Text>
          <Picker
            selectedValue={this.state.location}
            style={{height: 100, width: 200}}
            onValueChange={(itemValue, itemIndex) => {
              this.setState({
                location: itemValue
              })
            }}
          >
            <Picker.Item label="Valley" value="valley"/>
            <Picker.Item label="Foothills" value="foothills"/>
          </Picker>
          <View>
            <FlatList 
              data={this.state.pesticides}
              renderItem={
                ({item}) => {
                return <Text style={styles.pesticideItem}>{item.key}</Text>
              }
            }
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  locationContainer: {
    margin: 30,
    alignItems: 'center'
  },
  pesticideItem: {
    padding: 10,
    fontSize: 18,
    height: 44
  }
});
