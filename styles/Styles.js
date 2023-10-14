import { StyleSheet } from "react-native";
import Constants from "expo-constants";

//export default StyleSheet.create({
const lightStyle = StyleSheet.create({
container:{
    marginTop: Constants.statusBarHeight+2,
    backgroundColor: '#dd93fb',
    flex: 1
},
swi:{
    flexDirection: 'row',
   // alignItems: '',
    justifyContent:'flex-start',
    paddingLeft: 18,
    paddingTop:15,
},
header: {
    color: '#000000',
    textAlign: 'center',
    fontSize: 42,
    fontWeight: 'bold',
    padding: 25
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
    fontSize: 20
    
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
    paddingBottom:5  
},
radioStyle:{
    padding: 8,
    paddingBottom:10,
    paddingLeft: 15,
   //paddingTop: 25,
    flexDirection: 'row', 
    alignItems:'center',
     color:'#000000',
     fontWeight:'bold',
     fontSize: 16,
     //justifyContent: 'center'
},
promillesStyles: {
    alignItems:'center',
    padding: 10,
}, 
prom:{
    fontSize: 40,
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
        color:'#ece8e8',
    },
    textInput: {
        ...lightStyle.textInput,
        color:'#ffffff',
        borderColor:'#dfd9d9',
    },
    submit: {
    ...lightStyle.submit,
    borderColor: '#dfd9d9'
    },
    numInputs:{
        ...lightStyle.numInputs
    },
    radioStyle:{
        ...lightStyle.radioStyle,
        color:'#ece8e8',
    },
    promillesStyles: {
        ...lightStyle.promillesStyles
       
    }, 
    prom:{
        ...lightStyle.prom,
       
    }
});



export {lightStyle, darkStyle};
