import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AddScreen from './screens/AddScreen';
import {Home3, CardAdd} from 'iconsax-react-native';
import Ionic from 'react-native-vector-icons/Ionicons'


const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      //   screenOptions={({route})=>({
      //   headerShown: false,
      //   tabBarIcon:({focused, color, size}) => {
      //     if (route.name === 'Home'){
      //       return <Home3 size={size} color={focused ? '#012840' : '#049DBF'} variant="Bold"/>
      //     }else{
      //       return <CardAdd size={size} color={focused ? '#012840' : '#049DBF'} variant="Bold"/>
      //     }
      //   }
      // })}
      screenOptions={({route})=>({
        headerShown: false,
        showLabel: false,
        tabBarInactiveTintColor: 'white',
        tabBarStyle:{
          backgroundColor:'#04BF8A',
          height:60,
          borderTopLeftRadius:30,
          borderTopRightRadius:30,
          paddingBottom: 5,
        },
        tabBarActiveTintColor: '#014A35',
        tabBarIcon:({focused, color, size}) => {
          let iconName;
          if (route.name === 'Home'){
            iconName = focused ? 'ios-home' : 'ios-home-outline';
          }else{
            iconName = focused ? 'add-circle' : 'add-circle-outline';
          }
          return <Ionic name={iconName} size={size} color={color}/>
        },
      })}
      // tabBarOptions={{
      //   activeTintColor: '#04BF8A',
      //   inactiveTintColor: 'black',
      //   showLabel: false,
      //   // activeBackgroundColor:'black',
      //   // inactiveBackgroundColor:'black',
      //   styles: {
      //     backgroundColor: 'black',
      //   },
      // }}

      >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="New" component={AddScreen} />
    </Tab.Navigator>

    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
