import React from 'react'
import { TouchableOpacity, Text, TextInput, View } from "react-native";


export default KayitScreen = () => {
    return(
        <View style={{flex:1, backgroundColor:'#f0f8ff',alignItems:'center',justifyContent:'center'}}>
            <Text></Text>
            <TextInput style={{backgroundColor:'white',borderWidth:1,position: 'absolute',bottom: 700,left: 25,width: 180,height: 30,}} placeholder="Adı"></TextInput>
            <TextInput style={{backgroundColor:'white',borderWidth:1,position: 'absolute',bottom: 700,left: 218,width: 180,height: 30,}} placeholder="Soyadı"></TextInput>

            <TextInput style={{backgroundColor:'white',borderWidth:1,position: 'absolute',bottom: 600,left: 25,width: 280,height: 30,}} placeholder="Doğum Tarihi"></TextInput>
            <TextInput style={{backgroundColor:'white',borderWidth:1,position: 'absolute',bottom: 500,left: 25,width: 280,height: 30,}} placeholder="E-posta"></TextInput>
            <TextInput style={{backgroundColor:'white',borderWidth:1,position: 'absolute',bottom: 400,left: 25,width: 280,height: 30,}} placeholder="Cep Telefonu"></TextInput>
            <TextInput style={{backgroundColor:'white',borderWidth:1,position: 'absolute',bottom: 300,left: 25,width: 280,height: 30,}} placeholder="TC Kimlik No"></TextInput>
            <TextInput style={{backgroundColor:'white',borderWidth:1,position: 'absolute',bottom: 200,left: 25,width: 280,height: 30,}} placeholder="Şifre"></TextInput>
        
            <TouchableOpacity style={{backgroundColor:'#0000cd',width: 200,height: 40,top:240,borderWidth: 2,borderColor: 'white',borderRadius: 8,justifyContent: 'center',alignItems: 'center',marginBottom: 10}}>
                <Text style={{color: 'white',fontSize: 16,fontWeight: 'bold',justifyContent: 'center',alignItems: 'center'}}>Kayıt Ol</Text>
            </TouchableOpacity>
        </View>
    );
};