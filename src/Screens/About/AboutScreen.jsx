import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const AboutScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Criadores do App:</Text>
        <View style={styles.creator}>
          <View style={styles.circle} />
          <View>
            <Text>Arthur:</Text>
            <Text>19 anos, Estudande de desenvolvimento de sistemas:</Text>
          </View>
        </View>
        <View style={styles.creator}>
          <View style={styles.circle} />
          <View>
            <Text>Matheus</Text>
            <Text>Estudande de desenvolvimento de sistemas</Text>
          </View>
        </View>
        <View style={styles.creator}>
          <View style={styles.circle} />
          <View>
            <Text>Geovana</Text>
            <Text>Estudande de desenvolvimento de sistemas</Text>
          </View>
        </View>
        <View style={styles.creator}>
          <View style={styles.circle} />
          <View>
            <Text>João</Text>
            <Text>Estudande de desenvolvimento de sistemas</Text>
          </View>
        </View>
        <View style={styles.creator}>
          <View style={styles.circle} />
          <View>
            <Text>Italo</Text>
            <Text>Estudande de desenvolvimento de sistemas</Text>
          </View>
        </View>
        <View style={styles.creator}>
          <View style={styles.circle} />
          <View>
            <Text>Ruan</Text>
            <Text>Estudande de desenvolvimento de sistemas</Text>
          </View>
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>História do App:</Text>
        <Text>[História geral do app]</Text>
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
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'gray',
    marginRight: 10,
  },
});

export { AboutScreen };
