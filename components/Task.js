import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

const Task = (props) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
      <View style={styles.circular}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#FFF',
    padding: RFValue(15),
    borderRadius: RFValue(10),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: RFValue(20),
  },

  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },

  square: {
    width: RFValue(24),
    height: RFValue(24),
    backgroundColor: '#55BCF6',
    opacity: 0.4,
    borderRadius: RFValue(5),
    marginRight: RFValue(15),
  },

  itemText: {
    maxWidth: '80%',
    fontSize: RFValue(16),
  },

  circular: {
    width: RFValue(12),
    height: RFValue(12),
    borderColor: '#55BCF6',
    borderWidth: RFValue(2),
    borderRadius: RFValue(5),
  },
});

export default Task;