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

const {width, height} = Dimensions.get('window');

// Responsive scaling functions
const scale = size => (width / 390) * size;
const verticalScale = size => (height / 844) * size;
const moderateScale = (size, factor = 0.5) =>
  size + (scale(size) - size) * factor;





const Notification = () => {

const data = [
    {
      id: 1,
      title: 'Your agent is on the way',
      subtitle: '2:00 pm',
      Message1: 'Prepare your scrap as the agent',
      Message2: 'is about to reach',
    },
    {
      id: 2,
      title: 'Payment has been credited',
      subtitle: '2:00 pm',
      Message1: 'Your last scrap payment has been',
      Message2: 'credited to your account',
    },
    {
      id: 3,
      title: 'Payment has been credited',
      subtitle: '2:00 pm',
      Message1: 'Your last scrap payment has been',
      Message2: 'credited to your account',
    },
    {
      id: 4,
      title: 'Payment has been credited',
      subtitle: '2:00 pm',
      Message1: 'Your last scrap payment has been',
      Message2: 'credited to your account',
    },
  ];

const renderItem = ({item}) => (
    <View style={styles.fullview}>
      <View style={styles.titlesubtitleview}>
        <Text style={styles.titletext}>{item.title}</Text>
        <Text style={styles.subtitletext}>{item.subtitle}</Text>
      </View>
      <View style={styles.messageview}>
        <Text style={styles.messagetext}>{item.Message1}</Text>
        <Text style={styles.messagetext}>{item.Message2}</Text>
      </View>
    </View>
  );

return (
    <View style={styles.container}>
      <View style={styles.quickdateview}>
        <Text style={styles.quicktext}>Weekly Collection</Text>
        </View>
        <FlatList
      style={{marginTop:20}}
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
         ItemSeparatorComponent={() => <View style={styles.separator} />}
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
 
  quickdateview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  quicktext: {fontWeight: '500', fontSize: 20, alignSelf: 'center'},
  titlesubtitleview: {flexDirection: 'row', justifyContent: 'space-between'},
  titletext: {fontSize: 14, fontWeight: '400'},
  subtitletext: {color: 'green',fontSize: 14,},
  messagetext: {color: 'black',fontSize:15},
  messageview: {paddingVertical: moderateScale(5)},
  fullview: {backgroundColor: '#D6ECF3', padding:moderateScale(12), borderRadius:20},
  separator: {
    height:14
  },
});

export default Notification;
