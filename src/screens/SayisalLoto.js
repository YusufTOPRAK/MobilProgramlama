import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const App = () => {
  const [secilenSayilar, setSecilenSayilar] = useState([]);
  const [cekilenSayilar, setCekilenSayilar] = useState(randomSayilarUret(6));
  const [puan, setPuan] = useState(0);

  function randomSayilarUret(adet) {
    const sayilar = [];
    while (sayilar.length < adet) {
      const rastgeleSayi = Math.floor(Math.random() * 49) + 1;
      if (!sayilar.includes(rastgeleSayi)) {
        sayilar.push(rastgeleSayi);
      }
    }
    return sayilar.sort((a, b) => a - b);
  }

  function sayiSec(number) {
    if (secilenSayilar.includes(number)) {
      setSecilenSayilar(secilenSayilar.filter((num) => num !== number));
    } else if (secilenSayilar.length < 6) {
      setSecilenSayilar([...secilenSayilar, number]);
    }
  }

  function sayilariKontrolEt() {
    if (secilenSayilar.length !== 6) {
      Alert.alert(
        'Uyarı',
        'Lütfen 6 adet sayı seçin.',
        [{ text: 'Tamam' }]
      );
      return;
    }

    const tutanSayilar = secilenSayilar.filter((num) => cekilenSayilar.includes(num));
    const yeniPuan = tutanSayilar.length * 10;

    setPuan(yeniPuan);

    Alert.alert(
      'Sonuç',
      `Seçtiğiniz Sayılar: ${secilenSayilar.join(', ')}\nÇekilen Sayılar: ${cekilenSayilar.join(', ')}\nTutturulan Sayılar: ${tutanSayilar.join(', ')}\nToplam Puan: ${yeniPuan}`,
      [{ text: 'Tamam' }]
    );

    setSecilenSayilar([]);
    setCekilenSayilar(randomSayilarUret(6));
    setPuan(0);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.baslik}>Sayısal Loto</Text>
      <View style={styles.sayiContainer}>
        {Array.from({ length: 49 }, (_, index) => index + 1).map((number) => (
          <TouchableOpacity
            key={number}
            style={[
              styles.sayiButon,
              secilenSayilar.includes(number) && styles.secilenSayi,
            ]}
            onPress={() => sayiSec(number)}
          >
            <Text style={styles.sayiText}>{number}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity style={styles.kontrolButon} onPress={sayilariKontrolEt}>
        <Text style={styles.kontrolButtonText}>Kontrol Et</Text>
      </TouchableOpacity>
      <Text style={styles.puanText}>Toplam Puan: {puan}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  baslik: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  sayiContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  sayiButon: {
    width: 40,
    height: 40,
    margin: 5,
    borderRadius: 20,
    backgroundColor: '#3498db',
    justifyContent: 'center',
    alignItems: 'center',
  },
  secilenSayi: {
    backgroundColor: '#2ecc71',
  },
  sayiText: {
    color: 'white',
    fontWeight: 'bold',
  },
  kontrolButon: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'green',
    borderRadius: 10,
  },
  kontrolButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  puanText: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;
