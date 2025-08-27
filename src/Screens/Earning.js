import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
  FlatList
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

const Earning = () => {
  const navigation = useNavigation()

const data=[
    {
id:1,
paymentstatus:"paid",
itemname:"Card board",
date:"02 Feb 2025",
price:"₹ 5000",
status:"Debited",
    },
{id:2,
paymentstatus:"paid",
itemname:"Plastic Bags",
date:"02 Feb 2025",
price:"₹ 5000",
status:"Debited",
    },
{id:3,
paymentstatus:"paid",
itemname:"Plastic Bags",
date:"01 Feb 2025",
price:"₹ 5000",
status:"Debited",
    },
]


const  renderItem=({item}) => (
    <View style={styles.flatListItem}>
        <TouchableOpacity>
      <Image
        source={require('../images/right-up.png')} // Make sure to add the image to your project
        style={styles.listImage}
      />
      </TouchableOpacity>
      
      <View style={styles.subview}>
<Text style={styles.weighttext}>{item.paymentstatus}</Text>
<Text style={styles.itemnametext}>{item.itemname}</Text>
<Text style={styles.datetext}>{item.date}</Text>
      </View>
      <View>
<Text style={styles.nametext}>{item.price}</Text>
<Text style={styles.agentname}>{item.status}</Text>
      </View>
      
    </View>
  )

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
          <TouchableOpacity  onPress={() =>{navigation.navigate("Notification")}}>
            <Icon1 name="bell-o" size={moderateScale(22)} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.quickdateview}>
        <Text style={styles.quicktext}>Your Earning</Text>
       </View>
     
      <View style={styles.totalview}>
        <View style={styles.subtopview}>
          <View style={styles.collectionview}>
            <Image
              source={require('../images/moneybag.png')}
              style={styles.recycleImage}
            />
            <Text style={styles.totalcollectiontext}>Total Earning</Text>
          </View>
          <Text style={styles.twohundredtext1}>₹ 3,250</Text>
        </View>
       <View style={styles.subtopview}>
          <View style={styles.collectionview}>
            <Image
              source={require('../images/moneybag.png')}
              style={styles.recycleImage}
            />
            <Text style={styles.totalcollectiontext}>Total Amount</Text>
          </View>
          <Text style={styles.twohundredtext1}>₹ 550</Text>
        </View>
       <View style={styles.subtopview}>
          <View style={styles.collectionview}>
            <Image
              source={require('../images/moneybag.png')}
              style={styles.recycleImage}
            />
            <Text style={styles.totalcollectiontext}>Total Scrap</Text>
          </View>
          <Text style={styles.twohundredtext1}>10 Kg</Text>
        </View>
      </View>
      <Text style={styles.pasttext} >
        Past Collections
      </Text>
      <FlatList
      showsVerticalScrollIndicator={false}
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.flatListContent}
      />
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
  quicktext: {fontWeight: '500', fontSize: 19, alignSelf: 'center'},
  subtopview: {
    backgroundColor: 'white',
    borderRadius: moderateScale(15),
    marginTop: verticalScale(25),
    padding: moderateScale(8),
    elevation: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    
  },
  
  collectionview: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  
  recycleImage: {
    width: moderateScale(18),
    height: moderateScale(18),
  },
  totalcollectiontext: {
    fontWeight: '500',
    fontSize: moderateScale(12),
    marginLeft:"2%",
  },
  twohundredtext: {
    fontSize: moderateScale(22),
    fontWeight: 'bold',
    marginTop: verticalScale(5),
    alignSelf: 'center',
  },
  twohundredtext1: {
    fontSize: moderateScale(17),
    fontWeight: 'bold',
    marginTop: verticalScale(5),
    alignSelf: 'center',
  },
  totalview: {
    flexDirection: 'row',
    gap:15
  },
  pasttext:{fontSize:18,fontWeight:"500",marginTop:moderateScale(30)},
  flatListContent: {
    paddingBottom: verticalScale(10),},
    listImage:{height:50,width:50},
    flatListItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: moderateScale(10),
    padding: moderateScale(5),
    marginTop: moderateScale(10),
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    justifyContent:"space-between"
  },
  subview:{marginRight:"42%"},
  weighttext:{color:"grey"},
  itemnametext:{fontWeight:"500",fontSize:16},
  datetext:{color:'grey'},
  nametext:{fontSize:15,fontWeight:"500"},
  agentname:{color:"grey",alignSelf:"flex-end"}
});

export default Earning;
