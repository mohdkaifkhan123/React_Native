/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ImageBackground,
} from 'react-native';

const App = () => {
  const checked = require('./asset/check1.png');
  const unChecked = require('./asset/uncheck.png');
  const checkboxImage = {true: checked, false: unChecked};
  const [isChecked, setChecked] = useState(checkboxImage.false);
  const checkboxChange = () => {
    if (isChecked == checkboxImage.true) {
      setChecked(checkboxImage.false);
    } else {
      setChecked(checkboxImage.true);
    }
  };
  return (
    <ImageBackground
      style={{flex: 1}}
      source={require('./asset/BG.png')}
      resizeMode="cover">
      <SafeAreaView style={styles.container}>
        <Navigation />
        <View style={styles.middle}>
          <View style={styles.middletop}>
            <Text style={styles.word2}>Sign up with</Text>
            <View style={styles.button}>
              <TouchableOpacity style={[styles.button1, {marginRight: 6}]}>
                <Image
                  source={require('./asset/icon-github.png')}
                  style={styles.icon}
                />
                <Text>Github</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button1, {marginLeft: 6}]}>
                <Image
                  source={require('./asset/google.png')}
                  style={styles.icon}
                />
                <Text>Google</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.middlebottom}>
            <Text style={styles.word3}>Or sign up with credentials</Text>
            <View style={styles.input}>
              <Image
                style={{tintColor: 'grey'}}
                source={require('./asset/hat.png')}
              />
              <TextInput style={styles.itext} placeholder="Name" />
            </View>
            <View style={styles.input}>
              <Image source={require('./asset/mail.png')} />
              <TextInput style={styles.itext} placeholder="Email" />
            </View>
            <View style={styles.input}>
              <Image source={require('./asset/password.png')} />
              <TextInput style={styles.itext} placeholder="Password" />
            </View>
            <View style={styles.checkPass}>
              <Text style={{color: '#8898AA'}}>password strength:</Text>
              <Text style={styles.pass}>strong</Text>
            </View>
            <View style={styles.policy}>
              <TouchableOpacity onPress={checkboxChange}>
                <Image style={styles.check} source={isChecked} />
              </TouchableOpacity>
              <Text style={{color: '#525F7F'}}>I agree with the</Text>
              <Text style={{color: '#5E72E4', paddingLeft: 1.8}}>
                Privacy Policy
              </Text>
            </View>
            <TouchableOpacity style={styles.primaryButton}>
              <Text style={styles.primaryButtonText}>CREATE ACCOUNT</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const Navigation = () => {
  return (
    <View style={styles.top}>
      <Image style={styles.rarrow} source={require('./asset/Right.png')} />
      <Text style={styles.word}>Create Account</Text>
      <Image style={styles.bell} source={require('./asset/bell.png')} />
      <Image style={styles.basket} source={require('./asset/basket.png')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    flexDirection: 'row',
    top: 25,
  },
  rarrow: {
    left: 10,
  },
  word: {
    left: 60,
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 22,
  },
  bell: {
    left: 200,
  },
  basket: {
    left: 215,
  },
  middle: {
    marginHorizontal: 15,
    marginBottom: 30,
    marginTop: 80,
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 6,
  },
  middletop: {
    flex: 1,
  },
  middlebottom: {
    flex: 3,
    backgroundColor: '#F4F5F7',
    borderRadius: 6,
  },
  word3: {
    color: '#8898AA',
    textAlign: 'center',
    fontSize: 12,
    fontWeight: '400',
    letterSpacing: 0.37,
    wordWrap: 'break-word',
    marginVertical: 28,
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    margin: 12,
    paddingHorizontal: 10,
    borderRadius: 4,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    color: '#ADB5BD',
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 19,
  },
  icon2: {
    width: '100%',
    height: '100%',
    background: '#ADB5BD',
  },
  itext: {
    paddingHorizontal: 17,
  },
  checkPass: {
    flexDirection: 'row',
    margin: 26,
  },
  pass: {
    color: '#2DCE89',
    fontSize: 14,
    fontWeight: '700',
    paddingLeft: 3,
  },
  policy: {
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 19,
  },
  primaryButton: {
    marginHorizontal: 106,
    marginVertical: 48,
    paddingHorizontal: 22,
    maxWidthwidth: 140,
    paddingVertical: 12,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5E72E4',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    activeOpacity: 0.7,
  },
  check: {
    width: 20,
    height: 20,
    borderRadius: 2,
    borderWidth: 2,
    borderColor: 'blue',
    marginRight: 10,
  },
  primaryButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 19,
  },
  word2: {
    color: '#8898AA',
    textAlign: 'center',
    marginTop: 31,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  button1: {
    flexDirection: 'row',
    activeOpacity: 0.7,
    backgroundColor: 'white',
    paddingHorizontal: 22,
    maxWidthwidth: 140,
    paddingVertical: 12,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
});

export default App;
