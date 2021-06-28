import React from 'react';
import { Text } from 'react-native';
import { aspectration, colors, responsiveFont } from '../constants';

interface ErrorMessageProps {
  message: string;
  last?: boolean;
}

export function InputErrorMessage({ message, last }: ErrorMessageProps) {
  return message ? (
    <Text
      style={{
        color: colors.c9d0208,
        paddingHorizontal: aspectration(10, 'W'),
        paddingVertical: aspectration(5, 'H'),
        fontSize: responsiveFont(14),
        marginBottom: last ? aspectration(10, 'H') : 0,
      }}
    >
      {message}
    </Text>
  ) : null;
}
