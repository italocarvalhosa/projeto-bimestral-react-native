import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, Picker } from 'react-native';

const EnfermeiroScreen = () => {
  const [nomeCompleto, setNomeCompleto] = useState('');
  const [idade, setIdade] = useState('');
  const [cpfRg, setCpfRg] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('')
  const [crm, setCrm] = useState('');
  const [numeroCoren, setNumeroCoren] = useState('');
  const [validadeCoren, setValidadeCoren] = useState('');
  const [diplomaUri, setDiplomaUri] = useState(null); // Armazena o URI do arquivo PDF selecionado
  const [senha, setSenha] = useState('');
  const [confirmaSenha, setConfirmaSenha] =useState("");



  const handleCadastro = () => {
    if (!nomeCompleto || !idade || !cpfRg || !telefone || !email || !crm || !numeroCoren || !validadeCoren || !diplomaUri || !senha) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    if (senha !== confirmaSenha) {
      Alert.alert('Erro', 'As senhas não coincidem.');
      return;
    }

    // Aqui você pode adicionar a lógica para enviar os dados para um servidor, por exemplo.
    Alert.alert('Sucesso', 'Cadastro realizado com sucesso!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Enfermeiros</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome Completo"
        value={nomeCompleto}
        onChangeText={setNomeCompleto}
      />
      <TextInput
        style={styles.input}
        placeholder="Idade"
        value={idade}
        onChangeText={setIdade}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="CPF ou RG"
        value={cpfRg}
        onChangeText={setCpfRg}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Telefone"
        value={telefone}
        onChangeText={setTelefone}
        keyboardType="phone-pad"
      />
       <TextInput
        style={styles.input}
        placeholder="CRM"
        value={crm}
        onChangeText={setCrm}
        keyboardType="phone-pad"
      />
           <TextInput
        style={styles.input}
        placeholder="Numero do COREN"
        value={numeroCoren}
        onChangeText={setNumeroCoren}
        keyboardType="numeric"
        />
        <TextInput
        style ={styles.input}
        placeholder='Validade do COREN'
        value ={validadeCoren}
        onChangeText={setValidadeCoren}
        keyboardType='date'
        />
        <Picker.Item label ="Adicione seu Diploma" value ="Diploma"  />
      
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Confirma Senha"
        value={confirmaSenha}
        onChangeText={setConfirmaSenha}
        secureTextEntry
      />
  
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

export  {EnfermeiroScreen};
