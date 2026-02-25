import React, { PropsWithChildren } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { GradientHeader } from '@playalong/ui';
import { appTheme } from '../theme';

export const ScreenLayout = ({ title, children }: PropsWithChildren<{ title: string }>) => (
  <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
    <GradientHeader title={title} />
    <View style={styles.inner}>{children}</View>
  </ScrollView>
);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: appTheme.colors.background
  },
  content: {
    padding: 16
  },
  inner: {
    gap: 12
  }
});
