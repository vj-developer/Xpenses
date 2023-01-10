import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import CarouselCardItem, {SLIDER_WIDTH, ITEM_WIDTH} from './CarouselCardItem';
import Data from '../Constant/Data';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS} from '../Constant/Themes';
import {useNavigation} from '@react-navigation/native';

const OnboardingItem = () => {
  const [index, setIndex] = React.useState(0);
  const isCarousel = React.useRef(null);
  const Navigation = useNavigation();

  const welcomeNext = () => {
    const nextSlideIndex = index + 1;
    if (nextSlideIndex != Data.length) {
      setIndex(nextSlideIndex);
    }
  };

  const googleSignin = () => {
    console.log('success')
  }

  return (
    <View style={{flex: 1}}>
      <Carousel
        layout="default"
        ref={isCarousel}
        data={Data}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={index => setIndex(index)}
        useScrollView={true}
      />
      <Pagination
        dotsLength={Data.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 0,
          backgroundColor: 'white',
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots={true}
      />
      {/* Next >> view */}
      <View
        style={{
          marginVertical: 20,
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        {index == Data.length - 1 ? (
          <TouchableOpacity
            style={{
              width: '80%',
              height: 50,
              marginVertical: 40,
              flexDirection: 'row',
              alignItems: 'center',
              borderWidth: 0.7,
              justifyContent: 'center',
              borderColor: COLORS.white,
              borderRadius: 10,
            }}
            onPress={() => googleSignin()}>
            <Text
              style={{
                color: COLORS.white,
                fontFamily: 'DMSans-Regular',
                fontSize: 22,
              }}>
              Login
            </Text>
            <MaterialCommunityIcons
              name="chevron-double-right"
              size={35}
              color="white"
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={{
              width: '80%',
              height: 50,
              marginVertical: 40,
              flexDirection: 'row',
              alignItems: 'center',
              borderWidth: 0.7,
              justifyContent: 'center',
              borderColor: COLORS.white,
              borderRadius: 10,
            }}
            onPress={() => welcomeNext()}>
            <Text
              style={{
                color: COLORS.white,
                fontFamily: 'DMSans-Regular',
                fontSize: 22,
              }}>
              Next
            </Text>
            <MaterialCommunityIcons
              name="chevron-double-right"
              size={35}
              color="white"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default OnboardingItem;
