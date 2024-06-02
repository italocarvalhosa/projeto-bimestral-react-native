import React, { useRef, useState } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    Dimensions
} from 'react-native';

import Carousel, { Pagination } from 'react-native-snap-carousel';
import { Inter_Medium } from '../../../../../../assets/fonts/fonts';
import { CarouselImage } from './CarouselImage';

const data = [
    {
        title: "Slide 01 Girl",
        body: "Ut tincidunt tincidunt erat. Sed cursus turpis vitae tortor. Quisque malesuada placerat nisl. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
        imgUrl: "https://images.pexels.com/photos/1382726/pexels-photo-1382726.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        title: "Slide 02 Mansion",
        body: "Aenean ut eros et nisl sagittis vestibulum. Donec posuere vulputate arcu. Proin faucibus arcu quis ante. Curabitur at lacus ac velit ornare lobortis. ",
        imgUrl: "https://images.pexels.com/photos/2525714/pexels-photo-2525714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        title: "Slide 03 Meet",
        body: "Phasellus ullamcorper ipsum rutrum nunc. Nullam quis ante. Etiam ultricies nisi vel augue. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc.",
        imgUrl: "https://images.pexels.com/photos/3182759/pexels-photo-3182759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
];


function CarouselImage1({ item, index }) {
    return (
        <View>
            <Image source={{
                uri: item.imgUrl
            }}
                style={styles.img}
                resizeMode="stretch"
            />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.body}>{item.body}</Text>
        </View>
    );
};



function CarouselCardItem({ index }) {
    return (
        <CarouselImage image={data.imgUrl} />
    );
};


const { width } = Dimensions.get('window');

const imageWidth = width * 0.9;
const imageHeight = imageWidth * 0.5;

const PostCarousel = () => {

    const isCarousel = useRef(null);
    const [index, setIndex] = useState(0);

    return (
        <View style={styles.postImage}>

            <View>
                <Carousel
                    layout='default'
                    layoutCardOffset={9}
                    ref={isCarousel}
                    data={data}
                    renderItem={CarouselImage1}
                    sliderWidth={390}
                    itemWidth={390}
                    inactiveSlideShift={0}
                    onSnapToItem={(index) => setIndex(index)}
                    useScrollView={true}
                />
                <Pagination
                    dotsLength={data.length}
                    activeDotIndex={index}
                    carouselRef={isCarousel}
                    dotStyle={{
                        width: 40,
                        height: 5,
                        borderRadius: 5,
                        marginHorizontal: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.92)',
                        borderWidth: 1,
                        borderColor: 'rgba( 249, 249, 249, 0.52)',
                        shadowColor: '#000',
                        shadowOffset: {
                            width: 0,
                            height: 2
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,
                        elevation: 5
                    }}
                    inactiveDotOpacity={0.4}
                    inactiveDotScale={0.6}
                    tappableDots={true}
                />
            </View>
        </View>
    );

};

const styles = StyleSheet.create({
    postImage: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'colum'
    },
    img: {
        width: imageWidth,
        height: imageHeight,
    },
    title: {
        fontSize: 25,
        fontFamily: Inter_Medium,
        textAlign: 'center'
    },
    body: {
        width: '80%'
    }
});

export { PostCarousel };