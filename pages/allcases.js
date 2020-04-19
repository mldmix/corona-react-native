import React from "react";
import {
StyleSheet,
View,
ActivityIndicator,
Text,
RefreshControl,
ScrollView
} from "react-native";

export default class allcases extends React.Component {
  
        constructor(props) {
         super(props);
         this.state = {
           loading: true,           
           cases: '0',          
           deaths:'0',           
           recovered:'0',           
           dataSource:[],
           refreshing: false,
          };
        }
        componentDidMount(){
        fetch("https://corona.lmao.ninja/v2/all") //countries/Algeria
        .then(response => response.json())
        .then((responseJson)=> {
          this.setState({
           loading: false,
          
           cases: responseJson.cases,           
           deaths: responseJson.deaths,           
           recovered: responseJson.recovered,
          
          })
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
          fetch("https://corona.lmao.ninja/v2/all") //countries/Algeria
        .then(response => response.json())
        .then((responseJson)=> {
          this.setState({
           loading: false,
           //dataSource: responseJson,           
           cases: responseJson.cases,           
           deaths: responseJson.deaths,           
           recovered: responseJson.recovered,
           refreshing: false,          
          })
        })
        .catch(error=>console.log(error)) //to catch the errors if any
        
          
        }

        render(){
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
         
        <Text style={styles.lightText3}>Cases - الإصابات</Text>                      
        <Text style={styles.lightText}>{this.state.cases}</Text>
        <Text style={styles.lightText3}>Recovred - شفاء</Text> 
        <Text style={styles.lightText2}>{this.state.recovered}</Text>             
        <Text style={styles.lightText3}>Deaths - وفاة</Text> 
        <Text style={styles.lightText1}>{this.state.deaths}</Text>
        <Text style={styles.lightText3}>Rates - النسبة</Text>        
        <Text style={styles.lightText5}>{ ((this.state.recovered / this.state.cases)*100).toFixed(2)}%</Text>
        <Text style={styles.lightText4}>{ ((this.state.deaths / this.state.cases)*100).toFixed(2)}%</Text>
        
       
        </ScrollView>
        )}
        }
        const styles = StyleSheet.create({
          container: {
            flex: 1,
            backgroundColor: "#fff",
            paddingVertical: 4,
            margin: 3
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
            fontSize: 38,
            textAlign: "center",
            fontWeight: 'bold'
           }
           ,

           lightText1:{
            paddingVertical: 4,
            margin: 5,
            color: '#c12e2e',
            fontSize: 38,
            textAlign: 'center',
            fontWeight: 'bold'
           },

           lightText2:{
            paddingVertical: 4,
            margin: 5,
            color: '#689f38',
            fontSize: 38,
            textAlign: 'center',
            fontWeight: 'bold',
                        
           },


           lightText3:{
            paddingVertical: 1,
            margin: 1,
            color: '#fff',
            backgroundColor: '#545454',
            fontSize: 18,
            textAlign: 'center',
            fontFamily:'Cairo-Regular',
           },

           lightText4:{           
            margin: 1,
            color: '#fff',
            backgroundColor: '#c12e2e', 
            fontSize: 26,
            textAlign: 'center',
            fontWeight: 'bold'
           },

           lightText5:{            
            margin: 1,
            color: '#fff',
            backgroundColor: '#689f38', 
            fontSize: 26,
            textAlign: 'center',
            fontWeight: 'bold'            
           },
          
        });