import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, TouchableOpacity, Pressable, Switch, ScrollView } from 'react-native';
import {lightStyle, darkStyle,numInputs, radioStyle,promilles} from './styles/Styles.js';
import { useState } from 'react';
import NumericInput from 'react-native-numeric-input';
import { RadioButton } from 'react-native-paper';

export default function App() {

  const [dark, setDark] = useState(false); 
  let myStyle = dark ? darkStyle : lightStyle;
  const [value, setValue] = useState(0);
  //const [radioval, setRadioval] = useState('');
  const [gender, setGender] = useState('m');
  const [bottles, setBotless] = useState('');
  const [time, setTime] = useState('');
  const [promilles, setPromilles] = useState('');

  const [weight, setWeight] = useState(0);

  //console.log(weight)

  const count =() => {
    
   // e.preventDefault()
    let result = 0

    let litres = bottles * 0.33
    let grams = litres * 8 * 4.5
    let burning = weight / 10
    let gramsLeft = grams - (burning * time)
    if (!weight){
      alert('Set weight!')
    }else{
      if (gender === 'm'){
        result = gramsLeft/(weight * 0.7) 
     
      }else{
        result = gramsLeft/(weight * 0.6)
      
      } 
      if (result <0){
        result = 0
      }

      setPromilles(result.toFixed(2))
  }}

  return (
    <ScrollView>
    <View style={myStyle.container}>
      <View style={myStyle.swi}>
        <Switch 
        value={dark}
        onValueChange={ newValue => setDark(newValue)}
        />
      </View>
      <Text style={myStyle.header}>Alcometer</Text>
      <Text style={myStyle.label}>Weight</Text>
      <TextInput keyboardType='number-pad' style={myStyle.textInput}
        onChangeText={(v) => setWeight(v)}
        value={weight}      
      />
      <Text style={myStyle.label}>Bottles</Text>
      <View style={myStyle.numInputs}>
        <NumericInput onChange={v => setBotless(v)}
          totalWidth={135}
          value = {bottles}
          minValue={0}
          rounded
          containerStyle={{backgroundColor: '#ffffff'}} 
          color='#000000'
          textColor='#000000'
          rightButtonBackgroundColor = '#0ad7de'
          leftButtonBackgroundColor= '#0ad7de'
          iconStyle={{color:'#000000'}}
          borderColor='#07b0f3'
        />
      </View>

      <Text style={myStyle.label}>Hours</Text>
      <View style={myStyle.numInputs}>
        <NumericInput style={myStyle.numIn} onChange={v => setTime(v)}
        totalWidth={135}
        value={time}
        minValue={0}
        rounded
        />
      </View>

      <RadioButton.Group onValueChange={newValue => setGender(newValue)} value={gender}>
        <View style={myStyle.radioStyle}>
          <RadioButton value= 'm'
          color='#ffffff'
        />
        <Text style={myStyle.radioStyle}>Male</Text>
        </View>
        <View style ={myStyle.radioStyle}>
          <RadioButton value='f'
            color='#ffffff'
          />
        <Text style={myStyle.radioStyle}>Female</Text>
        </View>
      </RadioButton.Group>

      <View style={myStyle.promillesStyles}>
        <Text style={myStyle.prom}>
          {promilles} 
        </Text>

      </View>
      <TouchableOpacity onPress={()=>count()}>
          <Text style={myStyle.submit}>CALCULATE</Text>
        </TouchableOpacity>
      
    </View>
    
    </ScrollView>
  );
};
