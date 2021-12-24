
import React, { useState } from 'react'
import { View, Text, Button,TextInput ,SafeAreaView,StyleSheet,StatusBar,Alert,Image } from 'react-native';

import { Link } from '@react-navigation/native';

// import { auth ,createUserWithEmailAndPassword,doc,
//   setDoc,
//   getDoc,
//   addDoc,
//   collection,
//   getDocs,
//   query,
//   db} from '../../firebase';
import firebase from 'firebase';




export default function Signup({navigation}) {



    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setName] = useState('');
    const [phone, setPhone] = useState('');


    const signup =  () => {
      if(email=== "" || password === "" || username === "" ||phone ==="" ) {
        Alert.alert("err", 'fill all the fields')
      }else{
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          // Signed in 
          var user = userCredential.user;
          firebase.firestore().collection(`users`).doc(user.uid).set({
             
            email,
            username,
            phone,
            userUID: user.uid
        })
            .then(() => {
                console.log("Document successfully written!");
            })
            .catch((error) => {
                console.error("Error writing document: ", error);
            });

                  
          
        Alert.alert(
          'Hogaya',
          'You Successfully SignUp',
          [
              { text: 'Next ' , onPress :() => navigation.navigate('Login')}
          ])
        

        


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

        <View style={{ flex: 0.6,alignContent:'center',alignItems:'center'}} >
          <Text style={styles.header} >Signup</Text>
          <TextInput
                style={styles.input}
                value={username}

                onChangeText={(text) => setName(text)}

                placeholder=" Enter Name"
                keyboardType="ascii-capable"
            /> 
            <TextInput
                style={styles.input}
                value={email}
                keyboardType='email-address'


                onChangeText={(text) => setEmail(text)}
                placeholder=" Enter Email"
                // keyboardType="ascii-capable"
            /> 
            <TextInput
                style={styles.input}
                value={password}
                secureTextEntry={true}


                onChangeText={(text) => setPassword(text)}
                placeholder=" Enter Password"
                // keyboardType="ascii-capable"
            /> 
             <TextInput
                style={styles.input}

                value={phone}
                keyboardType="numeric"

                placeholder=" Enter Phone "
                onChangeText={(text) => setPhone(text)}

                // keyboardType="numeric"
            /> 
            
            <View style={styles.footer} >
              <Button
              
                  title={'signup'}
                  onPress={signup}
                />
                {/* <Text title="Signup" onPress={login} 
                style={styles.add}>SignUp</Text> */}
            </View>
            {/* <View style={styles.footer} >

                <Text title="Signup" 
                >you have an already account ?
                </Text>
                <Button title="click" onPress={() => navigation.navigate('Login')}/>

              </View> */}
               <View  style={styles.footers}>
                            <Link to={{ screen: 'Login' }}>
                            you have an already account ? Click Me          
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
        footers: {
      fontSize: 32,
         alignItems: 'center',
         

    },
    footer: {
      fontSize: 32,
      fontWeight: "bold",
      marginHorizontal: '30%'
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
