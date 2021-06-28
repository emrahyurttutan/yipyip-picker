import * as React from 'react';

import { StyleSheet, View, Button, Dimensions } from 'react-native';
import { Picker } from 'yipyip-picker';

export default function App() {
  const [gender, setGender] = React.useState<number>(0);

  return (
    <View style={styles.container}>
      <View
        style={{
          width: Dimensions.get('window').width - 40,
        }}
      >
        <Picker
          data={[
            {
              label: 'Erkek',
              value: '1',
            },
            {
              label: 'Kadın',
              value: '2',
            },
            {
              label: 'Diğer',
              value: '3',
            },
          ]}
          placeholder="Cinsiyet"
          placeholderTextColor={'#575A61'}
          selectedKey={String(gender)}
          onChangeText={(data: any) => {
            console.log(data, 'onChangeText');
            setGender(data.value);
          }}
        />
        <Button title="Temizle" onPress={() => setGender(0)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
