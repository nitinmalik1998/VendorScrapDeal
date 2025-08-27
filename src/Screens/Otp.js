import { useNavigation } from '@react-navigation/native';
import React, {useState} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import OTPTextInput from 'react-native-otp-textinput';

const Otp = () => {
  const [otp, setOtp] = useState('');
const navigation=useNavigation()

  return (
    <View style={[styles.container]}>
      <View style={styles.scrapdealview}>
        <Image
          source={require('../images/scrapdeallogin1.jpg')}
          style={styles.scrapimage}></Image>
        <Text style={styles.scrapdealtext}>Scrap Deal</Text>
      </View>
      <View style={styles.welcomehassleview}>
        <Text style={styles.welcometext}>Write OTP</Text>
        <Text style={styles.hassletext}>
          Just Write the OTP sent to your Registered
        </Text>
        <Text style={styles.hassletext}>Phone Number</Text>
      </View>
      <Text style={styles.OTPtext}>OTP</Text>
      <OTPTextInput
        inputCount={5}
        containerStyle={styles.otpContainer}
        textInputStyle={styles.otpInput}
        handleTextChange={text => setOtp(text)}
      />

      {/* Proceed Button */}
      <TouchableOpacity style={styles.proceedButton} onPress={() =>{navigation.navigate("TabNavigation")}} >
        <Text style={styles.proceedText}>Proceed</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    marginHorizontal: 15,
  },
  scrapimage: {height: 30, width: 30},
  scrapdealtext: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 19,
    marginLeft: '2%',
  },
  scrapdealview: {flexDirection: 'row', marginTop: 30},
  welcometext: {fontWeight: '500', fontSize: 20},
  hassletext: {color: 'grey', fontSize: 15},
  welcomehassleview: {paddingVertical: 15, marginTop: 60},
  signuptext: {fontSize: 16, fontWeight: '500'},
  ortext: {fontSize: 15, fontWeight: '500'},
  logintext: {
    fontSize: 15.5,
    fontWeight: '500',
    textDecorationLine: 'underline',
  },
  proceedButton: {
    backgroundColor: '#00A572',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 50,
  },
  proceedText: {
    color: 'white',
    fontSize: 17,
    fontWeight: '600',
  },
  OTPtext: {fontWeight: '500', fontSize: 18},
  otpContainer: {
    marginTop: 20,
  },
  otpInput: {
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderBottomWidth: 1,
    width: 50,
    height: 50,
    marginHorizontal: 12,
    color: '#00A572',
  },
});

export default Otp;
