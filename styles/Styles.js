import { StyleSheet } from "react-native";
import Constants from "expo-constants";

//export default StyleSheet.create({
const lightStyle = StyleSheet.create({
container:{
    marginTop: Constants.statusBarHeight+5,
    backgroundColor: '#c65fef',
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
    padding: 35
},
label: {
    color: '#ffffff',
    fontSize: 20,
    paddingLeft: 15,
    
},
textInput:{
    //paddingLeaft: 10,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    margin: 10,
    marginTop: 5,
    borderColor: '#ffffff',
    color:'#ffffff'
},
submit:{
    borderWidth: 1,
    borderRadius: 5,
    color: 'white',
    backgroundColor: '#290ff0',
    padding: 15,
    margin: 10,
    //marginTop: 20,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold'
},
numInputs:{
    paddingLeft: 25,
    //justifyContent: "center",
    //alignItems: "start",
    //gap: 10
   
},
//numIn:{
//    backgroundColor:'#000000'
//},
radioStyle:{
    padding: 10,
    paddingLeft: 15,
   //paddingTop: 25,
    flexDirection: 'row', 
    alignItems:'center',
     color:'#ffffff',
     fontWeight:'bold',
     fontSize: 18,
     
},
promillesStyles: {
    alignItems:'center',
   
   
}, 
prom:{
    color:'#000000',
    fontSize: 38,
    fontWeight: 'bold'
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
        ...lightStyle.label
    },
    textInput: {
        ...lightStyle.textInput
    },
    submit: {
    ...lightStyle.submit
    },
    numInputs:{
        ...lightStyle.numInputs
    },
    radioStyle:{
        ...lightStyle.radioStyle
    },
    promillesStyles: {
        ...lightStyle.promillesStyles
       
    }, 
    prom:{
        ...lightStyle.prom,
        color:'#ffffff'
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