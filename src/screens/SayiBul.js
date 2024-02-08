import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';

const Oyun = () => {
  const [hedefSayi, setHedefSayi] = useState(randomSayiUret());
  const [kullaniciTahmini, setKullaniciTahmini] = useState('');
  const [tahminSayisi, setTahminSayisi] = useState(0);
  const [dogruTahminSayisi, setDogruTahminSayisi] = useState(0);
  const [puan, setPuan] = useState(0);

  function randomSayiUret() {
    return Math.floor(Math.random() * 100) + 1;
  }

  const handleInputChange = (text) => {
    setKullaniciTahmini(text);
  };

  const handleTahmin = () => {
    const kullaniciTahmin = parseInt(kullaniciTahmini, 10);

    if (isNaN(kullaniciTahmin) || kullaniciTahmin < 1 || kullaniciTahmin > 100) {
      Alert.alert('Hata', 'Lütfen 1 ile 100 arasında bir sayı giriniz.');
      return;
    }

    setTahminSayisi(tahminSayisi + 1);

    if (kullaniciTahmin === hedefSayi) {
      Alert.alert('Tebrikler', `Sayıyı doğru tahmin ettiniz! Puanınız: ${puan + 10}`);
      setDogruTahminSayisi(dogruTahminSayisi + 1);
      setPuan(puan + 10);
      setHedefSayi(randomSayiUret());
    } else {
      Alert.alert('Hatalı Tahmin', 'Oyunu kaybettiniz.');
      setHedefSayi(randomSayiUret());
      setTahminSayisi(0);
      setPuan(0);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Doğru Tahmin Sayısı: {dogruTahminSayisi}</Text>
      <Text>Puan: {puan}</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray',borderWidth: 0, borderBottomWidth: 1, marginVertical: 10, textAlign: 'center' }}
        placeholder="Tahmininizi girin"
        keyboardType="numeric"
        onChangeText={handleInputChange}
        value={kullaniciTahmini}
      />
      <Button title="Tahmin Et" onPress={handleTahmin} />
    </View>
  );
};

export default Oyun;
