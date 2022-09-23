import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false)
  const [info, setInfo] = useState('Nenhum valor escaneado no momento');

  useEffect(_ => {
    (async _ => {
      const { status } = await BarCodeScanner.requestPermissionAsync();
      setHasPermission(status === 'granted')
    })();
  });

  const handleBarCodeScanner = ({ type, data }) => {
    setScanned(true);
    setInfo(data);
    console.log(info);
    alert(`Código de barras do tipo ${type} escaneada com sucesso`)
  }

  if (hasPermission === null)
    alert('Conceda permissões para o aplicativo')
  if (hasPermission === false)
    alerta('Permissões do aplicativo foram negadas')

  return (
    <View style={styles.currentBody}>
      <View>
        <Text style={styles.title}>Feira de Profissões - EVOLUTION</Text>
        <Text style={styles.cfff}>Projeto Arduino: QRCode</Text>
        <View style={styles.readerView}>
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanner}
            style={StyleSheet.absoluteFillObject}
          />
        </View>
      </View>
      {scanned && (
        <Button
          styled={styles.cfff}
          title={'Clique para escanear novamente'}
          onPress={_ => setScanned(false)}
        />
      )}
      <View>
        <StatusBar style="auto" />
        <Text style={styles.cfff}>{info}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color: '#fff',
    fontSize: '1.7rem'
  },
  currentBody: {
    width: '100%',
    height: '100%',
    flex: 1,
    backgroundColor: '#242424',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  cfff: {
    color: '#fff'
  },
  readerView: {
    width: '100%',
    height: '37%'
  },
});
