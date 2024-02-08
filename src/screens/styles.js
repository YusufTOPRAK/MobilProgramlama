import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center'      
    },

    girisyazi: {
        color:'blue',
        height: 500,
        fontSize: 50,
        fontWeight: 'bold',
    },

    epostagiris: {
        borderWidth:0,
        borderBottomWidth:1,
        position: 'absolute',
        bottom: 520,
        left: 90,
        width: 250,
        height: 30,     
    },

    sifregiris: {
      borderWidth:0,
      borderBottomWidth:1,
      position: 'absolute',
      bottom: 460,
      left: 90,
      width: 250,
      height: 30,     
  },
    girisButon:{
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
    },
    
    butonGirisText: {
      color: 'black',
      fontSize: 16,
      fontWeight: 'bold',
    },


    kayitButon:{
      width: 200,
      height: 40,
      bottom: 100,
      backgroundColor: 'green',
      borderWidth: 2,
      borderColor: 'white',
      borderRadius: 8,
      justifyContent: 'center',
      alignItems: 'center',
    },

    bustonKayitText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
    },

  });