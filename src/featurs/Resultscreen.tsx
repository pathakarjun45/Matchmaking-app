import React from 'react';
import {SafeAreaView, ScrollView, Text, View, StyleSheet} from 'react-native';
import {useRoute} from '@react-navigation/native';

const MatchResult = () => {
  const route = useRoute();
  const {matchingScore} = route.params;

  // Dummy data for the table
  const tableData = [
    ['Category', 'Boy', 'Girl', 'Maximum Points', 'Obtained Points'],
    ['Guna 1', '...', '...', '10', '8'],
    ['Guna 2', '...', '...', '8', '6'],
    // Add more rows as needed
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.content}>
          <Text style={styles.heading}>Match Result</Text>
          <Text style={styles.matchingScore}>
            Matching Score: {matchingScore}
          </Text>

          {/* Table */}
          <View style={styles.tableContainer}>
            {tableData.map((row, rowIndex) => (
              <View key={rowIndex} style={styles.rowContainer}>
                {row.map((cell, cellIndex) => (
                  <View key={cellIndex} style={styles.cell}>
                    <Text>{cell}</Text>
                  </View>
                ))}
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    paddingHorizontal: 16,
    paddingTop: 24,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  matchingScore: {
    fontSize: 18,
    marginBottom: 16,
  },
  tableContainer: {
    borderWidth: 1,
    borderColor: '#000',
  },
  rowContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#000',
  },
  cell: {
    flex: 1,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MatchResult;
