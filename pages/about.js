import React from "react";
import {
StyleSheet,
View,
Text,
Image,
Linking,

} from "react-native";

export default class about extends React.Component { 
  
        render(){
        return(
        <View style={styles.container}>                            
        <Text style={styles.lightText}>COVID-19</Text>
        <Text style={styles.lightText4}>CASES</Text>
        <Image source={require('../image/osidev_logo_dark.png')} style = {{height: 115, width: 250, }}  />      
        <Text style={styles.lightText1}>Algerian Startup</Text>   
        <Text style={styles.lightText1}onPress={() => { Linking.openURL('http://www.osidev.com')}}>www.osidev.com</Text>
        <Text style={styles.lightText2}>Powred by:</Text> 
        <Text style={styles.lightText2}>NovelCOVID/API</Text>
       
        </View>
        )}
        }
        const styles = StyleSheet.create({
          container: {
            flex: 1,
            backgroundColor: "#fff",
            paddingVertical: 4,
            margin: 3,
            justifyContent: 'center',
            alignItems: 'center',
           },
          loader:{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#fff"
           },
          list:{
            paddingVertical: 4,
            margin: 5,
            backgroundColor: "#fff",
            fontSize: 20
           },

           lightText:{
            paddingVertical: 4,
            margin: 5,
            color: "#545454",
            fontSize: 18,
            textAlign: "center",
            fontWeight: 'bold'
           }
           ,

           lightText1:{
            paddingVertical: 0,
            margin: 2,
            color: '#545454',
            fontSize: 18,
            textAlign: 'center',
            fontWeight: 'bold'
           },

           lightText2:{  
            paddingVertical: 3,         
            color: '#545454',
            fontSize: 12,
            textAlign: 'center',
            fontWeight: 'bold',
                        
           },


           lightText3:{
            paddingVertical: 4,
            margin: 5,
            color: '#fff',
            backgroundColor: '#545454',
            fontSize: 28,
            textAlign: 'center',
            fontFamily:'Cairo-Regular',
           },

           lightText4:{            
            color: '#545454',
            fontSize: 32,
            textAlign: 'center',
            fontWeight: 'bold'
           },

           lightText5:{
            paddingVertical: 4,
            margin: 5,
            color: '#fff',
            backgroundColor: '#689f38', 
            fontSize: 36,
            textAlign: 'center',
            fontWeight: 'bold'            
           },
          
        });