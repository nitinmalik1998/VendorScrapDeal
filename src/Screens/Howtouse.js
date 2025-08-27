import React from "react";
import { StyleSheet, View ,Text,Dimensions,Image} from "react-native";
const {width, height} = Dimensions.get('window');

// Responsive scaling functions
const scale = size => (width / 390) * size;
const verticalScale = size => (height / 844) * size;
const moderateScale = (size, factor = 0.5) =>
  size + (scale(size) - size) * factor;

const Howtouse =() => {
  return(
    <View style={styles.mainview}>
      <View  style={styles.howtouseview}>
        <Text style={styles.howtousetext}>
          How to prepare our scrap
        </Text>
      </View>
      <View>
        <Image source={require("../images/howtouse1.jpg")} style={styles.image}/>
        <Text style={styles.steptext}>Step 1</Text>
        <Text style={styles.detailtext}>First collect the scrap from your shop or{"\n"}work place</Text>
      </View>
      <View>
        <Image source={require("../images/howtouse2.jpg")} style={styles.image}/>
        <Text style={styles.steptext}>Step 2</Text>
        <Text style={styles.detailtext}>Then collect it bag or some boxes which{"\n"}makes it easier for us to collect</Text>
      </View>
      <View>
        <Image source={require("../images/howtouse3.jpg")} style={styles.image}/>
        <Text style={styles.steptext}>Step 3</Text>
        <Text style={styles.detailtext}>Then schedule the time and date our{"\n"}agent will come and measure the scrap{"\n"}weight and collect the scrap from you</Text>
      </View>
    </View>
  )
}

const styles =StyleSheet.create({
  mainview:{marginHorizontal:15},
howtousetext:{fontSize:moderateScale(18),fontWeight:"bold"},
howtouseview:{marginTop:verticalScale(35)},
image:{height:150,width:"100%",borderRadius:20,marginVertical:verticalScale(15)},
steptext:{fontSize:moderateScale(16),fontWeight:"bold"},
detailtext:{fontSize:moderateScale(14),color:"grey"}
})
export default Howtouse