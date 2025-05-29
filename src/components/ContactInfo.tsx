import React from 'react';
import {View, Text, TextInput, StyleSheet, TextInputProps} from 'react-native';

interface ContactInfoProps extends TextInputProps {
  phoneNumber: string;
  setPhoneNumber: (value: string) => void;
  email: string;
  setEmail: (value: string) => void;
}

const ContactInfo: React.FC<ContactInfoProps> = ({
  phoneNumber,
  setPhoneNumber,
  email,
  setEmail,
  ...textInputProps
}) => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.setTitle}>Phone number</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your phone number"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        keyboardType="phone-pad"
        {...textInputProps}
      />
      <Text style={styles.setTitle}>Email ID</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        {...textInputProps}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  setTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 4,
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
});

export default ContactInfo;
