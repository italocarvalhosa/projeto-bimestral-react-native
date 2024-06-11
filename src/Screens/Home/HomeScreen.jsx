import React from 'react';
import { View, StyleSheet, Image, Text, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Inter_Medium, Inter_Regular } from '../../../assets/fonts/fonts';
import { ScrollView } from 'react-native-gesture-handler';
const user = '../../../assets/img/user-profile.jpg';
const search = '../../../assets/img/search.png';
const service = '../../../assets/img/elipse.png';


export const HomeScreen = () => {

    const linear = ['rgba(45,199,228,1)', 'rgba(255,255,255,1)'];

    return (
        <View style={styles.container}>
            <LinearGradient style={styles.background}
                colors={linear}
            >
                <View style={styles.divHeader}>
                    <View>
                        <Text style={styles.textHeader}>
                            Que tipo de serviço está procurando?
                        </Text>
                    </View>
                    <Image source={
                        require(user)
                    }
                        style={styles.imageHeader}
                    />
                </View>
                <View style={styles.divInput}>
                    <View
                        style={styles.inputHome}
                    >
                        <Image
                            source={
                                require(search)
                            }
                            style={
                                {
                                    marginLeft: 12,
                                    width: 24,
                                    height: 24
                                }
                            }
                        />
                        <TextInput
                            placeholder='Pesquisar'
                            style={
                                {
                                    fontSize: 16,
                                    marginLeft: 12
                                }
                            }
                        />
                    </View>
                </View>
                <ScrollView style={styles.divServices}
                    horizontal={true}
                >
                    <View style={styles.divService}>
                        <Image source={
                            require(service)
                        }
                        style={styles.imgService}
                        />
                        <Text
                            style={styles.textService}
                        >
                            Vacina
                        </Text>
                    </View> 
                </ScrollView>
                <View style={styles.divRecommended}>
                        <Text style={styles.titleRecommended}>Recomendado</Text>
                        <Text style={styles.textRecommended}>Veja todos</Text>
                </View>
                <View style={styles.divImagems}>

                </View>
            </LinearGradient>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        fontFamily: Inter_Regular
    },
    background: {
        height: '100%',
        width: '100%',
        alignItems: 'center',
    },
    divHeader: {
        flexDirection: 'row',
        marginTop: 50,
        width: '80%',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    textHeader: {
        fontSize: 24,
        color: "#FFFFFF",
        fontFamily: Inter_Medium
    },
    imageHeader: {
        height: 65,
        width: 65,
        borderRadius: 30
    },
    divInput: {   
        backgroundColor: "#FFFFFF",
        width: '80%',
        height: 58,
        borderRadius: 12,
        marginTop: 30
    },
    inputHome: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    divServices: {
        marginTop: 30
    },
    divService: {
        marginRight: 15,
        marginLeft: 12,
        alignItems: 'center'
    },
    imgService: {

    },
    textService: {
        color: "#FFFFFF",
        fontFamily: Inter_Medium
    },
    divRecommended: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        width: '80%'
    },
    titleRecommended: {
        fontSize: 23,
        fontFamily: Inter_Medium,
        color: '#FFFFFF'
    },
    textRecommended: {
        color: '#5DA0DE'
    },
    divImagems: {
        width: 246,
        height: 219,
        backgroundColor: '#D9D9D9',
        marginBottom: 55
    }
});