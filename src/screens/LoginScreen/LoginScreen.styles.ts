import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#fff',
    },
    title: {
      fontSize: 20,
      color: '#000',
      marginTop: 60,
    },
    subtitle: {
      fontSize: 34,
      fontWeight: 'bold',
      color: '#000',
      marginBottom: 60,
    },
    label: {
      fontSize: 14,
      color: '#888',
      marginBottom: 5,
    },
    input: {
      height: 50, 
      borderColor: '#ddd',
      borderWidth: 1,
      paddingHorizontal: 10,
      borderRadius: 10,
      marginBottom: 10,
      backgroundColor: '#f5f5f5',
    },
    inputPassword: {
      flex: 1,
      height: 50, 
      paddingHorizontal: 10,
      borderColor: '#ddd',
      borderWidth: 1,
      borderRadius: 10,
      backgroundColor: '#f5f5f5',
    },
    passwordContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 20,
    },
    showPasswordToggle: {
      position: 'absolute',
      right: 10,
      padding: 10,
    },
    forgotPassword: {
      color: '#007bff',
      marginBottom: 20,
      textAlign: 'left',
    },
    loginButton: {
      height: 50,
      backgroundColor: '#0056ff',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
    },
    loginButtonText: {
      color: '#fff',
      fontSize: 18,
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
      backgroundColor: '#fff',
      padding: 20,
      margin: 20,
      borderRadius: 10,
    },
    modalTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    resetButton: {
      backgroundColor: '#0056ff',
      padding: 15,
      alignItems: 'center',
      borderRadius: 5,
      marginTop: 10,
    },
    resetButtonText: {
      color: '#fff',
      fontSize: 16,
    },
    cancelButton: {
      color: '#007bff',
      marginTop: 10,
      textAlign: 'center',
    },
  });

  export default styles;