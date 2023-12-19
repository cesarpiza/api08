import React, { useEffect, useState } from 'react';
import {
    ActivityIndicator,
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { BUTTON_COLOR, GAP, IMAGE_HEIGHT, IMAGE_WIDTH, ITEM_WIDTH, SPACING } from './styles';
import { API_IMG, API_URL, API_KEY } from './apiInfo';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigationState } from '@react-navigation/native';

export default function Details({ route }) {

    const [movie, setMovie] = useState('');
    const [progress, setProgress] = useState(false);

    const navigationState = useNavigationState(state => state);

    // Para rastrear/mostrar as rotas;
    // useEffect(() => {
    //     console.log('Current navigation stack:', navigationState.routes);
    // }, [navigationState]);

    const {
        title,
        poster_path,
        vote_average,
        id
    } = route.params.item;

    const IMG = `${API_IMG}${poster_path}`;
    const voteAverage = vote_average;

    async function fetchApi(url) {
        setProgress(true);
        const response = await fetch(url);
        const data = await response.json();
        const formatCurrency = {
            ...data, budget: data.budget.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
            }), revenue: data.revenue.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
            })
        }
        setMovie(formatCurrency);
        setProgress(false);
    }

    useEffect(() => {
        const url = `${API_URL}${id}?${API_KEY}`;
        fetchApi(url);
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.details}>Details</Text>
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
                <ScrollView
                    contentContainerStyle={{
                        alignItems: 'center',
                        padding: SPACING * 4,
                    }}
                >
                    <View style={styles.itemContainer}>
                        <View style={styles.imageContainer}>
                            {poster_path === null ?
                                <Text style={{
                                    color: '#fff',
                                }}>No image...</Text>
                                :
                                <Image style={styles.img} source={{ uri: IMG }} />
                            }
                        </View>
                        <Text style={styles.title}>{title}</Text>
                        <View style={styles.voteAverageContainer}>
                            <AntDesign name="star" size={20} color="yellow" />
                            <Text style={styles.voteAverage}>
                                {voteAverage.toFixed(1)}
                            </Text>
                        </View>
                        <Text
                            style={{
                                color: '#fff',
                                textAlign: 'center',
                            }}
                        >{movie.tagline}</Text>
                    </View>
                    <View style={{ width: '100%' }}>
                        <View style={styles.titleContainer}>
                            <Ionicons name="wallet-outline" size={24} color="darkorange" />
                            <Text style={styles.titles}>Orçamento:</Text>
                        </View>
                        <Text style={styles.txt}>{movie.budget === "" ? 'Not informed...' : movie.budget}</Text>
                        <View style={styles.titleContainer}>
                            <Octicons name="graph" size={24} color="darkorange" />
                            <Text style={styles.titles}>Receita:</Text>
                        </View>
                        <Text style={styles.txt}>{movie.revenue === "" ? 'Not informed...' : movie.revenue}</Text>
                        <View style={styles.titleContainer}>
                            <MaterialCommunityIcons name="timer-sand" size={24} color="darkorange" />
                            <Text style={styles.titles}>Duração:</Text>
                        </View>
                        <Text style={styles.txt}>{movie.runtime === "" ? 'Not informed...' : movie.runtime} minutos</Text>
                        <View style={styles.titleContainer}>
                            <MaterialCommunityIcons name="file-document-outline" size={24} color="darkorange" />
                            <Text style={styles.titles}>Descrição:</Text>
                        </View>
                        <Text style={styles.txt}>{movie.overview === "" ? 'Not informed...' : movie.overview}</Text>
                    </View>
                </ScrollView>
            }
        </SafeAreaView>
    );
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    itemContainer: {
        width: ITEM_WIDTH * 2,
        alignItems: 'center',
        borderRadius: SPACING,
        marginHorizontal: GAP / 2,
        gap: GAP / 2,
        marginBottom: SPACING,
    },
    details: {
        color: BUTTON_COLOR,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        textAlign: 'center',
        paddingVertical: SPACING * 3,
        fontSize: 22,
        borderBottomWidth: 2,
        borderBottomColor: '#222',
    },
    imageContainer: {
        width: IMAGE_WIDTH * 1.5,
        height: IMAGE_HEIGHT * 1.5,
        borderColor: '#fff',
        backgroundColor: '#555',
        justifyContent: 'center',
        alignItems: 'center',
    },
    img: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    title: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 22,
        textAlign: 'center',
    },
    voteAverageContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: SPACING,
    },
    voteAverage: {
        color: '#fff',
        fontSize: 16,
    },
    titleContainer: {
        flexDirection: 'row',
        columnGap: GAP * 0.5,
        alignItems: 'center',
        marginTop: SPACING * 2,
    },
    titles: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
    },
    txt: {
        color: '#fff',
    }
});