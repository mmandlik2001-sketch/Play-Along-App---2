import React from 'react';
import { Text } from 'react-native';
import { NeonCard, GlowButton } from '@playalong/ui';
import { ScreenLayout } from '../components/ScreenLayout';

export const VenueDetailsScreen = () => (
  <ScreenLayout title="Venue Details">
    <NeonCard>
      <Text style={{ color: '#E5F7BF', fontWeight: '700' }}>Green Court Arena</Text>
      <Text style={{ color: '#7A8B73', marginTop: 6 }}>Synthetic turf, locker rooms, cafe.</Text>
    </NeonCard>
    <GlowButton label="Book Now" />
  </ScreenLayout>
);
