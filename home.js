import React from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MovieCard from './components/movieCard';
import { BUTTON_COLOR, GAP, SPACING } from './styles';
import { ActivityIndicator } from 'react-native';
import { useGetTopRated } from './hooks/useGetTopRated';

export default function App({ navigation }) {

  const [movieTop, progress] = useGetTopRated();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.topRated}>top rated</Text>
      {progress ?
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <ActivityIndicator size={54} />
        </View>
        :
        <FlatList
          numColumns={3}
          contentContainerStyle={{
            paddingLeft: GAP / 2,
            paddingVertical: GAP / 2,
          }}
          data={movieTop}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.push('Details', { item });
                }}
              >
                < MovieCard {...item} />
              </TouchableOpacity>
            )
          }}
        />
      }
    </SafeAreaView>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  topRated: {
    color: BUTTON_COLOR,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: SPACING * 3,
    fontSize: 22,
    borderBottomWidth: 2,
    borderBottomColor: '#222',
  },
});