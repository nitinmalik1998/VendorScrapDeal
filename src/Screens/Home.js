import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon1 from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/FontAwesome6';
import Icon3 from 'react-native-vector-icons/FontAwesome5';
import Icon4 from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';


const {width, height} = Dimensions.get('window');

// Responsive scaling functions
const scale = size => (width / 390) * size;
const verticalScale = size => (height / 844) * size;
const moderateScale = (size, factor = 0.5) =>
  size + (scale(size) - size) * factor;

const Home = () => {

  const navigation=useNavigation()

  return (
    <View style={styles.container}>
      <View style={styles.topview}>
        <View style={styles.rameshrawview}>
          <Image
            source={{
              uri: 'https://th.bing.com/th/id/R.d7c3742514b9d96ea3b03b5810617028?rik=7UP8sBpU5d9j1w&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2fa%2f2%2fd%2f852140-full-size-justin-bieber-hd-2018-wallpapers-1804x2500.jpg&ehk=ZBFVI8hT8yVY%2fDxW9%2bGSvhcT%2bDOWjhfLm6iwWW%2bFLcs%3d&risl=&pid=ImgRaw&r=0',
            }}
            style={styles.Rameshimage}
          />
          <View>
            <View style={styles.rameshhandview}>
              <Text style={styles.Rameshtext}>Hi, Ramesh</Text>
              <Text>
                {' '}
                <Icon
                  name="waving-hand"
                  size={moderateScale(17)}
                  color="#fdb515"
                />
              </Text>
            </View>
            <View style={styles.infoContainer}>
              <Icon2 name="location-dot" size={moderateScale(14)} color="red" />
              <View style={styles.addressTextContainer}>
                <Text style={styles.AddressText}>12, Main Market, Karol</Text>
                <Text style={styles.AddressText}>Bagh New Delhi</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.bellsearchview}>
          <TouchableOpacity onPress={() =>{navigation.navigate("Notification")}} >
            <Icon1 name="bell-o" size={moderateScale(22)} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.quickdateview}>
        <Text style={styles.quicktext}>Quick Stats</Text>
        <TouchableOpacity style={styles.selecttouchable}>
          <View style={styles.infoContainer1}>
            <Text style={styles.infoText}>Select Date</Text>
            <Icon1 name="angle-down" size={moderateScale(20)} color="black" />
          </View>
        </TouchableOpacity>
      </View>
      
<View style={styles.totalview} >
    <View style={styles.subtopview}>
        <View style={styles.collectionview}>
          <Image
            source={require("../images/recycle.png")}
            style={styles.recycleImage}
          />
          <Text style={styles.totalcollectiontext}>Total Scrap</Text>
        </View>
        <Text style={styles.twohundredtext}>125 kg</Text>
      </View>
     <View style={styles.subtopview}>
        <View style={styles.collectionview}>
          <Image
            source={require("../images/moneybag.png")}
            style={styles.recycleImage}
          />
          <Text style={styles.totalcollectiontext}>Total Earning</Text>
        </View>
        <Text style={styles.twohundredtext}>₹ 3,250</Text>
      </View>
</View>
<View style={styles.boxview} >
    <Text style={styles.upcomingtext}>Upcoming Pickup Section</Text>
<View style={styles.rowview} >
    <Image
                source={require("../images/calendar.png")}
                style={styles.recycleImage1}
              />
<View>
    <Text style={styles.title}>Next Pickup</Text>
    <Text style={styles.subtitle}>12-04-2025</Text>
</View>
</View>
<View style={styles.rowview} >
    <Text><Icon2 name="location-dot" size={moderateScale(18)} color="red" /></Text>
<View>
    <Text style={styles.title}>Address</Text>
    <Text style={styles.subtitle}>12, Main Market, Karol Bagh,</Text>
    <Text style={styles.subtitle}>New Delhi</Text>
</View>
</View>
<View style={styles.rowview} >
    <Text><Icon4 name="user" size={moderateScale(18)} color="#fdb515" /></Text>
<View>
    <Text style={styles.title}>Agent Contact</Text>
    <Text style={styles.subtitle}>+91 9878155681</Text>
    </View>
</View>
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
  topview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rameshrawview: {
    flexDirection: 'row',
  },
  Rameshimage: {
    width: moderateScale(49),
    height: moderateScale(49),
    borderRadius: moderateScale(40),
  },
  Rameshtext: {
    fontWeight: '500',
    marginLeft: moderateScale(5),
    fontSize: moderateScale(13),
  },
  bellsearchview: {
    flexDirection: 'row',
    gap: moderateScale(17),
  },
  rameshhandview: {flexDirection: 'row', gap: 5},
  infoContainer: {
    flexDirection: 'row',
    gap: moderateScale(5),
    marginLeft: moderateScale(5),
  },
  AddressText: {
    color: 'grey',
    fontSize: moderateScale(11),
    
  },
  selecttouchable: {backgroundColor: '#fdb515', borderRadius: 7},
  infoContainer1: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: moderateScale(8),
    marginTop: verticalScale(2),
    paddingHorizontal: moderateScale(10),
    paddingVertical: moderateScale(1),
  },
  infoText: {
    color: 'black',
    fontSize: moderateScale(13),
    fontWeight: '400',
  },
  quickdateview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: moderateScale(35),
  },
  quicktext: {fontWeight: '500', fontSize: 17.5, alignSelf: 'center'},
   subtopview: {
    backgroundColor: 'white',
    borderRadius: moderateScale(20),
    marginTop: verticalScale(25),
    padding: moderateScale(10),
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 6,
    
  },
  collectionview: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf:"center"
  },
   recycleImage: {
    width: moderateScale(27),
    height: moderateScale(27),
  },
  recycleImage1: {
    width: moderateScale(17),
    height: moderateScale(21),
  },
  totalcollectiontext: {
    fontWeight: '500',
    fontSize: moderateScale(15),
    marginLeft: moderateScale(10),
  },
  twohundredtext: {
    fontSize: moderateScale(25),
    fontWeight: 'bold',
    marginTop: verticalScale(5),
    alignSelf:"center"
  },
  totalview:{flexDirection:"row",justifyContent:"space-between",marginHorizontal:moderateScale(15)},
  rowview:{flexDirection:"row",gap:moderateScale(15),marginTop:moderateScale(15)},
title:{fontSize:14.5},
subtitle:{fontSize:16,fontWeight:"500"},
boxview:{backgroundColor:"white",padding:moderateScale(15),borderRadius:15,marginTop:moderateScale(30),elevation:10},
upcomingtext:{fontSize:15,fontWeight:"500"}
});

export default Home;
