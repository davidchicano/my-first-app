import React from 'react';
import { Pressable, Text } from 'react-native';

interface Props {
  label: string;
  onPress?: () => void;
  onLongPress?: () => void;
}

export default function PrimaryButton({ label, onPress, onLongPress }: Props) {
  return (
    <Pressable
      className="m-2 p-4 bg-slate-200 border-2 border-slate-500 rounded-lg active:rotate-2 active:bg-slate-400 active:shadow-xl active:shadow-slate-600"
      onPress={onPress}
      onLongPress={onLongPress}>
      <Text>{label}</Text>
    </Pressable>
  );
}
