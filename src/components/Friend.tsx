import React, { memo } from 'react';
import { Text, StyleSheet } from 'react-native';

interface ItemProps {
    data: {
        id: number;
        name: string;
        likes: number;
    };
}

function FriendComponent({ data }: ItemProps) {
    return (
        <Text style={styles.text}>
            {data.name} - Likes: {data.likes}
        </Text>
    );
}

const styles = StyleSheet.create({
    text: {
        color: '#bdc3c7',
    },
});

// Recalcula apenas se o componente sofreu alterações
export const Friend = memo(FriendComponent, (prevProps, nextProps) => {
    return Object.is(prevProps.data, nextProps.data);
});
