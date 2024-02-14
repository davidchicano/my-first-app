import { useState } from 'react';
import { Text, View } from 'react-native';

import PrimaryButton from '@/components/PrimaryButton';

export default function TabTwoScreen() {
  const [count, setCount] = useState<number>(0);

  return (
    <View className={styles.container}>
      <Text className={styles.title} ellipsizeMode="clip">
        Tab Two
      </Text>
      <View className={styles.separator} />
      <Text className="text-2xl ">
        Count: <Text className="text-slate-500">{count}</Text>
      </Text>
      <PrimaryButton
        label="Increment"
        onPress={() => setCount(count + 1)}
        onLongPress={() => setCount(0)}
      />
    </View>
  );
}

const styles = {
  container: `items-center flex-1 justify-center`,
  separator: `h-[1px] my-7 w-4/5 bg-gray-200`,
  title: `text-xl font-bold`,
};
