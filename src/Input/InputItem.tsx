import React from 'react';
import { View } from 'react-native';
import { InputErrorMessage } from './ErrorMessage';
import { aspectration, colors } from '../constants';

interface InputItemProps {
  message: string;
  children: any;
  bgColor?: string;
}

export function InputItem({
  message,
  children,
  bgColor = colors.cFFFFFF,
}: InputItemProps) {
  return (
    <View style={{ marginBottom: aspectration(5, 'H') }}>
      <View
        style={{
          borderRadius: aspectration(23, 'H'),
          borderWidth: 1,
          borderColor: message ? colors.c9d0208 : colors.cD8D8D8,
          paddingVertical: aspectration(12, 'H'),
          paddingHorizontal: aspectration(20, 'H'),
          justifyContent: 'center',
          height: aspectration(46, 'H'),
          backgroundColor: bgColor,
        }}
      >
        {children}
      </View>
      <InputErrorMessage message={message} />
    </View>
  );
}
