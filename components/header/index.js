import React, { useRef, useState } from 'react';
import {
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import { styles } from './styles';

export default function Header({ navigation, route }) {

    const [inputValue, setInputValue] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.textInput}
                    value={inputValue}
                    onChangeText={text => {
                        setInputValue(text);
                    }}
                />
                <TouchableOpacity
                    onPress={() => {
                        if (route.params?.inputValue === inputValue) return;
                        if (inputValue !== '') {
                            navigation.push('Search', { inputValue });
                        } else {
                            alert('Please fill in the field!');
                        }
                        setInputValue('');
                    }}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Search</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}