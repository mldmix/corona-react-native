import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    ActivityIndicator,    
    Text,
    ScrollView,    
    RefreshControl
    } from "react-native";
import  { Dropdown }  from 'react-native-material-dropdown';
 
export default class  countrycases extends Component {
    
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
              dataSource:[],
              refreshing: false, 
             };
           }

           componentDidMount(){
           
            fetch("https://corona.lmao.ninja/v2/countries?sort=country") //countries/Algeria
            .then(response => response.json())
            .then((responseJson)=> {
              this.setState({
               loading: false,
               dataSource: responseJson,                             
              })
            })
            .catch(error=>console.log(error)) //to catch the errors if any
            }          
           

            _onRefresh = () => {
              this.setState({refreshing: true});
              fetch("https://corona.lmao.ninja/v2/countries/"+this.state.country) //countries/Algeria
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
                 refreshing: false,                            
                })
              })
              .catch(error=>console.log(error))             
              
            }
  render() {
   
    if(this.state.loading){
        return( 
          <View style={styles.loader}> 
            <ActivityIndicator size="large" color="#0c9"/>
          </View>
      )}     
    let sortedComments = this.state.dataSource.sort((a, b) => a.country >  b.country)
    const data=sortedComments.map((x) => ({
        value: x.country
       
    }));
 
    return (
      <ScrollView 
          style={styles.container}
          refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh}/>}>
     
      <Dropdown
        label='Select country'
        ref='picker'
        data={data}
        textColor='#545454'
        fontSize={20}
        itemCount={16}
        itemPadding={2}
        animationDuration={0}
        onChangeText={(value, index, data) => {
            const id = data[index].value;
            fetch("https://corona.lmao.ninja/v2/countries/"+id) //countries/Algeria
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
              })
            })
            .catch(error=>console.log(error)) 
                   
          }} 
        
      />
     
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
      paddingVertical: 1,
      margin: 2
     },
    loader:{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#fff"
     },
    list:{
      paddingVertical: 2,      
      backgroundColor: "#fff",
      fontSize: 20
     },
  
     lightText:{
     
      color: "#545454",
      fontSize: 36,
      textAlign: "center",
      fontWeight: 'bold'
     }
     ,
  
     lightText1:{
     
      color: '#c12e2e',
      fontSize: 36,
      textAlign: 'center',
      fontWeight: 'bold'
     },
  
     lightText2:{
      
      color: '#689f38',
      fontSize: 36,
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
    
  });