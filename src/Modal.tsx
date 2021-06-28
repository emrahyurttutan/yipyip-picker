import React from 'react';
import { Text, TouchableOpacity, View, Modal } from 'react-native';
import {
  aspectration,
  colors,
  fontFamily,
  layout,
  responsiveFont,
} from './constants';

interface PickerModalProps {
  isVisible?: boolean;
  onCancel?: () => void;
  onSuccess?: (value: any) => void;
  children: any;
}

export function PickerModal({
  isVisible = true,
  children,
  onCancel = () => {},
  onSuccess = () => {},
}: PickerModalProps) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={() => {
        onCancel();
      }}
    >
      <View style={{ flex: 1 }}>
        <TouchableOpacity
          style={{
            width: '100%',
            height: (layout.height * 2) / 3,
          }}
          onPress={() => onCancel()}
        />
        <View
          style={{
            width: '100%',
            backgroundColor: colors.cFFFFFF,
            height: layout.height / 3,
            zIndex: 3,
            bottom: 0,
            left: 0,
            right: 0,
            position: 'absolute',
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              // borderBottomWidth: 0.4,
              // borderBottomColor: colors.cD8D8D8,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                onCancel();
              }}
              style={{
                width: layout.width / 2 - aspectration(40, 'W'),
                height: aspectration(40, 'H'),
                paddingVertical: aspectration(6, 'H'),
                paddingHorizontal: aspectration(20, 'W'),
                justifyContent: 'center',
              }}
            >
              <Text
                style={{
                  fontFamily: fontFamily.medium,
                  fontSize: responsiveFont(16),
                  color: colors.c4785ec,
                }}
              >
                Vazgeç
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                onCancel();
                onSuccess('');
              }}
              style={{
                width: layout.width / 2 - aspectration(40, 'W'),
                height: aspectration(40, 'H'),
                paddingVertical: aspectration(6, 'H'),
                paddingHorizontal: aspectration(20, 'W'),
                alignItems: 'flex-end',
                justifyContent: 'center',
              }}
            >
              <Text
                style={{
                  fontFamily: fontFamily.medium,
                  fontSize: responsiveFont(16),
                  color: colors.c4785ec,
                  textAlign: 'right',
                }}
              >
                Seç
              </Text>
            </TouchableOpacity>
          </View>
          <View>{children}</View>
        </View>
      </View>
    </Modal>
  );
}
