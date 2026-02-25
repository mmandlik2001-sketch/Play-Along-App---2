import React from 'react';
import { Text } from 'react-native';
import { GlowButton, NeonCard } from '@playalong/ui';
import { ScreenLayout } from '../components/ScreenLayout';

export const BookingScreen = () => (
  <ScreenLayout title="Booking">
    <NeonCard>
      <Text style={{ color: '#E5F7BF' }}>Selected Slot: 7:00 PM - 8:00 PM</Text>
      <Text style={{ color: '#7A8B73', marginTop: 6 }}>Price: $20</Text>
    </NeonCard>
    <GlowButton label="Confirm Booking" />
  </ScreenLayout>
);
