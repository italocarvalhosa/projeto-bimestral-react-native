import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Inter_Regular } from '../../../assets/fonts/fonts';

let userProfile = '../../../assets/img/user-profile.jpg';

const AdvertScreen = () => {
    
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.feed}>
                    <View style={styles.imageProfile}>
                        <Image 
                            source={
                                require(userProfile)
                            }
                            style={styles.image}
                        />
                    </View>
                    <View style={styles.post}>
                        <View style={styles.postHeader}>
                            <View style={styles.postTextHeader}>
                                <Text style={styles.titlePost}>Preciso de enfermeira</Text>
                                <Text style={styles.datePost}>Anúncio da vaga: 29/05/2024</Text>
                            </View>
                            <View style={styles.postIconHeader}>
                                <Ionicons name='ellipsis-horizontal' style={styles.iconPost} color='#555555' /> 
                            </View>    
                        </View>

                        <View style={styles.postComment}>
                            <Text>Texto da descrição da necessidade</Text>
                        </View>

                        <View style={styles.postServices}>
                            <Text>Serviços que serão realizados</Text>
                        </View>
                        <View style={styles.postImage}>
                            <Image />
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
        width: '100%',
        height: '100%',
        flex: 1,
        alignItems: 'center',
        marginLeft: 32,
        flexDirection: 'row',
    },
    imageProfile: {
        width: 66,
        height: 20,
        alignItems: 'flex-start',
    },
    image: {
        width: 48,
        height: 48,
        borderRadius: 88
    },
    post: {
        marginTop: 58
    },
    postHeader: {
        width: '80%',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    titlePost: {
        fontSize: 20,
        fontFamily: Inter_Regular
    },
    datePost:{

    },
    iconPost:{
         fontSize: 30
    },
    postComment:{

    },
    postServices: {

    },
    postImage:{

    },
    postActions:{

    },
    postSendMessage:{

    }
});

export { AdvertScreen };
