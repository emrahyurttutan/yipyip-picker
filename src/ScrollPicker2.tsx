import { aspectration, colors } from './constants';
import { PickerDataItem } from './types';
import React from 'react';
// @ts-ignore
import RNScrollPicker from './RNScrollPicker';
import { ScrollItem } from './ScrollItem';

interface ScrollPickerProps {
  wrapperColor?: string;
  highlightColor?: string;
  onChangeText: (data: PickerDataItem, selectedIndex: number) => void;
  value: string | number | boolean;
  data: PickerDataItem[];
  itemCount?: number;
}

export default function ScrollPicker({
  value,
  highlightColor = colors.cEEEEEE,
  wrapperColor = colors.cFFFFFF,
  data,
  itemCount = 1,
  onChangeText = () => {},
}: ScrollPickerProps) {
  const selectedIndex = data.findIndex((x) => x.value === value);
  return data ? (
    <RNScrollPicker
      dataSource={data}
      selectedIndex={selectedIndex >= 0 ? selectedIndex : 0}
      itemHeight={aspectration(40, 'H')}
      wrapperColor={wrapperColor}
      highlightColor={highlightColor}
      renderItem={(
        data: PickerDataItem,
        index: number,
        isSelected: boolean
      ) => {
        return (
          <ScrollItem
            itemCount={itemCount}
            label={data.label}
            key={index}
            isSelected={isSelected}
          />
        );
      }}
      onValueChange={(data: PickerDataItem, selectedIndex: number) => {
        onChangeText(data, selectedIndex);
      }}
      style={{ flex: 1 }}
    />
  ) : null;
}
