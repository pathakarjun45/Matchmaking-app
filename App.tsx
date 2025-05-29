/* eslint-disable prettier/prettier */
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import KundaliMatch from './src/featurs/KundaliMatch';
import {StyleSheet} from 'react-native'
export default function App() {
  return (

    <SafeAreaProvider style={styles.Container}>
          <KundaliMatch />
    </SafeAreaProvider>
  );
}
const styles = StyleSheet.create({
  Container: {
    backgroundColor:'maroon',
    flex:1,
  },
});
