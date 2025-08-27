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

const Schedule = () => {

  const navigation=useNavigation()


const data=[
    {
id:1,
weight:"5 kg",
itemname:"Card board",
date:"02 Feb 2025",
AgentName:"Raman sharma"
    },
{id:2,
weight:"20 kg",
itemname:"Plastic Bags",
date:"02 Feb 2025",
AgentName:"Raman sharma"
    },
{id:3,
weight:"10 kg",
itemname:"Plastic Bags",
date:"01 Feb 2025",
AgentName:"Raman sharma"
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
<Text style={styles.weighttext}>{item.weight}</Text>
<Text style={styles.itemnametext}>{item.itemname}</Text>
<Text style={styles.datetext}>{item.date}</Text>
      </View>
      <View>
<Text style={styles.nametext}>{item.AgentName}</Text>
<Text style={styles.agentname}>Agent Name</Text>
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
        <Text style={styles.quicktext}>Weekly Collection</Text>
        <TouchableOpacity style={styles.selecttouchable}>
          <View style={styles.infoContainer1}>
            <Text style={styles.infoText}>Select Date</Text>
            <Icon1 name="angle-down" size={moderateScale(20)} color="black" />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.subtopview1}>
        <View style={styles.collectionview1}>
          <Image
            source={require('../images/recycle.png')}
            style={styles.recycleImage}
          />
          <Text style={styles.totalcollectiontext}>Total Scrap</Text>
        </View>
        <Text style={styles.twohundredtext}>125 kg</Text>
      </View>
      <View style={styles.totalview}>
        <View style={styles.subtopview}>
          <View style={styles.collectionview}>
            <Image
              source={require('../images/calendar.png')}
              style={styles.recycleImage}
            />
            <Text style={styles.totalcollectiontext}>Your Next Pickup</Text>
          </View>
          <Text style={styles.twohundredtext1}>02-08-25</Text>
        </View>
        <View style={styles.subtopview}>
          <View style={styles.collectionview}>
            <Image
              source={require('../images/time.png')}
              style={styles.recycleImage}
            />
            <Text style={styles.totalcollectiontext}>ChooseTime</Text>
          </View>
          <Text style={styles.twohundredtext1}>2 pm to 4 pm</Text>
        </View>
      </View>
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
  quicktext: {fontWeight: '500', fontSize: 18, alignSelf: 'center'},
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
  subtopview1: {
    backgroundColor: 'white',
    borderRadius: moderateScale(20),
    marginTop: verticalScale(25),
    padding: moderateScale(10),
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 6,
    marginHorizontal: moderateScale(100),
  },
  collectionview: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  collectionview1: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  recycleImage: {
    width: moderateScale(26),
    height: moderateScale(26),
  },
  totalcollectiontext: {
    fontWeight: '500',
    fontSize: moderateScale(13.5),
    marginLeft: moderateScale(10),
  },
  twohundredtext: {
    fontSize: moderateScale(22),
    fontWeight: 'bold',
    marginTop: verticalScale(5),
    alignSelf: 'center',
  },
  twohundredtext1: {
    fontSize: moderateScale(21),
    fontWeight: '500',
    marginTop: verticalScale(5),
    alignSelf: 'center',
  },
  totalview: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: moderateScale(10),
  },
  selecttext:{fontSize:moderateScale(15),color:"grey"},
  rowview:{flexDirection:"row",justifyContent:"space-between",backgroundColor:"white",paddingHorizontal:moderateScale(12),paddingVertical:moderateScale(10),borderRadius:10,borderWidth:0.4,borderColor:"grey",marginTop:moderateScale(20)},
  pasttext:{fontSize:18,fontWeight:"500",marginTop:moderateScale(16)},
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
  subview:{marginRight:"30%"},
  weighttext:{color:"grey"},
  itemnametext:{fontWeight:"500",fontSize:16},
  datetext:{color:'grey'},
  nametext:{fontSize:15,fontWeight:"500"},
  agentname:{color:"grey",alignSelf:"flex-end"}
});

export default Schedule;
