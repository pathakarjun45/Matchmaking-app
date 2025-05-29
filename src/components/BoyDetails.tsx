import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {Picker} from '@react-native-picker/picker';

interface BoyDetailsProps {
  boyName: string;
  setBoyName: (value: string) => void;
  boyPlaceOfBirth: string;
  setBoyPlaceOfBirth: (value: string) => void;
  boyDateOfBirth: {
    day: string;
    month: string;
    year: string;
  };
  setBoyDateOfBirth: (value: {
    day: string;
    month: string;
    year: string;
  }) => void;
  boyHourOfBirth: string;
  setBoyHourOfBirth: (value: string) => void;
  boyMinuteOfBirth: string;
  setBoyMinuteOfBirth: (value: string) => void;
  boySecondOfBirth: string;
  setBoySecondOfBirth: (value: string) => void;
}

const BoyDetails: React.FC<BoyDetailsProps> = ({
  boyName,
  setBoyName,
  boyPlaceOfBirth,
  setBoyPlaceOfBirth,
  boyDateOfBirth,
  setBoyDateOfBirth,
  boyHourOfBirth,
  setBoyHourOfBirth,
  boyMinuteOfBirth,
  setBoyMinuteOfBirth,
  boySecondOfBirth,
  setBoySecondOfBirth,
}) => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Boy Birth Details</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter boy name"
        value={boyName}
        onChangeText={setBoyName}
      />
      <TextInput
        style={styles.input}
        placeholder="Place of Birth"
        value={boyPlaceOfBirth}
        onChangeText={setBoyPlaceOfBirth}
      />
      {/* Date of Birth dropdown */}
      <Text style={styles.setTitle}>Date of birth</Text>
      <View style={styles.dateOfBirthContainer}>
        <Picker
          selectedValue={boyDateOfBirth.day}
          style={styles.datePicker}
          onValueChange={(itemValue: React.SetStateAction<string>) =>
            setBoyDateOfBirth((prev: any) => ({...prev, day: itemValue}))
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
          selectedValue={boyDateOfBirth.month}
          style={styles.datePicker}
          onValueChange={(itemValue: React.SetStateAction<string>) =>
            setBoyDateOfBirth((prev: any) => ({...prev, month: itemValue}))
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
          selectedValue={boyDateOfBirth.year}
          style={styles.datePicker}
          onValueChange={(itemValue: React.SetStateAction<string>) =>
            setBoyDateOfBirth((prev: any) => ({...prev, year: itemValue}))
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
      {/* Hour dropdown */}
      <Text style={styles.setTitle}>Time of birth</Text>
      <Picker
        selectedValue={boyHourOfBirth}
        style={styles.datePicker}
        onValueChange={(itemValue: React.SetStateAction<string>) =>
          setBoyHourOfBirth(itemValue)
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
        selectedValue={boyMinuteOfBirth}
        style={styles.datePicker}
        onValueChange={(itemValue: React.SetStateAction<string>) =>
          setBoyMinuteOfBirth(itemValue)
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
        selectedValue={boySecondOfBirth}
        style={styles.datePicker}
        onValueChange={(itemValue: React.SetStateAction<string>) =>
          setBoySecondOfBirth(itemValue)
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

export default BoyDetails;
