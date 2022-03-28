import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableHighlight} from 'react-native';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function App() {
  const [data, setData] = useState(null);

  const fetchData = () => {
    axios.get('https://api.adviceslip.com/advice')
    .then(res => setData(res.data.slip))
    .catch(err => console.log(err));
  }

  useEffect(() => {
    fetchData();
  }, []);
  
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View>
          <Text style={styles.header}>{data ? <Text>ADVICE 
            #{data.id}</Text> : null}</Text>
          <Text style={styles.advice}>{data ? <Text>"{data.advice}"</Text> : 'Loading...'}</Text>
        </View>
        <View style={styles.divider}>
          <Image source={require('./assets/pattern-divider-mobile.png')} />
        </View>
        <TouchableHighlight 
        style={styles.button}
        onPress={() => fetchData()}
        >
          <Image style={styles.image} source={require('./assets/icon-dice.png')} />
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f2632',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#323a49',
    padding: 50,
    maxWidth: '90%',
    borderRadius: 10,
  },
  header: {
    color: 'white',
    fontWeight:'bold',
    textAlign: 'center',
    fontSize: 15,
    color: '#52ffa8',
  },
  advice : {
    color: 'white',
    fontSize: 30,
    textAlign:'center',
    fontWeight: 'bold',
    marginTop: 20,
    color:'#cee3e9',
  },
  button : {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: '#52ffa8',
    padding: 15,
    bottom: -25,
  },
  divider : {
    marginTop: 20,
    marginBottom: 20,
  },
  image : {
    width: 24,
    height: 24
  }  
})