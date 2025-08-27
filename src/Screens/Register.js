import React from "react";
import { View,Text, StyleSheet,Dimensions,TextInput,TouchableOpacity } from "react-native";
import Icon1 from 'react-native-vector-icons/FontAwesome';

const {width, height} = Dimensions.get('window');

// Responsive scaling functions
const scale = size => (width / 390) * size;
const verticalScale = size => (height / 844) * size;
const moderateScale = (size, factor = 0.5) =>
  size + (scale(size) - size) * factor;

const Register = () => {
  return(
  <View style={styles.mainview}>
    <View>
      <Text style={styles.Registertext}>Register as a Vendor</Text>
      <Text style={styles.filltext}>Fill out the form below to start{"\n"}schedulling scrap pickups</Text>
    </View>
    <View style={styles.formContainer}>
      <Text style={styles.title}>Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Name"
          placeholderTextColor="#999"
        />
        <Text style={styles.title}>Mobile Number</Text>
        <TextInput
          style={styles.input}
          placeholder="Mobile Number"
          placeholderTextColor="#999"
          keyboardType="phone-pad"
        />
        <Text style={styles.title}>Email(optional)</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#999"
          keyboardType="email-address"
        />
         <Text style={styles.title}>Store Address</Text>
        <TextInput
          style={styles.input}
          placeholder="Store Address"
          placeholderTextColor="#999"
        />
          <TouchableOpacity>
                 <View style={styles.rowview} >
                   <Text style={styles.selecttext}>Select Scrap Type</Text>
                   <Text>
                     <Icon1
                       name="angle-down"
                       size={moderateScale(23)}
                       color="grey"
                     />
                   </Text>
                 </View>
               </TouchableOpacity>
         <Text style={styles.title}>Account Number</Text>
        <TextInput
          style={styles.input}
          placeholder="Account Number"
          placeholderTextColor="#999"
          keyboardType="numeric"
        />
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Proceed</Text>
      </TouchableOpacity>
  </View>
  )
}

const styles =StyleSheet.create({
  mainview:{marginHorizontal:15,marginTop:verticalScale(35)},
Registertext:{fontSize:moderateScale(19),fontWeight:'bold'},
filltext:{fontSize:moderateScale(12),color:"grey",fontWeight:"500"},
formContainer: {
    marginTop: verticalScale(50),
  },
  input: {
    borderRadius: moderateScale(8),
    paddingHorizontal: moderateScale(12),
    paddingVertical: verticalScale(12),
    marginBottom: verticalScale(15),
    fontSize: moderateScale(14),
    backgroundColor:"white",
    elevation:5
  },
  button: {
    backgroundColor: '#00A572',
    paddingVertical: verticalScale(12),
    borderRadius: moderateScale(8),
    alignItems: 'center',
    marginTop: verticalScale(30),
  },
  buttonText: {
    color: 'white',
    fontSize: moderateScale(16),
    fontWeight: '600',
  },
  title:{fontSize:moderateScale(15),fontWeight:"500",paddingBottom:8},
   rowview:{flexDirection:"row",justifyContent:"space-between",backgroundColor:"white",paddingHorizontal:moderateScale(12),paddingVertical:moderateScale(10),borderRadius:10,marginVertical:moderateScale(12),elevation:5},
   selecttext:{fontSize:15,color:"grey"},
})
export default Register