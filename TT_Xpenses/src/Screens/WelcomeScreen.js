import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import OnboardingItem from '../Component/OnboardingItem';
import {COLORS} from '../Constant/Themes'

const WelcomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <OnboardingItem />
    </SafeAreaView>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary ,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50
  },
});