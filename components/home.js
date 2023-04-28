import { useEffect, useState } from 'react';
import { View, StyleSheet, TextInput, Text, TouchableOpacity, useWindowDimensions, } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import Todo from './todo';
import { useDispatch, useSelector } from 'react-redux';
import { setTitle } from '../redux/features/titleSlice';
import { setDescription } from '../redux/features/descriptionSlice';
import { setTodosKeys } from '../redux/features/todosKeysSlice';
import { setStatus } from '../redux/features/statusSlice';



const Home = (props) => {

  const title = useSelector(state => state.title.title)
  const description = useSelector(state => state.description.description)
  const todosKeys = useSelector(state => state.todosKeys.todosKeys)
  const status = useSelector(state => state.status.status)
  const dispatch = useDispatch();

  const { height, width } = useWindowDimensions()



  const onChangeTitle = (value) => {
     dispatch(setTitle(value))
  }

  const onChangeDescription = (value) => {
    dispatch(setDescription(value))
  }

  const navigation  = (title, description) => {
    props.navigation.navigate('TodoDetails',
    {
      title:title,
      description:description
    }
    )
  }

  useEffect(() => {
    async function setData() {
      var Keys = await AsyncStorage.getAllKeys()
      var allTodos = Keys.filter((key) => {
        if (key !== "EXPO_CONSTANTS_INSTALLATION_ID") {
          return true
        } else {
          return false
        }
      });
      dispatch(setTodosKeys(allTodos)) 
    }
    setData()
  }, [])

  const add = async () => {
    try {
      var id = 0;
      const keys = await AsyncStorage.getAllKeys()
      if (keys.length == 0) {
        id = 1;
      } else {
        var max = 1;
        for (var i = 0; i < keys.length; i++) {
          if (parseInt(keys[i]) > max && keys[i] != 'EXPO_CONSTANTS_INSTALLATION_ID') {
            max = parseInt(keys[i])
          }
        }
        id = max + 1;
      }

      const todo = {
        title: title,
        description: description,
        checked: false
      }

      await AsyncStorage.setItem(`${id}`, JSON.stringify(todo))

      if (status == 'all') {
        all()
      } else if (status == 'active') {
        active()
      } else if (status == 'done') {
        done()
      }
    } catch (error) {
      console.log(error)
    }
  };

  const all = async () => {
    try {
      var Keys = await AsyncStorage.getAllKeys()
      var allTodos = Keys.filter((key) => {
        if (key != 'EXPO_CONSTANTS_INSTALLATION_ID') {
          return true
        } else {
          return false
        }
      });
      dispatch(setTodosKeys(allTodos)) 
      dispatch(setStatus('all'))
    } catch (error) {
      console.log(error)
    }
  };

  const active = async () => {
    try {
      var keys = await AsyncStorage.getAllKeys()
      var uncheckedTodos = []
      for (var i = 0; i < keys.length; i++) {
        if (keys[i] != 'EXPO_CONSTANTS_INSTALLATION_ID') {
          var value = JSON.parse(await AsyncStorage.getItem(keys[i]));
          if (value.checked == false) {
            uncheckedTodos.push(keys[i]);
          }
        }
      };
      dispatch(setTodosKeys(uncheckedTodos)) 
      dispatch(setStatus('active'))
    } catch (error) {
      console.log(error)
    }
  };

  const done = async () => {
    try {
      var keys = await AsyncStorage.getAllKeys()
      var checkedTodos = []
      for (var i = 0; i < keys.length; i++) {
        if (keys[i] != 'EXPO_CONSTANTS_INSTALLATION_ID') {
          var value = JSON.parse(await AsyncStorage.getItem(keys[i]));
          if (value.checked == true) {
            checkedTodos.push(keys[i]);
          }
        }
      };
      dispatch(setTodosKeys(checkedTodos)) 
      dispatch(setStatus('done'))
    } catch (error) {
      console.log(error)
    }
  };
// console.log(todosKeys)
// console.log(status)


  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeTitle}
        placeholder="Todo Title"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeDescription}
        placeholder="Todo Description"
      />
      <TouchableOpacity style={styles.submitBtn} onPress={add}>
        <Text style={styles.text}>Add Todo</Text>
      </TouchableOpacity>

      <View style={styles.dividerLine}></View>

      <View style={styles.filterContainer}>
      <TouchableOpacity style={styles.filterBtn} onPress={all}>
        <Text style={styles.filterText}>All Todos</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.activeFilterBtn} onPress={active}>
        <Text style={styles.activeFilterText}>Actice Todos</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.filterBtn} onPress={done}>
        <Text style={styles.filterText}>Done Todos</Text>
      </TouchableOpacity>
      </View>
      <View style={{marginTop: 10, height: 0.3 * height }}>
        {todosKeys.map((key) => {
          return <Todo key={key} todoKey={key} all={all} active={active} done={done} status={status} navigation={navigation} />;
        })}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#aeaeae",
    marginVertical: 10,
    height: 50,
    padding: 10,
    borderRadius: 5,
  },
  submitBtn: {
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    borderRadius: 10,
  },
  text: {
    color: "white",
    fontSize: 18,
    textTransform: "uppercase",
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  filterBtn: {
    backgroundColor: "#ffffff",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "black",
  },
  filterText: {
    color: "black",
    fontSize: 15,
  },
  activeFilterBtn: {
    backgroundColor: "black",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "black",
  },
  activeFilterText: {
    color: "white",
    fontSize: 15,
  },
  dividerLine: {
    height: 1,
    backgroundColor: "#aeaeae",
    marginVertical: 15,
  },
});

export default Home;
