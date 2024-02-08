import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const SlotOyunu = () => {
  const [puan, setPuan] = useState(0);
  const [hak, setHak] = useState(3);
  const [meyveler, setMeyveler] = useState(['🍒', '🍇', '🍊']);
  const [cevirilenMeyveler, setCevirilenMeyveler] = useState(['', '', '']);
  const [cevirmeDurumu, setCevirmeDurumu] = useState(false);

  useEffect(() => {
    if (hak === 0) {
      oyunBitti();
    }
  }, [hak]);

  const oyunBitti = () => {
    console.log('Oyun bitti! Puanınız:', puan);
    oyunuSifirla();
  };

  const oyunuSifirla = () => {
    setPuan(0);
    setHak(3);
    setCevirilenMeyveler(['', '', '']);
    setCevirmeDurumu(false);
  };

  const slotCevir = () => {
    if (hak > 0 && !cevirmeDurumu) {
      const yeniCevirilenMeyveler = [];
      
      for (let i = 0; i < 3; i++) {
        const rastgeleIndex = Math.floor(Math.random() * meyveler.length);
        yeniCevirilenMeyveler.push(meyveler[rastgeleIndex]);
      }

      setCevirilenMeyveler(yeniCevirilenMeyveler);
      puanKontrol(yeniCevirilenMeyveler);
      setHak(hak - 1);
    }
  };

  const puanKontrol = (yeniCevirilenMeyveler) => {
    if (
      yeniCevirilenMeyveler[0] === yeniCevirilenMeyveler[1] &&
      yeniCevirilenMeyveler[1] === yeniCevirilenMeyveler[2]
    ) {
      setPuan((oncekiPuan) => oncekiPuan + 10);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Slot Oyunu</Text>
      </View>
      <View style={styles.skorContainer}>
        <Text style={styles.skorMetni}>Puan: {puan}</Text>
        <Text style={styles.skorMetni}>Hak: {hak}</Text>
      </View>
      <View style={styles.slotContainer}>
        {cevirilenMeyveler.map((item, index) => (
          <Text key={index} style={styles.slotElemani}>
            {item}
          </Text>
        ))}
      </View>
      <TouchableOpacity style={styles.cevirButonu} onPress={slotCevir}>
        <Text style={styles.cevirButonMetni}>Çevir</Text>
      </TouchableOpacity>
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
  header: {
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  skorContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  skorMetni: {
    fontSize: 18,
    marginRight: 20,
    color: '#555',
  },
  slotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  slotElemani: {
    fontSize: 40,
    marginHorizontal: 10,
  },
  cevirButonu: {
    backgroundColor: '#3498db',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
    marginTop: 20,
  },
  cevirButonMetni: {
    color: '#fff',
    fontSize: 18,
  },
});

export default SlotOyunu;
