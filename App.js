import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, TouchableOpacity, Switch, ScrollView } from 'react-native';
import { lightStyle, darkStyle } from './styles/Styles.js';
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
  const [resultColor, setResultColor] = useState('green'); // Default color

  //console.log(weight)

  const count =() => {

    let result = 0
    let litres = bottles * 0.33
    let grams = litres * 8 * 4.5
    let burning = weight / 10
    let gramsLeft = grams - (burning * time)

    if (!weight || weight < 1 ){
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

        if (result < 0.5) {
          setResultColor('green');
        } else if (result >= 0.5 && result <= 1.1) {
          setResultColor('yellow');
        } else if (result > 1.1) {
          setResultColor('red');
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

{/**main Header */}
    <Text style={myStyle.header}>Alcometer</Text>

{/**set Weight */}
      <Text style={myStyle.label}>Weight</Text>
      <TextInput keyboardType='number-pad' style={myStyle.textInput}
        onChangeText={(v) => setWeight(v)}
        value={weight}      
      />

{/**Bottles */}
      <Text style={myStyle.label}>Bottles</Text>
      <View style={myStyle.numInputs}>
        <NumericInput onChange={v => setBotless(v)}
          totalWidth={135}
          value = {bottles}
          minValue={0}
          rounded
          containerStyle={{backgroundColor: '#8cf1f8'}} 
          color='#000000'
          textColor='#000000'
          rightButtonBackgroundColor = '#ece8e8'
          leftButtonBackgroundColor= '#ece8e8'
          iconStyle={{color:'#000000'}}
          borderColor='#060606'
        />
      </View>

{/**Hours */}
      <Text style={myStyle.label}>Hours</Text>
      <View style={myStyle.numInputs}>
        <NumericInput style={myStyle.numIn} onChange={v => setTime(v)}
        totalWidth={135}
        value={time}
        minValue={0}
        rounded
          containerStyle={{backgroundColor: '#8cf1f8'}} 
          color='#000000'
          textColor='#000000'
          rightButtonBackgroundColor = '#ece8e8'
          leftButtonBackgroundColor= '#ece8e8'
          iconStyle={{color:'#000000'}}
          borderColor='#060606'
        />
      </View>

{/**Gender */}
      <Text style={myStyle.label}>Gender</Text>
      <RadioButton.Group onValueChange={newValue => setGender(newValue)} value={gender}>
        <View style={myStyle.radioStyle}>
          <RadioButton value= 'm'
          color='#ece8e8'
        />
        <Text style={myStyle.radioStyle}>Male</Text>
    {/**</View>
        <View style ={myStyle.radioStyle}>*/}
          <RadioButton value='f'
            color='#ece8e8'
          />
        <Text style={myStyle.radioStyle}>Female</Text>
        </View>
      </RadioButton.Group>

{/**Result */}
      <View style={myStyle.promillesStyles}>
        <Text style={[myStyle.prom, { color: resultColor }]}>
          {promilles} 
        </Text>
      </View>

{/**Button (Calculate) */}
      <TouchableOpacity onPress={count}>
        <Text style={myStyle.submit}>CALCULATE</Text>
      </TouchableOpacity>
      
    </View>
  </ScrollView>
  );
};
