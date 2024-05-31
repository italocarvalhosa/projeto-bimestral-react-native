import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Pressable, Text} from 'react-native';

const HeaderButton = ({page, text}) => {

    const navigation = useNavigation();

    return (
            <Pressable style={styles.container} onPress={() => navigation.navigate(page)}>
                <Text>
                    { text }
                </Text>
            </Pressable>
    );

};

const styles = StyleSheet.create({
    container: {
        marginLeft: 20
    }
});

export { HeaderButton };