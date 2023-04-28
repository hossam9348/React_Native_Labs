import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import DeleteConfirmationModal from './deleteConfirmationModal';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { AntDesign } from '@expo/vector-icons';
// import { useDispatch, useSelector } from 'react-redux';
// import { setVisible } from '../redux/features/visibleSlice';
// import { setElementVisible } from '../redux/features/elementVisibleSlice';
// import { setValue } from '../redux/features/valueSlice';



const Todo = (props) => {
    // const visible = useSelector(state => state.visible.visible)
    // const elementVisible = useSelector(state => state.elementVisible.elementVisible)
    // const value = useSelector(state => state.value.value)
    // const dispatch = useDispatch();
   const [value, setValue] = useState({})
   const [elementVisible, setElementVisible] = useState(true)
   const [visible, setVisible] = useState(false)



    useEffect(() => {
        async function check() {
            (setValue(JSON.parse(await AsyncStorage.getItem(todoKey)))) 
            if (!JSON.parse(await AsyncStorage.getItem(todoKey)).checked) {
                (setElementVisible(true)) 
            } else {
               (setElementVisible(false)) 
            }
        }
        check()
    }, [])


    const onCloseMOdel = () => {
       (setVisible(false))
    }


    const confirmDelete = async (todoKey) => {
        if (status == 'all') {
            await AsyncStorage.removeItem(todoKey,() => {
                (setVisible(false)) 
                all()
            })
        } else if (status == 'active') {
            await AsyncStorage.removeItem(todoKey,() => {
                (setVisible(false)) 
                active()
            })
        } else if (status == 'done') {
            await AsyncStorage.removeItem(todoKey,() => {
                (setVisible(false)) 
                 done()
            })
        }
    }

    const check = async (todoKey) => {
        if (status == 'all') {
            var value = JSON.parse(await AsyncStorage.getItem(todoKey))
            if (!value.checked) {
                value.checked = true
                await AsyncStorage.setItem(`${todoKey}`, JSON.stringify(value))
            } else {
                value.checked = false
                await AsyncStorage.setItem(`${todoKey}`, JSON.stringify(value))
            }
            (setElementVisible(!elementVisible)) 
            all()
        } else if (status == 'active') {
            var value = JSON.parse(await AsyncStorage.getItem(todoKey))
            if (!value.checked) {
                value.checked = true
                await AsyncStorage.setItem(`${todoKey}`, JSON.stringify(value))
            } else {
                value.checked = false
                await AsyncStorage.setItem(`${todoKey}`, JSON.stringify(value))
            }
            (setElementVisible(!elementVisible)) 
            active()
        } else if (status == 'done') {
            var value = JSON.parse(await AsyncStorage.getItem(todoKey))
            if (!value.checked) {
                value.checked = true
                await AsyncStorage.setItem(`${todoKey}`, JSON.stringify(value))
            } else {
                value.checked = false
                await AsyncStorage.setItem(`${todoKey}`, JSON.stringify(value))
            }
            (setElementVisible(!elementVisible)) 
            done()
        }
    }

    const { todoKey, all, active, done, status, navigation } = props;

    console.log(value)
    console.log(visible)
    console.log(elementVisible)


    return (
        <View style={styles.todoContainer}>
            {elementVisible ? (
                <TouchableOpacity onPress={() => check(todoKey)} style={{ margin: 2 }}>
                    <Text style={{ color: "black", fontSize: 15, }}>{value.title}</Text>
                </TouchableOpacity>
            ) : (
                <TouchableOpacity onPress={() => check(todoKey)} style={{ margin: 2, textDecorationLine: "line-through" }}>
                    <Text style={{ color: "black", fontSize: 15, }}>{value.title}</Text>
                </TouchableOpacity>
            )}


            <View style={{ flexDirection: 'row'}}>
            <TouchableOpacity onPress={() => (setVisible(true))} style={{ margin: 2, backgroundColor: "#FF3333", borderRadius: 10, borderWidth: 1, borderColor: "black", }}>
                <Text style={styles.text}>delete</Text>
                <DeleteConfirmationModal visible={visible} confirmDelete={() => confirmDelete(todoKey)} onClose={onCloseMOdel}></DeleteConfirmationModal>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>navigation(value.title, value.description)} style={{ margin: 2 }}>
                <AntDesign name="arrowright" size={24} color="black" />
            </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    doneTodo: {
        textDecorationLine: "line-through",
    },
    todoContainer: {
        flexDirection: 'row',
        justifyContent: "space-between",
        margin: 2,
        padding: 2,
        backgroundColor: "#DDDDDD",
        borderRadius: 15,
        borderWidth: 1,
        borderColor: "black",
    },
    text: {
        color: "white",
        fontSize: 15,
    },
})

export default Todo;
