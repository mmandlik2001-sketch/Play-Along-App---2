import React from 'react';
import { StyleSheet, View } from 'react-native';
import { AvatarCard, StatCard } from '@playalong/ui';
import { ScreenLayout } from '../components/ScreenLayout';

export const HomeScreen = () => (
  <ScreenLayout title="Home Dashboard">
    <View style={styles.row}>
      <StatCard label="Bookings" value="12" />
      <StatCard label="Wallet" value="$240" />
    </View>
    <AvatarCard name="Riya Sharma" subtitle="Level 8 Badminton" />
    <AvatarCard name="Kunal Rao" subtitle="Nearby buddy • 2km" />
  </ScreenLayout>
);

const styles = StyleSheet.create({ row: { flexDirection: 'row', gap: 10 } });
