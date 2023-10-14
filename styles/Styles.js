import { StyleSheet } from "react-native";
import Constants from "expo-constants";

//export default StyleSheet.create({
const lightStyle = StyleSheet.create({
container:{
    marginTop: Constants.statusBarHeight+5,
    backgroundColor: '#dd93fb',
    flex: 1
},
swi:{
    flexDirection: 'row',
   // alignItems: '',
    justifyContent:'flex-start',
    padding: 15
},
header: {
    color: '#000000',
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    padding: 30
},
label: {
    color: '#000000',
    fontSize: 20,
    paddingLeft: 15,
    //padding: 5,
    paddingTop: 10,
    fontWeight:'bold'
    
},
textInput:{
    //paddingLeaft: 10,
    borderWidth: 2,
    borderRadius: 5,
    padding: 10,
    margin: 10,
    marginTop: 5,
    borderColor: '#000000',
    color:'#ffffff',
    fontWeight:'bold',
    fontSize: 18
    
},
submit:{
    borderWidth: 2,
    borderRadius: 5,
    color: 'white',
    backgroundColor: '#290ff0',
    padding: 15,
    margin: 10,
    //marginTop: 20,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    borderColor:'#000000'
},
numInputs:{
    paddingLeft: 25,
    paddingTop:5,
    //justifyContent: "center",
    //alignItems: "center",
    //gap: 10
    //color: "red"
    
   
},
//numIn:{
    //backgroundColor:'#000000',
    //color: '#bc0d0d'
//},
radioStyle:{
    padding: 5,
    paddingLeft: 15,
   //paddingTop: 25,
    flexDirection: 'row', 
    alignItems:'center',
     color:'#000000',
     fontWeight:'bold',
     fontSize: 18,
     //justifyContent: 'center'
     
     
},
promillesStyles: {
    alignItems:'center',
    padding: 10,
   
   
}, 
prom:{
    //color:'#000000',
    fontSize: 38,
    fontWeight: 'bold',
    //padding: 5,
   
}


});

const darkStyle = StyleSheet.create({
    container: {
    ...lightStyle.container,
    backgroundColor: '#470476'
    },
    swi: {
    ...lightStyle.swi
    },
    header: {
    ...lightStyle.header,
    color: '#ffffff'
    },
    label: {
        ...lightStyle.label,
        color:'#ffffff',
    },
    textInput: {
        ...lightStyle.textInput,
        borderColor: '#ffffff',
    },
    submit: {
    ...lightStyle.submit,
    borderColor: '#ffffff'
    },
    numInputs:{
        ...lightStyle.numInputs
    },
    radioStyle:{
        ...lightStyle.radioStyle,
        color:'#ffffff',
    },
    promillesStyles: {
        ...lightStyle.promillesStyles
       
    }, 
    prom:{
        ...lightStyle.prom,
       // color:'#ffffff'
    }
});

// const numInputs = StyleSheet.create({
//     paddingLeft: 25,
//     //justifyContent: "center",
//     alignItems: "start",
//     //gap: 10
//     //textColor:'#12c315',
//     //rightButtonBackgroundColor: '#000000',
//     //leftButtonBackgroundColor: '#0000FF',
//     //iconStyle:{color:'#ab0f0f'},
//     //borderColor:'#FFFF00'
//     color:'#000000',
//     textColor:'#8feb9a',
//     containerStyle:{backgroundColor: '#9e0808'},
//     rightButtonBackgroundColor : '#5b498b',
//     leftButtonBackgroundColor: '#0000FF',
//     iconStyle:{color:'#f4e21b'},
//     borderColor:'#7bd2f5'
// })

// const radioStyle= StyleSheet.create({
//     flexDirection: 'row', 
//     alignItems:'center',
//     color:'#ffffff'

// });

//const promilles = StyleSheet.create({
  //  color:'#ffffff',
    //fontWeight:'bold',
    //fontSize: 38,
//})

export {lightStyle, darkStyle};
//numInputs,
//,radioStyle
//,promilles