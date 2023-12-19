import { StyleSheet } from 'react-native';
import {
    SPACING,
    IMAGE_WIDTH,
    IMAGE_HEIGHT,
    BUTTON_COLOR,
    ITEM_WIDTH,
    GAP,
} from '../../styles';

export const styles = StyleSheet.create({
    container: {
        width: ITEM_WIDTH,
        alignItems: 'center',
        borderRadius: SPACING,
        marginHorizontal: GAP / 2,
        marginBottom: GAP,
    },
    imageContainer: {
        width: IMAGE_WIDTH,
        height: IMAGE_HEIGHT,
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
        fontSize: 16,
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
});