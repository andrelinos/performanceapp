import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

import { FriendList } from '../components/FriendList';

export function Home() {
    const [name, setName] = useState('');

    function handleSearch() {}

    return (
        <View style={styles.container}>
            <Text>Friend</Text>

            <TextInput
                style={styles.textInput}
                placeholder="Search Friend"
                onChangeText={setName}
            />
            <Button title="Search" onPress={handleSearch} />

            <FriendList data={[]} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 100,
        padding: 25,
    },
    textInput: {
        borderWidth: 1,
        padding: 7,
        marginTop: 10,
        marginBottom: 10,
    },
});
