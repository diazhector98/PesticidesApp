/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, View, Picker, FlatList, TouchableHighlight} from 'react-native';
import {ButtonGroup, Text, SearchBar} from 'react-native-elements';
export default class App extends Component {

  constructor () {
    super();
  }
  state = {
    location: 0,
    pesticides: [
      {key: 'Object 1', data: 'hello'},
      {key: 'Object 2'},
      {key: 'Object 3'}
    ],
    search: ''
  };

  handlePesticidePressed = (item) => {
    alert(item.data);
  };

  updateSelectedLocation = (indexSelected) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        location: indexSelected
      }
    });
  }

  updateSearch = search => {
    this.setState((prevState) => {
      return {
        ...prevState,
        search: search
      }
    })
  }


  render() {
    return (
      <View style={styles.container}>
        <Text h1>Choose location!</Text>
        <ButtonGroup  onPress={this.updateSelectedLocation}
        selectedIndex={this.state.location}
        buttons={['Valley', 'Foothills']}
        containerStyle={{height: 50}}/>

        <View style={styles.pesticidesContainer}>
          <View>
              <Text h1>Pesticides</Text>
            </View>
            <SearchBar 
            placeholder='search pesticide used:'
            onChangeText={this.updateSearch}
            value={this.state.search}
            lightTheme={true}
            round={true}
            containerStyle={{backgroundColor: 'white'}}
            inputStyle={{backgroundColor: '#D3D3D3'}}
            />
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
