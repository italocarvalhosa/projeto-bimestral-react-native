import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, useWindowDimensions, Animated, SafeAreaView, ImageBackground } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Inter_Light, Inter_Medium } from '../../../assets/fonts/fonts';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { CarouselPost } from './components/CarouselPost';

let userProfile = '../../../assets/img/user-profile.jpg';

const images = new Array(6).fill(
    'https://images.unsplash.com/photo-1556740749-887f6717d7e4'
);

const AdvertScreen = () => {

    const scrollX = useRef(new Animated.Value(0)).current;

    const { width: windowWidth } = useWindowDimensions();

    return (
        <ScrollView>
            <View style={styles.container}>


                <View style={styles.feed}>
                    <View style={styles.post}>

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

                        <View style={styles.postComment}>
                            <Text style={styles.postTextComment}>Minha tia avó está enfrentando um problema
                                de úlcera na perna, já estavamos em contato com um outro profissional, porém o mesmo nos deixou na mão, agora precisamos de outro profissional para poder nos ajudar no tratamento.</Text>
                        </View>

                        <View style={styles.postServices}>
                            <Text style={styles.postTitleServices}>Serviços que serão realizados</Text>
                            <Text style={styles.postTextServices}>Curativo, Tratamento de feridas, Vacinas e Troca de Fralda</Text>
                        </View>
                        <View style={styles.postImage}>

                                <CarouselPost />

                        </View>
                        <View style={styles.postActions}>
                            <View style={styles.postSendMessage}>
                                <Text>Entrar em contato</Text>
                            </View>
                        </View>
                    </View>
                </View>


            </View>

        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '110%'
    },
    feed: {
        width: '120%',
        height: '100%',
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
    },
    image: {
        width: 48,
        height: 48,
        borderRadius: 88
    },
    post: {
        marginTop: 58,
        flex: 1,
        flexDirection: 'column'
    },
    postHeader: {
        width: '60%',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
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
    },
    postComment: {
        marginTop: 30,
        width: 350
    },
    postTextComment: {
        fontSize: 16,
        textAlign: 'justify'
    },
    postServices: {
        marginTop: 30,
        width: '100%'
    },
    postTitleServices: {
        fontFamily: Inter_Medium,
        fontSize: 22
    },
    postTextServices: {
        fontFamily: Inter_Light,
        fontSize: 16
    },
    postImage: {

    },
    postActions: {

    },
    postSendMessage: {

    }
});

export { AdvertScreen };
