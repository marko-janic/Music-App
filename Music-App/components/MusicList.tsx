import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, ListRenderItem } from 'react-native';

type Entry = {
  id: string;
  title: string;
  type: string;
  singer: string;
  imageUrl: string;
};

const data: Entry[] = [
  {
    id: '1',
    title: 'First Entry',
    type: 'Song',
    singer: 'Based',
    imageUrl: 'https://via.placeholder.com/50',
  },
  {
    id: '2',
    title: 'Second Entry',
    type: 'Playlist',
    singer: 'Yuumi',
    imageUrl: 'https://via.placeholder.com/50',
  },
  {
    id: '3',
    title: 'Third Entry',
    type: 'Song',
    singer: 'Based',
    imageUrl: 'https://via.placeholder.com/50',
  },
  {
    id: '4',
    title: 'Third Entry',
    type: 'Song',
    singer: 'Based',
    imageUrl: 'https://via.placeholder.com/50',
  },
  {
    id: '5',
    title: 'Third Entry',
    type: 'Song',
    singer: 'Based',
    imageUrl: 'https://via.placeholder.com/50',
  },
  {
    id: '6',
    title: 'Third Entry',
    type: 'Song',
    singer: 'Based',
    imageUrl: 'https://via.placeholder.com/50',
  },
  {
    id: '7',
    title: 'Third Entry',
    type: 'Song',
    singer: 'Based',
    imageUrl: 'https://via.placeholder.com/50',
  },
  {
    id: '8',
    title: 'Third Entry',
    type: 'Song',
    singer: 'Based',
    imageUrl: 'https://via.placeholder.com/50',
  },
  {
    id: '9',
    title: 'Third Entry',
    type: 'Song',
    singer: 'Based',
    imageUrl: 'https://via.placeholder.com/50',
  },
  {
    id: '10',
    title: 'Third Entry',
    type: 'Song',
    singer: 'Based',
    imageUrl: 'https://via.placeholder.com/50',
  },
  {
    id: '11',
    title: 'Third Entry',
    type: 'Song',
    singer: 'Based',
    imageUrl: 'https://via.placeholder.com/50',
  },
  {
    id: '12',
    title: 'Third Entry',
    type: 'Song',
    singer: 'Based',
    imageUrl: 'https://via.placeholder.com/50',
  },
];

const MusicList: React.FC = () => {
  const renderItem: ListRenderItem<Entry> = ({ item }) => (
    <View style={styles.entryContainer}>
      <Image source={{ uri: item.imageUrl }} style={styles.entryImage} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>{item.singer}</Text>
      </View>
    </View>
  );

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      style={styles.flatList}
    />
  );
};

const styles = StyleSheet.create({
  entryContainer: {
    flexDirection: 'row',
    flex: 1,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    alignItems: 'center',
  },
  flatList: {
    width: '100%',
  },
  entryImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
  },
});

export default MusicList;
