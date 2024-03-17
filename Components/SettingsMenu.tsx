// SettingsMenu.tsx
import React from 'react';
import { Switch, View, Text } from 'react-native';
import Slider from '@react-native-community/slider';

interface SettingsMenuProps {
  soundEnabled: boolean;
  volume: number;
  toggleSound: () => void;
  adjustVolume: (newVolume: number) => void;
}

const SettingsMenu: React.FC<SettingsMenuProps> = ({ soundEnabled, volume, toggleSound, adjustVolume }) => {
  return (
    <View>
      <Text>Sound:</Text>
      <Switch value={soundEnabled} onValueChange={toggleSound} />
      <Text>Volume:</Text>
      <Slider minimumValue={0} maximumValue={1} value={volume} onValueChange={adjustVolume} />
    </View>
  );
};

export default SettingsMenu;
