import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import Icon1 from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

const {width, height} = Dimensions.get('window');

// Responsive scaling functions
const scale = size => (width / 390) * size;
const verticalScale = size => (height / 844) * size;
const moderateScale = (size, factor = 0.5) =>
  size + (scale(size) - size) * factor;

const Profile = () => {
const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <View style={styles.photoview}>
        <Image
          source={{
            uri: 'https://th.bing.com/th/id/R.d7c3742514b9d96ea3b03b5810617028?rik=7UP8sBpU5d9j1w&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2fa%2f2%2fd%2f852140-full-size-justin-bieber-hd-2018-wallpapers-1804x2500.jpg&ehk=ZBFVI8hT8yVY%2fDxW9%2bGSvhcT%2bDOWjhfLm6iwWW%2bFLcs%3d&risl=&pid=ImgRaw&r=0',
          }}
          style={styles.profilephoto}
        />
        <TouchableOpacity style={styles.penciltouchable}>
          <Image
            source={require('../images/pencil1.png')}
            style={styles.pencil}
          />
        </TouchableOpacity>
      </View>

      {/* Form Section */}
      <View style={styles.formContainer}>
        {/* Name Input */}
        <View style={styles.inputContainer}>
          <Icon
            name="user"
            size={moderateScale(18)}
            color="black"
            style={styles.inputIcon}
          />
          <TextInput
            placeholder="Enter Name"
            placeholderTextColor="black"
            style={styles.textInput}
          />
        </View>

        {/* Email Input */}
        <View style={styles.inputContainer}>
          <Icon
            name="envelope"
            size={moderateScale(19)}
            color="black"
            style={styles.inputIcon}
          />
          <TextInput
            placeholder="Email"
            placeholderTextColor="black"
            style={styles.textInput}
            keyboardType="email-address"
          />
        </View>

        {/* Phone Number Row */}
        <View style={styles.phoneRow}>
          {/* Country Code */}
          <TouchableOpacity
            style={[styles.inputContainer, styles.countryCodeContainer]}>
            <Text style={styles.countryCodeText}>+91 (IN)</Text>
            <Icon name="chevron-down" size={moderateScale(14)} color="black" />
          </TouchableOpacity>

          {/* Phone Input */}
          <View style={[styles.inputContainer, styles.phoneInputContainer]}>
            <TextInput
              placeholder="Enter Phone Number"
              placeholderTextColor="black"
              style={styles.textInput}
              keyboardType="phone-pad"
            />
          </View>
        </View>

        {/* Employee ID Input */}
        <View style={styles.inputContainer}>
          <Icon
            name="location-dot"
            size={moderateScale(19)}
            color="red"
            style={styles.inputIcon}
          />
          <TextInput
            placeholder="Enter Address"
            placeholderTextColor="black"
            style={styles.textInput}
            keyboardType="email-address"
          />
        </View>
        <View style={{flexDirection:"row",justifyContent:"space-between"}}>
          <TouchableOpacity onPress={() =>{navigation.navigate("Howtouse")}}>
            <View style={styles.rowview}>
              <Text>
                <Icon
                  name="user-tie"
                  size={moderateScale(18)}
                  color="black"
                  style={styles.inputIcon}
                />
              </Text>
              <Text style={styles.sametext}>How to use app</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.rowview}>
              <Text>
                <Icon1
                  name="setting"
                  size={moderateScale(18)}
                  color="black"
                  style={styles.inputIcon}
                />
              </Text>
              <Text style={styles.sametext}>Term & Condition</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <TouchableOpacity style={styles.logouttouchable}>
          <Text style={styles.logouttext}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: verticalScale(30),
    marginHorizontal: moderateScale(15),
  },
  profilephoto: {height: 120, width: 120, borderRadius: 70},
  pencil: {height: 30, width: 30},
  penciltouchable: {marginTop: '-5%', marginLeft: '16%'},
  photoview: {alignItems: 'center', marginTop: verticalScale(60)},
  formContainer: {
    marginTop: verticalScale(30),
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0f0f0',
    borderRadius: moderateScale(10),
    paddingVertical: verticalScale(2),
    paddingHorizontal: moderateScale(15),
    marginVertical: verticalScale(8),
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    borderWidth: 0.3,
    borderColor: 'grey',
    backgroundColor:"white"
  },
  inputIcon: {
    marginRight: moderateScale(12),
  },
  textInput: {
    flex: 1,
    fontSize: moderateScale(16),
    color: 'black',
  },
  phoneRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  countryCodeContainer: {
    width: '30%',
    justifyContent: 'space-between',
  },
  countryCodeText: {
    fontSize: moderateScale(16),
    color: 'black',
  },
  phoneInputContainer: {
    width: '65%',
  },
  employeetext: {fontWeight: '400', fontSize: 16},
  logouttext: {
    fontWeight: '500',
    textAlign: 'center',
    backgroundColor: 'red',
    paddingVertical: 10,
    borderRadius: 10,
    color: 'white',
    fontSize: 16,
  },
  logouttouchable: {marginTop: verticalScale(40)},
  rowview:{flexDirection:"row",justifyContent:"space-between",backgroundColor:"white",padding:13,borderRadius:10,gap:20, borderWidth: 0.3,
    borderColor: 'grey',marginTop:12},
  sametext:{fontWeight:"400",fontSize:15}
});

export default Profile;
