/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Picker, FlatList, TouchableHighlight} from 'react-native';

export default class App extends Component {

  state = {
    location: 'valley',
    pesticides: [
      {key: 'Object 1', data: 'hello'},
      {key: 'Object 2'},
      {key: 'Object 3'}
    ]
  };

  handlePesticidePressed = (item) => {
    alert(item.data);
  };


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.locationContainer}>
          <Text>Choose location</Text>
          <Picker
            selectedValue={this.state.location}
            style={styles.locationPicker}
            onValueChange={(itemValue, itemIndex) => {
              this.setState({
                location: itemValue
              })
            }}
            itemStyle={styles.locationPickerItem}
          >
            <Picker.Item label="Valley" value="valley"/>
            <Picker.Item label="Foothills" value="foothills"/>
          </Picker>
        </View>
        <View style={styles.pesticidesContainer}>
          <View>
              <Text>Pesticides</Text>
            </View>
            <View style={styles.pesticidesList}>
              <FlatList 
                data={this.state.pesticides}
                renderItem={
                  ({item}) => {
                  return (
                    <TouchableHighlight 
                    onPress={() => this.handlePesticidePressed(item)}
                    underlayColor='gray'
                    >
                      <Text style={styles.pesticideItem}>{item.key}</Text>
                    </TouchableHighlight>
                    )
                }
              }
              style={styles.pesticidesList}
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
    alignItems: 'center',
    backgroundColor: 'white',
  },
  locationContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderWidth: 5,
    borderColor: 'red',
    width: '80%',
    margin: 40
  },
  locationPicker: {
    height: '80%',
    width: '100%', 
    borderColor: 'green', 
    borderWidth: 5,
    justifyContent: 'flex-start',
    alignSelf: 'flex-start'
  
  },
  locationPickerItem: {
    height: 150,
    margin: 10
  },
  pesticidesContainer:{
    flex: 2,
    width: '80%'
  },
  pesticidesList: {
    borderColor: 'blue',
    borderWidth: 5,
    width: '100%'
  },
  pesticideItem: {
    padding: 10,
    fontSize: 20,
    height: 50,
    width: '100%'
  }
});
