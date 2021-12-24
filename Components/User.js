import React,{useState ,useEffect} from 'react'
import { StyleSheet, Text, View, SafeAreaView, StatusBar, Image, ScrollView,Platform ,Button} from 'react-native';
import firebase from 'firebase'



import * as ImagePicker from 'expo-image-picker';

export default function User() {






  const [cuser, currentUser] = useState('fahad');
  useEffect(()=>{

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
          console.log(user.uid);
  
          firebase.firestore().collection("users").doc(user.uid).get()
              .then((snapshot) => {
                currentUser(snapshot.data())
                  // console.log(currentUser);
                  // var uname = currentUser.username
                  // console.log(uname)
                 
  
              }).catch((er) => {
                  console.log("Error", er);
              })
  
  
  
      }
  })
  
  
  
  },[])

  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };




  

 

    return (
      <View style={{ flex: 1,      paddingTop: StatusBar.currentHeight,
        justifyContent: 'center', alignItems: 'center',borderBottomColor:'black',borderBottomWidth:0.4  }}>
         <ScrollView>
                <View style={{ borderBottomColor:'black',borderBottomWidth:0.4  }}>
                            {image && <Image source={{ uri: image }} style={{ width: 80, height: 80,marginRight:210, borderRadius: 50 }} />}


                  
                  <Text style={{marginRight:200,marginBottom:40}}>{cuser.username}</Text>
                </View>
                <View >
                                      <Button title="Pick an image from camera roll" onPress={pickImage} />

                </View>
        </ScrollView>
      
      </View>
           

    )
  }
  