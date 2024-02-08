import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const YaziTuraOyunu = () => {
  const [tur, setTur] = useState(1);
  const [puan, setPuan] = useState(0);
  const [sonuc, setSonuc] = useState(null);

  const yaziTuraAt = (tahmin) => {
    const rastgeleSayi = Math.random();
    const yeniSonuc = rastgeleSayi < 0.5 ? 'YAZI' : 'TURA';

    if (tahmin === yeniSonuc) {
      setPuan((prevPuan) => prevPuan + 10);
    } else {

      setPuan((prevPuan) => prevPuan - 5);
    }

    setTur((prevTur) => prevTur + 1);

    if (tur === 3) {
      setSonuc('Oyun Bitti');
    } else {

      setSonuc(yeniSonuc);
    }
  };

  const resetOyunu = () => {
    setTur(1);
    setPuan(0);
    setSonuc(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.baslik}>Yazı Tura Oyunu</Text>

      {tur <= 3 ? (
        <View>
          <Text style={styles.turText}>Tur: {tur} / 3</Text>

          {sonuc && (
            <View style={styles.sonucContainer}>
              <Text style={styles.sonucText}>Sonuç: {sonuc}</Text>
            </View>
          )}

          <TouchableOpacity style={styles.button} onPress={() => yaziTuraAt('YAZI')}>
            <Text style={styles.buttonText}>YAZI</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => yaziTuraAt('TURA')}>
            <Text style={styles.buttonText}>TURA</Text>
          </TouchableOpacity>

          <Text style={styles.puanText}>Toplam Puan: {puan}</Text>
        </View>
      ) : (
        <View>
          <Text style={styles.sonucText}>{sonuc}</Text>
          <Text style={styles.puanText}>Toplam Puan: {puan}</Text>
          <TouchableOpacity style={styles.button} onPress={resetOyunu}>
            <Text style={styles.buttonText}>Başka Oyun Oyna</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  baslik: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  turText: {
    fontSize: 18,
    marginBottom: 10,
  },
  puanText: {
    fontSize: 18,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    width: 150,
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
  sonucContainer: {
    marginTop: 10,
    marginBottom: 20,
  },
  sonucText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default YaziTuraOyunu;
