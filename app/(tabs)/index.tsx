/* eslint-disable no-restricted-exports */
import { useEffect, useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ListBanksResponse } from 'xellar-ew-sdk';

import { XellarSDK } from 'xellar-ew-sdk/react-native';

const sdk = new XellarSDK({
  clientSecret: '',
  env: 'sandbox',
  rampableClientSecret: '',
});

export default function TabOneScreen() {
  const [bankResponse, setBankResponse] = useState<ListBanksResponse | null>(
    null,
  );

  const [registerResponse, setRegisterResponse] = useState<any | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const listBanksResponse = await sdk.rampableReference.listBanks();
        setBankResponse(listBanksResponse);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const handleRegister = async () => {
    try {
      const registerResponse = await sdk.auth.username.register(
        'test-username-123',
        'test-password-123',
      );
      setRegisterResponse(registerResponse);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Tab One</Text>
        <Button title="Register" onPress={handleRegister} />
        <Text>
          {bankResponse ? JSON.stringify(bankResponse, null, 2) : 'No banks'}
        </Text>
        <Text>
          {registerResponse
            ? JSON.stringify(registerResponse, null, 2)
            : 'No register response'}
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
