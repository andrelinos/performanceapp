import React, { memo } from 'react';
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import lodash from 'lodash';

interface ItemProps {
    data: {
        id: number;
        name: string;
        likes: number;
        online: string;
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
            <Text>Online em: {data.online}</Text>
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
    return lodash.isEqual(prevProps.data, nextProps.data);
});
