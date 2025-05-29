import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {Picker} from '@react-native-picker/picker';

interface GirlDetailsProps {
  girlName: string;
  setGirlName: (value: string) => void;
  girlPlaceOfBirth: string;
  setGirlPlaceOfBirth: (value: string) => void;
  girlDateOfBirth: {
    day: string;
    month: string;
    year: string;
  };
  setGirlDateOfBirth: (value: {
    day: string;
    month: string;
    year: string;
  }) => void;
  girlHourOfBirth: string;
  setGirlHourOfBirth: (value: string) => void;
  girlMinuteOfBirth: string;
  setGirlMinuteOfBirth: (value: string) => void;
  girlSecondOfBirth: string;
  setGirlSecondOfBirth: (value: string) => void;
}

const GirlDetails: React.FC<GirlDetailsProps> = ({
  girlName,
  setGirlName,
  girlPlaceOfBirth,
  setGirlPlaceOfBirth,
  girlDateOfBirth,
  setGirlDateOfBirth,
  girlHourOfBirth,
  setGirlHourOfBirth,
  girlMinuteOfBirth,
  setGirlMinuteOfBirth,
  girlSecondOfBirth,
  setGirlSecondOfBirth,
}) => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Girl Birth Details</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter girl name"
        value={girlName}
        onChangeText={setGirlName}
      />
      <TextInput
        style={styles.input}
        placeholder="Place of birth"
        value={girlPlaceOfBirth}
        onChangeText={setGirlPlaceOfBirth}
      />
      {/* Date of Birth dropdown */}
      <Text style={styles.setTitle}>Date of birth</Text>
      <View style={styles.dateOfBirthContainer}>
        <Picker
          selectedValue={girlDateOfBirth.day}
          style={styles.datePicker}
          onValueChange={(itemValue: React.SetStateAction<string>) =>
            setGirlDateOfBirth((prev: any) => ({...prev, day: itemValue}))
          }>
          <Picker.Item label="Date" value="" />
          {[...Array(31)].map((_, index) => (
            <Picker.Item
              key={String(index + 1)}
              label={String(index + 1)}
              value={String(index + 1)}
            />
          ))}
        </Picker>
        <Picker
          selectedValue={girlDateOfBirth.month}
          style={styles.datePicker}
          onValueChange={(itemValue: React.SetStateAction<string>) =>
            setGirlDateOfBirth((prev: any) => ({...prev, month: itemValue}))
          }>
          <Picker.Item label="Month" value="" />
          {[
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
          ].map(month => (
            <Picker.Item key={month} label={month} value={month} />
          ))}
        </Picker>
        <Picker
          selectedValue={girlDateOfBirth.year}
          style={styles.datePicker}
          onValueChange={(itemValue: React.SetStateAction<string>) =>
            setGirlDateOfBirth((prev: any) => ({...prev, year: itemValue}))
          }>
          <Picker.Item label="Year" value="" />
          {[...Array(50)].map((_, index) => (
            <Picker.Item
              key={String(index + 1970)}
              label={String(index + 1970)}
              value={String(index + 1970)}
            />
          ))}
        </Picker>
      </View>
      {/* Time of Birth dropdown */}
      <Text style={styles.setTitle}>Time of birth</Text>
      <View style={styles.dateOfBirthContainer}>
        {/* Hour dropdown */}
        <Picker
          selectedValue={girlHourOfBirth}
          style={styles.datePicker}
          onValueChange={(itemValue: React.SetStateAction<string>) =>
            setGirlHourOfBirth(itemValue)
          }>
          <Picker.Item label="Hour" value="" />
          {[...Array(24)].map((_, index) => (
            <Picker.Item
              key={String(index)}
              label={String(index)}
              value={String(index)}
            />
          ))}
        </Picker>
        {/* Minute dropdown */}
        <Picker
          selectedValue={girlMinuteOfBirth}
          style={styles.datePicker}
          onValueChange={(itemValue: React.SetStateAction<string>) =>
            setGirlMinuteOfBirth(itemValue)
          }>
          <Picker.Item label="Minute" value="" />
          {[...Array(60)].map((_, index) => (
            <Picker.Item
              key={String(index)}
              label={String(index)}
              value={String(index)}
            />
          ))}
        </Picker>
        {/* Second dropdown */}
        <Picker
          selectedValue={girlSecondOfBirth}
          style={styles.datePicker}
          onValueChange={(itemValue: React.SetStateAction<string>) =>
            setGirlSecondOfBirth(itemValue)
          }>
          <Picker.Item label="Second" value="" />
          {[...Array(60)].map((_, index) => (
            <Picker.Item
              key={String(index)}
              label={String(index)}
              value={String(index)}
            />
          ))}
        </Picker>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 5,
    color: 'white',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  datePicker: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 5,
    marginBottom: 10,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  dateOfBirthContainer: {
    flexDirection: 'column',
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  setTitle:{
    fontSize: 20,
    fontWeight: '600',
    marginTop: 10,
    marginBottom: 10,
    color: 'white',
  },
});

export default GirlDetails;
