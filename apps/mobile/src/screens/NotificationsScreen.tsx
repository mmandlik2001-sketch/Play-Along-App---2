import React from 'react';
import { NeonCard } from '@playalong/ui';
import { Text } from 'react-native';
import { ScreenLayout } from '../components/ScreenLayout';

export const NotificationsScreen = () => (
  <ScreenLayout title="Notifications">
    <NeonCard><Text style={{ color: '#E5F7BF' }}>Booking confirmed for tonight at 7 PM.</Text></NeonCard>
    <NeonCard><Text style={{ color: '#E5F7BF' }}>New buddy request from Alex.</Text></NeonCard>
  </ScreenLayout>
);
