import React from "react";
import { TouchableOpacity, Text, TextInput, View } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default HomeScreen = () => {
    const navigation = useNavigation();

    const handleGirisYap = () => {
        navigation.navigate("OyunlarEkrani");
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#f0f8ff', alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: 'blue', height: 500, fontSize: 50, fontWeight: 'bold' }}>GİRİŞ EKRANI</Text>
            <TextInput style={{ borderWidth: 0, borderBottomWidth: 1, position: 'absolute', bottom: 520, left: 90, width: 250, height: 30 }} placeholder="E-Posta"></TextInput>
            <TextInput style={{ borderWidth: 0, borderBottomWidth: 1, position: 'absolute', bottom: 460, left: 90, width: 250, height: 30 }} placeholder='Şifre' secureTextEntry={true}></TextInput>

            <TouchableOpacity
                style={{
                    width: 200,
                    height: 40,
                    bottom: 160,
                    backgroundColor: 'white',
                    borderWidth: 2,
                    borderColor: 'black',
                    borderRadius: 8,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: 10,
                }}
                onPress={handleGirisYap}
            >
                <Text style={{ color: 'black', fontSize: 16, fontWeight: 'bold' }}>Giriş Yap</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={{
                    width: 200,
                    height: 40,
                    bottom: 100,
                    backgroundColor: 'green',
                    borderWidth: 2,
                    borderColor: 'white',
                    borderRadius: 8,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                onPress={() => navigation.navigate("KayitEkrani")}
            >
                <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Kayıt Ol</Text>
            </TouchableOpacity>
        </View>
    );
};
