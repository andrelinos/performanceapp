import React, { memo } from 'react';
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';

interface ItemProps {
    data: {
        id: number;
        name: string;
        likes: number;
    };
    follow: () => void;
}

function FriendComponent({ data, follow }: ItemProps) {
    return (
        <View style={{ marginBottom: 15 }}>
            <Text style={styles.text}>
                {data.name} - Likes: {data.likes}
            </Text>
            <TouchableOpacity onPress={follow}>
                <Text style={{ color: 'purple' }}>Seguir {data.name}</Text>
            </TouchableOpacity>
            <Text>
                Online em {new Date().getHours()} : {new Date().getMinutes()}
            </Text>
        </View>
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
