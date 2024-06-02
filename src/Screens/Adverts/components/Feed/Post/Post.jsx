import React from 'react';
import { View, StyleSheet } from 'react-native';

import { PostCarousel } from './CarouselPost';
import { PostHeader } from './PostHeader';
import { PostDescription } from './PostDescription';
import { PostServices } from './PostServices';

const styles = StyleSheet.create({
    post: {
        marginTop: 58,
        flex: 1,
        flexDirection: 'column'
    } 
});

export const Post = () => {
    return (
        <View style={styles.post}>
            <PostHeader />
            <PostDescription />
            <PostServices />
            <PostCarousel />
        </View>
    );
}