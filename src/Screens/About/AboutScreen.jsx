import React from 'react';
import { View, Image, Text, ScrollView, StyleSheet } from 'react-native';


const arthur = '../../../assets/img/arthur.jpg';

const ruan = '../../../assets/img/ruan.jpg';

const matheus = '../../../assets/img/matheus.jpg';

const geovana = '../../../assets/img/geovana.jpg';

const italo = '../../../assets/img/italo.jpg';

const joao = '../../../assets/img/joao.jpg';

const AboutScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Criadores do App:</Text>
        <View style={styles.creator}>
        <Image source={arthur} style={styles.image} />
         
          <View>
            <Text>Arthur:</Text>
            <Text>20 anos, Estudande de desenvolvimento de sistemas:</Text>
          </View>
        </View>
        <View style={styles.creator}>
        <Image source={matheus} style={styles.image} />
          <View>
            <Text>Matheus</Text>
            <Text> 25 anos, Estudande de desenvolvimento de sistemas</Text>
          </View>
        </View>
        <View style={styles.creator}>
        <Image source={geovana} style={styles.image} />
          <View>
            <Text>Geovana</Text>
            <Text>20 anos, Estudande de desenvolvimento de sistemas</Text>
          </View>
        </View>
        <View style={styles.creator}>
        <Image source={joao} style={styles.image} />
          <View>
            <Text>João</Text>
            <Text>22 anos, Estudande de desenvolvimento de sistemas</Text>
          </View>
        </View>
        <View style={styles.creator}>
        <Image source={italo} style={styles.image} />
          <View>
            <Text>Italo</Text>
            <Text>22 anos, Estudande de desenvolvimento de sistemas</Text>
          </View>
        </View>
        <View style={styles.creator}>
        <Image source={ruan} style={styles.image} />
          <View>
            <Text>Ruan</Text>
            <Text>20 anos, Estudande de desenvolvimento de sistemas</Text>
          </View>
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>História do App:</Text>
        <Text>História do app: Nosso aplicativo foi criado em 2024 como projeto de TCC do curso de desenvolvimento de sistemas da Etec Juscelino Kubitschek. Desde o princípio, nossa ideia era fornecer uma plataforma de atendimento homecare para os usuários."</Text>

        
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    alignItems: 'center', // Centraliza os itens verticalmente
  },
  section: {
    marginBottom: 20,
    width: '100%', // Garante que a largura do conteúdo seja 100% da tela
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  creator: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  image: {
    width: 50, // ajuste o tamanho da imagem conforme necessário
    height: 50,
    borderRadius: 30, // para fazer a imagem ser circular
    marginRight: 10,
  }

});

export { AboutScreen };


