import React, { useState } from 'react';
import { View, Switch, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSound } from '../SoundContext';

interface SettingMenuProps {
  onSoundToggle: (isEnabled: boolean) => void;
}

const SettingMenu: React.FC<SettingMenuProps> = ({ onSoundToggle }) => {
  const { soundEnabled, toggleSound } = useSound();
  const [menuVisible, setMenuVisible] = useState(false);

  const handleSoundToggle = (isEnabled: boolean) => {
    toggleSound();
    onSoundToggle(isEnabled);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setMenuVisible(!menuVisible)}>
        <Ionicons name="settings" size={37} color="white" />
      </TouchableOpacity>
      {menuVisible && (
        <View style={styles.menu}>
          <View style={styles.settingRow}>
            <Ionicons name="musical-notes" size={24} color="white" />
            <Text style={styles.settingText}>Sound</Text>
            <Switch
              trackColor={{ false: '#767577', true: '#81b0ff' }}
              thumbColor={soundEnabled ? '#f5dd4b' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={handleSoundToggle}
              value={soundEnabled}
            />
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    borderRadius: 10,
    alignItems: 'center',
    right: "130%"
  },
  menu: {
   top: 10,
    
  },
  settingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  settingText: {
    color: 'white',
    fontSize: 18,
    marginLeft: 10,
  },
});

export default SettingMenu;
