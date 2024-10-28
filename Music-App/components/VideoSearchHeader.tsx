import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import styles from './../AppStyles';

const VideoSearchHeader = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    console.log("Search clicked for ", searchQuery)
    //setSearchQuery('')
  };

  return (
    <View style={uniqueStyles.header}>
      <TextInput
        style={uniqueStyles.searchBar}
        placeholder="Search..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <TouchableOpacity style={uniqueStyles.button} onPress={handleSearch}>
        <Text style={uniqueStyles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const uniqueStyles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f8f8f8',
    elevation: 4, // Android shadow effect
    width: '100%',
  },
  searchBar: {
    flex: 1,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  button: {
    backgroundColor: '#007bff',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default VideoSearchHeader;