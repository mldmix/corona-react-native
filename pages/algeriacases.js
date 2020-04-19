import React from "react";
import {
StyleSheet,
View,
ActivityIndicator,
FlatList,
Text,
TouchableOpacity,
ScrollView,
RefreshControl,
Image,
ToastAndroid 
} from "react-native";
import publicIP from 'react-native-public-ip';
import {countries} from 'country-data';



export default class algeriacases extends React.Component {

constructor(props) {
 super(props);
 this.state = {
   loading: true,
   country:'',
   cases: '0',
   todayCases:'0',
   deaths:'0',
   todayDeaths:'0',
   recovered:'0',
   active:'0',
   country_name:'',
   ipadress:'', 
   flag:'', 
   dataSource:[],
   refreshing: false,
   dialogVisible: false
  };
}


componentDidMount(){ 
     
      fetch("https://ipinfo.io/?token=50a698fb9c4f39") //countries/Algeria
      .then(response => response.json())
      .then((responseJson)=> {
        //console.log(responseJson.country_name)         
        ToastAndroid.show(countries[responseJson.country].name , ToastAndroid.SHORT)            
        fetch("https://corona.lmao.ninja/v2/countries/"+countries[responseJson.country].name) //countries/Algeria
        .then(response => response.json())
        .then((responseJson)=> {
          this.setState({
            loading: false,            
            country: responseJson.country,
            cases: responseJson.cases,
            todayCases: responseJson.todayCases,
            deaths: responseJson.deaths,
            todayDeaths: responseJson.todayDeaths,
            recovered: responseJson.recovered,
            active: responseJson.active,
            flag: responseJson.countryInfo.flag,
            datasource: []           
          })          
        })
        .catch(error=>console.log(error)) //to catch the errors if any
      })
      .catch(error=>console.log(error)) //to catch the errors if any  
    


}
FlatListItemSeparator = () => {
return (
  <View style={{
     height: .5,
     width:"100%",
     backgroundColor:"rgba(0,0,0,0.5)",
}}
/>
);
}


_onRefresh = () => {
  this.setState({refreshing: true}); 
      fetch("https://ipinfo.io/?token=50a698fb9c4f39") //countries/Algeria
      .then(response => response.json())
      .then((responseJson)=> {       
        ToastAndroid.show(countries[responseJson.country].name , ToastAndroid.SHORT)
        fetch("https://corona.lmao.ninja/v2/countries/"+countries[responseJson.country].name) //countries/Algeria
        .then(response => response.json())
        .then((responseJson)=> {
          this.setState({
            loading: false,            
            country: responseJson.country,
            cases: responseJson.cases,
            todayCases: responseJson.todayCases,
            deaths: responseJson.deaths,
            todayDeaths: responseJson.todayDeaths,
            recovered: responseJson.recovered,
            active: responseJson.active,
            flag: responseJson.countryInfo.flag,
            refreshing: false,
           
          })
        })
        .catch(error=>console.log(error)) //to catch the errors if any
      })
      .catch(error=>console.log(error)) //to catch the errors if any  
    
}




render(){
const data=this.state.dataSource.map((x) => ({
      value: x.country    
}));
 if(this.state.loading){
  return( 
    <View style={styles.loader}> 
      <ActivityIndicator size="large" color="#0c9"/>
    </View>
)}

return(
 <ScrollView 
  style={styles.container}
  refreshControl={
  <RefreshControl
    refreshing={this.state.refreshing}
    onRefresh={this._onRefresh}/>}>
      

      <View style={styles.list}>       
                <Image  source={{uri: this.state.flag }} style={styles.addBorder}/>
                <Text style={styles.lightText6}>{this.state.country}</Text>                
              
                </View>
       
                <View style={{flexDirection:'column',flex:6}}>
            <View style={{flex:2,flexDirection:"row",justifyContent:'space-between'}}>
                <View style={{flex:1}}>
                <Text style={styles.lightText3}>Cases -الإصابات</Text>                      
      <Text style={styles.lightText}>{this.state.cases}</Text>
      <Text style={styles.lightText3}>Cases - إصابات جديدة</Text>                      
      <Text style={styles.lightText}>{this.state.todayCases}</Text>
                </View>
                <View style={{flex:1}}>
                <Text style={styles.lightText3}>Recovred - شفاء</Text> 
      <Text style={styles.lightText2}>{this.state.recovered}</Text>             
      <Text style={styles.lightText3}>Deaths - وفاة</Text> 
      <Text style={styles.lightText1}>{this.state.deaths}</Text>
                </View>
            </View>


            <View style={{flex:2,flexDirection:"row",justifyContent:'space-between'}}>
                <View style={{flex:1}}>
                <Text style={styles.lightText3}>Deaths - وفاة جديدة</Text>
      <Text style={styles.lightText}>{this.state.todayDeaths}</Text> 
      <Text style={styles.lightText3}>Active - مصاب</Text>
      <Text style={styles.lightText}>{this.state.active}</Text> 
                </View>
                <View style={{flex:1}}>
                <Text style={styles.lightText3}>Rates - النسبة</Text>
                {this.state.cases!='0' && <Text style={styles.lightText5}>{((this.state.recovered / this.state.cases)*100).toFixed(2)}%</Text>}
                {this.state.cases!='0' && <Text style={styles.lightText4}>{ ((this.state.deaths / this.state.cases)*100).toFixed(2)}%</Text>}
                </View>

            </View>



 </View>
      

        

</ScrollView>
)}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingVertical: 2,
    margin: 3
   },
  loader:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
   },
  list:{
    flexDirection:  'row',
   justifyContent: 'space-between'
   },

   lightText:{
   
    color: "#545454",
    fontSize: 38,
    textAlign: "center",
    fontWeight: 'bold'
   }
   ,

   lightText6:{
    color: "#545454",
    fontSize: 28,
    textAlign: "center",
    fontWeight: 'bold'
   }
   ,
   lightText1:{
   
    color: '#c12e2e',
    fontSize: 38,
    textAlign: 'center',
    fontWeight: 'bold'
   },

   lightText2:{
    
    color: '#689f38',
    fontSize: 38,
    textAlign: 'center',
    fontWeight: 'bold'            
   },


   lightText3:{
    
    color: '#fff',
    backgroundColor: '#545454',
    fontSize: 16,
    textAlign: 'center',
    fontFamily:'Cairo-Regular',
    
   },

   lightText4:{
    margin:2,   
    color: '#fff',
    backgroundColor: '#c12e2e', 
    fontSize: 26,
    textAlign: 'center',
    fontWeight: 'bold'
   },

   lightText5:{
    margin:2,
    color: '#fff',
    backgroundColor: '#689f38', 
    fontSize: 26,
    textAlign: 'center',
    fontWeight: 'bold'
   },   
   addBorder: {
    width: 48,
    height: 32.64,
    resizeMode: "stretch",    
    borderWidth: 1,    
    borderColor: '#545454',
    }
  
});