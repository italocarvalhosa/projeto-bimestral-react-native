import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Pressable, Text} from 'react-native';

const styles = StyleSheet.create({
    container: {
        marginLeft: 20
    }
});

// Componente que renderiza um botão do lado direito da tela
// page -> página para qual página vamos navegar
// text -> texto da página
const HeaderButton = ({page, text}) => {

    const navigation = useNavigation();

    const navigateToScreen = () => {
        navigation.navigate(page);
    };
    // consulte os comentários do arquivo 'ButtonNavigate.jsx'
    // sobre o metódo "useNavigation" e a função "navigateToScreen"
    return (
            <Pressable style={styles.container} onPress={navigateToScreen}>
                <Text>
                    { text }
                </Text>
            </Pressable>
    );

};

export { HeaderButton };