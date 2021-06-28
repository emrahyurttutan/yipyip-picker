import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { aspectration, colors, layout } from './constants';

interface ScrollItemProps {
  isSelected?: boolean;
  label: string;
  itemCount?: number;
}

export function ScrollItem({
  isSelected,
  label,
  itemCount = 1,
}: ScrollItemProps) {
  return (
    <View
      style={{
        width: layout.width / itemCount - aspectration(40, 'W'),
        height: aspectration(35, 'H'),
        marginBottom: aspectration(5, 'H'),
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text style={isSelected ? styles.active : styles.label}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  active: {
    textAlign: 'center',
    color: colors.c232230,
  },
  label: {
    textAlign: 'center',
    color: colors.cD8D8D8,
  },
});
