/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import Colors from './config/colors';



function App(): JSX.Element {
  return (
      <ImageBackground source={require('./assets/backgroundImage.jpeg')} style= {{flex:1}}>
      <View style = {{flex:1, backgroundColor : "#00000050"}}>
        <View style = {{
            position : 'absolute',
            height : '100%',
            zIndex : 2,
            width: "100%",
            justifyContent: 'flex-end',
            paddingHorizontal : 20,
            paddingBottom: 40
        }}>
          <View>
            <Text style = {{ color: Colors.white, fontWeight: '800', fontSize : 35, textTransform: 'capitalize'}}>
              Let's your Favourite Food find You
            </Text>
            <Text style = {{ color: Colors.white ,fontWeight: '600', fontSize : 15}}>
            Embark on a Delicious Journey in the World of Cooking
            </Text>
            <TouchableOpacity style= {{
              padding: 15,  
              width: 150, 
                backgroundColor: Colors.white,
                borderRadius: 50,
                alignItems: "center",
                marginTop: 15}}>
              <Text style={{
                 color: Colors.black,
                 fontSize: 15,
                 fontWeight: "700",
              }}>Explore Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
    );
}

const styles = StyleSheet.create({
});

export default App;
