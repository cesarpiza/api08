import React from 'react';
import {
    Image,
    Text,
    View
} from 'react-native';
import { styles } from './styles';
import { API_IMG } from '../../apiInfo';
import { AntDesign } from '@expo/vector-icons';

export default function MovieCard(props) {

    const item = { ...props };
    const { title, poster_path, vote_average } = item;

    const IMG = `${API_IMG}${poster_path}`;
    const voteAverage = vote_average;

    return (
        <View style={styles.container}>
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
        </View>
    );
}