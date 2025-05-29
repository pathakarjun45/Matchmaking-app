import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import ContactInfo from '../components/ContactInfo';
import GirlDetails from '../components/GirlDetails';
import BoyDetails from '../components/BoyDetails';

const KundaliMatch = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  const [boyName, setBoyName] = useState('');
  const [boyPlaceOfBirth, setBoyPlaceOfBirth] = useState('');
  const [boyDateOfBirth, setBoyDateOfBirth] = useState('');
  const [boyHourOfBirth, setBoyHourOfBirth] = useState('');
  const [boyMinuteOfBirth, setBoyMinuteOfBirth] = useState('');
  const [boySecondOfBirth, setBoySecondOfBirth] = useState('');

  const [girlName, setGirlName] = useState('');
  const [girlPlaceOfBirth, setGirlPlaceOfBirth] = useState('');
  const [girlDateOfBirth, setGirlDateOfBirth] = useState('');
  const [girlHourOfBirth, setGirlHourOfBirth] = useState('');
  const [girlMinuteOfBirth, setGirlMinuteOfBirth] = useState('');
  const [girlSecondOfBirth, setGirlSecondOfBirth] = useState('');
  const [data, setData] = useState([]);
  const accessToken =
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI3NTA1NTg5Zi0xYjExLTQxOTQtOTEwOS00NTNlZjhiMDgwMDgiLCJqdGkiOiI5Nzk4MTQyY2QyOTk4MmMxZjZhYjdkOGNjMjVkMzQ0YWZkY2EzMTZhZDIyYmE2NWM2ODFiZWE3ODMzNWUxNzY5OWNlZmE1N2VlN2Y5MTBmMCIsImlhdCI6MTcwNDAyMTM1NC44NzA3MjgsIm5iZiI6MTcwNDAyMTM1NC44NzA3MywiZXhwIjoxNzA0MDI0OTU0Ljg3MDYxOSwic3ViIjoiZGI3Y2UxNzgtOWQzZS00YjI3LTk1OWItOGFiNThjZTgyN2E5Iiwic2NvcGVzIjpbXSwiY3JlZGl0c19yZW1haW5pbmciOjQ5NDQsInJhdGVfbGltaXRzIjpbeyJyYXRlIjo1LCJpbnRlcnZhbCI6NjB9XX0.EHsFX26HxGvZQEP8zHNN7a9X0FmVuOTBrj2_RxXInVXrDJDPh8WmDhfSOgM2SkLSSgkYgbpv1HuVUJFP9nTJiQZzRpGL7a7OmWZS9vWpt29ESCEULCI-iPpoRLn1gsjAZ0bmk4LqmVtf8IGz9NqqFicaqmFT33mgNVIRfhdFFSIU9nAS2M7kkiccK4RjhZfJB8Mzvl2t0Qt7DAKmGR2Ip6QclA2XCSP80ieiTKyDdtehOYoO74tOrw498w_RGr4rosBnmpj34tyT4Xy1S1laNn_etbdNf-_XJNvaQ68q5ekwCqD_9avGJdIf9RSgYYjAQU7NlkIcyTT8-QumIsgtGg'; // Replace with your actual access token

  const handleMatchmaking = async () => {
    const url =
      'https://api.prokerala.com/v2/astrology/kundli-matching?ayanamsa=3&girl_coordinates=28.67,77.12&girl_dob=2009-09-11T01:36:40%2B05:30&boy_coordinates=28.67,77.12&boy_dob=2011-11-16T01:36:40%2B05:30&la=en';

    try {
      let result = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (result.ok) {
        result = await result.json();
        setData(result);
        console.log('API Result:', result);
      } else {
        console.error('Failed to fetch data. HTTP Status:', result.status);
      }
    } catch (error) {
      console.error('Error during API call:', error);
    }

    console.log({
      boyName,
      boyPlaceOfBirth,
      boyDateOfBirth,
      boyHourOfBirth,
      boyMinuteOfBirth,
      boySecondOfBirth,
      girlName,
      girlPlaceOfBirth,
      girlDateOfBirth,
      girlHourOfBirth,
      girlMinuteOfBirth,
      girlSecondOfBirth,
      phoneNumber,
      email,
    });
  };

  useEffect(() => {
    handleMatchmaking();
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        {/* Other components */}
        <ContactInfo
          phoneNumber={phoneNumber}
          setPhoneNumber={setPhoneNumber}
          email={email}
          setEmail={setEmail}
        />
        <GirlDetails
          girlName={girlName}
          setGirlName={setGirlName}
          girlPlaceOfBirth={girlPlaceOfBirth}
          setGirlPlaceOfBirth={setGirlPlaceOfBirth}
          girlDateOfBirth={girlDateOfBirth}
          setGirlDateOfBirth={setGirlDateOfBirth}
          girlHourOfBirth={girlHourOfBirth}
          setGirlHourOfBirth={setGirlHourOfBirth}
          girlMinuteOfBirth={girlMinuteOfBirth}
          setGirlMinuteOfBirth={setGirlMinuteOfBirth}
          girlSecondOfBirth={girlSecondOfBirth}
          setGirlSecondOfBirth={setGirlSecondOfBirth}
        />
        <BoyDetails
          boyName={boyName}
          setBoyName={setBoyName}
          boyPlaceOfBirth={boyPlaceOfBirth}
          setBoyPlaceOfBirth={setBoyPlaceOfBirth}
          boyDateOfBirth={boyDateOfBirth}
          setBoyDateOfBirth={setBoyDateOfBirth}
          boyHourOfBirth={boyHourOfBirth}
          setBoyHourOfBirth={setBoyHourOfBirth}
          boyMinuteOfBirth={boyMinuteOfBirth}
          setBoyMinuteOfBirth={setBoyMinuteOfBirth}
          boySecondOfBirth={boySecondOfBirth}
          setBoySecondOfBirth={setBoySecondOfBirth}
        />
        {/* Match Making Button */}
        <TouchableOpacity
          style={styles.matchButton}
          onPress={handleMatchmaking}>
          <Text style={styles.matchButtonText}> Match Kundali</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  matchButton: {
    backgroundColor: 'orange',
    padding: 10,
    marginTop: 50,
    marginBottom: 20,
    margin: 25,
    borderRadius: 5,
  },
  matchButtonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default KundaliMatch;
