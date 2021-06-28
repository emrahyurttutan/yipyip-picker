import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import {
  aspectration,
  colors,
  fontFamily,
  layout,
  responsiveFont,
} from './constants';
import { PickerModal } from './Modal';
import { InputItem } from './Input/InputItem';
import { PickerDataItem } from './types';
import ScrollPicker from './ScrollPicker2';

interface PickerProps {
  bgColor?: string;
  message?: string;
  onChangeText?: (text: PickerDataItem) => void;
  placeholder: string;
  placeholderTextColor?: string;
  value?: PickerDataItem;
  data: PickerDataItem[];
  selectedKey?: string;
  disabled?: boolean;
}

export function Picker({
  bgColor = colors.cF3F3F3,
  message = '',
  onChangeText = (value) => console.log(value, 'value'),
  placeholder,
  placeholderTextColor = colors.c575A61,
  value = { label: '', value: '' },
  data,
  selectedKey = '',
  disabled,
}: PickerProps) {
  const [visible, setVisible] = useState(false);
  const [done, setDone] = useState<boolean>(false);
  const [inputData, setInputData] = useState<PickerDataItem>(value);

  useEffect(() => {
    if (selectedKey) {
      const selectedData = data.filter((x) => x.value === String(selectedKey));
      setInputData(selectedData[0]);
      setDone(true);
    }
  }, [selectedKey, data]);

  return (
    <>
      <TouchableOpacity
        disabled={disabled}
        onPress={() => setVisible(!visible)}
      >
        <InputItem message={message} bgColor={bgColor}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              flex: 1,
              width: '100%',
            }}
          >
            <Text
              style={{
                fontFamily: fontFamily.medium,
                color: placeholderTextColor,
                fontSize: responsiveFont(16),
              }}
            >
              {inputData && inputData.label && done
                ? inputData.label
                : placeholder}
            </Text>
            <Image
              source={require('./images/arrow.png')}
              style={{ marginLeft: 'auto' }}
            />
          </View>
        </InputItem>
      </TouchableOpacity>
      <PickerModal
        isVisible={visible}
        onCancel={() => setVisible(!visible)}
        onSuccess={() => {
          setDone(true);
          if (inputData && inputData.value) {
            onChangeText(inputData);
          } else {
            onChangeText(data[0]);
          }
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            alignContent: 'center',
            alignSelf: 'center',
            paddingHorizontal: aspectration(20, 'W'),
            paddingVertical: aspectration(20, 'H'),
            width: layout.width,
          }}
        >
          <ScrollPicker
            data={data}
            value={inputData && inputData.value && done ? inputData.value : ''}
            onChangeText={(data: PickerDataItem) => {
              setInputData(data);
            }}
          />
        </View>
      </PickerModal>
    </>
  );
}
