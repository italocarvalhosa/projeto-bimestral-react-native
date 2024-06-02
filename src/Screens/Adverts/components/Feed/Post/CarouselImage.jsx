import React from 'react';
import {
    Image,
    Dimensions,
    StyleSheet,
    View,
    Text
} from 'react-native';
import { Inter_Medium } from '../../../../../../assets/fonts/fonts';

const { width } = Dimensions.get('window');

const imageWidth = width * 0.9;
const imageHeight = imageWidth * 0.5;

function CarouselImage({ image }) {
    return (
        <View>
            <Image source={{
                uri: image.imgUrl
            }}
                style={styles.img}
                resizeMode="stretch"
            />
            <Text style={styles.title}>{image.title}</Text>
            <Text style={styles.body}>{image.body}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    img: {
        width: imageWidth,
        height: imageHeight,
    },
    title: {
        fontSize: 25,
        fontFamily: Inter_Medium,
        textAlign: 'center'
    },
    body:{
        width: '80%'
    }
});

export { CarouselImage };
