/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  useWindowDimensions,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import RTNScanQr from 'rtn-scan-qr/js/RTNScanQrNativeComponent';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const {height, width} = useWindowDimensions();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <RTNScanQr
        style={{height, width}}
        onQrScanned={(value: any) => {
          console.log(value.nativeEvent.value);
        }}
      />
    </SafeAreaView>
  );
}

export default App;

// node rnapp/node_modules/react-native/scripts/generate-codegen-artifacts.js \
//   --path rnapp/ \
//   --outputPath rnapp/RTNScanQr/generated/
