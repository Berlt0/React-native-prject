import { StatusBar } from 'expo-status-bar';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import Navigator from './Navigator';
import HomePage from './HomePage';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image ,Button,Alert,TextInput} from 'react-native';


export default function App() {

 const navigation = useNavigation();

  return (
    <NavigationContainer>
    
    <Navigator/>
    
    <View style={styles.container}>
      <View style={styles.background}>

      <StatusBar style="auto" />
      
     <View style={styles.login}>

      <Image source={{uri:'https://thumbs.dreamstime.com/b/cool-lion-logo-design-template-vector-illustration-cool-lion-logo-design-108644216.jpg'}} style={styles.img}/>
      <Text style={styles.greetings}>Log In</Text>
        { <TextInput placeholder='Email' style={styles.email}/>  /*onChangeText={setEmail}  */}
        {<TextInput placeholder='Password' style={styles.password} /> /*onChangeText={setPassword} secureTextEntry={true}*/ }
      
      </View>

      <Text style={styles.forgot}>
          Forget Password 
      </Text>
      <Text style={styles.create}>
          Don't have an account?<Text style={{color:'blue'}}> Create</Text>
      </Text>
          
      {/* <Button title=" Login" color='orange' onPress={() => "Hello"}/> */}
      <Button title="Login" color='orange' onPress={() => navigation.navigate('HomePage')}/> 

    <View style={styles.logoContainer}>
      <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrDY-owrhTOVFZNoVIYNSkqVsuNpmIgquxqw&s'}} style={styles.fb} />
      <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6HMrE7xvKu5-UahOPBs3GcE4AZJk8LsX7tg&s'}} style={styles.google} />
      <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFhrhJEQ383QCvlpQSf660zZnDpxchlHDyLA&s'}} style={styles.linkedin} />
      <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmrGmeBv3SOLSKz6OlTVlVYkfH9_W3BBgdrA&s'}} style={styles.github} />
    </View>

      </View>
    </View>

    </NavigationContainer> 
  
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img:{
    width:100,
    height:100,
    borderRadius: 50,
    marginLeft: 50,
    marginBottom: 20
    

  },
  greetings:{
    color: 'black',
    fontSize: 25,
    marginBottom: 20,
    textAlign: 'center',
  },
  email:{
    width:210,
    height:45,
    borderRadius: 10,
    borderWidth: 1,
    paddingLeft: 10,
    marginBottom: 10,
    backgroundColor:'white'},
  password:{
      width:210,
      height:45,
      borderRadius: 10,
      borderWidth: 1,
      paddingLeft: 10,
      marginBottom: 3,
      backgroundColor:'white',
  },
  login:{
    flexDirection: 'column',
    gap:0
  },
  forgot:{
    textAlign:'center',
    color:'blue',
    fontSize: 15,
    marginTop: 5
  },
  create:{
    marginBottom: 15,
    textAlign:'center',

  },
  background:{
    backgroundColor: 'darkgrey',
    padding:40,
    height:520,
    borderRadius: 20,
  },
  fb:{
    width:20,
    height:20,
    borderRadius: 20
  },
  google:{
    width:20,
    height:20,
    borderRadius: 40
  },
  linkedin:{
    width:20,
    height:20,
    borderRadius: 40
  },
  github:{
    width:20,
    height:20,
    borderRadius: 40
  },
  logoContainer:{
    flexDirection: 'row',
    gap: 5,
    marginTop: 15,
    justifyContent: 'center',
  },
  span:{
    color:'blue'
  }
  
  // click:{
  //   width:100,
  //   borderRadius: 10,
  //   color: 'red'
  // }

});