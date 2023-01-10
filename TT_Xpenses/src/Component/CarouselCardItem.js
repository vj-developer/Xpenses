import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image } from "react-native"
import { COLORS } from '../Constant/Themes';

export const SLIDER_WIDTH = Dimensions.get('window').width
export const ITEM_WIDTH = Dimensions.get('window').width 

const CarouselCardItem = ({ item, index }) => {

  return (
    <View style={styles.container} key={index}>
      <Image
        source={item.image}
        style={styles.image}
        resizeMode = 'contain'
      />
      <View style= {{}}>
      <Text style={styles.header}>{item.text}</Text>
      
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 40,
  },
  image: {
    width: ITEM_WIDTH,
    height: 350,
  },
  header: {
    fontSize: 25,
    fontFamily : 'DMSans-Bold',
    color: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 20
  },
 
})

export default CarouselCardItem