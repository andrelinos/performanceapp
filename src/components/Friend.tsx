import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface ItemProps {
    data: {
        name: string;
        likes: number;
    };
}

export function Friend({ data }: ItemProps) {
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
