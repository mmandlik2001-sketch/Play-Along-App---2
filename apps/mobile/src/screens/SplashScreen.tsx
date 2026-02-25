import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { palette } from '@playalong/ui';

export const SplashScreen = () => (
  <View style={styles.container}>
    <Text style={styles.title}>PlayAlong</Text>
    <Text style={styles.subtitle}>Find buddies. Book venues. Play more.</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.background,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: palette.accent,
    fontSize: 42,
    fontWeight: '800'
  },
  subtitle: {
    marginTop: 12,
    color: palette.text
  }
});
