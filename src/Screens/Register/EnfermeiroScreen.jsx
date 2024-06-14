import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import DocumentPicker from 'react-native-document-picker';

const CadastroEnfermeiroScreen = () => {
  const [nomeCompleto, setNomeCompleto] = useState('');
  const [idade, setIdade] = useState('');
  const [cpfRg, setCpfRg] = useState('');
  const [telefone, setTelefone] = useState('');
  const [crm, setCrm] = useState('');
  const [numeroCoren, setNumeroCoren] = useState('');
  const [validadeCoren, setValidadeCoren] = useState('');
  const [diplomaUri, setDiplomaUri] = useState(null); // Armazena o URI do arquivo PDF selecionado

  const handlePickDiploma = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf],
      });
      setDiplomaUri(res.uri);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // Usuário cancelou a seleção do arquivo
        console.log('Seleção de arquivo cancelada');
      } else {
        // Ocorreu um erro ao selecionar o arquivo
        console.log('Erro ao selecionar arquivo:', err);
      }
    }
  };

  const handleCadastro = () => {
    if (!nomeCompleto || !idade || !cpfRg || !telefone || !crm || !numeroCoren || !validadeCoren || !diplomaUri) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    // Aqui você pode adicionar a lógica para enviar os dados para um servidor, por exemplo.
    Alert.alert('Sucesso', 'Cadastro realizado com sucesso!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Enfermeiros</Text>
      {/* Outros campos de entrada */}
      <Button title="Selecionar Diploma (PDF)" onPress={handlePickDiploma} />
      {diplomaUri && <Text>Diploma selecionado: {diplomaUri}</Text>}
      <Button title="Cadastrar" onPress={handleCadastro} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default CadastroEnfermeiroScreen;
