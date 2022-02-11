import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    Button,
    StyleSheet,
    ScrollView,
} from 'react-native';

import { FriendList } from '../components/FriendList';

interface FriendsProps {
    id: number;
    likes: number;
    Name: string;
}
[];

export function Home() {
    const [name, setName] = useState('');
    const [friends, setFriends] = useState([]);

    async function handleSearch() {
        const response = await fetch(
            `http://192.168.0.100:3333/friends?q=${name}`,
        );

        const data = await response.json();

        setFriends(data);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Friend</Text>

            <TextInput
                style={styles.textInput}
                placeholder="Search Friend"
                onChangeText={setName}
            />
            <Button title="Search" onPress={handleSearch} />
            <ScrollView style={styles.list}>
                <FriendList data={friends} />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 100,
        padding: 25,
        backgroundColor: '#2c3e50',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ecf0f1',
    },
    textInput: {
        borderWidth: 1,
        padding: 7,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: '#ecf0f1',
        borderColor: '#ecf0f1',
        borderRadius: 5,
    },
    list: {
        marginTop: 24,
        marginBottom: 24,
        backgroundColor: 'rgba(236, 240, 241,0.1)',
        padding: 10,
    },
});
