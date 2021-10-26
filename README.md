# yipyip-picker

react native picker

## Installation

```sh
npm install yipyip-picker
```

## Usage

```js
// ...
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
          placeholder="Gender"
          placeholderTextColor={'#575A61'}
          selectedKey={String(gender)}
          onChangeText={(data: any) => {
            console.log(data, 'onChangeText');
            setGender(data.value);
          }}
        />
        <Button title="Clear" onPress={() => setGender(0)} />
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
});

```

## Screen Shot

[![N|Solid](./screenshot/screenshot1.PNG | width=800)](./screenshot/screenshot1.PNG )
[![N|Solid](./screenshot/screenshot2.PNG | width=800)](./screenshot/screenshot2.PNG)


## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
