import { StyleSheet } from 'react-native';
import {
    BUTTON_COLOR,
    HEADER_HEIGHT,
    SPACING,
    TEXTINPUT_WIDTH,
} from '../../styles';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: HEADER_HEIGHT,
        backgroundColor: '#333',
        justifyContent: 'center',
        alignItems: 'center',
    },
    searchContainer: {
        flexDirection: 'row',
        columnGap: SPACING * 3,
    },
    textInput: {
        width: TEXTINPUT_WIDTH,
        padding: SPACING,
        backgroundColor: '#fff',
        fontSize: 20,
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: SPACING * 3,
        backgroundColor: BUTTON_COLOR,
    },
    buttonText: {
        fontWeight: 'bold',
    },
});