import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Post } from './Post/Post';

const styles = StyleSheet.create({
    feed: {
        width: '100%',
        height: '100%',
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-between'
    }
});

// Componente responsável pela criação do feed
export const Feed = () => {
    return (
        <View style={styles.feed}>
            <Post />
            <Post />
            <Post />
        </View>
    );
};