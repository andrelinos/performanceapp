import React, { useMemo } from 'react';
import { View, Text, FlatList } from 'react-native';

import { Friend } from './Friend';

interface FriendProps {
    data: {
        id: number;
        name: string;
        likes: number;
        online: string;
    }[];

    follow: () => void;
}

export function FriendList({ data, follow }: FriendProps) {
    const totalLikes = useMemo(() => {
        return data.reduce((likes, friend) => {
            return likes + friend.likes;
        }, 0);
    }, [data]);

    return (
        <View>
            <Text>Total de likes: {totalLikes}</Text>
            <FlatList
                data={data}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item }) => (
                    <Friend data={item} follow={follow} />
                )}
            />
        </View>
    );
}
