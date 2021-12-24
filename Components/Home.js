import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, StatusBar, Image, ScrollView } from 'react-native';
import { Ionicons, Fontisto , AntDesign ,FontAwesome,Entypo} from '@expo/vector-icons';

import Heart from './Heart'


export default function Home({navigation}) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.Header}>
                <View style={{marginLeft:10}}>

                    <Image
                        source={require('../Assets/insta.png')}

                        
                    />
                    
                </View>
                <View  style={styles.messengerIcon} >
                    {/* <Ionicons
                        name="md-paper-plane-outline"
                        size={30}
                        color='black'
                        onPress={() => navigation.navigate('Heart')}


                    /> */}
                    <Fontisto name="messenger" size={24} color="black"
                     onPress={() => navigation.navigate('Messenger')}

                     />

                </View>
            </View>


            {/* Story slider */}

            <View style={styles.storiesContainer} >
                <ScrollView horizontal={true}  showsHorizontalScrollIndicator={false}>
                    
                    <View style={styles.picturesContainer} >
                        <Image
                            style={styles.storiesPic}
                            source={require('../Assets/tip.jpg')}
                        />
                    </View>
                    <View style={styles.picturesContainer} >
                        <Image
                            style={styles.storiesPic}
                            source={require('../Assets/osp.jpg')}
                        />
                    </View>
                    <View style={styles.picturesContainer} >
                        <Image
                            style={styles.storiesPic}
                            source={require('../Assets/op.jpg')}
                        />
                    </View>
                    <View style={styles.picturesContainer} >
                        <Image
                            style={styles.storiesPic}
                            source={require('../Assets/slp.jpg')}
                        />
                    </View>
                    <View style={styles.picturesContainer} >
                        <Image
                            style={styles.storiesPic}
                            source={require('../Assets/sp.jpg')}
                        />
                        
                    </View>
                    <View style={styles.picturesContainer} >
                        <Image
                            style={styles.storiesPic}
                            source={require('../Assets/hr.jpg')}
                        />
                    </View>
                    <View style={styles.picturesContainer} >
                        <Image
                            style={styles.storiesPic}
                            source={require('../Assets/tfp.jpg')}
                        />
                    </View>
                </ScrollView>
               
            </View>
            <ScrollView  style={{flex:0.2,paddingTop:5}}>
                <View style={{marginBottom:10 }} >
                    <View style={{flexDirection:'row',borderTopColor:'black',borderTopWidth:0.4 ,borderBottomColor:'black',borderBottomWidth:0.4 ,marginLeft:10,marginRight:10}}>
                        <Image
                                style={{ width: 43, height: 43, borderRadius: 50,marginLeft:10}}
                                source={require('../Assets/tfp.jpg')}
                            />
                        <Text style={{marginLeft:10,marginTop:10,alignItems:'center',}}>Tayyab_Nadeem01</Text>
                        <Entypo style={{marginLeft:130,marginTop:9}} name="dots-three-vertical" size={24} color="black" />
                        </View>
                        
                        <Image
                                    style={{width:342,marginTop:2,marginLeft:10,height:500}}
                                    source={require('../Assets/tf.jpg')}
                                />
                       <View style={{alignItems: 'center',flexDirection: 'row',justifyContent:'space-between'}}>
                        <View style={{alignItems: 'center',flexDirection: 'row',justifyContent:'space-around',marginLeft:10}}>
                                <AntDesign style={{paddingRight:15}} name="hearto" size={24} color="black" />
                                <FontAwesome style={{paddingRight:15}} name="comment-o" size={24} color="black" />
                                <Ionicons style={{paddingRight:14}} name="md-paper-plane-outline" size={30} color='black' />

                        </View>
                        <View style={{marginRight:10}}>
                        <AntDesign name="save" size={24} color="black" />
                        
                        </View>
                            
                       </View>
                        
                </View>




                <View style={{marginBottom:10 }} >
                    <View style={{flexDirection:'row',borderTopColor:'black',borderTopWidth:0.4 ,borderBottomColor:'black',borderBottomWidth:0.4 ,marginLeft:10,marginRight:10}}>
                        <Image
                                style={{ width: 43, height: 43, borderRadius: 50,marginLeft:10}}
                                source={require('../Assets/osp.jpg')}
                            />
                        <Text style={{marginLeft:10,marginTop:10,alignItems:'center',}}>MemoN_boY21</Text>
                        <Entypo style={{marginLeft:160,marginTop:9}} name="dots-three-vertical" size={24} color="black" />

                        </View>
                        
                        <Image
                                    style={{width:342,marginTop:2,marginLeft:10,height:500}}
                                    source={require('../Assets/oss.jpg')}
                                />
                                
                                <View style={{alignItems: 'center',flexDirection: 'row',justifyContent:'space-between'}}>
                        <View style={{alignItems: 'center',flexDirection: 'row',justifyContent:'space-around',marginLeft:10}}>
                                <AntDesign style={{paddingRight:15}} name="hearto" size={24} color="black" />
                                <FontAwesome style={{paddingRight:15}} name="comment-o" size={24} color="black" />
                                <Ionicons style={{paddingRight:14}} name="md-paper-plane-outline" size={30} color='black' />

                        </View>
                        <View style={{marginRight:10}}>
                        <AntDesign name="save" size={24} color="black" />
                        
                        </View>
                            
                       </View>

                </View>
                



                <View style={{marginBottom:10 }} >
                    <View style={{flexDirection:'row',borderTopColor:'black',borderTopWidth:0.4 ,borderBottomColor:'black',borderBottomWidth:0.4 ,marginLeft:10,marginRight:10}}>
                        <Image
                                style={{ width: 43, height: 43, borderRadius: 50,marginLeft:10}}
                                source={require('../Assets/tip.jpg')}
                            />
                        <Text style={{marginLeft:10,marginTop:10,alignItems:'center',}}>T--I</Text>
                        <Entypo style={{marginLeft:235,marginTop:9}} name="dots-three-vertical" size={24} color="black" />

                        </View>
                        
                        <Image
                                    style={{width:342,marginTop:2,marginLeft:10,height:500}}
                                    source={require('../Assets/ti.jpg')}
                                />

                                            <View style={{alignItems: 'center',flexDirection: 'row',justifyContent:'space-between'}}>
                        <View style={{alignItems: 'center',flexDirection: 'row',justifyContent:'space-around',marginLeft:10}}>
                                <AntDesign style={{paddingRight:15}} name="hearto" size={24} color="black" />
                                <FontAwesome style={{paddingRight:15}} name="comment-o" size={24} color="black" />
                                <Ionicons style={{paddingRight:14}} name="md-paper-plane-outline" size={30} color='black' />

                        </View>
                        <View style={{marginRight:10}}>
                        <AntDesign name="save" size={24} color="black" />
                        
                        </View>
                            
                       </View>           
                        
                </View>





                <View style={{marginBottom:10 }} >
                    <View style={{flexDirection:'row',borderTopColor:'black',borderTopWidth:0.4 ,borderBottomColor:'black',borderBottomWidth:0.4 ,marginLeft:10,marginRight:10}}>
                        <Image
                                style={{ width: 43, height: 43, borderRadius: 50,marginLeft:10}}
                                source={require('../Assets/op.jpg')}
                            />
                        <Text style={{marginLeft:10,marginTop:10,alignItems:'center',}}>Osama__Rasheed</Text>
                        <Entypo style={{marginLeft:140,marginTop:9}} name="dots-three-vertical" size={24} color="black" />

                        </View>
                        
                        <Image
                                    style={{width:342,marginTop:2,marginLeft:10,height:500}}
                                    source={require('../Assets/ooo.jpg')}
                                />


                                               <View style={{alignItems: 'center',flexDirection: 'row',justifyContent:'space-between'}}>
                        <View style={{alignItems: 'center',flexDirection: 'row',justifyContent:'space-around',marginLeft:10}}>
                                <AntDesign style={{paddingRight:15}} name="hearto" size={24} color="black" />
                                <FontAwesome style={{paddingRight:15}} name="comment-o" size={24} color="black" />
                                <Ionicons style={{paddingRight:14}} name="md-paper-plane-outline" size={30} color='black' />

                        </View>
                        <View style={{marginRight:10}}>
                        <AntDesign name="save" size={24} color="black" />
                        
                        </View>
                            
                       </View>        
                        
                </View>




                <View style={{marginBottom:10 }} >
                    <View style={{flexDirection:'row',borderTopColor:'black',borderTopWidth:0.4 ,borderBottomColor:'black',borderBottomWidth:0.4 ,marginLeft:10,marginRight:10}}>
                        <Image
                                style={{ width: 43, height: 43, borderRadius: 50,marginLeft:10}}
                                source={require('../Assets/sp.jpg')}
                            />
                        <Text style={{marginLeft:10,marginTop:10,alignItems:'center',}}>Sabih</Text>
                        <Entypo style={{marginLeft:220,marginTop:9}} name="dots-three-vertical" size={24} color="black" />

                        </View>
                        
                        <Image
                                    style={{width:342,marginTop:2,marginLeft:10,height:500}}
                                    source={require('../Assets/s.jpg')}
                                />


                                           <View style={{alignItems: 'center',flexDirection: 'row',justifyContent:'space-between'}}>
                        <View style={{alignItems: 'center',flexDirection: 'row',justifyContent:'space-around',marginLeft:10}}>
                                <AntDesign style={{paddingRight:15}} name="hearto" size={24} color="black" />
                                <FontAwesome style={{paddingRight:15}} name="comment-o" size={24} color="black" />
                                <Ionicons style={{paddingRight:14}} name="md-paper-plane-outline" size={30} color='black' />

                        </View>
                        <View style={{marginRight:10}}>
                        <AntDesign name="save" size={24} color="black" />
                        
                        </View>
                            
                       </View>            
                        
                </View>



                <View style={{marginBottom:10 }} >
                    <View style={{flexDirection:'row',borderTopColor:'black',borderTopWidth:0.4 ,borderBottomColor:'black',borderBottomWidth:0.4 ,marginLeft:10,marginRight:10}}>
                        <Image
                                style={{ width: 43, height: 43, borderRadius: 50,marginLeft:10}}
                                source={require('../Assets/hrp.jpg')}
                            />
                        <Text style={{marginLeft:10,marginTop:10,alignItems:'center',}}>H-R_hu_bHaee</Text>
                        <Entypo style={{marginLeft:165,marginTop:9}} name="dots-three-vertical" size={24} color="black" />

                        </View>
                        
                        <Image
                                    style={{width:342,marginTop:2,marginLeft:10,height:500}}
                                    source={require('../Assets/hr.jpg')}
                                />
                                            <View style={{alignItems: 'center',flexDirection: 'row',justifyContent:'space-between'}}>
                        <View style={{alignItems: 'center',flexDirection: 'row',justifyContent:'space-around',marginLeft:10}}>
                                <AntDesign style={{paddingRight:15}} name="hearto" size={24} color="black" />
                                <FontAwesome style={{paddingRight:15}} name="comment-o" size={24} color="black" />
                                <Ionicons style={{paddingRight:14}} name="md-paper-plane-outline" size={30} color='black' />

                        </View>
                        <View style={{marginRight:10}}>
                        <AntDesign name="save" size={24} color="black" />
                        
                        </View>
                            
                       </View>           
                        
                </View>





                <View style={{marginBottom:10 }} >
                    <View style={{flexDirection:'row',borderTopColor:'black',borderTopWidth:0.4 ,borderBottomColor:'black',borderBottomWidth:0.4 ,marginLeft:10,marginRight:10}}>
                        <Image
                                style={{ width: 43, height: 43, borderRadius: 50,marginLeft:10}}
                                source={require('../Assets/slp.jpg')}
                            />
                        <Text style={{marginLeft:10,marginTop:10,alignItems:'center',}}>Apka_Sallu</Text>
                        <Entypo style={{marginLeft:185,marginTop:9}} name="dots-three-vertical" size={24} color="black" />

                        </View>
                        
                        <Image
                                    style={{width:342,marginTop:2,marginLeft:10,height:500}}
                                    source={require('../Assets/sll.jpg')}
                                />
                                
                                <View style={{alignItems: 'center',flexDirection: 'row',justifyContent:'space-between'}}>
                        <View style={{alignItems: 'center',flexDirection: 'row',justifyContent:'space-around',marginLeft:10}}>
                                <AntDesign style={{paddingRight:15}} name="hearto" size={24} color="black" />
                                <FontAwesome style={{paddingRight:15}} name="comment-o" size={24} color="black" />
                                <Ionicons style={{paddingRight:14}} name="md-paper-plane-outline" size={30} color='black' />

                        </View>
                        <View style={{marginRight:10}}>
                        <AntDesign name="save" size={24} color="black" />
                        
                        </View>
                            
                       </View>

                </View>

                



                
               
            </ScrollView>
            
           

        </SafeAreaView>


    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        
    },
    Header: {
        flex: 0.09,
        justifyContent: 'space-between',
        flexDirection: 'row',
        // backgroundColor:'red',
        alignItems: 'center'

    },

    // tinyLogo: {
    //     width: 150,
    //     height: 60,
    // },

    messengerIcon: {
        marginRight: 15
    },
    storiesContainer: {
        flex: 0.15,
        // backgroundColor:"red",
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',


    },
    picturesContainer: {
        width: 80,
        height: 80,
        // backgroundColor: "blue",
        borderRadius: 50,
        marginLeft: 8,
        borderColor: 'gray',
        borderWidth:2,
        justifyContent:"center",
        alignItems:'center'


    },
    

    storiesPic: {
        width: 73,
        height: 73,
        borderRadius: 50,

    }


});


