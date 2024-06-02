import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Inter_Medium } from '../../../../../../assets/fonts/fonts';
import Ionicons from 'react-native-vector-icons/Ionicons';

let userProfile = '../../../../../../assets/img/user-profile.jpg';


const styles = StyleSheet.create({
    postHeader: {
        width: '60%',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    image: {
        width: 48,
        height: 48,
        borderRadius: 88
    },
    titlePost: {
        fontSize: 20,
        fontFamily: Inter_Medium
    },
    datePost: {
        color: 'gray'
    },
    iconPost: {
        fontSize: 20
    }
});

export const PostHeader = () => {

    return (

        <View style={styles.postHeader}>
        <View>
            <Image
                source={
                    require(userProfile)
                }
                style={styles.image}
            />
        </View>
        <View style={styles.postTextHeader}>
            <Text style={styles.titlePost}>Preciso de enfermeira</Text>
            <Text style={styles.datePost}>Anúncio da vaga: 29/05/2024</Text>
        </View>
        <View style={styles.postIconHeader}>
            <Ionicons name='ellipsis-horizontal' style={styles.iconPost} color='#555555' />
        </View>
    </View>
    );
};