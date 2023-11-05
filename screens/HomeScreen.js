import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }){
    
      return (
          <View style={styles.container}>
            <View style={{backgroundColor: '#04BF8A', width:'100%', height:150, borderBottomLeftRadius: 30,
        borderBottomRightRadius:30, paddingHorizontal:10}}>
            <Text style={{color: "#fff", paddingTop: 50, fontSize: 24, fontWeight: 'bold'}}>Let's start hiking!</Text>
            <TextInput
            style={styles.input}

            placeholder="Search by task name"
            />
            </View>


  
          </View>
        );
  } 
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    input: {
        borderRadius: 20,
        padding: 8,
        width: '100%',
        height: 50,
        textAlign: 'center',
        backgroundColor: '#ECECEC',
      },
      addButton: {
        backgroundColor: "#43888B",
        borderRadius: 45,
        alignItems: "center",
        justifyContent:'center',
        width: 349,
        height: 50,
      },
  });

