import React, {useEffect, useState} from 'react';
import {
  Alert,
  PermissionsAndroid,
  Platform,
  Text,
  useWindowDimensions,
} from 'react-native';
import RTNScanQr from 'rtn-scan-qr/js/RTNScanQrNativeComponent';

const MyAndroidView = () => {
  const [isCameraPermissionGranted, setIsCameraPermissionGranted] =
    useState(false);
  const {height, width} = useWindowDimensions();

  useEffect(() => {
    checkCameraPermission();
  }, []);

  const checkCameraPermission = async () => {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Cool Photo App Camera Permission',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        setIsCameraPermissionGranted(true);
      } else {
        Alert.alert('Fail', 'Camera permission denied');
      }
    }
  };

  if (isCameraPermissionGranted) {
    return (
      <RTNScanQr
        style={{height, width}}
        onQrScanned={(value: any) => {
          console.log(value.nativeEvent.value);
        }}
      />
    );
  } else {
    return (
      <Text style={{fontSize: 30, color: 'red'}}>
        You need to grant camera permission first
      </Text>
    );
  }
};

export default MyAndroidView;
