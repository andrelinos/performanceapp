import React, { useCallback, useState } from 'react';
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
    name: string;
    likes: number;
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

        const formattedData = data.map((item: FriendsProps) => {
            return {
                id: item.id,
                name: item.name,
                likes: item.likes,
                online: `${new Date().getHours()}:${new Date().getMinutes()}`,
            };
        });

        setFriends(formattedData);
    }

    const handleFollow = useCallback(() => {
        console.log('Follow user');
    }, []);

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
                <FriendList data={friends} follow={handleFollow} />
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
