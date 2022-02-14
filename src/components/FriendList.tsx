import React, { useMemo } from 'react';
import { View, Text } from 'react-native';

import { Friend } from './Friend';

interface FriendProps {
    data: {
        id: number;
        name: string;
        likes: number;
    }[];
}

export function FriendList({ data }: FriendProps) {
    const totalLikes = useMemo(() => {
        // likes = acumulador
        // friend = de onde vai pegar os valores para memorizar
        return data.reduce((likes, friend) => {
            return likes + friend.likes;
        }, 0);
    }, [data]);

    return (
        <View>
            <Text>Total de likes: {totalLikes}</Text>
            {data.map((friend) => (
                <Friend key={String(friend.id)} data={friend} />
            ))}
        </View>
    );
}
