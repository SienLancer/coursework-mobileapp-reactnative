import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

export default function AddScreen({ navigation }){
    
      return (
          <View style={styles.container}>
            <View style={{backgroundColor: '#04BF8A', width:'100%', height:100, borderBottomLeftRadius: 30,
        borderBottomRightRadius:30, paddingHorizontal:10}}>

                <Text style={{color: "#fff", fontSize: 24, textAlign:'center', fontWeight: 'bold', marginTop: 50}}>Add Hike</Text>
            </View>
            <Text style={styles.text}>Name of the hike</Text>
            <TextInput style={styles.input}></TextInput>
            <Text style={styles.text}>Location</Text>
            <TextInput style={styles.input}></TextInput>
  
          </View>
        );
  } 
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    text:{
        fontSize: 16,
        fontWeight:'bold',
        marginLeft: 10,
        marginTop:20
    },
    input: {
        borderRadius: 25,
        borderColor:'#04BF8A',
        borderWidth:3,
        padding: 8,
        width: '100%',
        height: 50,
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

