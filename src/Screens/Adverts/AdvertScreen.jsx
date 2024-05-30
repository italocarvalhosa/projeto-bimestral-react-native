import React from 'react';
import { View, Text, StyleSheet, Image, ViewBase } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const AdvertScreen = () => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.feed}>
                    <View style={styles.post}>
                        <View style={styles.imageProfile}>
                            <Image />
                        </View>
                        <View style={styles.postHeader}>
                            <View style={styles.titlePost}>
                                <Text>Preciso de enfermeira</Text>
                                <Text>Anúncio da vaga: 29/05/2024</Text>
                            </View>
                            <View style={styles.iconPost}>
                                <Text>Icon</Text>    
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
        justifyContent: 'center'
    },
    feed: {

    },
    post: {

    },
    postHeader: {

    },
    imageProfile: {

    },
    titlePost: {

    },
    iconPost:{

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
