import { useNavigation } from '@react-navigation/native';
import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const Signup = () => {
  const [isChecked, setIsChecked] = useState(false);
const navigation = useNavigation()


  return (
    <View style={[styles.container]}>
      <View style={styles.scrapdealview}>
        <Image
          source={require('../images/scrapdeallogin1.jpg')}
          style={styles.scrapimage}></Image>
        <Text style={styles.scrapdealtext}>Scrap Deal</Text>
      </View>
      <Image
        source={require('../images/Vendors_Scrap_Deal.jpg')}
        style={styles.scrapimage1}></Image>
      <View style={styles.welcomehassleview}>
        <Text style={styles.welcometext}>Welcome to Scrap Deal!</Text>
        <Text style={styles.hassletext}>
          Hassle-free scrap pickup for shopkeepers
        </Text>
      </View>
      <View style={styles.rowview}>
        <TouchableOpacity>
          <Text style={styles.signuptext}>Sign Up</Text>
        </TouchableOpacity>
        <Text style={styles.ortext}>or</Text>
        <TouchableOpacity onPress={() => {navigation.navigate("Login")}}>
          <Text style={styles.logintext}>Login</Text>
        </TouchableOpacity>
      </View>
      {/* Form Fields */}
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          placeholderTextColor="#888"
        />

        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          placeholderTextColor="#888"
          keyboardType="phone-pad"
        />

        <TextInput
          style={styles.input}
          placeholder="Create Password"
          placeholderTextColor="#888"
          secureTextEntry={true}
        />

        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor="#888"
          secureTextEntry={true}
        />
      </View>
      {/* Proceed Button */}
      <TouchableOpacity style={styles.proceedButton} onPress={() =>{navigation.navigate("Login")}}>
        <Text style={styles.proceedText}>Proceed</Text>
      </TouchableOpacity>

      {/* Checkbox Section */}
      <TouchableOpacity
        style={styles.checkboxContainer}
        onPress={() => setIsChecked(!isChecked)}>
        <View style={[styles.checkbox, isChecked && styles.checkedCheckbox]}>
          {isChecked && (
            <Text style={styles.checkmark}>
              <Icon name="check" size={17} color="white" />
            </Text>
          )}
        </View>
        <Text style={styles.checkboxText}>
          I agree to receive updates over WhatsApp
        </Text>
      </TouchableOpacity>
      <View style={styles.termconditionview}>
        <Text style={styles.bysingingtext2}>
          By singing up, you agree to the
        </Text>
        <View style={styles.rowview1}>
          <TouchableOpacity>
            <Text style={styles.bysingingtext}>Terms of Service</Text>
          </TouchableOpacity>
          <Text style={styles.bysingingtext1}>and</Text>
          <TouchableOpacity>
            <Text style={styles.bysingingtext}>Privacy Policy</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.bysingingtext3}>Or</Text>
      <View style={styles.rowlogo}>
        <TouchableOpacity>
          <Image
            source={require('../images/searchgoogle.png')}
            style={styles.logoimage}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('../images/applelogo.png')}
            style={styles.logoimage}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 1,
    marginHorizontal: 15,
  },
  scrapimage: {height: 30, width: 30},
  scrapdealtext: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: '2%',
  },
  scrapdealview: {flexDirection: 'row', marginTop: 30},
  scrapimage1: {height: '20%', width: '100%', borderRadius: 20, marginTop: 20},
  welcometext: {fontWeight: '500', fontSize: 18},
  hassletext: {color: 'grey', fontSize: 13},
  welcomehassleview: {paddingVertical: 15},
  signuptext: {fontSize: 16, fontWeight: '500'},
  ortext: {fontSize: 15, fontWeight: '500'},
  logintext: {
    fontSize: 15.5,
    fontWeight: '500',
    textDecorationLine: 'underline',
  },
  rowview: {flexDirection: 'row', gap: 8},
  formContainer: {
    marginTop: 15,
  },

  input: {
    borderRadius: 10,
    paddingVertical: 11,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 15,
    backgroundColor: 'white',
    elevation: 10,
  },
  proceedButton: {
    backgroundColor: '#00A572',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 15,
  },
  proceedText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    marginLeft: 10,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: '#00A572',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  checkedCheckbox: {
    backgroundColor: '#00A572',
    borderColor: '#00A572',
  },
  checkmark: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  checkboxText: {
    fontSize: 12.5,
    fontWeight: '400',
  },
  bysingingtext: {
    textAlign: 'center',
    fontSize: 13,
    color: 'grey',
    textDecorationLine: 'underline',
  },
  rowview1: {alignSelf: 'center', flexDirection: 'row', gap: 5},
  bysingingtext1: {textAlign: 'center', fontSize: 13, color: 'grey'},
  bysingingtext2: {textAlign: 'center', fontSize: 13, color: 'grey'},
  termconditionview: {paddingVertical: 15},
  bysingingtext3: {
    textAlign: 'center',
    fontSize: 18,
    paddingVertical: 15,
    fontWeight: '500',
    color: 'grey',
  },
  logoimage: {height: 32, width: 32},
  rowlogo: {flexDirection: 'row', gap: 50, alignSelf: 'center'},
});

export default Signup;
