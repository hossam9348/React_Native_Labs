import React from 'react';
import {View, StyleSheet, Modal, TouchableOpacity, Text} from 'react-native';

const DeleteConfirmationModal = ({visible, onClose, confirmDelete}) => {
    return (
        <Modal visible={visible} animationType='fade' transparent={true}>
            <View style={{flex: 0.5, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FF3333'}}>
            <Text style={styles.text}>are you sure you want to delete this todo?</Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#FF3333'}}>
            <TouchableOpacity style={styles.button} onPress={confirmDelete}>
                <Text style={{margin:2, fontSize:18}}>OK</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={onClose}>
                <Text style={{margin:2, fontSize:18}}>Cancel</Text>
            </TouchableOpacity>
            </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      backgroundColor: '#DDDDDD',
      padding: 10,
      margin:5,
      borderRadius: 20,
      borderWidth: 1,
      borderColor: "black",
    },
    text: {
        color: "white",
        fontSize: 18,
      },
  });

export default DeleteConfirmationModal;
