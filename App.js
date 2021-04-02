import React, {useState} from 'react';
import {Keyboard, StyleSheet, TextInput, Text, Button, TouchableWithoutFeedback, View, Image, SafeAreaView, Alert, StatusBar, Switch } from 'react-native';
import { Icon } from 'react-native-elements'

export default function App() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [answer, setAnswer] = useState("")
  const toggleSwitch = () => setIsEnabled(!isEnabled); 

  function clearTextField(){
    setAnswer("");
    console.log("answer is nu "+ answer);
  }

  const createTwoButtonAlert = () =>
    Alert.alert(
      "Hier komt de boodschap van de textInput",
      "You answered "+answer,
      [
        {
          text: "Cancel",
          onPress: () => clearTextField(),
          style: "cancel"
        },
        { text: "OK", 
        onPress: () => clearTextField(),
        style: "OK"}
      ],
      { cancelable: false },
    );


  return (
  <SafeAreaView style={styles.container}> 
  {/* SafeAreaView rendeners content within the safe area boundaries of a device. Only for IOS version 11 or later */}
    <StatusBar animated={true}
        backgroundColor="#61dafb"
        barStyle="dark-content"
        />
        <TouchableWithoutFeedback onPress={ () => Keyboard.dismiss()}>
        <View>    
           <View style={{width: "100%", height: '5%', backgroundColor: '#61dafb', flexDirection: 'row', paddingLeft: 20}}>
           <Icon
            name='home'
            color='#00aced' />
          <Text style={styles.baseText}>Our React-Native App</Text>
          </View>
          <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-evenly', alignContent: 'flex-start', alignItems: 'flex-start'}}>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={isEnabled ? "red" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
            <Text style={{color: 'white'}}>{isEnabled?'yes':'no'}</Text>
          </View>
          <TextInput
            style={{fontStyle: 'italic', paddingLeft: 30, height: 40, backgroundColor: '#ffff', borderColor: 'grey', borderBottomWidth: 3, color:'blue', borderTopWidth: 3 }}
            onChangeText={text => setAnswer(text)}
            value={answer}
            placeholder={'Geef hier jouw boodschap...'}
            
          />
          <Button
            onPress={createTwoButtonAlert}
            title='submit'
            accessibilityLabel="Learn more about this blue button"
          />
        </View>
        </TouchableWithoutFeedback>
  </SafeAreaView>

  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222",
    color: 'white',
    alignItems: 'center',
    //marginTop: Platform.OS === "android" ? StatusBar.currentHeight:0
  },
  baseText: {
    color: "#fff",
    fontSize: 18,
    width: '100%',
    fontWeight: 'bold',
    marginLeft: 10

  },
  logo:{
    width: 50,
    height: 50,
    margin: 5
  },
  primarybtn: {
    backgroundColor: "#000",
    
    width: '50%'
  },
  secondarybtn: {
    backgroundColor: "#fff"
  }
});