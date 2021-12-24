
import React, { useState } from 'react'
import { View, Text, Button,TextInput ,SafeAreaView,StyleSheet,StatusBar,Alert,Image } from 'react-native';
// import { auth } from '../../firebase';
// import { signInWithEmailAndPassword } from '@firebase/auth';
import firebase from 'firebase';
import { Link } from '@react-navigation/native';




export default function Login({navigation}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login =  () => {
      if(email=== "" || password === "" ) {
        Alert.alert("err", 'fill all the fields')
      }else{
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
          // Signed in
          
          var user = userCredential.user;
          // ...
          console.log(user)
           console.log("User Sucessfully login")
          //  navigation.navigate('Dash')
        Alert.alert(
            'Hogaya',
            'You Successfully Login',
            [
                { text: 'Next ' , onPress :() => navigation.navigate('Dash')}
            ]
        )
        // ...
        })
        .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        });

      }
     
    }
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View>
        <Image
                        style={{width :200,height:60}}
                        source={require('../../Assets/inst.png')}

                        
                    />
        </View>
        <View style={{ flex: 0.6}} >
          <Text style={styles.header} >Login</Text>
           
            <TextInput
                style={styles.input}
                value={email}
                keyboardType='email-address'

                onChangeText={e => setEmail(e)}
                placeholder=" Enter Email"
                // keyboardType="ascii-capable"
            /> 
            <TextInput
                style={styles.input}
                value={password}
                secureTextEntry={true}
                onChangeText={e => setPassword(e)}
                placeholder=" Enter Password"
                // keyboardType="ascii-capable"
            /> 
            
            
             <View style={styles.footer} >
              <Button
              
                  title={'Login'}
                  onPress={login}
                />
                {/* <Text title="Signup" onPress={login} 
                style={styles.add}>SignUp</Text> */}
            </View >
            
              <View  style={styles.footers}>
                            <Link to={{ screen: 'Signup' }}>
                            Don't have an account ? Click Me          
                            </Link>
              </View>

        </View>
                   

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    // backgroundColor: "pink"
  },
   header: {
      fontSize: 32,
      fontWeight: "bold",
      marginTop: "10%",
      marginHorizontal: '30%'
    },
    footer: {
      fontSize: 32,
      fontWeight: "bold",
      marginHorizontal: '30%'
    },
    footers: {
      fontSize: 32,
         alignItems: 'center',
         

    },
  //   add: {
  //     fontSize: 20,
  //       // width: 60,
  //       // height: 60,


  //  },
 
    input: {
      width: 310,
      height: 44,
      padding: 10,
      borderWidth: 1,
      borderColor: 'black',
      marginBottom: 10,
      borderRadius:20
  
    },
    // inputt: {
    //   width: 100,
    //   height: 44,
    //   padding: 10,
    //   borderWidth: 1,
    //   borderColor: 'black',
    //   marginBottom: 10,
  
    // },
    //  addWrapper: {
    //   width: 100,
    //   height: 30,
    //   backgroundColor: 'gray',
    //   borderRadius: 20,
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   borderColor: '#C0C0C0',
    //   borderWidth: 1,
    //   marginLeft: 100,
      
    // },
});
