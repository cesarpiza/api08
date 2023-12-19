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
import { useSearch } from './hooks/useSearch';

export default function Search({ route, navigation }) {

    const { inputValue } = route.params;
    const [data, progress] = useSearch(inputValue);

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.search}>you searched for: {inputValue}</Text>
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
                    data={data}
                    keyExtractor={text => String(text.id)}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity
                                onPress={() => {
                                    navigation.push('Details', { item, inputValue });
                                }}
                            >
                                <MovieCard {...item} />
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
        backgroundColor: '#000',
        flex: 1,
    },
    search: {
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