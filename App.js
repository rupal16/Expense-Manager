/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [gigs, setGigs] = useState([
    {
      description: 'Software Development Job',
      amount: 750000.0,
    },
  ]);

  const addGig = () => {
    setGigs([
      ...gigs,
      {
        description: description,
        amount: amount,
      },
    ]);
  };
  return (
    <SafeAreaView>
      <View>
        <Text>Income Manager</Text>
      </View>
      <TextInput
        style={styles.todoInput}
        value={description}
        placeholder="Enter a description"
        onChangeText={(text) => setDescription(text)}
      />
      <TextInput
        style={styles.todoInput}
        value={amount}
        placeholder="Enter the amount you made"
        // keyboardType="numeric"
        onChangeText={(text) => setAmount(text)}
      />
      <Button onPress={addGig} title="Add Gig"></Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  todoInput: {
    margin: 20,
    height: 40,
    borderColor: 'red',
    borderWidth: 1,
    paddingLeft: 20,
    paddingRight: 20,
  },
  // scrollView: {
  //   backgroundColor: Colors.lighter,
  // },
  // engine: {
  //   position: 'absolute',
  //   right: 0,
  // },
  // todoInput: {
  //   borderColor: 'red',
  //   height: 100,
  //   width: 100,
  //   // width: '100px',
  //   // backgroundColor: 'red',
  // },
  // body: {
  //   backgroundColor: Colors.white,
  // },
  // sectionContainer: {
  //   marginTop: 32,
  //   paddingHorizontal: 24,
  // },
  // sectionTitle: {
  //   fontSize: 24,
  //   fontWeight: '600',
  //   color: Colors.black,
  // },
  // sectionDescription: {
  //   marginTop: 8,
  //   fontSize: 18,
  //   fontWeight: '400',
  //   color: Colors.dark,
  // },
  // highlight: {
  //   fontWeight: '700',
  // },
  // footer: {
  //   color: Colors.dark,
  //   fontSize: 12,
  //   fontWeight: '600',
  //   padding: 4,
  //   paddingRight: 12,
  //   textAlign: 'right',
  // },
  //
});

export default App;
