import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SayiBul from './SayiBul';



export default OyunlarEkrani = () => {
  const navigation = useNavigation();

  const handleSayiBul = () => {
    navigation.navigate("SayiBulEkrani"); 
}
  const handleYaziTura = () => {
    navigation.navigate("YaziTuraEkrani"); 
  }
  const handleSayisalLoto = () =>{
    navigation.navigate("SayisalLotoEkrani")
  }
  const handleSlot= () =>{
    navigation.navigate("CarkEkrani")
  }
  return (
    <View style={{ flex: 1,flexDirection:"column",justifyContent:"space-between", backgroundColor: '#f0f8ff', alignItems: 'center', justifyContent: 'center' }}>

<TouchableOpacity
        style={{
          backgroundColor: 'green',
          width: 200,
          height: 40,
          marginTop: 20,
          borderWidth: 2,
          borderColor: 'white',
          borderRadius: 8,
          justifyContent: 'center',
          alignItems: 'center',
          marginHorizontal:20,
        }}
        onPress={handleSlot}
      >
        <Text my={5} style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Slot Oyunu</Text>
      </TouchableOpacity>


      <TouchableOpacity
        style={{
          backgroundColor: 'green',
          width: 200,
          height: 40,
          marginTop: 20,
          
          borderWidth: 2,
          borderColor: 'white',
          borderRadius: 8,
          justifyContent: 'center',
          alignItems: 'center',
          marginHorizontal:20,
        }}
        onPress={handleSayiBul}
      >
        <Text my={5} style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Sayı Bul</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={{
          backgroundColor: 'green',
          width: 200,
          height: 40,
          borderWidth: 2,
          borderColor: 'white',
          borderRadius: 8,
          justifyContent: 'center',
          alignItems: 'center',
          marginHorizontal:20,
          justifyContent:"center"
        }}
        onPress={handleSayisalLoto}       
      >
        <Text my={5} style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Sayısal Loto</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          backgroundColor: 'green',
          width: 200,
          height: 40,
          borderWidth: 2,
          borderColor: 'white',
          borderRadius: 8,
          justifyContent: 'center',
          alignItems: 'center',
          marginHorizontal:20,
        }} onPress={handleYaziTura}
      >
        <Text  my={5} style={{ color: 'white', fontSize: 16, fontWeight: 'bold', }}>Yazı-Tura</Text>
      </TouchableOpacity>

    </View>
  );
};
